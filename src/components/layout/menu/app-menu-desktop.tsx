"use client";
import Link from "next/link";
import classNames from "classnames";
import { MenuHeaderItem } from "@/types";
import {
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type Props = {
  menuItems: MenuHeaderItem[];
  currentKey: string;
};

const AppMenuDesktop = ({ menuItems, currentKey }: Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((menuItem) => (
          <NavigationMenuItem className="bg-inherit" key={menuItem.title}>
            {menuItem.children ? (
              <>
                <NavigationMenuTrigger className="bg-inherit">
                  <Link
                    href={menuItem.link}
                    className={classNames(
                      "transition-all",
                      currentKey === menuItem.link
                        ? "font-semibold"
                        : "font-normal"
                    )}
                  >
                    {menuItem.title}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px]">
                    {menuItem.children.map((child) => (
                      <li key={child.title}>
                        <Link
                          href={child.link}
                          className="block hover:bg-gray-100 select-none rounded-md p-2 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                href={menuItem.link}
                className={navigationMenuTriggerStyle() + " !bg-inherit"}
              >
                <span
                  className={classNames(
                    "transition-all",
                    currentKey === menuItem.link
                      ? "font-semibold"
                      : "font-normal"
                  )}
                >
                  {menuItem.title}
                </span>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AppMenuDesktop;
