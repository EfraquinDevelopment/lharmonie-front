"use client";

import LharmonieButton from "@/components/ui/lharmonie-button";
import { Category } from "@/types";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Heading from "@/components/layout/heading";
import classNames from "classnames";
import { CATEGORY_PARAM } from "@/lib/constants";

type Props = {
  categories: Category[];
};

const Filters = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const handleCategorySelection = (id: number | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (id) {
      params.set(CATEGORY_PARAM, id.toString());
    } else {
      params.delete(CATEGORY_PARAM);
    }
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <section className="lg:max-w-[80%]">
      <LharmonieButton
        className="lg:hidden w-full lg:px-0 py-2 transition-colors mb-3"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
      </LharmonieButton>
      <Heading
        level={2}
        className={classNames("!text-base lg:!text-2xl !font-light", {
          "hidden lg:block": !showFilters,
        })}
      >
        Filtros
      </Heading>
      <div
        className={classNames("flex flex-wrap gap-2 lg:block lg:space-y-2", {
          "hidden lg:block": !showFilters,
        })}
      >
        <LharmonieButton
          onClick={() => handleCategorySelection(null)}
          reversed={searchParams.has(CATEGORY_PARAM)}
          className="lg:w-full px-4 py-2 transition-colors justify-start shadow-md"
        >
          Todos
        </LharmonieButton>
        {categories.map((category) => (
          <LharmonieButton
            key={category.id}
            reversed={
              searchParams.get(CATEGORY_PARAM) !== category.id.toString()
            }
            onClick={() => handleCategorySelection(category.id)}
            className="lg:w-full px-4 py-2 
            
            justify-start shadow-md"
          >
            {category.name}
          </LharmonieButton>
        ))}
      </div>
    </section>
  );
};

export default Filters;
