import { useCartContext } from "@/hooks";
import { Button, Divider, FormInstance } from "antd";
import { CreditCard, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

const localInfo = {
  name: "Lharmonie Palermo",
  address: "Av. Santa Fe 3253, CABA",
};

interface Props {
  form: FormInstance<any>;
  loading: boolean;
}

const CheckoutSummary = ({ form, loading }: Props) => {
  const { cartItems } = useCartContext();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + +item.price * item.quantity,
    0
  );
  const total = subtotal;

  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-light mb-8 !text-[#8B7355] border-b border-[#e0d8c9] pb-4">
          Resumen de la Orden
        </h3>
        <ul className="space-y-6 mb-8 max-h-60 overflow-y-auto scrollbar">
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Image
                src={item.images[0].src}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
                width={80}
                height={80}
              />
              <div className="flex-1">
                <h3 className="text-[#5D4D3A] font-semibold">{item.name}</h3>
                <p className="text-[#8B7355]">Cantidad: {item.quantity}</p>
                <p className="text-[#2a2724] font-bold">
                  $ {(+item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Divider className="border-[#e0d8c9]" />
        <div className="space-y-2 mb-8">
          <div className="flex justify-between text-[#5D4D3A]">
            <span>Subtotal</span>
            <span>$ {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-[#5D4D3A] text-xl font-semibold">
            <span>Total</span>
            <span>$ {total.toLocaleString()}</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#f8f8f5] to-[#e0d8c9] p-6 rounded-xl mb-8">
          <div className="flex items-center space-x-3 text-[#8B7355] mb-3">
            <ShoppingBag size={24} />
            <h3 className="text-xl font-semibold">Retiro en Local</h3>
          </div>
          <p className="text-[#5D4D3A] font-medium">{localInfo.name}</p>
          <p className="text-[#5D4D3A]">{localInfo.address}</p>
        </div>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="w-full  hover:bg-[#A08B6C] border-none text-white font-semibold py-4 px-6 rounded-xl text-lg flex items-center justify-center transition-all duration-300 ease-in-out transform shadow-md"
          onClick={() => form.submit()}
        >
          <CreditCard size={24} className="mr-3" />
          Ir a Pagar
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
