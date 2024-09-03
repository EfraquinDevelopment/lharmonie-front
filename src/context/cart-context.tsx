"use client";

import { Product } from "@/types";
import React, { createContext, useState, useEffect, ReactNode } from "react";

export type CartItem = Product & { quantity: number };

interface CartContextState {
  cartItems: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: number) => void;
}

const CartContext = createContext<CartContextState | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    ) as CartItem[];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
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
