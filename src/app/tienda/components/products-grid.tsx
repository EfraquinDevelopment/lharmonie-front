"use client";

import StoreEmptyState from "@/app/tienda/components/store-empty-state";
import ProductCard from "@/components/product-card";
import { WooProduct } from "@/types/woocommerce";

type Props = {
  products: WooProduct[];
  reccomended?: boolean;
};

const getFilteredProducts = (products: WooProduct[], reccomended: boolean) => {
  if (reccomended) {
    return products.filter((product) => product.featured);
  }

  return products;
};

const ProductsGrid = ({ products, reccomended = false }: Props) => {
  const filteredProducts = getFilteredProducts(products, reccomended);

  if (filteredProducts.length === 0) {
    return <StoreEmptyState />;
  }

  return (
    <section className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {filteredProducts.map((product, index) => (
        <ProductCard key={product.id} index={index} {...product} />
      ))}
    </section>
  );
};

export default ProductsGrid;
