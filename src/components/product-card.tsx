"use client";

import Image from "next/image";
import React from "react";
import Heading from "./layout/heading";
import Link from "next/link";
import { motion } from "framer-motion";
import { WooProduct } from "@/types/woocommerce";
import DOMPurify from "dompurify";
import { Badge } from "antd";

type Props = WooProduct & {
  index: number;
  reccomended?: boolean;
};

const ProductCard = ({ index, reccomended = false, ...product }: Props) => {
  const sanitizedDescription = DOMPurify.sanitize(product.short_description, {
    ALLOWED_TAGS: [],
  });

  return (
    <motion.article
      key={index}
      initial={{ opacity: reccomended ? 1 : 0, scale: reccomended ? 1 : 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <Link href={`/tienda/${product.id}`}>
        <Badge
          title="Sin Stock"
          color="gray"
          count={product.stock_quantity === 0 ? "Sin Stock" : null}
        >
          <Image
            priority
            src={product.images[0].src}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-[150px] md:h-[300px] bg-gray-200 object-cover rounded-xl"
          />
        </Badge>

        <div className="mt-1">
          <Heading
            level={2}
            className="!text-xs sm:!text-sm !my-0 sm:!mb-1 lg:!text-xl font-medium lg:mb-2 relative inline-block"
          >
            {product.name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lharmonie-secondary transform scale-x-0 transition-transform duration-300 lg:group-hover:scale-x-100"></span>
          </Heading>
          <p className="text-xs lg:mb-1 text-gray-600 lg:text-sm">
            {sanitizedDescription}
          </p>
          <span className="!text-xs sm:!text-sm lg:text-xl font-semibold text-black">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(+product.price)}
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductCard;
