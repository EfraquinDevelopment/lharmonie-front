"use client";
import { Ban, CheckCircle, ShoppingCart } from "lucide-react";
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartContext } from "@/hooks";
import classNames from "classnames";
import { WooProduct } from "@/types/woocommerce";
import LharmonieButton from "@/components/ui/lharmonie-button";

interface Props {
  product: WooProduct;
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
    <LharmonieButton
      className={classNames("md:!w-[400px] w-full", {
        "hover:!bg-lharmonie-secondary": isDisabled || isAdded,
      })}
      disabled={isAdded || isDisabled}
      onClick={handleCartClick}
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
            className={classNames("flex items-center justify-center", {
              "text-gray-400": isDisabled,
              "text-lharmonie-primary": !isDisabled,
            })}
          >
            {isDisabled ? (
              <Ban className="w-5 h-5 mr-2" />
            ) : (
              <ShoppingCart className="w-5 h-5 mr-2" />
            )}
            {isDisabled ? "Sin stock" : "Añadir al carrito"}
          </motion.div>
        )}
      </AnimatePresence>
    </LharmonieButton>
  );
};

export default AddToCartButton;
