import { MercadoPagoConfig, Preference } from "mercadopago";
import { MP_ACCESS_TOKEN, NEXT_PUBLIC_BASE_URL } from "@/lib/constants";

const client = new MercadoPagoConfig({
  accessToken: MP_ACCESS_TOKEN,
});

const preferenceAPI = new Preference(client);

export async function createMercadoPagoPreference(
  orderId: number,
  orderTotal: string,
  customerEmail: string
) {
  const body = {
    items: [
      {
        id: `${orderId}`,
        title: `Pedido #${orderId}`,
        quantity: 1,
        currency_id: "ARS",
        unit_price: parseFloat(orderTotal),
      },
    ],
    payer: {
      email: customerEmail,
    },
    back_urls: {
      success: `${NEXT_PUBLIC_BASE_URL}/api/mercadopago/callback?status=success`,
      failure: `${NEXT_PUBLIC_BASE_URL}/api/mercadopago/callback?status=failed`,
    },
    auto_return: "approved",
    external_reference: orderId.toString(),
  };

  const requestOptions = {
    idempotencyKey: orderId.toString(),
  };

  const response = await preferenceAPI.create({ body, requestOptions });

  if (!response.init_point) {
    throw new Error("Failed to create MercadoPago payment link.");
  }

  return response.init_point;
}
