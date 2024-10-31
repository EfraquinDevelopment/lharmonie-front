"use client";
import CheckoutForm from "@/app/(main)/checkout/components/checkout-form";
import CheckoutSummary from "@/app/(main)/checkout/components/checkout-summary";
import Heading from "@/components/layout/heading";
import { useCartContext } from "@/hooks";
import { Form } from "antd";
import { Metadata } from "next";

import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [form] = Form.useForm();
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const { cartItems } = useCartContext();
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    cartItems && setPageLoading(false);
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length === 0) {
      redirect("/home");
    }
  }, []);

  const handleCheckout = async (values: any) => {
    setLoading(true);
    setFormError(null);

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
        const data = await orderResponse.json();
        setFormError(data.error);
        window.scrollTo({ top: 0, behavior: "smooth" });
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
        const data = await paymentResponse.json();
        setFormError(data.error);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setLoading(false);
        return;
      }

      const { init_point } = await paymentResponse.json();
      window.location.href = init_point;
    } catch (error: any) {
      setFormError(error.message);
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  return (
    <div className="bg-gradient-to-b from-[#f8f8f5] to-[#e0d8c9] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <Heading level={2} className="!mb-5 !text-3xl">
          Finalizar Compra
        </Heading>
        {formError && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8">
            {formError}
          </div>
        )}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <CheckoutForm onFinish={onFinish} form={form} />
          <CheckoutSummary form={form} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Lharmonie Café | Finaliza tu compra de manera segura",
  description:
    "Completa tu compra en Lharmonie Café. Revisa los artículos en tu carrito y finaliza la compra de forma segura y sencilla.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Finaliza tu compra en Lharmonie Café",
    description:
      "Disfruta de una experiencia de compra única y segura en Lharmonie Café. Completa tu compra y recibe nuestros productos en tu hogar.",
    url: "https://casalharmonie.com/checkout",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finaliza tu compra en Lharmonie Café",
    description:
      "Compra nuestros productos y disfruta de un proceso seguro y fácil en Lharmonie Café.",
  },
};

export default CheckoutPage;
