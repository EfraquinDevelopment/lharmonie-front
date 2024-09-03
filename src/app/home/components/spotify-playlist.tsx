import React from "react";
import { motion } from "framer-motion";
import content from "@/data/home.json";
import { Spotify } from "@/components/spotify";

const SpotifyPlaylist = () => {
  const {
    spotifySection: { title, body, boxText, boxTitle, buttonText, playlistUrl },
  } = content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mb-10 px-4"
    >
      <h2 className="text-4xl md:text-5xl font-light mb-8 text-center">
        {title}
      </h2>
      <p className="text-center text-xl mb-12 max-w-2xl mx-auto">{body}</p>

      <div className="overflow-hidden">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2 p-8 rounded-lg bg-[#8B7355]">
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
  );
};

export default SpotifyPlaylist;
