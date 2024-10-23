export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  category: string;
  stock: number;
  attributes: { name: string; value: string }[];
  isRecommended: boolean;
}

export interface Store {
  id: number;
  name: string;
  address: string;
  address2: string;
  codeName: string;
  callToAction: string;
  imageSrc: string;
  mediaType: string;
  openTimes: { days: string; hours: string }[];
}

export interface Category {
  id: number;
  name: string;
  codeName: string;
}

export enum MediaType {
  Image = "image",
  Video = "video",
}

export interface MenuHeaderItem {
  title: string;
  link: string;
  children?: { title: string; link: string }[];
}

export enum MPaymentStatus {
  Success = "success",
  Failed = "failed",
}

export type MPaymentStatusType = "success" | "failed";
