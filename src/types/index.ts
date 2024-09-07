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
