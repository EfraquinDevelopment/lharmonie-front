export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

export interface Store {
  id: number;
  name: string;
  callToAction: string;
  imageAlt: string;
  imageSrc: string;
}

export interface StoreData {
  id: number;
  name: string;
  address: string;
  imageAlt: string;
  imageSrc: string;
  openTimes: string[];
}
