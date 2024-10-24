"use client";

import DOMPurify from "dompurify";
import { useCartContext } from "@/hooks";
import { Button, Divider, Typography } from "antd";
import React, { useState } from "react";
import AddToCartButton from "@/app/(main)/tienda/[id]/components/add-to-cart-button";
import AttributesSection from "@/app/(main)/tienda/[id]/components/attributes-section";
import ProductImage from "@/app/(main)/tienda/[id]/components/product-image";
import { WooProduct } from "@/types/woocommerce";
import { ChevronDown, ChevronUp } from "lucide-react";
import Heading from "@/components/layout/heading";
import ProductImagesCarousel from "@/app/(main)/tienda/[id]/components/product-images-carousel";

type Props = WooProduct;

const { Text } = Typography;

const ProductContent = (product: Props) => {
  const { checkCartItemQuantity } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const sanitizedDescription = DOMPurify.sanitize(product.description, {
    ALLOWED_TAGS: [],
  });

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="lg:flex lg:items-start lg:space-x-8">
      <div className="flex justify-center  lg:w-[40%]">
        <ProductImagesCarousel name={product.name} images={product.images} />
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <Heading level={2} className="text-5xl font-light text-gray-900 mb-4">
          {product.name}
        </Heading>
        <p className="text-3xl text-[#8B7355] mb-6 font-semibold">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(+product.price)}
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
            disabled={checkCartItemQuantity(product, quantity + 1)}
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
        {product.description ? (
          <>
            <Divider className="border-[#e0d8c9] mt-16" />
            <div className="relative">
              <Text
                className={`text-xl mb-8 italic leading-relaxed text-gray-600 font-light ${
                  isDescriptionExpanded ? "" : "line-clamp-3"
                }`}
              >
                {sanitizedDescription}
              </Text>
              <div
                className={`absolute -bottom-10 left-0 right-0 text-center ${
                  isDescriptionExpanded
                    ? ""
                    : "bg-gradient-to-t from-[#f8f8f5] to-transparent"
                }`}
              >
                <button
                  onClick={toggleDescription}
                  className="transition-colors flex items-center mx-auto"
                >
                  {isDescriptionExpanded ? (
                    <>
                      Ver menos
                      <ChevronUp className="ml-1 w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Ver más
                      <ChevronDown className="ml-1 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductContent;
