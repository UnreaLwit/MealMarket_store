"use client";
import { cn } from "@/lib/utils";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    title: "Консервы",
    src: "https://cdn-icons-png.flaticon.com/512/5987/5987631.png",
    alt: "Консервы",
  },
  {
    title: "Мясные продукты",
    src: "https://cdn-icons-png.flaticon.com/512/1046/1046769.png",
    alt: "Мясные продукты",
  },
  {
    title: "Молочные продукты",
    src: "https://cdn-icons-png.flaticon.com/512/7295/7295435.png",
    alt: "Молочные продукты",
  },
  {
    title: "Овощи",
    src: "https://cdn-icons-png.flaticon.com/512/4888/4888029.png",
    alt: "Овощи",
  },
  {
    title: "Фрукты",
    src: "https://cdn-icons-png.flaticon.com/512/2843/2843584.png",
    alt: "Фрукты",
  },
];

export function HomeCategory() {
  return (
    <div className="flex justify-center">
      {categories.map((product, i) => (
        <div key={i}>
          <Card
            key={i}
            className={cn(
              "max-w-[200px] min-w-[200px] h-[100px] flex  justify-between items-center m-4 shadow-lg"
            )}
          >
            <CardHeader className="p-2 pr-0 pb-0 w-1/2 place-self-start">
              <CardTitle className="text-xl">{product.title}</CardTitle>
            </CardHeader>

            <CardFooter className="pt-0 pr-2 pb-2 pl-0 place-self-end">
              <img
                className="rounded-lg"
                src={product.src}
                alt={product.alt}
                width={70}
                height={70}
              />
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
