"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  imageSrc: string;
};

const Menu = ({ imageSrc }: Props) => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <Image
          src={imageSrc}
          alt="Menú de Lharmonie"
          width={1200}
          height={1697}
          className="w-full h-auto shadow-lg rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default Menu;
