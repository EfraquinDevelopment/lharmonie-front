import React from "react";
import content from "@/data/about.json";

const OurValues = () => {
  const { ourValues } = content;
  return (
    <section className="mb-32">
      <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-wide">
        {ourValues.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {ourValues.values.map((value, index) => (
          <div
            key={index}
            className="bg-white p-10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-6">
              {value.title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
