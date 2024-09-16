import { WooProduct } from "@/types/woocommerce";

export async function getWooProduct(
  productId: string | number
): Promise<WooProduct> {
  const timestamp = new Date().getTime();
  const consumerKey = process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY ?? "";
  const consumerSecret = process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET ?? "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wc/v3/products/${productId}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&t=${timestamp}`
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch WooCommerce product with ID: ${productId}`
    );
  }

  const product: WooProduct = await res.json();
  return product;
}
