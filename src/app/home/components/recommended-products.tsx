"use client";

import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import storeContent from "@/data/store.json";
import { motion } from "framer-motion";
import ProductCarousel from "./product-carousel";

const RecommendedProducts = () => {
  const { recommendedProducts } = content;
  const { products } = storeContent;

  return (
    <section
      id="2"
      className="bg-lharmonie-primary mx-4 scroll-mt-[110px] shadow-2xl rounded-xl 2xl:h-[700px] py-5"
    >
      <div className="mx-auto px-4 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Heading level={2} className="text-center !text-4xl">
            {recommendedProducts.title}
          </Heading>
        </motion.div>
        <ProductCarousel products={products} />
        <div className="text-center">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <LharmonieButton>
              <Link href="/tienda">{recommendedProducts.buttonText}</Link>
            </LharmonieButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
