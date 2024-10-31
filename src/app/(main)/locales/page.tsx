import Map from "@/app/(main)/locales/components/map";
import StoresBanner from "@/app/(main)/locales/components/stores-banner";
import Stores from "@/app/(main)/locales/stores";
import content from "@/data/stores.json";
import { Metadata } from "next";

const ContactoInfo = () => {
  return (
    <div>
      <StoresBanner />
      <Stores />
      <Map />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Lharmonie Café | Locales",
  description: content.storesBanner.description,
  keywords:
    "locales, tiendas, sucursales, Lharmonie Café, ubicación de tiendas, café, cafetería",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.casalharmonie.com/locales",
    title: "Locales | Lharmonie Café",
    description: content.storesBanner.description,
    images: [
      {
        url: content.storesSection.stores[0].imageSrc,
        width: 800,
        height: 600,
        alt: "Lharmonie Café",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.casalharmonie.com/locales",
    title: "Locales | Lharmonie Café",
    description: content.storesBanner.description,
    images: [
      {
        url: content.storesSection.stores[0].imageSrc,
        width: 800,
        height: 600,
        alt: "Lharmonie Café",
      },
    ],
  },
};

export default ContactoInfo;
