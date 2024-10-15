import OurHistory from "@/app/(main)/home/components/our-history";
import RecommendedProducts from "@/app/(main)/home/components/recommended-products";
import Stores from "@/app/(main)/home/components/stores";
import { Suspense } from "react";
import ImageMarquee from "@/app/(main)/home/components/image-marquee";
import dynamic from "next/dynamic";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import SpinnerLoader from "@/components/layout/spinner-loader";
import SpotifyPlaylist from "@/app/(main)/home/components/spotify-playlist";

const VideoSection = dynamic(
  () => import("@/app/(main)/home/components/video-section"),
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
