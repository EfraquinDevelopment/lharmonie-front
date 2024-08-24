import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import ProductCard from "@/components/product-card";

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
    return products.map((product) => <ProductCard key={product.id} {...product} />);
  };

  return (
    <section className="py-16 bg-[#F5F5F0] border-b border-[#232323]/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#232323]">
          {recommendedProducts.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {renderRecommendedProducts()}
        </div>
        <div className="text-center mt-8">
          <Button>
            <Link href="/tienda">{recommendedProducts.buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
