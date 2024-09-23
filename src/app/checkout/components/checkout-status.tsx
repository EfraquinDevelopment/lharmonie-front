"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MPaymentStatus } from "@/types";

interface CheckoutStatusProps {
  status: MPaymentStatus;
}

const statusMessages = {
  [MPaymentStatus.Success]: {
    title: "Payment Successful",
    message: "Thank you for your purchase! Your order has been completed.",
    paymentStatus: "approved",
  },
  [MPaymentStatus.Pending]: {
    title: "Payment Pending",
    message:
      "Your payment is pending. Once completed, your order will be processed.",
    paymentStatus: "pending",
  },
  [MPaymentStatus.Failure]: {
    title: "Payment Failed",
    message: "Unfortunately, your payment has failed. Please try again.",
    paymentStatus: "failure",
  },
};

const CheckoutStatus: React.FC<CheckoutStatusProps> = ({ status }) => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const router = useRouter();

  useEffect(() => {
    if (!orderId) {
      router.push("/");
    }
  }, [orderId]);

  return (
    <div>
      <h1>{statusMessages[status].title}</h1>
      <p>
        {statusMessages[status].message} Your order ID is #{orderId}.
      </p>
    </div>
  );
};

export default CheckoutStatus;
