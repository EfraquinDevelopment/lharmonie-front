import OurHistory from "@/app/home/components/our-history";
import RecommendedProducts from "@/app/home/components/recommended-products";
import Stores from "@/app/home/components/stores";
import { Suspense } from "react";
import SpotifyPlaylist from "@/app/home/components/spotify-playlist";
import ImageMarquee from "@/app/home/components/image-marquee";
import dynamic from "next/dynamic";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import SpinnerLoader from "@/components/layout/spinner-loader";

const VideoSection = dynamic(
  () => import("@/app/home/components/video-section"),
  {
    ssr: false,
  }
);

const HomePage = async () => {
  const products = await getWooProducts();

  return (
    <Suspense fallback={<SpinnerLoader />}>
      <main className="space-y-24 lg:space-y-36 pb-24 lg:pb-32">
        <VideoSection />
        <Stores />
        <RecommendedProducts products={products} />
        <ImageMarquee />
        <OurHistory />
        <SpotifyPlaylist />
      </main>
    </Suspense>
  );
};

export default HomePage;
