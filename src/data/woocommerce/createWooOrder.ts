import { CartItem } from "@/context/cart-context";
import { NextResponse } from "next/server";
import {
  WOO_CONSUMER_KEY,
  WOO_CONSUMER_SECRET,
  API_URL,
} from "@/lib/constants";

export async function createWooOrder(
  cartItems: CartItem[],
  customerEmail: string
) {
  const orderData = {
    payment_method: "mercadopago",
    payment_method_title: "MercadoPago",
    set_paid: false,
    billing: {
      email: customerEmail,
    },
    line_items: cartItems.map((item: CartItem) => ({
      product_id: item.id,
      quantity: item.quantity,
    })),
  };

  const apiUrl = `${API_URL}/wp-json/wc/v3/orders?consumer_key=${WOO_CONSUMER_KEY}&consumer_secret=${WOO_CONSUMER_SECRET}`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to create WooCommerce order: ${await response.text()}`
    );
  }

  return await response.json();
}
