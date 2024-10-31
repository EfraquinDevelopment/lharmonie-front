"use client";

import StoreEmptyState from "@/app/(main)/tienda/components/store-empty-state";
import ProductCard from "@/components/product-card";
import { WooProduct } from "@/types/woocommerce";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
    >
      {filteredProducts.map((product, index) => (
        <ProductCard key={product.id} index={index} {...product} />
      ))}
    </motion.section>
  );
};

export default ProductsGrid;
