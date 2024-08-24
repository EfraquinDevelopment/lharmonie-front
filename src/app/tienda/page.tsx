import { wooCommerceApi } from "@/lib/api";
import { useState } from "react";
import Product from "./components/product";

const Productos = async () => {
  // const { data } = await wooCommerceApi.get("products");
  // const { data: paymentMethods } = await wooCommerceApi.get("payment_gateways");
  // console.log({ paymentMethods });

  return (
    <>
      <h1>Productos</h1>
      <p>Explora nuestra variedad de productos.</p>
   
    </>
  );
};

export default Productos;
