export interface WooProductImage {
  id: number;
  src: string;
  name: string;
  alt: string;
}

export interface WooProductAttribute {
  id: number;
  name: string;
  options: string[];
  position: number;
  slug: string;
  variation: boolean;
  visible: boolean;
}

export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_modified: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  attributes: WooProductAttribute[];
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string | null;
  date_on_sale_to: string | null;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  images: WooProductImage[];
  stock_status: string;
  stock_quantity: number;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image?: {
    id: number;
    src: string;
    alt: string;
  };
  menu_order: number;
  count: number;
}

export interface WooOrder {
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
  billing: {
    first_name: string;
    last_name: string;
    address_1: string;
    city: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  line_items: {
    product_id: number;
    quantity: number;
  }[];
}

export enum OrderStatus {
  Approved = "approved",
  Pending = "pending",
  Failed = "failure",
}

export enum WooOrderStatus {
  Pending = "pending",
  Processing = "processing",
  OnHold = "on-hold",
  Completed = "completed",
  Cancelled = "cancelled",
  Refunded = "refunded",
  Failed = "failed",
}
