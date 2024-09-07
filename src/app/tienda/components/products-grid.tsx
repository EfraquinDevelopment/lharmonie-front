"use client";

import ProductCard from "@/components/product-card";
import { CATEGORY_PARAM, SEARCH_PARAM } from "@/lib/constants";
import { Product } from "@/types";
import { useSearchParams } from "next/navigation";

type Props = {
  products: Product[];
  reccomended?: boolean;
};

const getFilteredProducts = (
  products: Product[],
  category: string | null,
  search: string | null,
  reccomended: boolean
) => {
  const normalizeText = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  if (reccomended) {
    return products.filter((product) => product.isRecommended);
  }

  if (search) {
    const normalizedSearch = normalizeText(search);
    return products.filter((product) =>
      normalizeText(product.name).includes(normalizedSearch)
    );
  }

  if (category) {
    return products.filter(
      (product) => product.category.toString() === category
    );
  }

  return products;
};

const ProductsGrid = ({ products, reccomended = false }: Props) => {
  const searchParams = useSearchParams();
  const category = searchParams.get(CATEGORY_PARAM);
  const search = searchParams.get(SEARCH_PARAM);

  const filteredProducts = getFilteredProducts(
    products,
    category,
    search,
    reccomended
  );

  return (
    <section className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {filteredProducts.map((product, index) => (
        <ProductCard key={product.id} index={index} {...product} />
      ))}
    </section>
  );
};

export default ProductsGrid;
