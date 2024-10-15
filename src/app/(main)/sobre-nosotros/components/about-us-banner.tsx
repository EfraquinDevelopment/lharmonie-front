"use client";
import React from "react";
import content from "@/data/about.json";
import { motion } from "framer-motion";
import Heading from "@/components/layout/heading";
import Body from "@/components/layout/body";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const textUpward = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutUsBanner = () => {
  const { aboutBanner } = content;

  return (
    <motion.section
      className="flex items-center justify-center shadow-xl pb-6 bg-lharmonie-primary text-lharmonie-secondary mt-8 relative"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex-col">
        <motion.div
          className="text-center md:px-0 px-4"
          initial="hidden"
          animate="visible"
          variants={textUpward}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Heading level={2} className="!text-4xl">
            {aboutBanner.title}
          </Heading>
          <Body className="mt-4 mb-8">{aboutBanner.description}</Body>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsBanner;
