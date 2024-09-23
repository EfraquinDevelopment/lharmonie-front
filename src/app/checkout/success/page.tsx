import CheckoutStatus from "@/app/checkout/components/checkout-status";
import { MPaymentStatus } from "@/types";

const CheckoutSuccess = () => {
  return <CheckoutStatus status={MPaymentStatus.Success} />;
};

export default CheckoutSuccess;
