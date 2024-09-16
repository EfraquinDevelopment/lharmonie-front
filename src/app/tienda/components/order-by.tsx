"use client";
import React from "react";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { ORDER_PARAM } from "@/lib/constants";
import { orderOptions } from "@/config/store";

const OrderBy = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentOrder = searchParams.get(ORDER_PARAM) || orderOptions[0].value;

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(ORDER_PARAM, value);
    } else {
      params.delete(ORDER_PARAM);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <Select
      value={currentOrder}
      onChange={handleChange}
      options={orderOptions}
      suffixIcon={<CaretDownOutlined className="!text-[#8B7355]" />}
      className="w-full sm:w-64"
    />
  );
};

export default OrderBy;
