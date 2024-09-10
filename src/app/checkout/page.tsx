"use client";
import { useCartContext } from "@/hooks";
import { RedirectType, redirect } from "next/navigation";

const Checkout = () => {
  const { cartItems } = useCartContext();

  if (cartItems.length === 0) {
    redirect("/", RedirectType.replace);
  }

  return <div>CHECKOUT</div>;
};

export default Checkout;
