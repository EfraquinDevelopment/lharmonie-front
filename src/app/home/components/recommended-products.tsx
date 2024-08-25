import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import ProductCard from "@/components/product-card";
import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";

const products = [
  {
    id: 1,
    name: "Producto 1",
    description: "Descripción breve del producto 1",
    price: "20000",
    imageSrc: "/test-2.png",
  },
  {
    id: 2,
    name: "Producto 2",
    description: "Descripción breve del producto 2",
    price: "20000",
    imageSrc: "/test-2.png",
  },
  {
    id: 3,
    name: "Producto 3",
    description: "Descripción breve del producto 3",
    price: "20000",
    imageSrc: "/test-2.png",
  },
  {
    id: 4,
    name: "Producto 4",
    description: "Descripción breve del producto 4",
    price: "20000",
    imageSrc: "/test-2.png",
  },
];

const RecommendedProducts = () => {
  const { recommendedProducts } = content;

  const renderRecommendedProducts = () => {
    return products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ));
  };

  return (
    <section className="py-16 bg-lharmonie-primary border-b border-lharmonie-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <Heading level={2} className="text-center">
          {recommendedProducts.title}
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {renderRecommendedProducts()}
        </div>
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
