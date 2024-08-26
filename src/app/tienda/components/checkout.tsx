import { wooCommerceApi } from "@/lib/api";
import { Button } from "antd";
import axios from "axios";
import React from "react";

const Checkout = ({ cartProduct }: any) => {
  async function checkout() {
    try {
      const response = await axios.post("/api/checkout", {
        id: cartProduct.id,
      });
      console.log("Order placed successfully:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  }

  return <Button onClick={checkout}>Checkout</Button>;
};

export default Checkout;
