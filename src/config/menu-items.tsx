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

export const generateMenuItems = (
  pathname: string
): ItemType<MenuItemType>[] => {
  return MENU_ITEMS.map((item) => {
    const isActive = pathname === item.link;
    return {
      key: item.link,
      label: (
        <div className="header-nav-item">
          <Link
            style={{
              ...(isActive && {
                color: "#232323",
                fontWeight: "bold",
              }),
            }}
            href={item.link}
          >
            {item.title}
          </Link>
        </div>
      ),
    };
  });
};
