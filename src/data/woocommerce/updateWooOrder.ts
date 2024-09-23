import { OrderStatus } from "@/types/woocommerce";
import { wooCommerceApi } from "@/lib/api";

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

  try {
    const response = await wooCommerceApi.put(`orders/${orderId}`, {
      status: orderStatus,
    });

    if (response.status !== 200) {
      throw new Error(`Failed to update WooCommerce order: ${response.data}`);
    }

    return true;
  } catch (error) {
    console.error("Error updating WooCommerce order:", error);
    throw error;
  }
}
