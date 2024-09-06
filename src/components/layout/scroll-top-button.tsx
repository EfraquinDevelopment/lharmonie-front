"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed z-[10000000000] bottom-8 right-8 bg-[#8B7355] text-white p-3 rounded-full shadow-lg hover:bg-[#9c8164] transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTopButton;
