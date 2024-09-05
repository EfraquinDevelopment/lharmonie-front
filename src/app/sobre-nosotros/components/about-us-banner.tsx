"use client";
import React from "react";
import content from "@/data/about.json";
import { motion } from "framer-motion";

const AboutUsBanner = () => {
  const { aboutBanner } = content;
  return (
    <div className="bg-[#e8e6e1] h-[calc(100vh-30rem)] px-4 relative flex flex-col shadow-lg items-center justify-center">
      <motion.h1
        className="text-4xl md:text-5xl font-light text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {aboutBanner.title}
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {aboutBanner.description}
      </motion.p>
    </div>
  );
};

export default AboutUsBanner;
