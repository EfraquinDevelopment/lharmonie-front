import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import { Store } from "@/types";
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
  mediaType,
}: Props) => {
  return (
    <Link
      href={`${callToAction}#${id}`}
      key={id}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl lg:h-[800px] w-full">
        {mediaType === "image" ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <video autoPlay muted loop className="object-cover w-full h-full">
            <source src={imageSrc} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-lharmonie-secondary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
          <Heading level={3} className="!text-lg mb-4" reversed>
            {name}
          </Heading>
          <LharmonieButton reversed>{ctoDescription}</LharmonieButton>
        </div>
      </div>
    </Link>
  );
};

export default StoreItem;
