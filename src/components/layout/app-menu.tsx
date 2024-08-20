import { MENU_ITEMS } from "@/config/menu-items";
import { Menu, Drawer, Button, MenuProps } from "antd";
import Link from "next/link";

type Props = MenuProps;

const AppMenu = ({ ...menuProps }: Props) => {
  return (
    <Menu {...menuProps}>
      {MENU_ITEMS.map((item) => (
        <Menu.Item key={item.title}>
          <Link href={item.link}>{item.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default AppMenu;
