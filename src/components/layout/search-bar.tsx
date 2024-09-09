"use client";

import { CATEGORY_PARAM, SEARCH_PARAM } from "@/lib/constants";
import { Search, X } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SearchBar = () => {
  const pathname = usePathname();

  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setSearchTerm("");
  }, [pathname]);

  useEffect(() => {
    if (searchParams.get(CATEGORY_PARAM)) {
      setSearchTerm("");
      return;
    }
    const currentSearchTerm = searchParams.get(SEARCH_PARAM);
    if (currentSearchTerm) {
      setSearchTerm(currentSearchTerm);
    }
  }, [searchParams]);

  const updateSearchParam = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(SEARCH_PARAM, value);
        params.delete(CATEGORY_PARAM);
      } else {
        params.delete(SEARCH_PARAM);
      }
      if (pathname === "/tienda") {
        router.push(`?${params.toString()}`);
      } else {
        router.push(`/tienda?${params.toString()}`);
      }
    },
    [router, searchParams]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        updateSearchParam(searchTerm);
      }
    },
    [searchTerm, updateSearchParam]
  );

  const handleClear = () => {
    setSearchTerm("");
    updateSearchParam("");
  };

  return (
    <div className="md:max-w-[300px] w-full px-4">
      <motion.div
        className={`relative flex items-center bg-white rounded-full shadow-md transition-all ${
          isFocused ? "ring-2 ring-[#8B7355]" : ""
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Search className="absolute left-4 text-gray-400" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Buscar productos..."
          className="w-full py-3 pl-12 pr-10 text-gray-700 bg-transparent rounded-full focus:outline-none"
        />
        <AnimatePresence>
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={handleClear}
              className="absolute right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SearchBar;
