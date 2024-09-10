import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCartContext, useDrawer } from "@/hooks";
import { Button, Drawer, Badge } from "antd";
import { useMemo } from "react";
import CartDrawerContent from "@/components/cart/cart-drawer-content";

type Props = {
  className?: string;
};

const Cart = ({ className }: Props) => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  const { getTotalItemsQty, cartItems } = useCartContext();

  const itemsQuantity = useMemo(
    () => getTotalItemsQty(),
    [cartItems, getTotalItemsQty]
  );

  return (
    <>
      <div className="pr-4">
        <Badge color="#232323" count={itemsQuantity}>
          <Button
            icon={
              <ShoppingCartOutlined className="text-xl text-lharmonie-secondary" />
            }
            onClick={openDrawer}
            className={className}
          />
        </Badge>
      </div>

      <Drawer
        className="!bg-lharmonie-primary"
        title={
          <h2 className="font-light text-3xl ml-4 text-gray-800">Tu Carrito</h2>
        }
        placement="right"
        size="large"
        onClose={closeDrawer}
        open={isOpen}
        destroyOnClose
      >
        <CartDrawerContent closeDrawer={closeDrawer} />
      </Drawer>
    </>
  );
};

export default Cart;
