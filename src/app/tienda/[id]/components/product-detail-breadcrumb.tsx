import { WooProduct } from "@/types/woocommerce";
import Link from "next/link";
import React from "react";

interface Props {
  productName: string;
  productCategory: WooProduct["categories"][0];
}

const ProductDetailBreadcrumb = ({ productName, productCategory }: Props) => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 hover:font-semibold"
          >
            Inicio
          </Link>
        </li>
        <li>
          <span className="text-gray-500 mx-2">/</span>
        </li>
        <li>
          <Link
            href="/tienda"
            className="text-gray-600 hover:text-gray-900 hover:font-semibold"
          >
            Tienda
          </Link>
        </li>
        <li>
          <span className="text-gray-500 mx-2">/</span>
        </li>
        <li>
          <Link
            href={`/tienda?category=${productCategory.slug}`}
            className="text-gray-600 hover:text-gray-900 hover:font-semibold"
          >
            {productCategory.name}
          </Link>
        </li>
        <li>
          <span className="text-gray-500 mx-2">/</span>
        </li>
        <li>
          <span className="text-gray-800 font-semibold">{productName}</span>
        </li>
      </ol>
    </nav>
  );
};

export default ProductDetailBreadcrumb;
