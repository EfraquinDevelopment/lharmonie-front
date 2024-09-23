import {
  API_URL,
  WOO_CONSUMER_KEY,
  WOO_CONSUMER_SECRET,
} from "@/lib/constants";
import { WooProduct } from "@/types/woocommerce";

export async function getWooProduct(
  productId: string | number
): Promise<WooProduct> {
  const timestamp = new Date().getTime();

  const res = await fetch(
    `${API_URL}/wp-json/wc/v3/products/${productId}?consumer_key=${WOO_CONSUMER_KEY}&consumer_secret=${WOO_CONSUMER_SECRET}&t=${timestamp}`
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch WooCommerce product with ID: ${productId}`
    );
  }

  const product: WooProduct = await res.json();
  return product;
}
