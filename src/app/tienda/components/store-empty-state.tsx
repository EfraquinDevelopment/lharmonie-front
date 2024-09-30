import React from "react";
import { Coffee, ShoppingBag, ShoppingBasket } from "lucide-react";
import Link from "next/link";

const StoreEmptyState = () => {
  return (
    <div className="p-8 min-h-[calc(100vh-400px)] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#e0d8c9] rounded-full">
          <ShoppingBag className="w-8 h-8 text-[#8B7355]" />
        </div>
        <h2 className="mb-2 text-2xl font-serif text-[#5D4D3A]">
          No hay productos disponibles
        </h2>
        <p className="mb-6 text-[#8B7355]">
          Lo sentimos, actualmente no hay productos que se ajusten a tu
          búsqueda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`/tienda`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#8B7355] border border-transparent rounded-md hover:bg-[#A08B6C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B7355]"
          >
            <ShoppingBasket className="w-5 h-5 mr-2" />
            Ver todos los productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoreEmptyState;
