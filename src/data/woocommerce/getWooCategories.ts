import { WooCategory } from "@/types/woocommerce";

export async function getWooCategories(): Promise<WooCategory[]> {
  const timestamp = new Date().getTime();
  const consumerKey = process.env.WOO_CONSUMER_KEY ?? "";
  const consumerSecret = process.env.WOO_CONSUMER_SECRET ?? "";

  const res = await fetch(
    `${process.env.API_URL}/wp-json/wc/v3/products/categories?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&t=${timestamp}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch WooCommerce categories");
  }

  const categories: WooCategory[] = await res.json();
  return categories;
}
