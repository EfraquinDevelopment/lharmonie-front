"use client";
import { motion } from "framer-motion";

const SpinnerLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-[100000000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
    </motion.div>
  );
};

export default SpinnerLoader;
