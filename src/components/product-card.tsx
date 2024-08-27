import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import Heading from "./layout/heading";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = Product;

const ProductCard = (product: Props) => {
  return (
    <article className="group cursor-pointer">
      <Link href={`/tienda/${product.id}`}>
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-[150px] sm:h-[200px]  md:h-[200px] 2xl:h-[280px] bg-gray-200 object-cover"
        />
        <div className="mt-1">
          <Heading
            level={2}
            className="!text-sm !my-0 sm:!mb-1 lg:!text-xl font-medium lg:mb-2 relative inline-block"
          >
            {product.name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lharmonie-secondary transform scale-x-0 transition-transform duration-300 lg:group-hover:scale-x-100"></span>
          </Heading>
          <p className="text-xs lg:mb-1 text-gray-600 lg:text-sm">
            {product.description}
          </p>
          <span className="text-sm lg:text-xl font-semibold">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(product.price)}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
