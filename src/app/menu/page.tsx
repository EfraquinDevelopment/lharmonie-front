import content from "@/data/menu.json";
import MenuContent from "@/app/menu/components/menu";

const MenuPage = () => {
  const { description, imageSrc, title } = content;

  return (
    <MenuContent imageSrc={imageSrc} title={title} description={description} />
  );
};

export default MenuPage;
