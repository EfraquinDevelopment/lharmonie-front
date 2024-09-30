import { NextRequest, NextResponse } from "next/server";
import { createWooOrder } from "@/data/woocommerce/createWooOrder";
import { z } from "zod";

const personalInfoSchema = z.object({
  first_name: z.string().min(1, "El nombre es requerido"),
  last_name: z.string().min(1, "El apellido es requerido"),
  phone: z.string().min(1, "El número de teléfono es requerido"),
  email: z.string().email("Email inválido"),
  dni: z.string().regex(/^[0-9]{7,9}$/, "DNI inválido"),
});

const traductionKeys = {
  first_name: "nombre",
  last_name: "apellido",
  phone: "teléfono",
  email: "email",
  dni: "DNI",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { cartItems, personalInfo } = body;

    const validationResult = personalInfoSchema.safeParse(personalInfo);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.errors.map((err) => {
        const friendlyKey =
          traductionKeys[err.path[0] as keyof typeof traductionKeys] ||
          err.path[0];
        return `${friendlyKey}: requerido`;
      });

      return NextResponse.json(
        { error: formattedErrors.join(", ") },
        { status: 400 }
      );
    }

    const order = await createWooOrder(cartItems, validationResult.data);
    return NextResponse.json(
      { orderId: order.id, orderTotal: order.total },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error creando la orden. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
}
