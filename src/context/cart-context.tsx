"use client";

import SpinnerLoader from "@/components/layout/spinner-loader";
import { WooProduct } from "@/types/woocommerce";
import React, { createContext, useState, useEffect, ReactNode } from "react";

export type CartItem = WooProduct & { quantity: number };

interface CartContextState {
  cartItems: CartItem[];
  addToCart: (item: WooProduct, qty?: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartQuantity: (itemId: number, amount: number) => void;
  getTotal: () => number;
  getTotalItemsQty: () => number;
  checkCartItemQuantity: (item: WooProduct, qty: number) => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextState | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[] | null>(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    ) as CartItem[];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    if (cartItems !== null) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (item: WooProduct, qty = 1) => {
    setCartItems((prevItems) => {
      const currentItems = prevItems ?? [];
      const existingItem = currentItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        const isMoreThanStock =
          existingItem.quantity + qty > item.stock_quantity;
        const quantity = isMoreThanStock
          ? item.stock_quantity
          : qty + existingItem.quantity;
        return currentItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        );
      } else {
        return [...currentItems, { ...item, quantity: qty }];
      }
    });
  };

  const updateCartQuantity = (itemId: number, amount: number) => {
    setCartItems((prevItems) => {
      const currentItems = prevItems ?? [];
      return currentItems
        .map((cartItem) =>
          cartItem.id === itemId
            ? {
                ...cartItem,
                quantity: Math.max(cartItem.quantity + amount, 0),
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };

  const checkCartItemQuantity = (item: WooProduct, qty: number) => {
    if (!cartItems) return false;
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      return existingItem.quantity + qty >= item.stock_quantity;
    }
    return item.stock_quantity < qty;
  };

  const getTotal = () =>
    cartItems?.reduce((acc, item) => acc + +item.price * item.quantity, 0) || 0;

  const getTotalItemsQty = () =>
    cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  const removeFromCart = (itemId: number) =>
    setCartItems((prevItems) =>
      (prevItems ?? []).filter((item) => item.id !== itemId)
    );

  const clearCart = () => setCartItems([]);

  if (cartItems === null) {
    return <SpinnerLoader />;
  }

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
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
