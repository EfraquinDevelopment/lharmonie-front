"use client";

import { motion } from "framer-motion";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";
import dynamic from "next/dynamic";
const Video = dynamic(() => import("@/components/ui/video"), {
  ssr: false,
});

const VideoSection = () => {
  const { homeBanner } = content;
  return (
    <section className="relative md:h-[calc(100vh-80px)] h-[calc(100vh-64px)] min-h-[600px] overflow-hidden">
      <Video
        src={homeBanner.videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        poster="banner-poster.jpg"
      />
      <div className="absolute inset-0 text-center bg-lharmonie-secondary bg-opacity-60 flex flex-col gap-10 items-center justify-center">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Heading
            level={2}
            className="!text-5xl md:!text-9xl !font-bold md:max-w-[12ch] !mb-3 -md:px-1.5"
            reversed
          >
            {homeBanner.title}
          </Heading>
        </motion.div>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg md:text-xl max-w-[70ch] -md:px-1.5 text-lharmonie-primary"
        >
          {homeBanner.description}
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSection;
