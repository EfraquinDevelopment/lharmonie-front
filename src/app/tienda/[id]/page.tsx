import React from "react";
import content from "@/data/store.json";
import LharmonieButton from "@/components/ui/lharmonie-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={product.imageSrc}
              alt={product.name}
              width={500}
              height={500}
              className="w-full max-h-[600px] h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-light mb-4">{product.name}</h2>
            <p className="text-2xl mb-6">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(product.price)}
            </p>
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <label htmlFor="quantity" className="text-lg">
                Cantidad
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                defaultValue="1"
                className="border border-gray-300 px-3 py-2 w-20 text-center"
              />
            </div>
            <LharmonieButton>Agregar al carrito</LharmonieButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
