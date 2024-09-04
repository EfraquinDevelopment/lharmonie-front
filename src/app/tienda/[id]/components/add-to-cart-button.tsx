"use client";
import { CheckCircle, ShoppingCart } from "lucide-react";
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "antd";
import { Product } from "@/types";
import { useCartContext } from "@/hooks";
import classNames from "classnames";

interface Props {
  product: Product;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const AddToCartButton = ({ product, quantity, setQuantity }: Props) => {
  const [isAdded, setIsAdded] = useState(false);

  const { addToCart, checkCartItemQuantity } = useCartContext();

  const handleCartClick = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setQuantity(1);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const isDisabled = useMemo(
    () => checkCartItemQuantity(product, quantity),
    [product, quantity, checkCartItemQuantity]
  );

  return (
    <Button
      disabled={isAdded || isDisabled}
      onClick={handleCartClick}
      className={classNames(
        "w-full h-fit  text-white  hover:!text-white py-3 px-6 rounded-md transition-colors",
        {
          "!bg-[#38a169] hover:!bg-[#38a169] hover:!border-[#38a169]": isAdded,
          "bg-[#8B7355] hover:!bg-[#9c8164] hover:!border-[#9c8164]": !isAdded,
          "hover:!bg-[#0000000B] hover:!border-[#0000000B]": isDisabled,
        }
      )}
    >
      <AnimatePresence mode="wait">
        {isAdded ? (
          <motion.div
            key="added"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-lharmonie-primary"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Producto añadido
          </motion.div>
        ) : (
          <motion.div
            key="add"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-lharmonie-primary"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Añadir al carrito
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default AddToCartButton;
