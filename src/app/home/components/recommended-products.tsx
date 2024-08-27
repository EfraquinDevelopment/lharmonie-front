import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import ProductCard from "@/components/product-card";
import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import storeContent from "@/data/store.json";
import ProductsGrid from "@/app/tienda/components/products-grid";

const RecommendedProducts = () => {
  const { recommendedProducts } = content;
  const { products } = storeContent;

  return (
    <section className="py-16 bg-lharmonie-primary border-b border-lharmonie-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <Heading level={2} className="text-center">
          {recommendedProducts.title}
        </Heading>
        <ProductsGrid products={products} />
        <div className="text-center mt-8">
          <LharmonieButton>
            <Link href="/tienda">{recommendedProducts.buttonText}</Link>
          </LharmonieButton>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
