import ProductsGrid from "@/app/tienda/components/products-grid";
import Filters from "@/app/tienda/components/filters";
import Heading from "@/components/layout/heading";
import content from "@/data/store.json";
import { Suspense } from "react";
import SearchBar from "@/app/tienda/components/search-bar";

const Productos = async () => {
  return (
    <main className="bg-[#f8f8f5]">
      <div className="py-10 px-8 sm:max-w-full mx-auto sm:mx-0">
        <Heading level={1} className="text-center">
          {content.title}
        </Heading>
        <SearchBar />
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-12 gap-5">
          <aside className="col-span-3">
            <Suspense fallback={<div>Cargando filtros...</div>}>
              <Filters categories={content.categories} />
            </Suspense>
          </aside>
          <div className="col-span-9">
            <Suspense fallback={<div>Cargando productos...</div>}>
              <ProductsGrid products={content.products} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Productos;
