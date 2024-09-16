import { generateMenuItems } from "@/config/menu-items";
import { useCategories } from "@/context/categories-context";
import { Menu, MenuProps } from "antd";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Props = MenuProps;

const AppMenu = ({ ...menuProps }: Props) => {
  const pathname = usePathname();
  const { categories } = useCategories();

  const currentKey = "/" + pathname.split("/")[1];

  const menuItems = useMemo(
    () => generateMenuItems(currentKey, categories),
    [pathname, currentKey]
  );

  return (
    <Menu
      selectedKeys={[currentKey]}
      activeKey={currentKey}
      items={menuItems}
      {...menuProps}
    />
  );
};

export default AppMenu;
