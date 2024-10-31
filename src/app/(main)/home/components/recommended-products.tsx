"use client";

import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import storeContent from "@/data/store.json";
import { motion } from "framer-motion";
import ProductCarousel from "./product-carousel";
import { WooProduct } from "@/types/woocommerce";

interface Props {
  products: WooProduct[];
}

const RecommendedProducts = ({ products }: Props) => {
  const { recommendedProducts } = content;
  return (
    <motion.section
      id="2"
      className="bg-lharmonie-primary mx-4 md:scroll-mt-[110px] scroll-mt-[160px] shadow-2xl rounded-xl 2xl:h-[700px] py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="mx-auto px-4 space-y-10">
        <div className="mb-8">
          <Heading level={2} className="text-center !text-4xl">
            {recommendedProducts.title}
          </Heading>
        </div>
        <ProductCarousel products={products} />
        <div className="text-center">
          <LharmonieButton>
            <Link href="/tienda">{recommendedProducts.buttonText}</Link>
          </LharmonieButton>
        </div>
      </div>
    </motion.section>
  );
};

export default RecommendedProducts;
