import { MenuHeaderItem } from "@/types";
import { Divider, Drawer } from "antd";
import { ChevronLeft, X } from "lucide-react";
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

  const formatedChildren = [
    ...(parent.title !== "Tienda"
      ? [
          {
            title: "Ver todo en " + parent.title.toUpperCase(),
            link: parent.link,
          },
        ]
      : []),
    ...children,
  ];

  const handleCloseAll = () => {
    closeChildDrawer();
    onClick();
  };

  return (
    <Drawer
      placement="right"
      width="100%"
      onClose={closeChildDrawer}
      open={!!childDrawer}
      destroyOnClose
      styles={{ body: { padding: 0 } }}
      closeIcon={null}
      style={{ padding: 0, background: "#f8f8f5" }}
    >
      <div className="flex justify-between items-center p-4 border-b border-[#8B7355]">
        <button onClick={closeChildDrawer} aria-label="Close menu">
          <ChevronLeft className="text-[#8B7355] text-2xl" />
        </button>
        <h2 className="text-2xl font-light text-[#8B7355]">{parent.title}</h2>
        <button onClick={handleCloseAll} aria-label="Close menu">
          <X className="text-[#8B7355] text-2xl" />
        </button>
      </div>
      <nav className="flex flex-col gap-6 mt-5">
        {formatedChildren.map((child) => {
          return (
            <React.Fragment key={child.link}>
              <Link
                onClick={onClick}
                href={child.link}
                className="hover:text-inherit border-lharmonie-hover block text-lharmonie-secondary px-4 transition-all duration-100 ease-in-out"
              >
                {child.title}
              </Link>
              <Divider className="my-0 py-0 w-[95%] mx-auto !min-w-0 bg-lharmonie-hover" />
            </React.Fragment>
          );
        })}
      </nav>
    </Drawer>
  );
};

export default ChildrenDrawerMobile;
