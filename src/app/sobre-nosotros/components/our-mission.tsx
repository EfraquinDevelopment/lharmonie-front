import React from "react";
import content from "@/data/about.json";

const OurMission = () => {
  const { ourMission } = content;
  return (
    <section className="mb-32 bg-white py-24 px-12 rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-12 tracking-wide">
          {ourMission.title}
        </h2>
        <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed">
          {ourMission.description}
        </p>
      </div>
      <div className="absolute inset-0 bg-[url('/test-1.png')] opacity-5 bg-cover bg-center"></div>
    </section>
  );
};

export default OurMission;
