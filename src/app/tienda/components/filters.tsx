"use client";

import LharmonieButton from "@/components/ui/lharmonie-button";
import { Category } from "@/types";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Heading from "@/components/layout/heading";
import classNames from "classnames";
import { CATEGORY_PARAM } from "@/lib/constants";
import { Button } from "antd";

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
        <Button
          type="text"
          onClick={() => handleCategorySelection(null)}
          className={`w-full text-left py-2 px-4 rounded-md transition-all duration-300 ${
            searchParams.get(CATEGORY_PARAM) === null
              ? "bg-[#8B7355] text-white hover:!bg-[#8B7355] hover:!text-white font-semibold"
              : "!text-gray-700 hover:!bg-[#f0ebe5]"
          }`}
        >
          <div className="flex w-full justify-start">Todos</div>
        </Button>
        {categories.map((category) => {
          const isActive =
            searchParams.get(CATEGORY_PARAM) === category.id.toString();
          return (
            <Button
              key={category.id}
              type="text"
              onClick={() => handleCategorySelection(category.id)}
              className={`w-full text-left py-2 px-4 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-[#8B7355] text-white hover:!bg-[#8B7355] hover:!text-white font-semibold"
                  : "!text-gray-700 hover:!bg-[#f0ebe5]"
              }`}
            >
              <div className="flex w-full justify-start"> {category.name}</div>
            </Button>
          );
        })}
      </div>
    </section>
  );

  // return (
  //   <section className="lg:max-w-[80%]">
  //     <LharmonieButton
  //       className="lg:hidden w-full lg:px-0 py-2 transition-colors mb-3"
  //       onClick={() => setShowFilters(!showFilters)}
  //     >
  //       {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
  //     </LharmonieButton>
  //     <Heading
  //       level={2}
  //       className={classNames("!text-base lg:!text-2xl !font-light", {
  //         "hidden lg:block": !showFilters,
  //       })}
  //     >
  //       Filtros
  //     </Heading>
  //     <div
  //       className={classNames("flex flex-wrap gap-2 lg:block lg:space-y-2", {
  //         "hidden lg:block": !showFilters,
  //       })}
  //     >
  //       <LharmonieButton
  //         onClick={() => handleCategorySelection(null)}
  //         reversed={searchParams.has(CATEGORY_PARAM)}
  //         className="lg:w-full px-4 py-2 transition-colors justify-start shadow-md"
  //       >
  //         Todos
  //       </LharmonieButton>
  //       {categories.map((category) => (
  //         <LharmonieButton
  //           key={category.id}
  //           reversed={
  //             searchParams.get(CATEGORY_PARAM) !== category.id.toString()
  //           }
  //           onClick={() => handleCategorySelection(category.id)}
  //           className="lg:w-full px-4 py-2

  //           justify-start shadow-md"
  //         >
  //           {category.name}
  //         </LharmonieButton>
  //       ))}
  //     </div>
  //   </section>
  // );
};

export default Filters;
