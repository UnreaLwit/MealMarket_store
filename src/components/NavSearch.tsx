"use client";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Product 1", image: "https://via.placeholder.com/50" },
  { id: 2, name: "Product 2", image: "https://via.placeholder.com/50" },
  { id: 3, name: "Product 3", image: "https://via.placeholder.com/50" },
  { id: 4, name: "Product 4", image: "https://via.placeholder.com/50" },
  { id: 5, name: "Product 5", image: "https://via.placeholder.com/50" },
  { id: 6, name: "Product 6", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Product 7", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Product 8", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Product 9", image: "/globe.svg" },
];

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

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);

  return (
    <div
      className={`relative w-64 ${
        focused ? "w-96" : ""
      } transition-width duration-300 search-container`}
    >
      <Input
        type="text"
        placeholder="Поиск товара..."
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="focus:border-gray-300 pr-10 focus:ring-0 w-full outline-none"
      />

      {focused && query && (
        <div className="top-full right-0 left-0 z-10 absolute border-gray-200 bg-white shadow-md mt-1 border rounded-md dropdown">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center border-gray-200 hover:bg-gray-100 p-2 border-b last:border-b-0 cursor-pointer"
                onClick={() => handleProductClick()}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mr-2 rounded w-8 h-8"
                />
                <span className="dark:text-secondary">{product.name}</span>
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
