import CheckoutStatus from "@/app/checkout/components/checkout-status";
import { MPaymentStatus } from "@/types";

const CheckoutFailure = () => {
  return <CheckoutStatus status={MPaymentStatus.Failure} />;
};

export default CheckoutFailure;
