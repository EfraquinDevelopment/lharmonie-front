import { Product } from "@/types";
import { WooProduct } from "@/types/woocommerce";
import { Coffee } from "lucide-react";
import React from "react";

interface Props {
  attributes: WooProduct["attributes"];
}

const AttributesSection = ({ attributes }: Props) => {
  if (attributes.length === 0) return null;

  return (
    <div className="mb-10 rounded-xl mt-10">
      <h2 className="text-2xl font-light mb-6 text-gray-800 flex items-center">
        <Coffee className="w-6 h-6 mr-2 text-[#8B7355]" />
        Características
      </h2>
      <ul className="space-y-4 text-gray-700">
        {attributes.map((attribute) => (
          <li
            key={attribute.name}
            className="flex items-center border-b border-lharmonie-secondary"
          >
            <span className="w-24 font-semibold">{attribute.name}:</span>
            <span>{attribute.options[0]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttributesSection;
