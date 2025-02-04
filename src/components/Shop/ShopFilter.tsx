"use client";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import React, { useState, useMemo, useCallback } from "react";
import { Check, ChevronsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import productsData from "@/data/productsData";
import { TShopFilter, TShopFilterProps } from "@/types/types";
import ButtonMotion from "../Motion/ButtonMotion";

const ShopFilter: React.FC<TShopFilterProps> = ({
  filter,
  onFilterChange,
  handleResetFilters,
}) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openAlphabet, setOpenAlphabet] = useState(false);

  const handleOptionChange = useCallback(
    (field: keyof TShopFilter, value: string, reset = false) => {
      let newFilter: TShopFilter;

      if (reset) {
        newFilter = {
          ...filter,
          [field]: "",
        };
      } else {
        newFilter = {
          ...filter,
          [field]: value === "Не фильтровать" ? "" : value,
        };
      }

      if (field === "price" && newFilter.price) {
        newFilter.alphabet = "";
      } else if (field === "alphabet" && newFilter.alphabet) {
        newFilter.price = "";
      }

      onFilterChange(newFilter);

      if (field === "category") setOpenCategory(false);
      if (field === "price") setOpenPrice(false);
      if (field === "alphabet") setOpenAlphabet(false);
    },
    [filter, onFilterChange]
  );

  const filterOptions = useMemo(() => {
    return {
      category: Array.from(
        new Set(productsData.map((product) => product.category))
      ),
      price: ["lowToHigh", "highToLow"],
      alphabet: ["aToz", "zToa"],
    };
  }, [productsData]);

  const renderFilterOptions = useCallback(
    (field: keyof TShopFilter, options: string[], defaultValue: string) => {
      return (
        <>
          <CommandItem
            value="Не фильтровать"
            onSelect={() => handleOptionChange(field, "Не фильтровать", true)}
          >
            <Check
              className={cn(
                "ml-auto",
                !filter[field] ? "opacity-100" : "opacity-0"
              )}
            />
            Не фильтровать
          </CommandItem>
          {options.map((option) => (
            <CommandItem
              key={option}
              value={option}
              onSelect={() => handleOptionChange(field, option)}
            >
              <Check
                className={cn(
                  "ml-auto",
                  filter[field] === option ? "opacity-100" : "opacity-0"
                )}
              />
              {option === "lowToHigh"
                ? "От низкой к высокой"
                : option === "highToLow"
                ? "От высокой к низкой"
                : option === "aToz"
                ? "От А до Я"
                : option === "zToa"
                ? "От Я до А"
                : option}
            </CommandItem>
          ))}
        </>
      );
    },
    [filter, handleOptionChange]
  );

  const popoverContentClasses = "p-0 w-[200px]";

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-evenly gap-4 mb-8 w-fit">
      <Popover open={openCategory} onOpenChange={setOpenCategory}>
        <ButtonMotion>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openCategory}
              className="justify-between shadow-lg mr-4 w-auto"
            >
              {filter.category ? filter.category : "Категория"}
              <ChevronsDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
        </ButtonMotion>
        <PopoverContent className={popoverContentClasses}>
          <Command>
            <CommandList>
              <CommandGroup>
                {renderFilterOptions(
                  "category",
                  filterOptions.category,
                  "Категория"
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Popover open={openPrice} onOpenChange={setOpenPrice}>
        <ButtonMotion>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openPrice}
              className="justify-between shadow-lg mr-4 w-auto"
            >
              {filter.price === "lowToHigh"
                ? "От низкой к высокой"
                : filter.price === "highToLow"
                ? "От высокой к низкой"
                : "Цена"}
              <ChevronsDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
        </ButtonMotion>
        <PopoverContent className={popoverContentClasses}>
          <Command>
            <CommandList>
              <CommandGroup>
                {renderFilterOptions("price", filterOptions.price, "Цена")}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Popover open={openAlphabet} onOpenChange={setOpenAlphabet}>
        <ButtonMotion>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openAlphabet}
              className="justify-between shadow-lg mr-4 w-auto"
            >
              {filter.alphabet === "aToz"
                ? "От А до Я"
                : filter.alphabet === "zToa"
                ? "От Я до А"
                : "Алфавит"}
              <ChevronsDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
        </ButtonMotion>
        <PopoverContent className={popoverContentClasses}>
          <Command>
            <CommandList>
              <CommandGroup>
                {renderFilterOptions(
                  "alphabet",
                  filterOptions.alphabet,
                  "Алфавит"
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <ButtonMotion>
        <Button
          onClick={handleResetFilters}
          className="border-input bg-red-500 hover:bg-red-700 shadow-lg p-2 border rounded-lg text-white"
        >
          Сбросить все фильтры
        </Button>
      </ButtonMotion>
    </div>
  );
};

export default ShopFilter;
