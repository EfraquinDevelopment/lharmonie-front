import { orderOptions } from "@/config/store";
import { wooCommerceApi } from "@/lib/api";
import { WooProduct } from "@/types/woocommerce";

export async function getWooProducts(
  order?: string,
  category?: number,
  search?: string
): Promise<WooProduct[]> {
  const timestamp = new Date().getTime();

  const orderOption = orderOptions.find((option) => option.value === order);
  const orderBy = orderOption?.orderBy ?? "title";
  const orderDirection = orderOption?.orderDirection ?? "asc";

  let endpoint = `products?status=publish&orderby=${orderBy}&order=${orderDirection}&t=${timestamp}`;

  if (category) {
    endpoint += `&category=${category}`;
  }

  if (search) {
    endpoint += `&search=${encodeURIComponent(search)}`;
  }

  try {
    const res = await wooCommerceApi.get(endpoint);

    if (res.status !== 200) {
      throw new Error("Failed to fetch WooCommerce products");
    }

    const products: WooProduct[] = res.data;
    return products;
  } catch (error) {
    console.error("Error fetching WooCommerce products:", error);
    return [];
  }
}
