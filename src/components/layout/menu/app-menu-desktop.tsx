import { useCategories } from "@/context/categories-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getItems } from "@/config/menu-items";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import { MenuHeaderItem } from "@/types";

type Props = {
  menuItems: MenuHeaderItem[];
  currentKey: string;
};

const AppMenuDesktop = ({ menuItems, currentKey }: Props) => {
  return (
    <nav className="flex flex-col lg:flex-row gap-6 lg:ml-4">
      {menuItems.map((item) => (
        <div key={item.link} className="relative group">
          <Link
            href={item.link}
            className={classNames(
              "text-lharmonie-secondary  transition-all duration-100 ease-in-out",
              {
                "font-semibold": currentKey === item.link,
                "hover:font-semibold": currentKey !== item.link,
              }
            )}
          >
            {item.title}
            {item.children && (
              <ChevronDown className="hidden lg:inline-block" size={16} />
            )}
          </Link>

          {item.children && (
            <div className="absolute left-0 hidden group-hover:block group-focus-within:block bg-white shadow-lg z-10">
              {item.children.map((child) => (
                <Link
                  key={child.link}
                  href={child.link}
                  className="block px-4 py-2 text-sm text-lharmonie-secondary hover:bg-gray-100"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default AppMenuDesktop;
