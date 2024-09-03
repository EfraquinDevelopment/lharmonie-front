"use client";

import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import Heading from "./layout/heading";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = Product & {
  index: number;
};

const ProductCard = ({ index, ...product }: Props) => {
  return (
    <motion.article
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <Link href={`/tienda/${product.id}`}>
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={300}
          height={300}
          className="w-full lg:h-[350px] bg-gray-200 object-cover rounded-xl"
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
    </motion.article>
  );
};

export default ProductCard;
