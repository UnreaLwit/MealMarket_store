import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="flex shadow-lg mb-8 border rounded-lg w-full h-auto">
      <div className="flex flex-col justify-start items-start mt-10 mb-10 ml-10 w-[40%]">
        <h1 className="mb-4 font-extrabold text-4xl">
          Мы доставим магазин к вашему дому
        </h1>
        <h2 className="mb-4 font-semibold text-xl">
          При заказе от 1000 рублей доставка бесплатно
        </h2>
        <Link href="/shop">
          <Button
            className="shadow-lg p-6 border rounded-lg font-bold text-xl"
            variant="outline"
          >
            Заказать
          </Button>
        </Link>
      </div>
      <img
        className="ml-8 object-contain"
        src="https://png.pngtree.com/png-vector/20240810/ourmid/pngtree-shopping-cart-full-of-groceries-on-white-backgrou-png-image_13423943.png"
        alt="корзина"
        width={300}
        height={300}
      />
    </div>
  );
};

export default HomeBanner;
