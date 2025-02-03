"use client";
import { useEffect, useState } from "react";
import productsData from "@/data/productsData";
import { TProduct } from "@/types/types";
import CardItem from "@/utils/CardItem";

const amountOfCards = 10;

const HomeCards = () => {
  const [randomProducts, setRandomProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const shuffledProducts = [...productsData];
    const randomProducts: TProduct[] = [];
    for (let i = 0; i < amountOfCards; i++) {
      const randomIndex = Math.floor(Math.random() * shuffledProducts.length);
      randomProducts.push(shuffledProducts[randomIndex]);
      shuffledProducts.splice(randomIndex, 1);
    }
    setRandomProducts(randomProducts);
  }, []);

  return (
    <div className="flex flex-wrap justify-center mb-8">
      {randomProducts.map((product: TProduct) => {
        return (
          <div key={product.id}>
            <CardItem product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default HomeCards;
