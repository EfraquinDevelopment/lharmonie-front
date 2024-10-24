import content from "@/data/about.json";
import { Coffee, Feather, Layers } from "lucide-react";
import AboutUsSection from "@/app/(main)/sobre-nosotros/components/about-us-section";
import AboutUsBanner from "@/app/(main)/sobre-nosotros/components/about-us-banner";

const SobreNosotros = () => {
  const { ourHistory, ourCoffee, ourLaminates } = content;
  return (
    <div className="bg-[#f8f8f5] min-h-screen text-lharmonie-secondary">
      <AboutUsBanner />
      <main className="container mx-auto max-w-6xl py-24 px-4">
        <AboutUsSection
          id="1"
          title={ourHistory.title}
          content={ourHistory.description}
          imageSrc={ourHistory.imageSrc}
          icon={<Feather className="w-6 text-[#8B7355]" />}
        />
        <AboutUsSection
          id="2"
          title={ourCoffee.title}
          content={ourCoffee.description}
          imageSrc={ourCoffee.imageSrc}
          icon={<Coffee className="w-6 text-[#8B7355]" />}
          reversed
        />
        <AboutUsSection
          id="3"
          title={ourLaminates.title}
          content={ourLaminates.description}
          imageSrc={ourLaminates.imageSrc}
          icon={<Layers className="w-6 text-[#8B7355]" />}
          last
        />
      </main>
    </div>
  );
};

export default SobreNosotros;
