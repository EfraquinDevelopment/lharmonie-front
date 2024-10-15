"use client";

import Heading from "@/components/layout/heading";
import content from "@/data/stores.json";
import Link from "next/link";
import { motion } from "framer-motion";
import Body from "@/components/layout/body";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const textUpward = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const StoresBanner = () => {
  const {
    storesBanner,
    storesSection: { stores },
  } = content;

  return (
    <motion.section
      className="flex items-center justify-center shadow-xl pb-6 bg-lharmonie-primary text-lharmonie-secondary mt-8 relative"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex-col">
        <motion.div
          className="text-center md:px-0 px-4"
          initial="hidden"
          animate="visible"
          variants={textUpward}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Heading level={2} className="!text-4xl">
            {storesBanner.title}
          </Heading>
          <Body className="mt-4 mb-8">{storesBanner.description}</Body>
        </motion.div>
        <motion.div
          className="flex md:flex-row flex-col justify-center gap-4 mx-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          {stores.map((store) => (
            <Link
              key={store.id}
              href={`#${store.id}`}
              className="group block text-center transition-all duration-300 shadow-md hover:shadow-xl p-4 rounded-lg"
            >
              <motion.div
                className="mb-2"
                variants={textUpward}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              >
                <Heading level={3} className="!text-2xl">
                  {store.name}
                </Heading>
              </motion.div>
              <motion.p
                className="text-sm text-gray-600"
                variants={textUpward}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              >
                {store.address}
              </motion.p>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StoresBanner;
