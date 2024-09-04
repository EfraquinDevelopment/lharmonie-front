"use client";

import { motion } from "framer-motion";
import Heading from "@/components/layout/heading";

type Props = {
  title: string;
  description: string;
};

const MenuBanner = ({ title, description }: Props) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-lharmonie-primary shadow-md py-24 px-6 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <Heading level={1} className="md:!text-5xl !font-bold">
          {title}
        </Heading>
      </motion.div>
      <p className="text-xl text-gray-600">{description}</p>
    </div>
  );
};

export default MenuBanner;
