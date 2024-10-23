import { wooCommerceApi } from "@/lib/api";
import { WooProduct } from "@/types/woocommerce";

export async function getWooProduct(
  productId: string | number
): Promise<WooProduct | null> {
  try {
    const timestamp = new Date().getTime();

    const res = await wooCommerceApi.get(
      `products/${productId}?t=${timestamp}`
    );

    if (res.status !== 200) {
      return null;
    }

    const product: WooProduct = res.data;

    if (product.status !== "publish") {
      return null;
    }

    return product;
  } catch (error) {
    return null;
  }
}
