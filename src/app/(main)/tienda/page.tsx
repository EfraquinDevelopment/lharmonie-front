import ProductsGrid from "@/app/(main)/tienda/components/products-grid";
import Filters from "@/app/(main)/tienda/components/filters";
import { Suspense } from "react";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import { getWooCategories } from "@/data/woocommerce/getWooCategories";
import OrderBy from "@/app/(main)/tienda/components/order-by";
import { orderOptions } from "@/config/store";
import { WooCategory } from "@/types/woocommerce";
import classNames from "classnames";
import SpinnerLoader from "@/components/layout/spinner-loader";
import { Metadata } from "next";
import { upperFirst } from "@/lib/utils";

interface Props {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

const getCategoryIdBySlug = (categories: WooCategory[], slug?: string) =>
  categories.find((cat) => cat.slug === slug)?.id;

const Productos = async ({ searchParams }: Props) => {
  const { order = orderOptions[0].value, category, search } = searchParams;

  const categories = await getWooCategories();
  const categoryId = getCategoryIdBySlug(categories, category);

  const products = await getWooProducts({
    order,
    categories: categoryId ? [Number(categoryId)] : [],
    search,
  });

  return (
    <Suspense fallback={<SpinnerLoader />}>
      <main>
        <div className="py-10 px-8 sm:max-w-full mx-auto sm:mx-0">
          <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-12 gap-5">
            <aside className="col-span-3">
              <Filters categories={categories} />
            </aside>
            <div className="col-span-9">
              <div
                className={classNames("mb-2 flex -md:flex-col items-center", {
                  "justify-between": search,
                  "justify-end": !search,
                })}
              >
                {search ? <p>Resultados para: {search}</p> : <></>}
                <OrderBy />
              </div>
              <div className="shadow-2xl py-10 rounded-xl px-4">
                <ProductsGrid products={products} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  );
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { category, search } = searchParams;

  const metaDescription = search
    ? `Resultados para "${search}" en nuestra tienda de Lharmonie Café. Descubre nuestros productos únicos de café y más.`
    : category
    ? `Explora productos en la categoría "${category}" en la tienda de Lharmonie Café. Encuentra el mejor café y accesorios para café.`
    : "Descubre la tienda de Lharmonie Café. Productos únicos, café artesanal, y accesorios para los amantes del café en Buenos Aires.";

  return {
    title: `Lharmonie Café | Tienda${
      category ? " - " + upperFirst(category) : ""
    }`,
    description: metaDescription,
    keywords:
      "café artesanal, Lharmonie Café, Buenos Aires, tienda de café, productos de café, accesorios de café",
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://www.casalharmonie.com/tienda",
      title: "Lharmonie Café | Tienda",
      description: metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      site: "https://www.casalharmonie.com/tienda",
      title: "Lharmonie Café | Tienda",
      description: metaDescription,
    },
  };
}

export default Productos;
