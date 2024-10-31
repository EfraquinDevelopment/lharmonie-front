import React, { Suspense } from "react";
import ProductDetailBreadcrumb from "@/app/(main)/tienda/[id]/components/product-detail-breadcrumb";
import ProductContent from "@/app/(main)/tienda/[id]/components/product-content";
import { getWooProduct } from "@/data/woocommerce/getWooProduct";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import RelatedProducts from "./components/related-products";
import { Divider } from "antd";
import SpinnerLoader from "@/components/layout/spinner-loader";
import { notFound } from "next/navigation";

const ProductDetail = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await getWooProduct(id);

  if (!product) {
    return notFound();
  }

  const relatedProductsResponse = await getWooProducts({
    categories: product.categories.map((cat) => cat.id),
  });

  const relatedProducts = relatedProductsResponse.filter(
    (product) => product.id !== +id
  );

  return (
    <Suspense fallback={<SpinnerLoader />}>
      <main className="bg-[#f8f8f5]">
        <div className="container mx-auto px-4 py-8">
          <ProductDetailBreadcrumb
            productName={product.name}
            productCategory={product.categories[0]}
          />
          <ProductContent {...product} />
          {relatedProducts.length > 0 && (
            <>
              <Divider className="border-[#e0d8c9] mt-16" />
              <RelatedProducts products={relatedProducts} />
            </>
          )}
        </div>
      </main>
    </Suspense>
  );
};

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await getWooProduct(id);

  if (!product) {
    return {};
  }

  const metaDescription = `Compra ${product.name} en Lharmonie Café. ${
    product.short_description || ""
  } Precio: ${product.price}.`;
  const productImage = product.images[0]?.src || "";

  return {
    title: `Lharmonie Café | ${product.name}`,
    description: metaDescription,
    keywords: `café, ${product.name}, Lharmonie Café, productos de café, accesorios de café`,
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: `https://www.casalharmonie.com/tienda/${id}`,
      title: product.name,
      description: metaDescription,
      images: [
        {
          url: productImage,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      url: `https://www.casalharmonie.com/tienda/${id}`,
      title: product.name,
      description: metaDescription,
      image: productImage,
    },
  };
};

export default ProductDetail;
