"use client";

import { useCartContext } from "@/hooks";
import { Product } from "@/types";
import { Button } from "antd";
import React, { useState } from "react";
import AddToCartButton from "@/app/tienda/[id]/components/add-to-cart-button";
import AttributesSection from "@/app/tienda/[id]/components/attributes-section";
import ProductImage from "@/app/tienda/[id]/components/product-image";
import { WooProduct } from "@/types/woocommerce";

type Props = WooProduct;

const ProductContent = (product: Props) => {
  const { checkCartItemQuantity } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  console.log(product);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="lg:flex lg:items-start lg:space-x-8">
      <div className="lg:w-1/2 flex justify-center">
        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-white overflow-hidden shadow-xl">
          <ProductImage src={product.images[0].src} alt={product.name} />
        </div>
      </div>

      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <h1 className="text-5xl font-light text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-3xl text-[#8B7355] mb-6 font-semibold">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(+product.price)}
        </p>
        <p className="text-xl text-gray-700 mb-8 italic">
          {product.description}
        </p>
        <AttributesSection attributes={product.attributes} />
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

export default ProductContent;
