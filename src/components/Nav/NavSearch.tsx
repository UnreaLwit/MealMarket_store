"use client";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Link from "next/link";
import productsData from "@/data/productsData";

export function NavSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.relatedTarget as Element;
    if (!target || !target.closest(".dropdown")) {
      setFocused(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Element;
    if (!target.closest(".search-container")) {
      setFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProductClick = () => {
    setQuery("");
    setFocused(false);
  };

  const filteredProducts = productsData
    .filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);

  return (
    <div
      className={`relative w-64 shadow-md ${
        focused ? "w-80 " : ""
      } transition-width duration-300 search-container `}
    >
      <Input
        type="text"
        placeholder="Поиск товара..."
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="pr-10 focus:border-none focus:ring-0 w-full"
      />

      {focused && query && (
        <div className="top-full right-0 left-0 z-10 absolute border-gray-200 shadow-md mt-1 border rounded-md dropdown">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center border-gray-200 dark:hover:bg-neutral-600 hover:bg-gray-100 p-2 border-b last:border-b-0 cursor-pointer"
                onClick={() => handleProductClick()}
              >
                <img
                  src={product.src}
                  alt={product.title}
                  className="mr-2 rounded w-8 h-8"
                />
                <span className="">{product.title}</span>
              </Link>
            ))
          ) : (
            <div className="p-2 text-gray-500">Результаты не найдены</div>
          )}
        </div>
      )}
    </div>
  );
}
