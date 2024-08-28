"use client";

import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video-home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-lharmonie-secondary bg-opacity-50 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-lharmonie-primary text-center"
        >
          ESTÉTICA ÚNICA
        </motion.h2>
      </div>
    </section>
  );
};

export default VideoSection;
