import { generateMenuItems } from "@/config/menu-items";
import { Menu, MenuProps } from "antd";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Props = MenuProps;

const AppMenu = ({ ...menuProps }: Props) => {
  const pathname = usePathname();

  const menuItems = useMemo(() => generateMenuItems(), []);

  return <Menu activeKey={pathname} items={menuItems} {...menuProps} />;
};

export default AppMenu;
