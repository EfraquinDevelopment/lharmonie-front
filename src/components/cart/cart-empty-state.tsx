import React from "react";
import { ShoppingOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Button, Typography } from "antd";

interface Props {
  closeDrawer: () => void;
}

const { Title, Text } = Typography;

const CartEmptyState = ({ closeDrawer }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <div className="bg-[#e0d8c9] rounded-full p-6 mb-6">
        <ShoppingOutlined style={{ fontSize: 48, color: "#8B7355" }} />
      </div>
      <Title level={3} className="text-[#5D4D3A] mb-2">
        Tu carrito está vacío
      </Title>
      <Text className="text-[#8B7355] mb-8">
        Explora nuestra tienda y descubre productos excepcionales.
      </Text>
      <Link href="/tienda" passHref>
        <Button
          type="primary"
          size="large"
          className="bg-[#8B7355] hover:!bg-[#A08B6C] border-none h-12 px-6 text-base font-light tracking-wide transition-all duration-300 ease-in-out hover:bg-inherit"
          onClick={closeDrawer}
        >
          Explorar Tienda <ArrowRightOutlined />
        </Button>
      </Link>
    </div>
  );
};

export default CartEmptyState;