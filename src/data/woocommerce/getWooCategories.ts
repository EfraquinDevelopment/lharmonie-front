import {
  API_URL,
  WOO_CONSUMER_KEY,
  WOO_CONSUMER_SECRET,
} from "@/lib/constants";
import { WooCategory } from "@/types/woocommerce";

export async function getWooCategories(): Promise<WooCategory[]> {
  const timestamp = new Date().getTime();

  const res = await fetch(
    `${API_URL}/wp-json/wc/v3/products/categories?consumer_key=${WOO_CONSUMER_KEY}&consumer_secret=${WOO_CONSUMER_SECRET}&t=${timestamp}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch WooCommerce categories");
  }

  const categories: WooCategory[] = await res.json();
  return categories;
}
