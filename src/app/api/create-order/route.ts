import { NextRequest, NextResponse } from "next/server";
import { createWooOrder } from "@/data/woocommerce/createWooOrder";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { cartItems, personalInfo } = body;

    const order = await createWooOrder(cartItems, personalInfo);
    return NextResponse.json(
      { orderId: order.id, orderTotal: order.total },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating WooCommerce order:", error);
    return NextResponse.json(
      { error: "Error creating WooCommerce order." },
      { status: 500 }
    );
  }
}
