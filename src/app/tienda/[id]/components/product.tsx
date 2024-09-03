"use client";
import LharmonieButton from "@/components/ui/lharmonie-button";
import { useCartContext } from "@/hooks";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";

type Props = Product;

const Product = (product: Props) => {
  const { addToCart } = useCartContext();

  const handleCartClick = () => {
    addToCart(product);
  };

  return (
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
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
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
        <LharmonieButton onClick={handleCartClick}>
          Agregar al carrito
        </LharmonieButton>
      </div>
    </div>
  );
};

export default Product;
