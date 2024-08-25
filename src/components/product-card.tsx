import { Product } from "@/types";
import Image from "next/image";
import React from "react";

type Props = Product;

const ProductCard = ({ description, id, imageSrc, name, price }: Props) => {
  return (
    <div key={id} className="group cursor-pointer">
      <div className="relative pt-[100%] rounded-lg overflow-hidden mb-4">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <h3 className="font-semibold text-lg mb-1 relative inline-block text-lharmonie-secondary">
        {name}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lharmonie-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-lg font-bold text-lharmonie-secondary">
        {new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
        }).format(+price)}
      </p>
    </div>
  );
};

export default ProductCard;
