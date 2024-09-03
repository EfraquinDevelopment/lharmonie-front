import React, { useMemo } from "react";
import Image from "next/image";
import { Button, List, Typography, Divider } from "antd";
import { MinusOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import { useCartContext } from "@/hooks";
import { Product } from "@/types";

const { Text } = Typography;

const CartDrawerContent = () => {
  const { cartItems, removeFromCart, getTotal, updateCartQuantity } =
    useCartContext();
  const total = useMemo(() => getTotal(), [cartItems]);

  const handleAddQty = (item: Product) => updateCartQuantity(item.id, 1);
  const handleRemoveQty = (item: Product) => updateCartQuantity(item.id, -1);

  return (
    <div className="flex flex-col h-full">
      <List
        className="flex-grow overflow-auto"
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item key={item.id} className="border-b border-gray-200 py-6">
            <div className="flex w-full">
              <Image
                src={item.imageSrc}
                alt={item.name}
                width={100}
                height={100}
                className="object-cover rounded-lg shadow-md"
              />
              <div className="ml-6 flex-grow">
                <Text strong className="text-xl text-gray-800">
                  {item.name}
                </Text>
                <Text className="block text-sm text-gray-600 mt-1">
                  {item.description}
                </Text>
                <Text className="block text-lg font-semibold mt-3">
                  ${item.price.toFixed(2)}
                </Text>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <Button
                      disabled={item.quantity === 1}
                      icon={<MinusOutlined />}
                      onClick={() => handleRemoveQty(item)}
                      className="border-none text-gray-600 hover:text-gray-800 flex items-center justify-center w-8 h-8 rounded-full"
                    />
                    <Text className="mx-2 text-lg">{item.quantity}</Text>
                    <Button
                      disabled={item.quantity >= item.stock}
                      icon={<PlusOutlined />}
                      onClick={() => handleAddQty(item)}
                      className="border-none text-gray-600 hover:text-gray-800 flex items-center justify-center w-8 h-8 rounded-full"
                    />
                  </div>
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => removeFromCart(item.id)}
                    className="border-none bg-transparent text-gray-500 hover:text-red-500 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300"
                  />
                </div>
              </div>
            </div>
          </List.Item>
        )}
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
        <Button
          type="primary"
          size="large"
          block
          className="bg-gray-800 hover:bg-gray-700 border-none h-14 text-lg font-light tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Finalizar Compra
        </Button>
      </div>
    </div>
  );
};

export default CartDrawerContent;
