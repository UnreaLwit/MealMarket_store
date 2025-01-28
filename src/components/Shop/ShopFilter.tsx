"use client";
import React, { useState } from "react";
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
import { Check, ChevronsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import productsData from "@/data/productsData";

type FilterType = {
  category: string;
  price: string;
  alphabet: string;
};

type ShopFilterProps = {
  filter: FilterType;
  onFilterChange: (newFilter: FilterType) => void;
  handleResetFilters: () => void;
};

const ShopFilter: React.FC<ShopFilterProps> = ({
  filter,
  onFilterChange,
  handleResetFilters,
}) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openAlphabet, setOpenAlphabet] = useState(false);

  const handleOptionChange = (
    field: keyof FilterType,
    value: string,
    reset = false
  ) => {
    let newFilter: FilterType;

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

    // Сбрасываем противоречивые фильтры
    if (field === "price" && newFilter.price) {
      newFilter.alphabet = "";
    } else if (field === "alphabet" && newFilter.alphabet) {
      newFilter.price = "";
    }

    onFilterChange(newFilter);

    // Закрываем Popover после выбора
    if (field === "category") setOpenCategory(false);
    if (field === "price") setOpenPrice(false);
    if (field === "alphabet") setOpenAlphabet(false);
  };

  const renderFilterOptions = (
    field: keyof FilterType,
    options: string[],
    defaultValue: string
  ) => {
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
  };

  return (
    <div className="flex justify-evenly mb-8 w-fit">
      {/* Категория */}
      <Popover open={openCategory} onOpenChange={setOpenCategory}>
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
        <PopoverContent className="p-0 w-[200px]">
          <Command>
            <CommandList>
              <CommandGroup>
                {renderFilterOptions(
                  "category",
                  Array.from(
                    new Set(productsData.map((product) => product.category))
                  ),
                  "Категория"
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Цена */}
      <Popover open={openPrice} onOpenChange={setOpenPrice}>
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
        <PopoverContent className="p-0 w-[200px]">
          <Command>
            <CommandList>
              <CommandGroup>
                {renderFilterOptions(
                  "price",
                  ["lowToHigh", "highToLow"],
                  "Цена"
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Алфавит */}
      <Popover open={openAlphabet} onOpenChange={setOpenAlphabet}>
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
        <PopoverContent className="p-0 w-[200px]">
          <Command>
            <CommandList>
              <CommandGroup>
                {renderFilterOptions("alphabet", ["aToz", "zToa"], "Алфавит")}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Button
        onClick={handleResetFilters}
        className="border-input bg-red-500 hover:bg-red-700 shadow-lg p-2 border rounded-lg text-white"
      >
        Сбросить все фильтры
      </Button>
    </div>
  );
};

export default ShopFilter;
