import CheckoutStatus from "@/app/checkout/components/checkout-status";
import { MPaymentStatus } from "@/types";

const CheckoutPending = () => {
  return <CheckoutStatus status={MPaymentStatus.Pending} />;
};

export default CheckoutPending;
