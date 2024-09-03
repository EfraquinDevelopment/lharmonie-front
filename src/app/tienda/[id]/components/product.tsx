"use client";

import { useCartContext } from "@/hooks";
import { Product } from "@/types";
import { Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import AddToCartButton from "@/app/tienda/[id]/components/add-to-cart-button";

type Props = Product;

const Product = (product: Props) => {
  const { checkCartItemQuantity } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="lg:flex lg:items-start lg:space-x-8">
      <div className="lg:w-1/2">
        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={600}
            height={600}
            className="object-center object-cover"
          />
        </div>
      </div>

      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <h1 className="text-3xl font-light text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-2xl text-gray-900 mb-6">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(product.price)}
        </p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Características</h2>
          <ul className="list-disc list-inside text-gray-700">
            {product.attributes.map((attribute) => (
              <li key={attribute.name}>
                <span className="font-semibold">{attribute.name}: </span>
                {attribute.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center mb-6">
          <Button
            disabled={quantity === 1}
            onClick={decrementQuantity}
            className="bg-gray-200 h-fit rounded-e-none text-gray-700 py-2 px-4 rounded-l-md hover:bg-gray-300 transition-colors"
          >
            -
          </Button>
          <span className="bg-white py-2 px-4 border-t border-b border-gray-200">
            {quantity}
          </span>
          <Button
            disabled={checkCartItemQuantity(product, quantity)}
            onClick={incrementQuantity}
            className="bg-gray-200 h-fit rounded-s-none text-gray-700 py-2 px-4 rounded-r-md hover:bg-gray-300 transition-colors"
          >
            +
          </Button>
        </div>
        <AddToCartButton
          setQuantity={setQuantity}
          product={product}
          quantity={quantity}
        />
      </div>
    </div>
  );
};

export default Product;
