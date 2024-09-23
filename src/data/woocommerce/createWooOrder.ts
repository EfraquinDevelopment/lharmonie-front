import { CartItem } from "@/context/cart-context";
import { wooCommerceApi } from "@/lib/api";

export async function createWooOrder(
  cartItems: CartItem[],
  customerEmail: string
) {
  const orderData = {
    payment_method: "mercadopago",
    payment_method_title: "MercadoPago",
    set_paid: false,
    billing: {
      email: customerEmail,
    },
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
