import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import classNames from "classnames";
import ChildrenDrawerMobile from "@/components/layout/menu/children-drawer-mobile";
import { MenuHeaderItem } from "@/types";
import SearchBar from "@/components/search-bar";
import { Divider } from "antd";

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
      <nav className="flex flex-col">
        <div className="my-4">
          <SearchBar onChange={onClick} />
        </div>
        {menuItems.map((item) => (
          <div key={item.link} className="relative">
            {item.children ? (
              <button
                onClick={() => openChildDrawer(item.link)}
                className={classNames(
                  "border-lharmonie-hover flex justify-between w-full items-center text-lharmonie-secondary px-4 transition-all duration-100 ease-in-out",

                  {
                    "font-semibold": currentKey === item.link,
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
                  "hover:text-inherit border-lharmonie-hover block text-lharmonie-secondary px-4 transition-all duration-100 ease-in-out",
                  {
                    "font-semibold": currentKey === item.link,
                  }
                )}
              >
                {item.title}
              </Link>
            )}
            <Divider className="my-6 py-0 w-[95%] mx-auto !min-w-0 bg-lharmonie-hover" />
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
