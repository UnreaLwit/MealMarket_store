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
import { useEffect, useState } from "react";
import Link from "next/link";
import useCartStore from "@/providers/cartStore";
import useFavoritesStore from "@/providers/favoritesStore";
import { Toggle } from "../ui/toggle";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import CardItem from "../../utils/CardItem";

type CardProps = React.ComponentProps<typeof Card>;
type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  cost: number;
  src: string;
  alt: string;
};

export function HomeCards() {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const { addToCart } = useCartStore();
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } =
    useFavoritesStore();

  useEffect(() => {
    const shuffledProducts = [...productsData];
    const randomProducts: Product[] = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * shuffledProducts.length);
      randomProducts.push(shuffledProducts[randomIndex]);
      shuffledProducts.splice(randomIndex, 1);
    }
    setRandomProducts(randomProducts);
  }, []);

  const handleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="flex flex-wrap justify-center mb-8">
      {randomProducts.map((product: Product) => {
        return (
          <div key={product.id}>
            <CardItem product={product} />
          </div>
        );
      })}
    </div>
  );
}
