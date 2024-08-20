"use client";

import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Logo } from "@/components/logo";
import AppMenu from "./app-menu";
import useDrawer from "@/hooks/useDrawer";
import Cart from "@/components/cart";

const Header = () => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <header className="bg-lharmonie-primary text-white p-4 w-full">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="hidden md:flex space-x-4">
            <AppMenu
              mode="horizontal"
              className="flex text-sm p-4 bg-lharmonie-primary border-none"
            />
          </div>
        </div>
        <Cart className="hidden md:block" />
        <div className="md:hidden flex items-center gap-3">
          <Cart />
          <button onClick={openDrawer}>
            <MenuOutlined className="text-xl text-lharmonie-secondary" />
          </button>
          <Drawer
            title={<Logo />}
            placement="right"
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
