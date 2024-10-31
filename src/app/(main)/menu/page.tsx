import content from "@/data/menu.json";
import MenuContent from "@/app/(main)/menu/components/menu";
import { Metadata } from "next";

const MenuPage = () => {
  const { description, imageSrc, title } = content;

  return (
    <MenuContent imageSrc={imageSrc} title={title} description={description} />
  );
};

export const metadata: Metadata = {
  title: "Lharmonie Café | Menú",
  description: content.description,
  keywords: "menú, café, Lharmonie Café, comida, bebidas, menú de café",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.casalharmonie.com/menu",
    title: `${content.title} | Lharmonie Café`,
    description: content.description,
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
    description: content.description,
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
