"use client";
import { useCartContext } from "@/hooks";
import { useState } from "react";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useCartContext();
  const customerEmail = "test@test.com";

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Step 1: Create WooCommerce order
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

      // Step 2: Create MercadoPago payment
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
      // Redirect the user to MercadoPago payment page
      window.location.href = init_point;
    } catch (error) {
      console.error("Error during checkout process:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
  );
};

export default CheckoutPage;
