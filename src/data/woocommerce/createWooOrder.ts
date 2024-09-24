import { CartItem } from "@/context/cart-context";
import { wooCommerceApi } from "@/lib/api";

export async function createWooOrder(cartItems: CartItem[], personalInfo: any) {
  const orderData = {
    payment_method: "mercadopago",
    payment_method_title: "MercadoPago",
    set_paid: false,
    billing: {
      email: personalInfo.email,
      first_name: personalInfo.firstName,
      last_name: personalInfo.lastName,
      phone: personalInfo.phone,
    },
    meta_data: [
      {
        key: "DNI",
        value: personalInfo.dni,
      },
    ],
    line_items: cartItems.map((item: CartItem) => ({
      product_id: item.id,
      quantity: item.quantity,
    })),
  };

  try {
    const response = await wooCommerceApi.post("orders", orderData);

    if (response.status !== 201) {
      throw new Error(`Failed to create WooCommerce order: ${response.data}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error creating WooCommerce order:", error);
    throw error;
  }
}
