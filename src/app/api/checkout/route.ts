// import { wooCommerceApi } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // const response = await wooCommerceApi.post("orders", {
    //   payment_method: "woo-mercado-pago-basic",
    //   payment_method_title: "Mercado Pago - Checkout Pro",
    //   set_paid: true,
    //   billing: {
    //     first_name: "John",
    //     last_name: "Doe",
    //     address_1: "969 Market",
    //     address_2: "",
    //     city: "San Francisco",
    //     state: "CA",
    //     postcode: "94103",
    //     country: "US",
    //     email: "john.doe@example.com",
    //     phone: "(555) 555-5555",
    //   },
    //   line_items: [
    //     {
    //       product_id: body.id,
    //       quantity: 2,
    //     },
    //   ],
    // });
    // console.log({ response });

    return NextResponse.json({
      status: 200,
    });
  } catch (error) {
    console.log({ error });

    return NextResponse.json(
      { error },
      {
        status: 500,
      }
    );
  }
}
