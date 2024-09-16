"use client";
import { WooCategory } from "@/types/woocommerce";
import { createContext, useContext, ReactNode } from "react";

type CategoriesContextType = {
  categories: WooCategory[];
};

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

export const CategoriesProvider = ({
  children,
  categories = [],
}: {
  children: ReactNode;
  categories: WooCategory[];
}) => {
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};
