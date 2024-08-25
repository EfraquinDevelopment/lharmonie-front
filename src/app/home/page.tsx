import FeaturesSection from "@/app/home/components/features-section";
import HomeBanner from "@/app/home/components/home-banner";
import OurHistory from "@/app/home/components/our-history";
import RecommendedProducts from "@/app/home/components/recommended-products";
import Stores from "@/app/home/components/stores";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Stores />
      <FeaturesSection />
      <RecommendedProducts />
      <OurHistory />
    </>
  );
};

export default Home;
