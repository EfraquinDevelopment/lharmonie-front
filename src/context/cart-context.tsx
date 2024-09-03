"use client";

import { Product } from "@/types";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface CartContextState {
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: number) => void;
}

const CartContext = createContext<CartContextState | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    ) as Product[];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Product) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
