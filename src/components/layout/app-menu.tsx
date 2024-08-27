import { generateMenuItems } from "@/config/menu-items";
import { Menu, MenuProps } from "antd";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Props = MenuProps;

const AppMenu = ({ ...menuProps }: Props) => {
  const pathname = usePathname();
  const currentKey = "/" + pathname.split("/")[1];

  const menuItems = useMemo(() => generateMenuItems(pathname), [pathname]);

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
