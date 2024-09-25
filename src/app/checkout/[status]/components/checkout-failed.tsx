import React from "react";
import { Button } from "antd";
import { AlertCircle, RefreshCw, CreditCard, Wifi, Server } from "lucide-react";
import Link from "next/link";

interface CheckoutFailedProps {
  orderId: string;
}

const CheckoutFailed: React.FC<CheckoutFailedProps> = ({ orderId }) => {
  return (
    <div className="bg-gradient-to-b from-[#f8f8f5] to-[#e0d8c9] min-h-screen font-['EB_Garamond',serif] py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#8B7355] text-white p-8 text-center">
          <AlertCircle size={64} className="mx-auto mb-4" />
          <h1 className="text-4xl font-light mb-2">Lo sentimos</h1>
          <p className="text-xl">Tu orden no pudo ser procesada</p>
        </div>

        <div className="p-8">
          <div className="bg-[#f8f8f5] rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold text-[#5D4D3A] mb-4">
              Posibles razones del fallo:
            </h2>
            <ul className="space-y-4">
              {[
                { icon: CreditCard, text: "Problema con el método de pago" },
                { icon: Wifi, text: "Error de conexión" },
                { icon: Server, text: "Problema temporal del servidor" },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon size={24} className="text-[#8B7355]" />
                  <span className="text-[#5D4D3A]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#5D4D3A] mb-2">
              ¿Qué puedes hacer?
            </h3>
            <p className="text-[#5D4D3A]">
              Te recomendamos intentar nuevamente en unos minutos. Si el
              problema persiste, por favor contacta a nuestro servicio de
              atención al cliente.
            </p>
          </div>

          <Link href="/tienda" passHref>
            <Button
              type="primary"
              size="large"
              className="w-full bg-[#8B7355] hover:bg-[#A08B6C] border-none text-white font-semibold py-3 px-6 rounded-xl text-lg flex items-center justify-center transition-all duration-300 ease-in-out transform  shadow-md"
            >
              Intentar Nuevamente
              <RefreshCw size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFailed;
