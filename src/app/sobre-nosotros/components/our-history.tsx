import Image from "next/image";
import React from "react";
import content from "@/data/about.json";

const OurHistoryFull = () => {
  const { ourHistory } = content;
  return (
    <section className="mb-32">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-16 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
            {ourHistory.title}
          </h2>
          {ourHistory.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={ourHistory.imageSrc}
            alt={ourHistory.imageAlt}
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurHistoryFull;
