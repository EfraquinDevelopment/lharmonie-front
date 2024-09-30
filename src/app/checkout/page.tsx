"use client";
import { useCartContext } from "@/hooks";
import { Button, Divider, Form, Input } from "antd";
import { CreditCard, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const localInfo = {
  name: "Lharmonie Palermo",
  address: "Av. Santa Fe 3253, CABA",
};

const CheckoutPage = () => {
  const [form] = Form.useForm();

  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const { cartItems } = useCartContext();
  const router = useRouter();

  useEffect(() => {
    cartItems && setPageLoading(false);
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length === 0) {
      router.back();
    }
  }, []);

  const handleCheckout = async (values: any) => {
    setLoading(true);
    try {
      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cartItems,
          personalInfo: values,
        }),
      });

      if (!orderResponse.ok) {
        console.error("Failed to create order");
        setLoading(false);
        return;
      }

      const { orderId, orderTotal } = await orderResponse.json();

      const paymentResponse = await fetch("/api/pay-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          orderTotal,
          customerEmail: values.email,
        }),
      });

      if (!paymentResponse.ok) {
        console.error("Failed to process payment");
        setLoading(false);
        return;
      }

      const { init_point } = await paymentResponse.json();
      window.location.href = init_point;
    } catch (error) {
      console.error("Error during checkout process:", error);
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    router.replace("/home");
  }

  const onFinish = (values: any) => {
    handleCheckout(values);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + +item.price * item.quantity,
    0
  );
  const total = subtotal;

  return (
    <div className="bg-gradient-to-b from-[#f8f8f5] to-[#e0d8c9] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-light text-center mb-16 text-[#8B7355]">
          Finalizar Compra
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-light mb-8 text-[#8B7355] border-b border-[#e0d8c9] pb-4">
                Información Personal
              </h2>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Form.Item
                    name="first_name"
                    label="Nombre"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese su nombre",
                      },
                    ]}
                  >
                    <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
                  </Form.Item>
                  <Form.Item
                    name="last_name"
                    label="Apellido"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese su apellido",
                      },
                    ]}
                  >
                    <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
                  </Form.Item>
                  <Form.Item
                    name="dni"
                    label="DNI"
                    rules={[
                      { required: true, message: "Por favor ingrese su DNI" },
                    ]}
                  >
                    <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: "Por favor ingrese su email" },
                      {
                        type: "email",
                        message: "Por favor ingrese un email válido",
                      },
                    ]}
                  >
                    <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Número de Teléfono"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese su número de teléfono",
                      },
                    ]}
                  >
                    <Input className="border-[#8B7355] focus:border-[#A08B6C] focus:ring-[#A08B6C] rounded-md shadow-sm" />
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-light mb-8 text-[#8B7355] border-b border-[#e0d8c9] pb-4">
                Resumen de la Orden
              </h2>
              <ul className="space-y-6 mb-8 max-h-60 overflow-y-scroll scrollbar">
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
                      <h3 className="text-[#5D4D3A] font-semibold">
                        {item.name}
                      </h3>
                      <p className="text-[#8B7355]">
                        Cantidad: {item.quantity}
                      </p>
                      <p className="text-[#5D4D3A] font-bold">
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
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
