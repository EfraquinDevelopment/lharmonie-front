import Heading from "@/components/layout/heading";
import React from "react";
import content from "@/data/about.json";

const AboutUsBanner = () => {
  const { aboutBanner } = content;
  return (
    <div className="bg-[#e8e6e1] h-[calc(100vh-30rem)] px-4 relative flex items-center justify-center">
      <div className="flex-col">
        <div className="text-center md:px-0 px-4">
          <Heading level={1} className="md:!text-5xl !font-bold">
            {aboutBanner.title}
          </Heading>
          <p className="text-lg md:text-xl mt-4 mb-8">
            {aboutBanner.description}
          </p>
        </div>
        </div>
      <div className="absolute inset-0 bg-[url('/test-1.png')] opacity-10 bg-cover bg-center"></div>
    </div>
  );
};

export default AboutUsBanner;
