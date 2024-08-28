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
    <section className="py-16 bg-lharmonie-primary border-b border-lharmonie-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading level={2} className="text-center">
            {recommendedProducts.title}
          </Heading>
        </motion.div>
        <ProductsGrid products={products} />
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
