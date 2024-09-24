"use client";
import { useCartContext } from "@/hooks";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const { cartItems } = useCartContext();
  const router = useRouter();
  const customerEmail = "test@test.com";

  useEffect(() => {
    cartItems && setPageLoading(false);
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length === 0) {
      router.back();
    }
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems, customerEmail }),
      });

      if (!orderResponse.ok) {
        console.error("Failed to create order");
        setLoading(false);
        return;
      }

      const { orderId, orderTotal } = await orderResponse.json();

      const paymentResponse = await fetch("/api/pay-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, orderTotal, customerEmail }),
      });

      if (!paymentResponse.ok) {
        console.error("Failed to process payment");
        setLoading(false);
        return;
      }

      const { init_point } = await paymentResponse.json();
      window.location.href = init_point;
    } catch (error) {
      console.error("Error during checkout process:", error);
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    router.back();
  }

  return (
    <div>
      {pageLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Checkout Page</h1>
          <button
            className="p-2 bg-gray-400 rounded-lg"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
