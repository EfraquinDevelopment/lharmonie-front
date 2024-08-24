import FeaturesSection from "@/app/home/components/features-section";
import HomeBanner from "@/app/home/components/home-banner";
import OurHistory from "@/app/home/components/our-history";
import RecommendedProducts from "@/app/home/components/recommended-products";

const Home = () => {
  return (
    <>
      <HomeBanner />
     <div className="my-6 flex justify-center w-full"> NUESTROS LOCALES SECTION</div>
      <FeaturesSection/>
      <RecommendedProducts/>
      <OurHistory/>
    </>
  );
};

export default Home;
