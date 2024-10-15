import ProductCarousel from "@/app/(main)/home/components/product-carousel";
import Heading from "@/components/layout/heading";
import { WooProduct } from "@/types/woocommerce";
import React from "react";

type Props = {
  products: WooProduct[];
};

const RelatedProducts = ({ products }: Props) => {
  return (
    <div className="mt-10">
      <Heading>Productos relacionados</Heading>
      <ProductCarousel products={products} />
    </div>
  );
};

export default RelatedProducts;
