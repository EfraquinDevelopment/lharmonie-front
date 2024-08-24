import { CoffeeOutlined, BookOutlined, EnvironmentOutlined } from '@ant-design/icons';
import React from 'react';
import content from "@/data/home.json";


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
        <h2 className="text-3xl font-bold text-center mb-12">{featuresSection.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
