"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import NextImage from "next/image";
import { downloadAsPdf } from "@/utils";
import LharmonieButton from "@/components/ui/lharmonie-button";

type Props = {
  imageSrc: string;
  title: string;
  description: string;
};

const MenuContent = ({ imageSrc, description, title }: Props) => {
  return (
    <div className="bg-[#f8f8f5] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-light text-center mb-8 text-[#8B7355]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NextImage
            src={imageSrc}
            alt="Lharmonie Menu"
            width={800}
            height={1200}
            className="mx-auto"
          />
        </motion.div>

        <div className="flex justify-center">
          <LharmonieButton
            onClick={() => downloadAsPdf(imageSrc, "Lharmonie_Menu.pdf")}
          >
            <Download className="mr-2" />
            Descargar menú
          </LharmonieButton>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
