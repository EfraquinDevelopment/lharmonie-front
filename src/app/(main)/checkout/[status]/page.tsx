import { checkoutPageStatuses } from "@/lib/constants";
import { checkOrderStatus } from "@/data/woocommerce/checkOrderStatus";
import { redirect } from "next/navigation";
import { WooOrderStatus } from "@/types/woocommerce";
import { MPaymentStatus } from "@/types";
import CheckoutSuccess from "@/app/(main)/checkout/[status]/components/checkout-success";
import CheckoutFailed from "@/app/(main)/checkout/[status]/components/checkout-failed";

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

    if (status !== actualStatus) {
      redirect("/404");
      return;
    }

    return renderCheckoutStatus(actualStatus, orderId);
  } catch (error) {
    console.error("Error checking order status:", error);
    redirect("/404");
  }
};

export const generateMetadata = async ({ params, searchParams }: Props) => {
  const orderId = searchParams?.orderId || null;
  const status = params?.status || null;

  if (!orderId || !status || !checkoutPageStatuses.includes(status)) {
    return {
      title: "404 Not Found",
      description: "La página que estás buscando no existe.",
      robots: "noindex, nofollow",
    };
  }

  const isOrderSuccess = await checkOrderStatus(
    orderId,
    WooOrderStatus.Completed
  );
  const actualStatus = isOrderSuccess
    ? MPaymentStatus.Success
    : MPaymentStatus.Failed;

  return {
    title: `Lharmonie Café | Checkout ${
      actualStatus === MPaymentStatus.Success ? "Exitoso" : "Fallido"
    }`,
    description:
      actualStatus === MPaymentStatus.Success
        ? "Tu pedido se ha completado con éxito."
        : "El pago de tu pedido ha fallado. Por favor, inténtalo nuevamente.",
    robots: "noindex, nofollow",
    openGraph: {
      title: "Estado de Checkout | Lharmonie Café",
      description:
        actualStatus === MPaymentStatus.Success
          ? "Pedido completado con éxito en Lharmonie Café."
          : "Falló el pago de tu pedido en Lharmonie Café. Inténtalo de nuevo.",
      url: `https://casalharmonie.com/checkout/${status}?orderId=${orderId}`,
    },
  };
};

export default CheckoutPage;
