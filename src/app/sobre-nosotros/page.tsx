import AboutUsBanner from "@/app/sobre-nosotros/components/about-us-banner";
import OurCompromise from "@/app/sobre-nosotros/components/our-compromise";
import OurHistoryFull from "@/app/sobre-nosotros/components/our-history";
import OurMission from "@/app/sobre-nosotros/components/our-mission";
import OurValues from "@/app/sobre-nosotros/components/our-values";

const SobreNosotros = () => {
  return (
    <div className="bg-[#f8f8f5] min-h-screen text-lharmonie-secondary">
      <AboutUsBanner />
      <main className="container mx-auto max-w-6xl py-24 px-4">
        <OurHistoryFull />
        <OurMission />
        <OurValues />
        <OurCompromise />
      </main>
    </div>
  );
};

export default SobreNosotros;
