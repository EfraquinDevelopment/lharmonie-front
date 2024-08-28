"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import { motion } from "framer-motion";

const OurHistory = () => {
  const { ourHistory } = content;

  return (
    <section className="py-20 bg-lharmonie-primary text-lharmonie-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <Heading level={2}>{ourHistory.title}</Heading>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 space-y-6"
          >
            {ourHistory.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg mb-4 text-lharmonie-secondary">
                {paragraph}
              </p>
            ))}
            <LharmonieButton>
              <Link href="/sobre-nosotros">{ourHistory.buttonText}</Link>
            </LharmonieButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <Image
              src={ourHistory.imageSrc}
              alt={ourHistory.imageAlt}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
