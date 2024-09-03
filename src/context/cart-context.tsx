"use client";

import { Product } from "@/types";
import React, { createContext, useState, useEffect, ReactNode } from "react";

export type CartItem = Product & { quantity: number };

interface CartContextState {
  cartItems: CartItem[];
  addToCart: (item: Product, qty?: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartQuantity: (itemId: number, amount: number) => void;
  getTotal: () => number;
  getTotalItemsQty: () => number;
  checkCartItemQuantity: (item: Product, qty: number) => boolean;
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

  const addToCart = (item: Product, qty = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        const isMoreThanStock = existingItem.quantity + qty > item.stock;
        const quantity = isMoreThanStock
          ? item.stock
          : qty + existingItem.quantity;
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: qty }];
      }
    });
  };

  const updateCartQuantity = (itemId: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((cartItem) =>
          cartItem.id === itemId
            ? {
                ...cartItem,
                quantity: Math.max(cartItem.quantity + amount, 0),
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const checkCartItemQuantity = (item: Product, qty: number) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      return existingItem.quantity + qty >= item.stock;
    }
    return item.stock <= qty;
  };

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const getTotalItemsQty = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const removeFromCart = (itemId: number) =>
    setCartItems(cartItems.filter((item) => item.id !== itemId));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        getTotal,
        getTotalItemsQty,
        checkCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
