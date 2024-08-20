import { ItemType, MenuItemType } from "antd/es/menu/interface";
import Link from "next/link";

export const MENU_ITEMS = [
  {
    title: "Inicio",
    link: "/home",
  },
  {
    title: "Tienda",
    link: "/tienda",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "Locales",
    link: "/locales",
  },
  {
    title: "Sobre Nosotros",
    link: "/sobre-nosotros",
  },
];


export const generateMenuItems = ():ItemType<MenuItemType>[] => {
  return MENU_ITEMS.map((item) => ({
    key: item.link,
    label: <Link href={item.link}>{item.title}</Link>,
  }));
}