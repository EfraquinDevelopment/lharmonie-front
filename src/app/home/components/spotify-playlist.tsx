import React from "react";
import { motion } from "framer-motion";
import content from "@/data/home.json";
import { Spotify } from "@/components/spotify";
import Heading from "@/components/layout/heading";

const SpotifyPlaylist = () => {
  const {
    spotifySection: { title, body, boxText, boxTitle, buttonText, playlistUrl },
  } = content;

  return (
    <div id="4" className="lg:scroll-mt-[120px] scroll-mt-[150px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mx-4"
      >
        <div className="container mx-auto flex justify-start">
          <div className="max-w-[85ch]">
            <Heading level={2} className=" !text-4xl">
              {title}
            </Heading>
            <p className="text-xl mb-12">{body}</p>
          </div>
        </div>
        <div className="overflow-hidden container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 -md:rounded-t-lg md:rounded-s-lg bg-[#8B7355]">
              <h3 className="text-3xl font-light mb-4 text-lharmonie-primary">
                {boxTitle}
              </h3>
              <p className="text-lharmonie-primary mb-6">{boxText}</p>
              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold inline-block bg-[#1DB954] text-lharmonie-primary py-2 px-6 rounded-full hover:bg-[#1ed760] transition-colors duration-300"
              >
                {buttonText}
              </a>
            </div>
            <div className="md:w-1/2">
              <Spotify className="w-full" link={playlistUrl} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SpotifyPlaylist;
