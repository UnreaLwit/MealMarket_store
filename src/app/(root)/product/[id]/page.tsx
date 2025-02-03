"use client";
import useCartStore from "@/providers/cartStore";
import { Button } from "@/components/ui/button";
import productsData from "@/data/productsData";
import { redirect, useParams } from "next/navigation";
import Counter from "@/utils/Counter";
import Link from "next/link";
import { useLayoutEffect } from "react";
import ButtonMotion from "@/components/Motion/ButtonMotion";
import { Toggle } from "@/components/ui/toggle";
import useFavoritesStore from "@/providers/favoritesStore";
import { useSession } from "next-auth/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  cost: number;
  src: string;
  alt: string;
};

export default function ProductPage() {
  const params = useParams();
  const { id } = params as { id: string };

  const { cartItems, addToCart } = useCartStore();

  const product = productsData.find((p) => p.id === parseInt(id, 10));

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl text-center">Страница не найдена</h1>;
        <Link className="mx-auto" href="/">
          <ButtonMotion>
            <Button>На главную</Button>
          </ButtonMotion>
        </Link>
      </div>
    );
  }

  const { addToFavorites, removeFromFavorites, isFavorite } =
    useFavoritesStore();

  const { data: session, status } = useSession();

  const handleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="flex flex-row justify-around mt-4 min-h-[70vh]">
      <div className="flex flex-col ml-2 w-[40%]">
        <img src={product.src} alt={product.title} className="shadow-lg mt-2" />
      </div>
      <div className="flex flex-col mr-2 w-[50%]">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl">{product.title}</h1>
            {status === "authenticated" ? (
              <Toggle
                className=""
                aria-label="Toggle bold"
                onClick={() => handleFavorite(product)}
              >
                {isFavorite(product.id) ? <AiFillHeart /> : <AiOutlineHeart />}
              </Toggle>
            ) : null}
          </div>
          <h1 className="mt-2 text-base md:text-lg">{`Категория: ${product.category}`}</h1>
          <p className="py-2 text-lg md:text-xl">{product.description}</p>
        </div>
        <div>
          <h1 className="p-2 border border-t-black/10 border-r-0 border-b-black/10 border-l-0 text-4xl">
            {product.cost}.00 ₽
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center w-1/2 max-w-xs">
            {cartItems.some(
              (item) => item.id === product.id && item.quantity >= 1
            ) ? (
              <Counter item={product} />
            ) : (
              <ButtonMotion>
                <Button
                  onClick={() => addToCart(product)}
                  className="m-4 text-lg"
                  size={"lg"}
                >
                  Купить
                </Button>
              </ButtonMotion>
            )}
          </div>
          <div className="flex justify-center m-4 w-1/2 text-lg">
            <ButtonMotion>
              <Button
                onClick={() => {
                  addToCart(product);
                  redirect("/cart");
                }}
                size={"lg"}
                className="p-4"
              >
                Перейти в корзину
              </Button>
            </ButtonMotion>
          </div>
        </div>
        <div className="flex items-center p-4 border rounded-lg justify">
          <h3 className="text-lg md:text-xl">
            Бесплатная доставка при заказе на сумму от 1000 рублей.
          </h3>
        </div>
      </div>
    </div>
  );
}
