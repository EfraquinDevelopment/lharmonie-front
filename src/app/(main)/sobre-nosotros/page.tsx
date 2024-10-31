import content from "@/data/about.json";
import AboutUsSection from "@/app/(main)/sobre-nosotros/components/about-us-section";
import AboutUsBanner from "@/app/(main)/sobre-nosotros/components/about-us-banner";
import Image from "next/image";

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
          icon={
            <Image
              className="w-12 mr-2"
              alt="cookie-icon"
              src="/cookie-icon.png"
              width={136}
              height={176}
            />
          }
        />
        <AboutUsSection
          id="2"
          title={ourCoffee.title}
          content={ourCoffee.description}
          imageSrc={ourCoffee.imageSrc}
          icon={
            <Image
              className="w-8"
              alt="coffee-icon"
              src="/coffee-icon.png"
              width={136}
              height={176}
            />
          }
          reversed
        />
        <AboutUsSection
          id="3"
          title={ourLaminates.title}
          content={ourLaminates.description}
          imageSrc={ourLaminates.imageSrc}
          icon={
            <Image
              className="w-10"
              alt="croissant-icon"
              src="/croissant-icon.png"
              width={136}
              height={176}
            />
          }
          last
        />
      </main>
    </div>
  );
};

export const metadata = {
  title: "Lharmonie Café | Sobre Nosotros",
  description: content.ourHistory.description,
  keywords:
    "sobre nosotros, Lharmonie Café, café artesanal, historia, productos de café",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.casalharmonie.com/sobre-nosotros",
    title: "Sobre Nosotros | Lharmonie Café",
    description: content.ourHistory.description,
    images: [
      {
        url: content.ourHistory.imageSrc,
        alt: "Sobre Nosotros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.casalharmonie.com/sobre-nosotros",
    title: "Sobre Nosotros | Lharmonie Café",
    description: content.ourHistory.description,
    image: content.ourHistory.imageSrc,
  },
};

export default SobreNosotros;
