import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import { useCartContext } from "@/hooks";
import { Button, Divider, FormInstance, Typography } from "antd";
import { CreditCard, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

const localInfo = {
  name: "Casa Lharmonie",
  address: "Maure 1516, CABA",
};

interface Props {
  form: FormInstance<any>;
  loading: boolean;
}

const { Text } = Typography;

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
        <Heading
          level={3}
          className="text-2xl font-light mb-8 !text-[#8B7355] border-b border-[#e0d8c9] pb-4"
        >
          Resumen de la Orden
        </Heading>
        <ul className="space-y-6 mb-8 max-h-60 overflow-y-auto scrollbar">
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Image
                src={item.images[0]?.src}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
                width={80}
                height={80}
              />
              <div className="flex-1">
                <Heading level={4} className="!text-base !mb-0 font-semibold">
                  {item.name}
                </Heading>
                <div className="flex flex-col">
                  <Text className="">Cantidad: {item.quantity}</Text>
                  <Text className="font-bold">
                    $ {(+item.price * item.quantity).toLocaleString()}
                  </Text>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Divider className="border-[#e0d8c9]" />
        <div className="space-y-2 mb-8">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$ {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xl font-semibold">
            <span>Total</span>
            <span>$ {total.toLocaleString()}</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#f8f8f5] to-[#e0d8c9] p-6 rounded-xl mb-8">
          <div className="flex items-center space-x-3 text-[#8B7355] mb-3">
            <ShoppingBag size={24} />
            <Heading level={5} className="!mb-0 !text-xl font-semibold">
              Retiro en Local
            </Heading>
          </div>
          <div className="flex flex-col">
            <Text className="font-medium">{localInfo.name}</Text>
            <Text>{localInfo.address}</Text>
          </div>
        </div>
        <LharmonieButton
          loading={loading}
          htmlType="submit"
          className="w-full"
          onClick={() => form.submit()}
        >
          <CreditCard size={24} className="mr-3" />
          Ir a Pagar
        </LharmonieButton>
      </div>
    </div>
  );
};

export default CheckoutSummary;
