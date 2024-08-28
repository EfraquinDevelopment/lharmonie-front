"use client";

import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Logo } from "@/components/logo";
import AppMenu from "./app-menu";
import Cart from "@/components/cart";
import useDrawer from "@/hooks/useDrawer";

const Header = () => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <header className="sticky top-0 z-50 shadow-md w-full border-b-[1.5px] border-lharmonie-secondary">
      <nav className="flex items-center bg-lharmonie-primary opacity-95 backdrop-blur px-2">
        <div className="flex flex-1 justify-start w-fit">
          <Button
            className="lg:hidden bg-lharmonie-primary border-none shadow-none"
            icon={<MenuOutlined className="text-xl text-lharmonie-secondary" />}
            onClick={openDrawer}
          />
          <AppMenu
            disabledOverflow
            mode="horizontal"
            className="hidden lg:block text-sm border-none !p-0 bg-lharmonie-primary"
          />
        </div>
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex-1 flex justify-end">
          <Cart className="bg-lharmonie-primary border-none shadow-none" />
        </div>
        <Drawer
          title={<Logo clickable={false} />}
          placement="left"
          className="bg-lharmonie-primary"
          onClose={closeDrawer}
          open={isOpen}
          destroyOnClose={true}
        >
          <AppMenu
            onClick={closeDrawer}
            mode="vertical"
            className="text-sm p-4 border-none"
          />
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;
