"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import ButtonMotion from "../Motion/ButtonMotion";

const HomeBanner = () => {
  return (
    <div className="flex shadow-lg mr-2 mb-8 ml-2 border rounded-lg w-fit lg:w-full h-auto">
      <div className="flex flex-col justify-start items-start mt-10 mb-10 ml-10 w-[50%]">
        <h1 className="mb-4 font-extrabold text-3xl md:text-4xl">
          Мы доставим магазин к вашему дому
        </h1>
        <h2 className="mb-4 font-semibold text-xl md:text-2xl">
          При заказе от 1000 рублей доставка бесплатно
        </h2>
        <ButtonMotion>
          <Link href="/shop">
            <Button
              className="shadow-lg border rounded-lg font-bold text-xl"
              variant="outline"
              size="lg"
            >
              Заказать
            </Button>
          </Link>
        </ButtonMotion>
      </div>
      <div className="flex items-center ml-8 w-[50%]">
        <img
          src="https://png.pngtree.com/png-vector/20240810/ourmid/pngtree-shopping-cart-full-of-groceries-on-white-backgrou-png-image_13423943.png"
          alt="корзина"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
