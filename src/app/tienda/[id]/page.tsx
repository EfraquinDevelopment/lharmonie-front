import React from "react";
import ProductDetailBreadcrumb from "@/app/tienda/[id]/components/product-detail-breadcrumb";
import ProductContent from "@/app/tienda/[id]/components/product-content";
import { getWooProduct } from "@/data/woocommerce/getWooProduct";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import RelatedProducts from "./components/related-products";
import ProductCarousel from "@/app/home/components/product-carousel";
import { Divider } from "antd";

const ProductDetail = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await getWooProduct(id);
  const relatedProductsResponse = await getWooProducts(
    undefined,
    product.categories[0].id
  );

  const relatedProducts = relatedProductsResponse.filter(
    (product) => product.id !== +id
  );

  relatedProducts.push(product);
  relatedProducts.push(product);
  relatedProducts.push(product);
  relatedProducts.push(product);
  relatedProducts.push(product);
  relatedProducts.push(product);
  relatedProducts.push(product);
  relatedProducts.push(product);
  relatedProducts.push(product);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <main className="bg-[#f8f8f5]">
      <div className="container mx-auto px-4 py-8">
        <ProductDetailBreadcrumb
          productName={product.name}
          productCategory={product.categories[0]}
        />
        <ProductContent {...product} />
        <Divider className="border-[#e0d8c9] mt-16" />
        <RelatedProducts products={relatedProducts} />
      </div>
    </main>
  );
};

export default ProductDetail;
