import Image from "next/image";
import React from "react";
import content from "@/data/about.json";

const OurCompromise = () => {
  const { ourCompromise } = content;
  return (
    <section className="mb-32">
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 md:pl-16 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
            {ourCompromise.title}
          </h2>
          {ourCompromise.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={ourCompromise.imageSrc}
            alt={ourCompromise.imageAlt}
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurCompromise;
