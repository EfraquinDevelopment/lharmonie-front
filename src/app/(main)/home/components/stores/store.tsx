"use client";

import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import { Store } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = Store;

const StoreItem = ({
  id,
  callToAction,
  name,
  imageSrc,
  mediaType,
  codeName,
  address,
}: Props) => {
  return (
    <Link href={`${callToAction}#${id}`} className="group cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        key={id}
      >
        <div className="rounded-xl relative aspect-[3/4] overflow-hidden shadow-md transition-shadow duration-300 2xl:h-[700px] w-full">
          {mediaType === "image" ? (
            <Image
              loading="lazy"
              src={imageSrc}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
            >
              <source src={imageSrc} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-lharmonie-secondary opacity-60 transition-opacity duration-300 flex flex-col items-center justify-center p-6"></div>
          <div className="absolute inset-0 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
            <Heading
              level={3}
              className="!text-lxl !mb-0 group-hover:underline"
              reversed
            >
              {codeName}
            </Heading>
            <p className="mb-5 text-lg text-lharmonie-primary group-hover:underline">
              {address}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default StoreItem;
