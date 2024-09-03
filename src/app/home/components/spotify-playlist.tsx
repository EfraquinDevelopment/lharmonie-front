import React from "react";
import { Spotify } from "react-spotify-embed";
import { motion } from "framer-motion";
import content from "@/data/home.json";

const SpotifyPlaylist = () => {
  const { spotifySection } = content;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mb-4 rounded-lg"
    >
      <Spotify
        className="w-full shadow-2xl"
        link={spotifySection.spotifyPlaylist}
      />
    </motion.div>
  );
};

export default SpotifyPlaylist;
