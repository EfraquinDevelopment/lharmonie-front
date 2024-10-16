"use client";

import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";
import { useCartContext } from "@/hooks";
import { Button, Typography } from "antd";
import { ShoppingBag, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface CheckoutSuccessProps {
  orderId: string;
}

const { Text } = Typography;

const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({ orderId }) => {
  const { clearCart } = useCartContext();
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#f8f8f5] to-[#e0d8c9] py-4 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="text-white text-center">
          <ShoppingBag size={64} className="mx-auto mb-4" />
          <Heading level={2} className="font-light mb-2">
            Gracias por tu compra!
          </Heading>
          <p className="text-xl">Tu orden ha sido confirmada</p>
        </div>

        <div className="p-8">
          <div className="bg-[#f8f8f5] flex gap-x-3 items-center rounded-xl p-4 mb-6">
            <Heading level={3} className="text-2xl inline font-semibold  mb-2">
              Orden{"   "}
              <Text className="text-2xl inline  font-bold">#{orderId}</Text>
            </Heading>
          </div>

          <div className="mb-8">
            <Heading level={4} className="!text-xl font-semibold  mb-2">
              Detalles de la Orden
            </Heading>
            <Text className="text-base">
              Hemos enviado un correo electrónico de confirmación a tu dirección
              registrada. Por favor, revisa tu bandeja de entrada para más
              detalles sobre tu compra.
            </Text>
          </div>

          <div className="bg-[#f8f8f5] rounded-xl p-6 mb-8 flex items-start space-x-4">
            <Mail size={24} className="text-[#8B7355] mt-1" />
            <div className="flex flex-col">
              <Text className="text-lg font-semibold mb-1">
                Confrmacion por Email
              </Text>
              <Text className="">
                Te hemos enviado un correo electrónico con los detalles de tu
                compra. Si no lo encuentras, revisa tu carpeta de spam.
              </Text>
            </div>
          </div>

          <Link href="/tienda" passHref>
            <LharmonieButton
              icon={<ArrowRight size={20} className="ml-2" />}
              className="w-full"
              iconPosition="end"
            >
              Seguir Comprando
            </LharmonieButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
