"use client";

import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import storeContent from "@/data/store.json";
import ProductsGrid from "@/app/tienda/components/products-grid";
import { motion } from "framer-motion";

const RecommendedProducts = () => {
  const { recommendedProducts } = content;
  const { products } = storeContent;

  return (
    <section className="bg-white mx-4 shadow-xl rounded-xl py-6">
      <div className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Heading level={2} className="text-center !text-4xl">
            {recommendedProducts.title}
          </Heading>
        </motion.div>
        <ProductsGrid reccomended products={products} />
        <div className="text-center mt-8">
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
