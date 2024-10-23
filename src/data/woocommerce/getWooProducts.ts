import { orderOptions } from "@/config/store";
import { wooCommerceApi } from "@/lib/api";
import { WooProduct } from "@/types/woocommerce";

export async function getWooProducts({
  order,
  categories,
  search,
  featured,
}: {
  order?: string;
  categories?: number[];
  search?: string;
  featured?: boolean;
} = {}): Promise<WooProduct[]> {
  const timestamp = new Date().getTime();

  const orderOption = orderOptions.find((option) => option.value === order);
  const orderBy = orderOption?.orderBy ?? "title";
  const orderDirection = orderOption?.orderDirection ?? "asc";

  let endpoint = `products?status=publish&orderby=${orderBy}&order=${orderDirection}&t=${timestamp}`;

  if (categories && categories.length > 0) {
    const categoryIds = categories.join(",");
    endpoint += `&category=${categoryIds}`;
  }

  if (search) {
    endpoint += `&search=${encodeURIComponent(search)}`;
  }

  if (featured) {
    endpoint += `&featured=true`;
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
