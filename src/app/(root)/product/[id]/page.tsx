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
        <div className="mb-4">
          <h1 className="text-5xl">{product.title}</h1>
          <h1 className="mt-2 text-xl">{`Категория: ${product.category}`}</h1>
          <p className="py-2 text-xl">{product.description}</p>
        </div>
        <div>
          <h1 className="p-2 border border-t-black/10 border-r-0 border-b-black/10 border-l-0 text-4xl">
            {product.cost}.00 ₽
          </h1>
        </div>
        <div className="flex flex-row">
          <Button
            onClick={() => handleAddToCart(product)}
            className="m-4 text-lg"
            size={"lg"}
          >
            Купить
          </Button>
          <Button
            onClick={() => handleclick(product)}
            className="m-4 text-lg"
            size={"lg"}
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
        <div className="flex justify-center items-center shadow-lg p-4 border rounded-lg">
          <h3 className="text-xl">
            Бесплатная доставка при заказе на сумму от 500 рублей.
          </h3>
        </div>
      </div>
    </div>
  );
}
