import { updateWooOrder } from "@/data/woocommerce/updateWooOrder";
import { OrderStatus } from "@/types/woocommerce";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { orderId, paymentStatus } = await req.json();
    await updateWooOrder(orderId, paymentStatus as OrderStatus);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating WooCommerce order:", error);
    return NextResponse.json(
      { error: "Error updating WooCommerce order." },
      { status: 500 }
    );
  }
}
