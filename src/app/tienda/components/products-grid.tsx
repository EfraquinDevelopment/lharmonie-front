"use client";

import ProductCard from "@/components/product-card";
import { CATEGORY_PARAM } from "@/lib/constants";
import { Product } from "@/types";
import { useSearchParams } from "next/navigation";

type Props = {
  products: Product[];
};

const ProductsGrid = ({ products }: Props) => {
  const searchParams = useSearchParams();
  const category = searchParams.get(CATEGORY_PARAM);

  const filteredProducts = category
    ? products.filter((product) => product.category.toString() === category)
    : products;

  return (
    <section className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {filteredProducts.map((product, index) => (
        <ProductCard key={product.id} index={index} {...product} />
      ))}
    </section>
  );
};

export default ProductsGrid;
