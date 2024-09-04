import content from "@/data/menu.json";
import MenuBanner from "./components/menu-banner";
import Menu from "./components/menu";

const MenuPage = () => {
  const { description, imageSrc, title } = content;

  return (
    <main className="bg-lharmonie-primary">
      <MenuBanner title={title} description={description} />
      <Menu imageSrc={imageSrc} />
    </main>
  );
};

export default MenuPage;
