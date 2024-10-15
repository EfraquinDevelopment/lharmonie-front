"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const images = [
  "/cafe_no_bg.png",
  "/tostada_no_bg.png",
  "/croissant_no_bg.png",
  "/cookie_no_bg.png",
  "/tostada_no_bg.png",
];

const ImageMarquee = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="mx-4"
    >
      <Marquee autoFill className="bg-white rounded-xl shadow-xl">
        {images.map((image, index) => (
          <Image
            loading="lazy"
            key={index}
            src={image}
            alt="food"
            width={300}
            height={300}
            className="w-[100px] h-[80px] sm:w-[150px] md:w-full sm:h-[100px] md:h-[150px]"
          />
        ))}
      </Marquee>
    </motion.div>
  );
};

export default ImageMarquee;
