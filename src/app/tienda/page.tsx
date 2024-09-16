import ProductsGrid from "@/app/tienda/components/products-grid";
import Filters from "@/app/tienda/components/filters";
import Heading from "@/components/layout/heading";
import content from "@/data/store.json";
import { Suspense } from "react";
import { WooProduct } from "@/types/woocommerce";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import { getWooCategories } from "@/data/woocommerce/getWooCategories";

const Productos = async () => {
  const products = await getWooProducts();
  const categories = await getWooCategories();

  return (
    <main>
      <div className="py-10 px-8 sm:max-w-full mx-auto sm:mx-0">
        <Heading level={1} className="text-center">
          {content.title}
        </Heading>
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-12 gap-5">
          <aside className="col-span-3">
            <Suspense fallback={<div>Cargando filtros...</div>}>
              <Filters categories={categories} />
            </Suspense>
          </aside>
          <div className="col-span-9 shadow-2xl py-10 rounded-xl px-4">
            <Suspense fallback={<div>Cargando productos...</div>}>
              <ProductsGrid products={products} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Productos;
