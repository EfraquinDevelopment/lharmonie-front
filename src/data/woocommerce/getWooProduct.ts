import { wooCommerceApi } from "@/lib/api";
import { WooProduct } from "@/types/woocommerce";

export async function getWooProduct(
  productId: string | number
): Promise<WooProduct> {
  const timestamp = new Date().getTime();

  const res = await wooCommerceApi.get(`products/${productId}?t=${timestamp}`);

  if (res.status !== 200) {
    throw new Error(
      `Failed to fetch WooCommerce product with ID: ${productId}`
    );
  }

  const product: WooProduct = res.data;
  return product;
}
