import {
  API_URL,
  WOO_CONSUMER_KEY,
  WOO_CONSUMER_SECRET,
} from "@/lib/constants";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const wooCommerceApi = new WooCommerceRestApi({
  url: API_URL || "",
  consumerKey: WOO_CONSUMER_KEY || "",
  consumerSecret: WOO_CONSUMER_SECRET || "",
  version: "wc/v3",
});
