import React from "react";
import { Coffee, ShoppingBag, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import LharmonieButton from "@/components/ui/lharmonie-button";

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
        <Link
          href={`/tienda`}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <LharmonieButton icon={<ShoppingBasket />}>
            Ver todos los productos
          </LharmonieButton>
        </Link>
      </div>
    </div>
  );
};

export default StoreEmptyState;
