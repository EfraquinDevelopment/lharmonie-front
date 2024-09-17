import Link from "next/link";
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
              "text-lharmonie-secondary transition-all duration-200 ease-in-out",
              {
                "font-semibold": currentKey === item.link,
              }
            )}
            style={{ transitionProperty: "color, font-weight" }}
          >
            {item.title}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lharmonie-hover transform scale-x-0 transition-transform duration-300 lg:group-hover:scale-x-100"></span>
          </Link>
          {item.children && (
            <div
              className={classNames(
                "absolute rounded-lg w-[300px] left-0 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out bg-white shadow-lg z-10"
              )}
            >
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
