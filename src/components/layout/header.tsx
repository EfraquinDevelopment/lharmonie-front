"use client";

import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Logo } from "@/components/logo";
import AppMenu from "./menu/app-menu";
import Cart from "@/components/cart/cart";
import { useDrawer } from "@/hooks";
import { X } from "lucide-react";
import { Suspense } from "react";
import SearchBar from "@/components/search-bar";
import SpinnerLoader from "@/components/layout/spinner-loader";

const Header = () => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <Suspense fallback={<SpinnerLoader />}>
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
              <div className="hidden lg:block ">
                <AppMenu />
              </div>
            </div>
            <div className="flex justify-center">
              <Logo />
            </div>
            <div className="flex-1 flex justify-end items-center">
              <div className="hidden md:block">
                <SearchBar />
              </div>
              <Cart className="bg-[#F0F0EB] hover:!bg-inherit border-none shadow-none" />
            </div>
          </div>

          <Drawer
            placement="left"
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
                <h2 className="text-2xl font-light text-[#8B7355]">
                  Lharmonie
                </h2>
                <button onClick={closeDrawer} aria-label="Close menu">
                  <X className="text-[#8B7355] text-2xl" />
                </button>
              </div>
              <AppMenu onClick={closeDrawer} />
            </div>
          </Drawer>
        </nav>
      </header>
    </Suspense>
  );
};

export default Header;
