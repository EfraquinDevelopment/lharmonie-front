import { WooProduct } from "@/types/woocommerce";

export async function getWooProducts(): Promise<WooProduct[]> {
  const timestamp = new Date().getTime();
  const consumerKey = process.env.WOO_CONSUMER_KEY ?? "";
  const consumerSecret = process.env.WOO_CONSUMER_SECRET ?? "";

  const res = await fetch(
    `${process.env.API_URL}/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&t=${timestamp}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch WooCommerce products");
  }

  const products: WooProduct[] = await res.json();
  return products;
}
