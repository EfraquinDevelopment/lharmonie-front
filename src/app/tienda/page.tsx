import ProductsGrid from "@/app/tienda/components/products-grid";
import Filters from "@/app/tienda/components/filters";
import Heading from "@/components/layout/heading";
import content from "@/data/store.json";
import { Suspense } from "react";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import { getWooCategories } from "@/data/woocommerce/getWooCategories";
import OrderBy from "@/app/tienda/components/order-by";
import { orderOptions } from "@/config/store";
import { WooCategory } from "@/types/woocommerce";
import classNames from "classnames";
import SpinnerLoader from "@/components/layout/spinner-loader";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const getCategoryIdBySlug = (categories: WooCategory[], slug?: string) =>
  categories.find((cat) => cat.slug === slug)?.id;

const Productos = async ({ searchParams }: Props) => {
  const { order = orderOptions[0].value, category, search } = searchParams;

  const categories = await getWooCategories();
  const categoryId = getCategoryIdBySlug(categories, category);

  const products = await getWooProducts(order, categoryId, search);

  return (
    <Suspense fallback={<SpinnerLoader />}>
      <main>
        <div className="py-10 px-8 sm:max-w-full mx-auto sm:mx-0">
          <Heading level={1} className="text-center">
            {content.title}
          </Heading>
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

export default Productos;
