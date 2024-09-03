import { Product } from "@/types";
import { Coffee } from "lucide-react";
import React from "react";

interface Props {
  attributes: Product["attributes"];
}

const AttributesSection = ({ attributes }: Props) => {
  if (attributes.length === 0) return null;

  return (
    <div className="mb-10 bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-light mb-6 text-gray-800 flex items-center">
        <Coffee className="w-6 h-6 mr-2 text-[#8B7355]" />
        Características
      </h2>
      <ul className="space-y-4 text-gray-700">
        {attributes.map((attribute) => (
          <li key={attribute.name} className="flex items-center">
            <span className="w-24 font-semibold">{attribute.name}:</span>
            <span>{attribute.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttributesSection;
