"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Body from "@/components/layout/body";
import classNames from "classnames";

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
        <motion.div
          className="w-full md:w-1/2 overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
          variants={fadeIn}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={800}
            className="object-cover w-full h-[400px] rounded-xl shadow-2xl"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <p className="text-white text-2xl font-semibold">{title}</p>
          </motion.div>
        </motion.div>
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
            className="relative overflow-hidden"
            variants={textUpward}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mt-8 md:mt-0">
              {icon}
              <h3 className="!text-3xl !font-thin !text-[#8B7355]">{title}</h3>
            </div>
            <div className="w-12 h-0.5 bg-[#8B7355]"></div>
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
