import { MenuHeaderItem } from "@/types";
import { Drawer } from "antd";
import Link from "next/link";
import React from "react";

interface Props {
  closeChildDrawer: () => void;
  childDrawer: string | null;
  menuItems: MenuHeaderItem[];
  onClick: () => void;
}

const ChildrenDrawerMobile = ({
  closeChildDrawer,
  childDrawer,
  menuItems,
  onClick,
}: Props) => {
  const parent = menuItems.find((item) => item.link === childDrawer);
  const children = parent?.children;

  if (!children) {
    return null;
  }

  const formatedChildren = [{ title: "Todos", link: parent.link }, ...children];
  return (
    <Drawer
      placement="left"
      width="100%"
      onClose={closeChildDrawer}
      open={!!childDrawer}
      destroyOnClose
    >
      <nav className="flex flex-col gap-6 p-4">
        {formatedChildren.map((child) => {
          return (
            <Link
              key={child.link}
              href={child.link}
              onClick={onClick}
              className="block text-lharmonie-secondary px-4 py-2 text-sm hover:bg-gray-100"
            >
              {child.title}
            </Link>
          );
        })}
      </nav>
    </Drawer>
  );
};

export default ChildrenDrawerMobile;
