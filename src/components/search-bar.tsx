"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { CATEGORY_PARAM, ORDER_PARAM, SEARCH_PARAM } from "@/lib/constants";

interface Props {
  onChange?: () => void;
}

export default function SearchBar({ onChange }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
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
        params.delete(ORDER_PARAM);
      } else {
        params.delete(SEARCH_PARAM);
      }
      router.push(`/tienda?${params.toString()}`);
      onChange && onChange();
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
    <div className="w-full max-w-3xl mx-auto px-4">
      <div
        className={`relative flex items-center bg-white rounded-full shadow-md transition-all ${
          isFocused ? "ring-1 ring-lharmonie-secondary" : ""
        }`}
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
      </div>
    </div>
  );
}
