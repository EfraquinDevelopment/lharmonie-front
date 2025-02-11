import content from "@/data/menu.json";
import MenuContent from "@/app/(main)/menu/components/menu";
import { Metadata } from "next";

const MenuPage = () => {
  const { imageSrc, title } = content;

  return <MenuContent imageSrc={imageSrc} title={title} />;
};

export const metadata: Metadata = {
  title: "Lharmonie Café | Menú",
  keywords: "menú, café, Lharmonie Café, comida, bebidas, menú de café",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.casalharmonie.com/menu",
    title: `${content.title} | Lharmonie Café`,
    images: [
      {
        url: content.imageSrc,
        width: 800,
        height: 600,
        alt: "Lharmonie Café",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.casalharmonie.com/menu",
    title: `${content.title} | Lharmonie Café`,
    images: [
      {
        url: content.imageSrc,
        width: 800,
        height: 600,
        alt: "Lharmonie Café",
      },
    ],
  },
};

export default MenuPage;
