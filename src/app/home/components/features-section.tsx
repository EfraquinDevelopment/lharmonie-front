import {
  CoffeeOutlined,
  BookOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import React from "react";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";

const iconMapping: { [key: string]: React.ReactNode } = {
  CoffeeOutlined: <CoffeeOutlined className="text-[40px] mb-4" />,
  BookOutlined: <BookOutlined className="text-[40px] mb-4" />,
  EnvironmentOutlined: <EnvironmentOutlined className="text-[40px] mb-4" />,
};

const FeaturesSection = () => {
  const { featuresSection } = content;

  return (
    <section className="py-16 w-full bg-white text-lharmonie-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <Heading level={2} className="text-center">
          {featuresSection.title}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {featuresSection.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {iconMapping[feature.icon]}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
