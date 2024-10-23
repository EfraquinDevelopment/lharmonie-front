import { CartItem } from "@/context/cart-context";
import { List, Typography, Button } from "antd";
import Image from "next/image";
import { MinusOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import { useCartContext } from "@/hooks";
import { Product } from "@/types";
import { WooProduct } from "@/types/woocommerce";

interface Props {
  item: CartItem;
}

const { Text } = Typography;

const CartDrawerItem = ({ item }: Props) => {
  const { removeFromCart, updateCartQuantity } = useCartContext();

  const handleAddQty = (item: WooProduct) => updateCartQuantity(item.id, 1);
  const handleRemoveQty = (item: WooProduct) => updateCartQuantity(item.id, -1);

  return (
    <List.Item key={item.id} className="border-b border-gray-200 py-6">
      <div className="flex w-full">
        <Image
          src={item.images[0]?.src || "/placeholder.png"}
          alt={item.name}
          width={100}
          height={100}
          className="object-cover rounded-lg shadow-md"
        />
        <div className="ml-6 flex-grow">
          <Text strong className="text-lg text-gray-800">
            {item.name}
          </Text>
          <Text className="block text-lg font-semibold mt-2">
            ${item.price}
          </Text>
          <div className="flex items-center justify-between mt-2">
            <div className="flex  items-center border border-gray-300 rounded-full">
              <Button
                disabled={item.quantity === 1}
                icon={<MinusOutlined />}
                onClick={() => handleRemoveQty(item)}
                className="border-none text-gray-600 hover:text-gray-800 flex items-center justify-center w-8 h-8 rounded-full"
              />
              <Text className="mx-2 text-lg">{item.quantity}</Text>
              <Button
                disabled={item.quantity >= item.stock_quantity}
                icon={<PlusOutlined />}
                onClick={() => handleAddQty(item)}
                className="border-none text-gray-600 hover:text-gray-800 flex items-center justify-center w-8 h-8 rounded-full"
              />
            </div>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => removeFromCart(item.id)}
              className="border-none bg-transparent text-gray-500  flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </List.Item>
  );
};

export default CartDrawerItem;
