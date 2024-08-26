"use client";

import { Button } from "antd";
import React, { useState } from "react";
import Checkout from "./checkout";

const Product = ({ product }: any) => {
  const [cart, setCart] = useState(null);

  async function checkout() {}

  return (
    <>
      <div key={product.id} onClick={() => setCart(product.id)}>
        <h2>{product.name}</h2>
        <p>Precio: {product.price}</p>
      </div>
      <Checkout cartProduct={product} />
    </>
  );
};

export default Product;
