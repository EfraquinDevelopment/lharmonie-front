import { WooOrder } from "@/types/woocommerce";

export async function createWooOrder(orderData: WooOrder): Promise<WooOrder> {
  const consumerKey = process.env.WOO_CONSUMER_KEY ?? "";
  const consumerSecret = process.env.WOO_CONSUMER_SECRET ?? "";

  const apiUrl = `${process.env.API_URL}/wp-json/wc/v3/orders?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!res.ok) {
    throw new Error("Failed to create WooCommerce order");
  }

  const order: WooOrder = await res.json();
  return order;
}
