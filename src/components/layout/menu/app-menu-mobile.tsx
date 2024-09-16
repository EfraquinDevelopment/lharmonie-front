import { useCategories } from "@/context/categories-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { getItems } from "@/config/menu-items";
import { Drawer } from "antd";
import { ChevronRight } from "lucide-react";
import classNames from "classnames";
import ChildrenDrawerMobile from "@/components/layout/menu/children-drawer-mobile";
import { MenuHeaderItem } from "@/types";

type Props = {
  menuItems: MenuHeaderItem[];
  currentKey: string;
  onClick: () => void;
};

const AppMenuMobile = ({ currentKey, menuItems, onClick }: Props) => {
  const [childDrawer, setChildDrawer] = useState<null | string>(null);

  const openChildDrawer = (parentKey: string) => {
    setChildDrawer(parentKey);
  };

  const closeChildDrawer = () => {
    setChildDrawer(null);
  };

  return (
    <>
      <nav className="flex flex-col gap-6">
        {menuItems.map((item) => (
          <div key={item.link} className="relative">
            {item.children ? (
              <button
                onClick={() => openChildDrawer(item.link)}
                className={classNames(
                  "flex justify-between w-full items-center text-lharmonie-secondary px-4 py-2 transition-all duration-100 ease-in-out",

                  {
                    "font-semibold": currentKey === item.link,
                    "hover:font-semibold": currentKey !== item.link,
                  }
                )}
              >
                {item.title}
                <ChevronRight size={16} />
              </button>
            ) : (
              <Link
                onClick={onClick}
                href={item.link}
                className={classNames(
                  "block text-lharmonie-secondary px-4 py-2 transition-all duration-100 ease-in-out",
                  {
                    "font-semibold": currentKey === item.link,
                    "hover:font-semibold": currentKey !== item.link,
                  }
                )}
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </nav>
      <ChildrenDrawerMobile
        childDrawer={childDrawer}
        closeChildDrawer={closeChildDrawer}
        menuItems={menuItems}
        onClick={onClick}
      />
    </>
  );
};

export default AppMenuMobile;
