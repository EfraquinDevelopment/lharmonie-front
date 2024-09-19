"use client";
import { useCartContext } from "@/hooks";
import { useState } from "react";
import { createWooOrder } from "@/data/woocommerce/createWooOrder";

const Checkout = () => {
  const { cartItems } = useCartContext();
  const [loading, setLoading] = useState(false);

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Step 1: Create WooCommerce order
      const orderData = {
        payment_method: "mercadopago",
        payment_method_title: "Mercado Pago",
        set_paid: false,
        billing: {
          first_name: "John",
          last_name: "Doe",
          address_1: "123 Main St",
          city: "Springfield",
          state: "IL",
          postcode: "62701",
          country: "US",
          email: "m@m.com",
          phone: "555-555-5555",
        },
        line_items: cartItems.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
      };

      await createWooOrder(orderData);
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : "Proceed to Checkout"}
      </button>
    </div>
  );
};

export default Checkout;
