import { ShoppingCartOutlined } from "@ant-design/icons";
import useDrawer from "@/hooks/useDrawer";
import { Drawer } from "antd";

type Props = {
  className?: string;
};

const Cart = ({ className }: Props) => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <>
      <button onClick={openDrawer} className={className}>
        <ShoppingCartOutlined className="text-xl text-lharmonie-secondary" />
      </button>
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
