import React from "react";
import content from "@/data/store.json";
import LharmonieButton from "@/components/ui/lharmonie-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Product from "@/app/tienda/[id]/components/product";

const ProductDetail = ({ params: { id } }: { params: { id: string } }) => {
  const product = content.products.find(
    (product) => product.id.toString() === id
  );

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <main className="bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/tienda"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Volver a la tienda</span>
        </Link>
        <Product {...product} />
      </div>
    </main>
  );
};

export default ProductDetail;
