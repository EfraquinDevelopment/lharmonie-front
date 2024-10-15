"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import NextImage from "next/image";
import { downloadAsPdf } from "@/utils";
import LharmonieButton from "@/components/ui/lharmonie-button";
import Heading from "@/components/layout/heading";
import Body from "@/components/layout/body";

type Props = {
  imageSrc: string;
  title: string;
  description: string;
};

const MenuContent = ({ imageSrc, description, title }: Props) => {
  return (
    <div className="bg-[#f8f8f5] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading level={2} className="!text-4xl">
            {title}
          </Heading>
        </motion.div>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Body>{description}</Body>
        </motion.div>

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
