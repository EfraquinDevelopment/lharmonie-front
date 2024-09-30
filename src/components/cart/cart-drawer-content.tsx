import React, { useMemo } from "react";
import { List, Typography, Divider } from "antd";

import { useCartContext } from "@/hooks";
import LharmonieButton from "@/components/ui/lharmonie-button";
import CartDrawerItem from "@/components/cart/cart-drawer-item";
import Link from "next/link";
import CartEmptyState from "@/components/cart/cart-empty-state";

const { Text } = Typography;

interface Props {
  closeDrawer: () => void;
}

const CartDrawerContent = ({ closeDrawer }: Props) => {
  const { cartItems, getTotal } = useCartContext();
  const total = useMemo(() => getTotal(), [cartItems, getTotal]);

  if (cartItems.length === 0) {
    return <CartEmptyState closeDrawer={closeDrawer} />;
  }

  return (
    <div className="flex flex-col h-full">
      <List
        className="flex-grow  overflow-auto"
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={(item) => <CartDrawerItem item={item} />}
      />
      <Divider className="my-6" />
      <div className="pt-4">
        <div className="flex justify-between items-center mb-6">
          <Text strong className="text-2xl text-gray-800">
            Total:
          </Text>
          <Text strong className="text-2xl text-gray-800">
            ${total.toFixed(2)}
          </Text>
        </div>
        <Link href="/checkout">
          <LharmonieButton
            onClick={closeDrawer}
            disabled={cartItems.length === 0}
            size="large"
            block
            className="bg-gray-800 hover:bg-gray-700 border-none h-14 text-lg font-light tracking-wide transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
          >
            Finalizar Compra
          </LharmonieButton>
        </Link>
      </div>
    </div>
  );
};

export default CartDrawerContent;
