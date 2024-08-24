import FeaturesSection from "@/app/home/components/features-section";
import HomeBanner from "@/app/home/components/home-banner";
import OurHistory from "@/app/home/components/our-history";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <FeaturesSection/>
      <OurHistory/>
      <h1>Home</h1>
      <p>Bienvenido a la página principal.</p>
    </>
  );
};

export default Home;
