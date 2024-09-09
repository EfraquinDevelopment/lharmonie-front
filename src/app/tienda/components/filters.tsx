"use client";

import LharmonieButton from "@/components/ui/lharmonie-button";
import { Category } from "@/types";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Heading from "@/components/layout/heading";
import classNames from "classnames";
import { CATEGORY_PARAM, SEARCH_PARAM } from "@/lib/constants";

type Props = {
  categories: Category[];
};

const Filters = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const handleCategorySelection = (codeName: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (codeName) {
      params.set(CATEGORY_PARAM, codeName);
      params.delete(SEARCH_PARAM);
    } else {
      params.delete(CATEGORY_PARAM);
    }
    window.history.pushState(null, "", `?${params.toString()}`);
    setShowFilters(false);
  };

  return (
    <section className="lg:bg-white rounded-lg lg:shadow-md p-6 lg:max-w-[80%]">
      <LharmonieButton
        className="lg:hidden w-full lg:px-0 py-2 transition-colors mb-3"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
      </LharmonieButton>
      <Heading
        level={2}
        className={classNames(
          "!text-base lg:!text-2xl text-left !font-light text-[#8B7355] mb-6 pb-2 md:border-b border-[#8B7355]",
          {
            "hidden lg:block": !showFilters,
          }
        )}
      >
        Categorías
      </Heading>
      <div
        className={classNames("flex flex-wrap gap-2 lg:block lg:space-y-2", {
          "hidden lg:block": !showFilters,
        })}
      >
        <LharmonieButton
          onClick={() => handleCategorySelection(null)}
          className={`w-full text-left rounded-md transition-all duration-300 flex justify-start ${
            searchParams.get(CATEGORY_PARAM) === null
              ? "hover:!text-white font-semibold"
              : "!text-gray-950 hover:!text-gray-950 !bg-inherit !font-normal"
          }`}
        >
          Todos
        </LharmonieButton>
        {categories.map((category) => {
          const isActive =
            searchParams.get(CATEGORY_PARAM) === category.codeName;
          return (
            <LharmonieButton
              key={category.id}
              onClick={() => handleCategorySelection(category.codeName)}
              className={`w-full text-left rounded-md transition-all duration-300 flex justify-start ${
                isActive
                  ? "hover:!text-white font-semibold"
                  : "!text-gray-950 hover:!text-gray-950 !bg-inherit !font-normal"
              }`}
            >
              {category.name}
            </LharmonieButton>
          );
        })}
      </div>
    </section>
  );
};

export default Filters;
