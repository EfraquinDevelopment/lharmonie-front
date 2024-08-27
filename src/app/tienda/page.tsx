import ProductsGrid from "@/app/tienda/components/products-grid";
import Filters from "@/app/tienda/components/filters";
import Heading from "@/components/layout/heading";
import content from "@/data/store.json";
import { Suspense } from "react";

const Productos = async () => {
  return (
    <main className="bg-lharmonie-primary">
      <div className="py-10 px-8 sm:max-w-full mx-auto sm:mx-0">
        <Heading level={1} className="text-center">
          {content.title}
        </Heading>
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-12 gap-5">
          {/* <div className="lg:hidden">searchbox</div> */}
          <aside className="col-span-3">
            <Suspense fallback={<div>Cargando filtros...</div>}>
              <Filters categories={content.categories} />
            </Suspense>
          </aside>
          <div className="col-span-9">
            {/* <div className="hidden lg:block">searchbox</div> */}
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
