"use client";

import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Logo } from "@/components/logo";
import AppMenu from "./app-menu";
import Cart from "@/components/cart/cart";
import { useDrawer } from "@/hooks";
import useBreakpoint from "@/hooks/useBreakpoint";
import { X } from "lucide-react";
import SearchBar from "@/components/layout/search-bar";
import { Suspense } from "react";

const Header = () => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  const { breakpoint } = useBreakpoint();

  return (
    <header className="sticky top-0 z-50 shadow-md w-full border-b-[1px] border-gray-400">
      <nav
        className="flex flex-col items-center bg-[#F0F0EB]
       opacity-95 backdrop-blur px-2 py-4"
      >
        <div className="flex items-center w-full">
          <div className="flex flex-1 justify-start w-fit">
            <Button
              className="lg:hidden bg-[#F0F0EB] border-none shadow-none"
              icon={
                <MenuOutlined className="text-xl text-lharmonie-secondary" />
              }
              onClick={openDrawer}
            />
            <AppMenu
              disabledOverflow
              mode="horizontal"
              className="hidden lg:block text-sm border-none !p-0 bg-[#F0F0EB]"
            />
          </div>
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden md:block">
              <Suspense>
                <SearchBar />
              </Suspense>
            </div>
            <Cart className="bg-[#F0F0EB] hover:!bg-inherit border-none shadow-none" />
          </div>
        </div>
        <div className="block md:hidden mt-4 w-full">
          <Suspense>
            <SearchBar />
          </Suspense>
        </div>

        <Drawer
          placement="left"
          size={breakpoint === "xs" ? "large" : "default"}
          onClose={closeDrawer}
          open={isOpen}
          destroyOnClose
          width="100%"
          styles={{ body: { padding: 0 } }}
          closeIcon={null}
          style={{ padding: 0, background: "#f8f8f5" }}
        >
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-[#8B7355]">
              <h2 className="text-2xl font-light text-[#8B7355]">Lharmonie</h2>
              <button onClick={closeDrawer} aria-label="Close menu">
                <X className="text-[#8B7355] text-2xl" />
              </button>
            </div>
            <AppMenu
              onClick={closeDrawer}
              mode="inline"
              className="text-sm p-4 border-none !bg-[#f8f8f5]"
            />
          </div>
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;
