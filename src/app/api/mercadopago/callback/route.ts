import { updateWooOrder } from "@/data/woocommerce/updateWooOrder";
import { OrderStatus } from "@/types/woocommerce";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const status = searchParams.get("status");
  const orderId = searchParams.get("external_reference");

  if (!orderId) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/failure`
    );
  }

  try {
    // Map the MercadoPago status to your internal status
    let paymentStatus: OrderStatus = OrderStatus.Failed;

    if (status === "success") {
      paymentStatus = OrderStatus.Approved;
    } else if (status === "pending") {
      paymentStatus = OrderStatus.Pending;
    }

    // Update the WooCommerce order status
    await updateWooOrder(Number(orderId), paymentStatus);

    // Redirect to the appropriate page based on payment status
    let redirectUrl =
      paymentStatus === OrderStatus.Approved
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`
        : paymentStatus === OrderStatus.Pending
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/pending`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/failure`;

    redirectUrl += `?orderId=${orderId}`;

    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error("Error updating WooCommerce order:", error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/failure`
    );
  }
}
