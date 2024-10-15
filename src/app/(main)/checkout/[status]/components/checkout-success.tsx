"use client";

import { useCartContext } from "@/hooks";
import { Button } from "antd";
import { ShoppingBag, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface CheckoutSuccessProps {
  orderId: string;
}

const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({ orderId }) => {
  const { clearCart } = useCartContext();
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#f8f8f5] to-[#e0d8c9] py-4 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#8B7355] text-white p-8 text-center">
          <ShoppingBag size={64} className="mx-auto mb-4" />
          <h1 className="text-4xl font-light mb-2">¡Gracias por tu compra!</h1>
          <p className="text-xl">Tu orden ha sido confirmada</p>
        </div>

        <div className="p-8">
          <div className="bg-[#f8f8f5] flex gap-x-3 items-center rounded-xl p-4 mb-6">
            <h2 className="text-2xl inline font-semibold text-[#5D4D3A] mb-2">
              Número de Orden{"   "}
              <p className=" text-3xl inline text-[#8B7355] font-bold">
                #{orderId}
              </p>
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#5D4D3A] mb-2">
              Detalles de la Orden
            </h3>
            <p className="text-[#5D4D3A]">
              Hemos enviado un correo electrónico de confirmación a tu dirección
              registrada. Por favor, revisa tu bandeja de entrada para más
              detalles sobre tu compra.
            </p>
          </div>

          <div className="bg-[#f8f8f5] rounded-xl p-6 mb-8 flex items-start space-x-4">
            <Mail size={24} className="text-[#8B7355] mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-[#5D4D3A] mb-1">
                Confirmación por Email
              </h3>
              <p className="text-[#5D4D3A]">
                Te hemos enviado un correo electrónico con los detalles de tu
                compra. Si no lo encuentras, revisa tu carpeta de spam.
              </p>
            </div>
          </div>

          <Link href="/tienda" passHref>
            <Button
              type="primary"
              size="large"
              className="w-full bg-[#8B7355] hover:bg-[#A08B6C] border-none text-white font-semibold py-3 px-6 rounded-xl text-lg flex items-center justify-center transition-all duration-300 ease-in-out transform  shadow-md"
            >
              Seguir Comprando
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
