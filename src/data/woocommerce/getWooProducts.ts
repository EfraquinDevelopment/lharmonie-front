import { orderOptions } from "@/config/store";
import { WooProduct } from "@/types/woocommerce";

export async function getWooProducts(
  order: string,
  category?: number,
  search?: string
): Promise<WooProduct[]> {
  const timestamp = new Date().getTime();
  const consumerKey = process.env.WOO_CONSUMER_KEY ?? "";
  const consumerSecret = process.env.WOO_CONSUMER_SECRET ?? "";

  const orderOption = orderOptions.find((option) => option.value === order);
  const orderBy = orderOption?.orderBy ?? "title";
  const orderDirection = orderOption?.orderDirection ?? "asc";

  let apiUrl = `${process.env.API_URL}/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&orderby=${orderBy}&order=${orderDirection}&t=${timestamp}`;

  if (category) {
    apiUrl += `&category=${category}`;
  }

  if (search) {
    apiUrl += `&search=${encodeURIComponent(search)}`;
  }

  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch WooCommerce products");
  }

  const products: WooProduct[] = await res.json();
  return products;
}