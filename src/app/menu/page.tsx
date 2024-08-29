import Image from "next/image";
import content from "@/data/menu.json";
import Heading from "@/components/layout/heading";

const Menu = () => {
  const { description, imageSrc, title } = content;
  return (
    <main className="bg-lharmonie-primary">
      <div className="bg-lharmonie-primary shadow-md py-24 px-6 text-center">
        <Heading level={1} className="md:!text-5xl !font-bold">
          {title}
        </Heading>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Image
          src={imageSrc}
          alt="Menú de Lharmonie"
          width={1200}
          height={1697}
          className="w-full h-auto shadow-lg rounded-xl"
        />
      </div>
    </main>
  );
};

export default Menu;
