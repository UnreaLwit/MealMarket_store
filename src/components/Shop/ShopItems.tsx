"use client";
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
import ButtonMotion from "../Motion/ButtonMotion";
import { TProduct } from "@/types/types";
import CardItem from "@/utils/CardItem";

export function ShopItems() {
  const [randomProducts, setRandomProducts] = useState<TProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const [filter, setFilter] = useState({
    category: "",
    price: "",
    alphabet: "",
  });
  const [maxPage, setMaxPage] = useState(1);

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

  useEffect(() => {
    setMaxPage(Math.ceil(filteredAndSortedProducts.length / productsPerPage));
    if (
      currentPage >
      Math.ceil(filteredAndSortedProducts.length / productsPerPage)
    ) {
      setCurrentPage(1);
    }
  }, [filteredAndSortedProducts, productsPerPage]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    if (currentPage < maxPage) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };
  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
  };

  const handleResetFilters = () => {
    setFilter({ category: "", price: "", alphabet: "" });
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="flex justify-center items-center mb-6 text-4xl">
        Каталог товаров
      </h1>
      <div className="flex justify-center">
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
            <ButtonMotion>
              <PaginationPrevious
                onClick={prevPage}
                className={`${
                  currentPage === 1
                    ? "opacity-50 pointer-events-none"
                    : "cursor-pointer"
                }`}
              />
            </ButtonMotion>
            {Array.from(
              {
                length: maxPage,
              },
              (_, i) => (
                <ButtonMotion key={i + 1}>
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      key={i + 1}
                      className={`${
                        currentPage === i + 1
                          ? "border border-input bg-background cursor-pointer"
                          : "ghost cursor-pointer"
                      }`}
                      onClick={() => paginate(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                </ButtonMotion>
              )
            )}
            <PaginationItem>
              <ButtonMotion>
                <PaginationNext
                  onClick={nextPage}
                  className={`${
                    currentPage === maxPage
                      ? "opacity-50 pointer-events-none"
                      : "cursor-pointer"
                  }`}
                />
              </ButtonMotion>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
