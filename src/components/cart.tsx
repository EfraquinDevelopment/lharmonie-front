import { ShoppingCartOutlined } from "@ant-design/icons";
import useDrawer from "@/hooks/useDrawer";
import { Button, Drawer, Badge } from "antd";
import { useContext } from "react";
import CartContext from "@/context/cart-context";

type Props = {
  className?: string;
};

const Cart = ({ className }: Props) => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const { cartItems } = cartContext;

  return (
    <>
      <Badge count={cartItems.length}>
        <Button
          icon={
            <ShoppingCartOutlined className="text-xl text-lharmonie-secondary" />
          }
          onClick={openDrawer}
          className={className}
        />
      </Badge>

      <Drawer
        title={<h2 className="font-medium text-xl">Cart</h2>}
        placement="right"
        onClose={closeDrawer}
        open={isOpen}
        destroyOnClose={true}
      >
        <p>Cart content</p>
      </Drawer>
    </>
  );
};

export default Cart;
