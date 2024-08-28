"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import LharmonieButton from "@/components/ui/lharmonie-button";
import Heading from "@/components/layout/heading";
import { motion } from "framer-motion";

const HomeBanner = () => {
  const { homeBanner } = content;

  return (
    <section className="h-[calc(100vh-4rem)] flex items-center justify-center bg-lharmonie-secondary text-lharmonie-primary relative">
      <div className="text-center md:px-0 px-4 flex justify-center flex-col items-center">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Heading
            level={1}
            className="!text-5xl md:!text-9xl !font-bold md:max-w-[12ch] !mb-3"
            reversed
          >
            {homeBanner.title}
          </Heading>
        </motion.div>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl mb-8 max-w-[70ch]"
        >
          {homeBanner.description}
        </motion.p>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <LharmonieButton reversed>
            <Link href="/menu">{homeBanner.buttonText}</Link>
          </LharmonieButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBanner;
