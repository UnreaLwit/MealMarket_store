import { ShopItems } from "@/components/Shop/ShopItems";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center mb-6 text-4xl">
        Каталог товаров
      </h1>
      <ShopItems />
    </div>
  );
};

export default page;
