"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import productsData from "@/data/productsData";
import { useEffect, useState, useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ShopFilter from "@/components/Shop/ShopFilter";
import Link from "next/link";
import useCartStore from "@/providers/cartStore";
import { cn } from "@/lib/utils";
import { Toggle } from "../ui/toggle";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavoritesStore from "@/providers/favoritesStore";
import CardItem from "../../utils/CardItem";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  cost: number;
  src: string;
  alt: string;
};

export function ShopItems() {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const [filter, setFilter] = useState({
    category: "",
    price: "",
    alphabet: "",
  });
  const { addToCart } = useCartStore();
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } =
    useFavoritesStore();

  // Функция для обработки изменения фильтров
  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    const shuffledProducts = [...productsData].sort(() => Math.random() - 0.5);
    setRandomProducts(shuffledProducts);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = randomProducts.filter((product) => {
      const categoryMatch =
        filter.category === "" || product.category === filter.category;
      const priceMatch =
        filter.price === "" ||
        (filter.price === "lowToHigh" && product.cost >= 0) ||
        (filter.price === "highToLow" && product.cost >= 0);
      return categoryMatch && priceMatch;
    });

    if (filter.price === "lowToHigh") {
      filtered.sort((a, b) => a.cost - b.cost);
    } else if (filter.price === "highToLow") {
      filtered.sort((a, b) => b.cost - a.cost);
    } else if (filter.alphabet === "aToz") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filter.alphabet === "zToa") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filtered;
  }, [filter, randomProducts]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (
      currentPage <
      Math.ceil(filteredAndSortedProducts.length / productsPerPage)
    ) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleResetFilters = () => {
    setFilter({ category: "", price: "", alphabet: "" });
  };

  const handleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-start ml-36">
        <ShopFilter
          filter={filter}
          onFilterChange={handleFilterChange}
          handleResetFilters={handleResetFilters}
        />
      </div>
      <div className="flex flex-wrap justify-center mb-8">
        {currentProducts.map((product) => (
          <div key={product.id}>
            <CardItem product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationPrevious
              href="#"
              onClick={prevPage}
              className={`${
                currentPage === 1 ? "opacity-50 pointer-events-none" : ""
              }`}
            />
            {Array.from(
              {
                length: Math.ceil(
                  filteredAndSortedProducts.length / productsPerPage
                ),
              },
              (_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    key={i + 1}
                    className={`${
                      currentPage === i + 1
                        ? "border border-input bg-background"
                        : "ghost"
                    }`}
                    onClick={() => paginate(i + 1)}
                    href="#"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={nextPage}
                className={`${
                  currentPage ===
                  Math.ceil(filteredAndSortedProducts.length / productsPerPage)
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
