import { useCategories } from "@/context/categories-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getItems } from "@/config/menu-items";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import AppMenuDesktop from "@/components/layout/menu/app-menu-desktop";
import AppMenuMobile from "@/components/layout/menu/app-menu-mobile";

type Props = {
  onClick?: () => void;
};

const AppMenu = ({ onClick }: Props) => {
  const pathname = usePathname();
  const { categories } = useCategories();

  const currentKey = "/" + pathname.split("/")[1];

  const menuItems = useMemo(() => getItems(categories), [pathname, currentKey]);

  return (
    <>
      <div className="hidden lg:block">
        <AppMenuDesktop menuItems={menuItems} currentKey={currentKey} />
      </div>
      <div className="block lg:hidden">
        <AppMenuMobile
          onClick={onClick!}
          menuItems={menuItems}
          currentKey={currentKey}
        />
      </div>
    </>
  );
};

export default AppMenu;
