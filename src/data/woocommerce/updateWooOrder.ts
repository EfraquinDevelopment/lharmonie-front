import { OrderStatus } from "@/types/woocommerce";
import {
  WOO_CONSUMER_KEY,
  WOO_CONSUMER_SECRET,
  API_URL,
} from "@/lib/constants";

export async function updateWooOrder(
  orderId: number,
  paymentStatus: OrderStatus
) {
  let orderStatus = "on-hold";
  if (paymentStatus === OrderStatus.Approved) {
    orderStatus = "completed";
  } else if (paymentStatus === OrderStatus.Pending) {
    orderStatus = "pending";
  } else if (paymentStatus === OrderStatus.Failed) {
    orderStatus = "failed";
  }

  const apiUrl = `${API_URL}/wp-json/wc/v3/orders/${orderId}?consumer_key=${WOO_CONSUMER_KEY}&consumer_secret=${WOO_CONSUMER_SECRET}`;

  const response = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: orderStatus }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to update WooCommerce order: ${await response.text()}`
    );
  }

  return true;
}
