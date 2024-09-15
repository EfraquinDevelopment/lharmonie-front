"use client";

import { motion } from "framer-motion";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";
import Video from "@/components/ui/video";
import { HomeBannerContent } from "@/data/pages/homeInterfaces";

const VideoSection = ({
  banner_description,
  banner_title,
  banner_video,
}: HomeBannerContent) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Video
        src={banner_video}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 text-center bg-lharmonie-secondary bg-opacity-60 flex flex-col gap-10 items-center justify-center">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Heading
            level={1}
            className="!text-5xl md:!text-9xl !font-bold md:max-w-[12ch] !mb-3"
            reversed
          >
            {banner_title}
          </Heading>
        </motion.div>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg md:text-xl max-w-[70ch] text-lharmonie-primary"
        >
          {banner_description}
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSection;
