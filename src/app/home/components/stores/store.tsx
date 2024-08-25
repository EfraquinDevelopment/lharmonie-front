import LharmonieButton from "@/components/ui/lharmonie-button";
import { Store } from "@/types";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
}: Props) => {
  return (
    <div key={id} className="group cursor-pointer">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
        <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
          <h3 className="text-white text-xl font-bold mb-4">{name}</h3>
          <LharmonieButton reversed>
            <Link href={`${callToAction}#${id}`}>{ctoDescription}</Link>
          </LharmonieButton>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
