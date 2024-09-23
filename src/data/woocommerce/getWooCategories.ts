import { wooCommerceApi } from "@/lib/api";
import { WooCategory } from "@/types/woocommerce";

export async function getWooCategories(): Promise<WooCategory[]> {
  const timestamp = new Date().getTime();

  const res = await wooCommerceApi.get(`products/categories?t=${timestamp}`);

  if (res.status !== 200) {
    throw new Error("Failed to fetch WooCommerce categories");
  }

  const categories: WooCategory[] = res.data;
  return categories;
}
