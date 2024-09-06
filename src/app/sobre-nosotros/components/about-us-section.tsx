"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

interface SectionProps {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
  reversed?: boolean;
  icon: React.ReactNode;
}

function AboutUsSection({
  id,
  title,
  content,
  imageSrc,
  icon,
  reversed = false,
}: SectionProps) {
  return (
    <motion.div
      id={id}
      className={`flex flex-col scroll-mt-[160px] ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/2 space-y-6">
        <div className="flex items-center gap-4 mb-2">
          {icon}
          <h2 className="text-3xl md:text-4xl font-light text-[#8B7355]">
            {title}
          </h2>
        </div>
        <div className="w-16 h-0.5 bg-[#8B7355]"></div>
        <p className="text-lg text-lharmonie-secondary md:text-xl leading-relaxed">
          {content}
        </p>
      </div>
      <div className="md:w-1/2">
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <p className="text-white text-2xl font-semibold">{title}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutUsSection;
