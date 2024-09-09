import { ItemType, MenuItemType } from "antd/es/menu/interface";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import content from "@/data/store.json";

const { categories } = content;

export const MENU_ITEMS = [
  {
    title: "Inicio",
    link: "/home",
    children: [
      { title: "Locales", link: "/home#1" },
      { title: "Productos Destacados", link: "/home#2" },
      { title: "Nuestra Historia", link: "/home#3" },
      { title: "Nuestra Melodia", link: "/home#4" },
    ],
  },
  {
    title: "Tienda",
    link: "/tienda",
    children: [
      { title: "Todos", link: "/tienda" },
      ...categories.map((category) => ({
        title: category.name,
        link: `/tienda?category=${category.codeName}`,
      })),
    ],
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "Locales",
    link: "/locales",
    children: [
      { title: "LH1", link: "/locales#1" },
      { title: "LH2", link: "/locales#2" },
      { title: "LH3", link: "/locales#3" },
      { title: "LH4", link: "/locales#4" },
    ],
  },
  {
    title: "Sobre Nosotros",
    link: "/sobre-nosotros",
    children: [
      { title: "Nuestra Historia", link: "/sobre-nosotros#1" },
      { title: "Nuestro Cafe", link: "/sobre-nosotros#2" },
      { title: "Nuestros Laminados", link: "/sobre-nosotros#3" },
    ],
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
        <div className="header-nav-item flex gap-[6px] items-center">
          {item.children ? (
            <>
              <span
                className={classNames(
                  "!text-lharmonie-secondary block lg:hidden",
                  { "font-semibold": isActive }
                )}
              >
                {item.title}
              </span>
              <Link
                className={classNames(
                  "!text-lharmonie-secondary hidden  lg:block",
                  { "font-semibold": isActive }
                )}
                href={item.link}
              >
                {item.title}
              </Link>
            </>
          ) : (
            <Link
              className={classNames("!text-lharmonie-secondary", {
                "font-semibold": isActive,
              })}
              href={item.link}
            >
              {item.title}
            </Link>
          )}
          {item.children && (
            <ChevronDown className="hidden lg:block" size={16} />
          )}
        </div>
      ),
      children: item.children
        ? item.children.map((child) => {
            return {
              key: child.link,
              label: (
                <div>
                  <Link
                    className="lg:!text-lharmonie-secondary hover:!font-normal"
                    href={child.link}
                  >
                    {child.title}
                  </Link>
                </div>
              ),
            };
          })
        : undefined,
    };
  });
};
