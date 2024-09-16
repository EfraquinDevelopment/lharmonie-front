import React from "react";
import content from "@/data/store.json";
import ProductDetailBreadcrumb from "@/app/tienda/[id]/components/product-detail-breadcrumb";
import ProductContent from "@/app/tienda/[id]/components/product-content";
import { getWooProduct } from "@/data/woocommerce/getWooProduct";

const ProductDetail = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await getWooProduct(id);
  // const product = content.products.find(
  //   (product) => product.id.toString() === id
  // );

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <main className="bg-[#f8f8f5]">
      <div className="container mx-auto px-4 py-8">
        <ProductDetailBreadcrumb productName={product.name} />
        <ProductContent {...product} />
      </div>
    </main>
  );
};

export default ProductDetail;
