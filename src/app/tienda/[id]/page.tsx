import React from "react";
import content from "@/data/store.json";
import LharmonieButton from "@/components/ui/lharmonie-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Product from "@/app/tienda/[id]/components/product";
import ProductDetailBreadcrumb from "@/app/tienda/[id]/components/product-detail-breadcrumb";

const ProductDetail = ({ params: { id } }: { params: { id: string } }) => {
  const product = content.products.find(
    (product) => product.id.toString() === id
  );

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <main className="bg-[#f8f8f5]">
      <div className="container mx-auto px-4 py-8">
        <ProductDetailBreadcrumb productName={product.name} />
        <Product {...product} />
      </div>
    </main>
  );
};

export default ProductDetail;
