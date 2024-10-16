"use client";

import React, { useEffect } from "react";
import { Button, Typography } from "antd";
import { AlertCircle, RefreshCw, CreditCard, Wifi, Server } from "lucide-react";
import Link from "next/link";
import { useCartContext } from "@/hooks";
import Heading from "@/components/layout/heading";
import LharmonieButton from "@/components/ui/lharmonie-button";

const CheckoutFailed = () => {
  const { clearCart } = useCartContext();
  useEffect(() => {
    clearCart();
  }, []);

  const { Text } = Typography;

  return (
    <div className="bg-gradient-to-b from-[#f8f8f5] to-[#e0d8c9] min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="text-white p-8 text-center">
          <AlertCircle size={64} className="mx-auto mb-4" />
          <Heading level={2} className="font-light mb-2">
            Lo sentimos
          </Heading>
          <Text className="text-lg">Tu orden no pudo ser procesada</Text>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-[#f8f8f5] rounded-xl p-6 mb-8">
            <Heading level={3} className="text-2xl font-semibold  mb-4">
              Posibles razones del fallo:
            </Heading>
            <ul className="space-y-4">
              {[
                { icon: CreditCard, text: "Problema con el método de pago" },
                { icon: Wifi, text: "Error de conexión" },
                { icon: Server, text: "Problema temporal del servidor" },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon size={24} className="text-[#8B7355]" />
                  <span className="">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <Heading level={3} className="text-xl font-semibold  mb-2">
              Qué puedes hacer?
            </Heading>
            <Text>
              Te recomendamos intentar nuevamente en unos minutos. Si el
              problema persiste, por favor contacta a nuestro servicio de
              atención al cliente.
            </Text>
          </div>
          <Link href="/tienda" passHref>
            <LharmonieButton
              icon={<RefreshCw size={20} className="ml-2" />}
              className="w-full"
              iconPosition="end"
            >
              Intentar Nuevamente
            </LharmonieButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFailed;
