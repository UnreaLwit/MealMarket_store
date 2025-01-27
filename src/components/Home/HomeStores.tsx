import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const stores = [
  {
    id: 1,
    title: "Магнит",
    src: "https://rskrf.ru/upload/iblock/6da/3xaz93k03pu604oa5g4tfsdlcdyvo3mx.png",
    alt: "Магнит",
  },
  {
    id: 2,
    title: "Пятерочка",
    src: "https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-ujq6-p-kartinki-pyaterochka-na-prozrachnom-fone-12.png",
    alt: "Пятерочка",
  },
  {
    id: 3,
    title: "Лента",
    src: "https://i.otzovik.com/objects/b/10000/5053.png",
    alt: "Лента",
  },
];

const HomeStores = () => {
  return (
    <div className="flex justify-center mb-8">
      {stores.map((store) => (
        <div key={store.id} className="m-2">
          <Card
            key={store.id}
            className="flex flex-col justify-between items-center shadow-lg w-auto h-auto"
          >
            <CardHeader>
              <img
                className="rounded-lg"
                src={store.src}
                alt={store.alt}
                width={150}
                height={150}
              />
            </CardHeader>

            <CardContent className="flex justify-center items-center p-4 pt-0 text-center">
              <CardTitle>{store.title}</CardTitle>
            </CardContent>

            <CardFooter>
              <CardDescription className="text-xl">
                Доставка за 20 минут
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HomeStores;
