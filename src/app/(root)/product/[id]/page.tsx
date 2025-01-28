"use client";
import useCartStore from "@/providers/ZustandContext";
import { Button } from "@/components/ui/button";
import productsData from "@/data/productsData";
import { redirect, useParams } from "next/navigation";
import { useState } from "react";

export default function ProductPage() {
  const params = useParams();
  const { id } = params as { id: string };

  const { addToCart, removeFromCart } = useCartStore();
  const [active, setActive] = useState(true);

  const handleclick = (product: any) => {
    if (active) {
      addToCart(product);
      setActive(!active);
    } else {
      removeFromCart(product.id);
      setActive(!active);
    }
  };
  type TProduct = {
    id: number;
    title: string;
    description: string;
    category: string;
    cost: number;
    src: string;
    alt: string;
  };

  const handleAddToCart = (product: TProduct) => {
    addToCart(product);
    redirect("/cart");
  };
  const product = productsData.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="flex flex-row justify-around mt-4 min-h-[70vh]">
      <div className="flex flex-col w-[40%]">
        <img src={product.src} alt={product.title} className="shadow-lg mt-2" />
      </div>
      <div className="flex flex-col w-[40%]">
        <div>
          <h1 className="text-4xl">{product.title}</h1>
          <p className="py-2 text-sm">{product.description}</p>
        </div>
        <div>
          <h1 className="p-2 border border-t-black/10 border-r-0 border-b-black/10 border-l-0 text-4xl">
            ₽{product.cost}.00
          </h1>
        </div>
        <div className="flex flex-row">
          <Button
            onClick={() => handleAddToCart(product)}
            className="w-24 h-11 text-lg"
          >
            Купить
          </Button>
          <Button
            onClick={() => handleclick(product)}
            className="w-24 h-11 text-lg"
          >
            В корзину
          </Button>

          {/* <button
            onClick={() => handleclick(product)}
            key={product.id}
            className={`${
              active
                ? "hover:border-[#076e2f] hover:bg-[#076e2f] bg-[rgb(237,233,225)] shadow-lg hover:shadow-lg m-4 mr-2 px-4 py-2 border border-black/40 rounded-md w-32 h-10 text-center text-sm hover:text-white transition-all active:scale-110"
                : "border-[#076e2f] bg-[#076e2f]   shadow-lg  m-4 mr-2 px-4 py-2 border  rounded-md w-32 h-10 text-center text-sm text-white transition-all"
            }`}
          >
            {active ? "Добавить" : "В корзине"}
          </button> */}
        </div>
        <div className="shadow-lg p-4 border border-black/15 rounded-lg">
          <h3 className="pb-2 border-b-2">Бесплатная доставка</h3>
          <h3>
            Политика возврата: <br />{" "}
            <span>Возврат в течении 30 дней - бесплатно</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
