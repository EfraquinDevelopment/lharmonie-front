"use client";

import {
  CoffeeOutlined,
  BookOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";
import { motion } from "framer-motion";

const iconMapping: { [key: string]: React.ReactNode } = {
  CoffeeOutlined: <CoffeeOutlined className="text-[40px] mb-4" />,
  BookOutlined: <BookOutlined className="text-[40px] mb-4" />,
  EnvironmentOutlined: <EnvironmentOutlined className="text-[40px] mb-4" />,
};

const FeaturesSection = () => {
  const { featuresSection } = content;

  return (
    <section className="w-full text-lharmonie-primary bg-lharmonie-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading level={2} className="text-center" reversed>
            {featuresSection.title}
          </Heading>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {featuresSection.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-lharmonie-hover">
                {iconMapping[feature.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
