"use client";

import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import { Store } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = Store & {
  ctoDescription: string;
};

const StoreItem = ({
  id,
  callToAction,
  name,
  imageAlt,
  imageSrc,
  ctoDescription,
  mediaType,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      key={id}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl lg:h-[700px] w-full">
        {mediaType === "image" ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          >
            <source src={imageSrc} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-lharmonie-secondary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
          <Heading level={3} className="!text-lg mb-4" reversed>
            {name}
          </Heading>
          <LharmonieButton reversed>
            <Link href={`${callToAction}#${id}`}>{ctoDescription}</Link>
          </LharmonieButton>
        </div>
      </div>
    </motion.div>
  );
};

export default StoreItem;
