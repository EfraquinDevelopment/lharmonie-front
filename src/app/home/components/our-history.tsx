import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";

const OurHistory = () => {
  const { ourHistory } = content;

  return (
    <section className="py-16 w-full bg-lharmonie-primary">
      <div className="px-4 container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Heading level={2}>{ourHistory.title}</Heading>{" "}
            <div className="mt-4">
              {ourHistory.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg mb-4 text-lharmonie-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <LharmonieButton>
              <Link href="/sobre-nosotros">{ourHistory.buttonText}</Link>
            </LharmonieButton>
          </div>
          <div className="flex justify-end">
            <Image
              src={ourHistory.imageSrc}
              alt={ourHistory.imageAlt}
              width={500}
              height={500}
              className="flex-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
