import OurHistory from "@/app/(main)/home/components/our-history";
import RecommendedProducts from "@/app/(main)/home/components/recommended-products";
import Stores from "@/app/(main)/home/components/stores";
import { Suspense } from "react";
import ImageMarquee from "@/app/(main)/home/components/image-marquee";
import dynamic from "next/dynamic";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import SpotifyPlaylist from "@/app/(main)/home/components/spotify-playlist";
import content from "@/data/home.json";
import { Metadata } from "next";

const VideoSection = dynamic(
  () => import("@/app/(main)/home/components/video-section"),
  {
    ssr: false,
  }
);

const HomePage = async () => {
  const products = await getWooProducts({ featured: true });

  return (
    <Suspense>
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

export const metadata: Metadata = {
  title: "Lharmonie Café | Home",
  description: content.ourHistory.paragraphs[0],
  keywords:
    "Café artesanal, Lharmonie Café, Buenos Aires, ambiente acogedor, playlists, café de calidad, productos recomendados",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.casalharmonie.com/home",
    title: "Lharmonie Café | Home",
    images: [
      {
        url: content.ourHistory.imageSrc,
        width: 800,
        height: 600,
        alt: "Lharmonie Café",
      },
    ],
    description: content.ourHistory.paragraphs[0],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.casalharmonie.com/home",
    title: "Lharmonie Café | Home",
    images: [
      {
        url: content.ourHistory.imageSrc,
        width: 800,
        height: 600,
        alt: "Lharmonie Café",
      },
    ],
    description: content.ourHistory.paragraphs[0],
  },
};

export default HomePage;
