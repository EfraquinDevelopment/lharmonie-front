import { NextRequest, NextResponse } from "next/server";
import { createMercadoPagoPreference } from "@/data/mercadopago/createMercadoPagoPreference";

export async function POST(req: NextRequest) {
  try {
    const { orderId, orderTotal, customerEmail } = await req.json();
    const init_point = await createMercadoPagoPreference(
      orderId,
      orderTotal,
      customerEmail
    );
    return NextResponse.json({ init_point }, { status: 200 });
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json(
      { error: "Error processing payment." },
      { status: 500 }
    );
  }
}
