"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Body from "@/components/layout/body";
import classNames from "classnames";
import Heading from "@/components/layout/heading";

interface SectionProps {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
  reversed?: boolean;
  icon: React.ReactNode;
  last?: boolean;
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const textUpward = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function AboutUsSection({
  id,
  title,
  content,
  imageSrc,
  icon,
  reversed = false,
  last = false,
}: SectionProps) {
  return (
    <motion.section
      id={id.toString()}
      className="md:scroll-mt-[110px] scroll-mt-[160px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div
        className={classNames("flex flex-col md:flex-row items-center", {
          "md:flex-row-reverse": reversed,
        })}
      >
        <div className="w-full md:w-1/2 overflow-hidden shadow-2xl relative group">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={800}
            className="object-cover w-full h-[400px] rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <p className="text-white text-2xl font-semibold">{title}</p>
          </div>
        </div>
        <motion.div
          className={classNames(
            "w-full md:w-1/2 flex flex-col justify-center",
            {
              "md:pl-16": !reversed,
              "md:pr-16": reversed,
            }
          )}
        >
          <motion.div
            variants={textUpward}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center mt-8 md:mt-0">
              <div className="flex flex-col gap-1">
                {icon}
                <div className="w-12 h-0.5 bg-black"></div>
              </div>
              <Heading level={3} className="mt-2 -ml-3">
                {title}
              </Heading>
            </div>
            <Body className="!mt-4 leading-relaxed">{content}</Body>
          </motion.div>
        </motion.div>
      </div>
      {!last ? (
        <motion.div
          className="border-b border-gray-300 my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      ) : null}
    </motion.section>
  );
}

export default AboutUsSection;
