"use client";

import OurHistory from "@/app/home/components/our-history";
import RecommendedProducts from "@/app/home/components/recommended-products";
import Stores from "@/app/home/components/stores";
import { Suspense } from "react";
import SpotifyPlaylist from "@/app/home/components/spotify-playlist";
import ImageMarquee from "@/app/home/components/image-marquee";
import dynamic from "next/dynamic";

const VideoSection = dynamic(
  () => import("@/app/home/components/video-section"),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <main className="space-y-24 lg:space-y-36 pb-24 lg:pb-32">
      <VideoSection />
      <Stores />
      <Suspense fallback={<div>Cargando productos...</div>}>
        <RecommendedProducts />
      </Suspense>
      <ImageMarquee />
      <OurHistory />
      <SpotifyPlaylist />
    </main>
  );
};

export default Home;
