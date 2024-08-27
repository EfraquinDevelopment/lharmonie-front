export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  category: number;
  stock: number;
}

export interface Store {
  id: number;
  name: string;
  callToAction: string;
  imageAlt: string;
  imageSrc: string;
  mediaType: string;
}

export interface StoreData {
  id: number;
  name: string;
  address: string;
  imageAlt: string;
  imageSrc: string;
  openTimes: { days: string; hours: string }[];
}
export interface Category {
  id: number;
  name: string;
}

export enum MediaType {
  Image = "image",
  Video = "video",
}
