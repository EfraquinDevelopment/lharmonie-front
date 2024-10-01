import { checkoutPageStatuses } from "@/lib/constants";
import { checkOrderStatus } from "@/data/woocommerce/checkOrderStatus";
import { redirect } from "next/navigation";
import { WooOrderStatus } from "@/types/woocommerce";
import { MPaymentStatus } from "@/types";
import CheckoutSuccess from "@/app/checkout/[status]/components/checkout-success";
import CheckoutFailed from "@/app/checkout/[status]/components/checkout-failed";

interface Props {
  params: { status?: string };
  searchParams: { orderId: string };
}

const renderCheckoutStatus = (status: MPaymentStatus, orderId: string) => {
  switch (status) {
    case MPaymentStatus.Success:
      return <CheckoutSuccess orderId={orderId} />;
    case MPaymentStatus.Failed:
      return <CheckoutFailed />;
    default:
      return null;
  }
};

const CheckoutPage = async ({ params, searchParams }: Props) => {
  const orderId = searchParams?.orderId || null;
  const status = params?.status || null;

  if (!orderId || !status || !checkoutPageStatuses.includes(status)) {
    redirect("/404");
  }

  try {
    const isOrderSuccess = await checkOrderStatus(
      orderId,
      WooOrderStatus.Completed
    );

    const actualStatus = isOrderSuccess
      ? MPaymentStatus.Success
      : MPaymentStatus.Failed;

    if (status !== actualStatus) redirect(`404`);

    return renderCheckoutStatus(actualStatus, orderId);
  } catch (error) {
    console.error("Error checking order status:", error);
    redirect("/404");
  }
};

export default CheckoutPage;
