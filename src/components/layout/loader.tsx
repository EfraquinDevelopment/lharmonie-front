"use client";
import { Logo } from "@/components/logo";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000); // Duración del loader

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: "0vh" }}
      exit={{ y: "-100vh" }}
      className="bg-lharmonie-primary"
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ fontSize: "2rem", textAlign: "center" }}
      >
        <Logo size="large" clickable={false} />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
