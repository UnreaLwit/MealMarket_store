"use client";
import { cn } from "@/lib/utils";
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

export function HomeCards({ className, ...props }: CardProps) {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

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

  const renderProductCard = (product: Product) => (
    <Card
      key={product.id}
      className={cn(
        "w-[240px] h-[380px] flex flex-col justify-between items-center m-2 shadow-lg",
        className
      )}
      {...props}
    >
      <CardHeader>
        <img
          className="rounded-lg"
          src={product.src}
          alt={product.alt}
          width={150}
          height={150}
        />
      </CardHeader>

      <CardContent className="flex justify-center items-center p-4 pt-0 text-center">
        <CardTitle>{product.title}</CardTitle>
      </CardContent>

      <CardFooter className="flex flex-col justify-center items-center">
        <CardTitle className="pb-2">{`${product.cost} ₽`}</CardTitle>
        <Button className="w-24 h-11 text-lg">Купить</Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="flex flex-wrap justify-center mb-8">
      {randomProducts.map(renderProductCard)}
    </div>
  );
}
