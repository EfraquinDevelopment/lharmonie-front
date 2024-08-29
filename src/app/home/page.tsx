"use client";

// import FeaturesSection from "@/app/home/components/features-section";
import HomeBanner from "@/app/home/components/home-banner";
import OurHistory from "@/app/home/components/our-history";
import RecommendedProducts from "@/app/home/components/recommended-products";
import Stores from "@/app/home/components/stores";
import { Suspense } from "react";
import VideoSection from "./components/video-section";
import ImageMarquee from "./components/image-marquee";

const Home = () => {
  return (
    <>
      <VideoSection />
      <Stores />
      {/* <HomeBanner /> */}
      {/* <FeaturesSection /> */}
      <Suspense fallback={<div>Cargando productos...</div>}>
        <RecommendedProducts />
      </Suspense>
      <ImageMarquee />
      <OurHistory />
    </>
  );
};

export default Home;
