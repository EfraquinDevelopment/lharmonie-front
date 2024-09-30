import { wooCommerceApi } from "@/lib/api";

export async function checkOrderStatus(
  orderId: string | number,
  status: string
): Promise<boolean> {
  const timestamp = new Date().getTime();

  const res = await wooCommerceApi.get(`orders/${orderId}?t=${timestamp}`);

  if (res.status !== 200) {
    throw new Error(`Failed to fetch WooCommerce order with ID: ${orderId}`);
  }

  const order = res.data;

  return order.status === status;
}
