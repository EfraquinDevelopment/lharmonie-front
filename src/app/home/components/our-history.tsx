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
    <section className="bg-lharmonie-primary mx-4 text-lharmonie-secondary">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <Heading level={2} className="!text-4xl">
            {ourHistory.title}
          </Heading>
        </motion.div>
        <div className="space-y-10 gap-10 lg:flex flex-row justify-evenly items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-7 md:flex justify-end flex-col"
          >
            <div className="flex flex-col justify-center mx-auto">
              {ourHistory.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg 2xl:text-2xl mb-4 text-lharmonie-secondary lg:max-w-[60ch]"
                >
                  {paragraph}
                </p>
              ))}
              <LharmonieButton className="lg:!w-[300px]">
                <Link href="/sobre-nosotros">{ourHistory.buttonText}</Link>
              </LharmonieButton>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
