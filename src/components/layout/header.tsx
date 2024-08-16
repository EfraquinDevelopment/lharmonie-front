"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/home">Lharmonie</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Menu  mode="horizontal" theme="dark" className="flex text-sm p-4">
            <Menu.Item onSelectCapture={()=>console.log('d')
            } key="home">
              <Link className="overflow-hidden" href="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="sobre-nosotros">
              <Link href="/sobre-nosotros">Nosotros</Link>
            </Menu.Item>
            <Menu.Item key="contacto-info">
              <Link href="/contacto-info">Contacto & Info</Link>
            </Menu.Item>
            <Menu.Item key="menu">
              <Link href="/menu">Menú</Link>
            </Menu.Item>
            <Menu.Item key="productos">
              <Link href="/productos">Productos</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="md:hidden">
          <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
          <Drawer
            title="Lharmonie"
            placement="right"
            onClose={onClose}
            open={visible}
            destroyOnClose={true}
          >
            <Menu onClick={onClose} mode="vertical" theme="dark">
              <Menu.Item key="home">
                <Link href="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="sobre-nosotros">
                <Link href="/sobre-nosotros">Sobre Nosotros</Link>
              </Menu.Item>
              <Menu.Item key="contacto-info">
                <Link href="/contacto-info">Contacto & Info</Link>
              </Menu.Item>
              <Menu.Item key="menu">
                <Link href="/menu">Menú</Link>
              </Menu.Item>
              <Menu.Item key="productos">
                <Link href="/productos">Productos</Link>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Header;
