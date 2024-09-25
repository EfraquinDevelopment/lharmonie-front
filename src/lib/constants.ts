export const CATEGORY_PARAM = "category";
export const SEARCH_PARAM = "search";
export const ORDER_PARAM = "order";
export const TAILWIND_BREAKPOINTS = Object.freeze({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
});

export const WOO_CONSUMER_KEY = process.env.WOO_CONSUMER_KEY ?? "";
export const WOO_CONSUMER_SECRET = process.env.WOO_CONSUMER_SECRET ?? "";
export const API_URL = process.env.API_URL ?? "";
export const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN ?? "";
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";
export const NEXT_PUBLIC_GOOGLE_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? "";

export const checkoutPageStatuses = ["success", "failed"];
