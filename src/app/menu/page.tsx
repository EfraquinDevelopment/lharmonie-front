import content from "@/data/menu.json";
import MenuBanner from "./components/menu-banner";
import Menu from "./components/menu";

const MenuPage = () => {
  const { description, imageSrc, title } = content;

  return <Menu imageSrc={imageSrc} title={title} description={description} />;
};

export default MenuPage;
