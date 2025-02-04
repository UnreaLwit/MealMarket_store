"use client";
import { Button } from "@/components/ui/button";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Toggle } from "@/components/ui/toggle";
import { redirect, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import useCartStore from "@/providers/cartStore";
import useFavoritesStore from "@/providers/favoritesStore";
import productsData from "@/data/productsData";
import { useLayoutEffect } from "react";
import { TProduct } from "@/types/types";
import NotFound from "@/app/not-found";
import ButtonMotion from "@/components/Motion/ButtonMotion";
import Counter from "@/utils/Counter";

const ProductPage = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const { data: session, status } = useSession();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cartItems, addToCart } = useCartStore();
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useFavoritesStore();

  const product = productsData.find((p) => p.id === parseInt(id, 10));

  const handleFavorite = (product: TProduct) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  if (!product) {
    return <NotFound />;
  }
  return (
    <div className="flex flex-row justify-around mt-4 min-h-[70vh]">
      <div className="flex flex-col mt-2 ml-2 w-[40%]">
        <img
          src={product.src}
          alt={product.title}
          className="shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col mr-2 w-[50%]">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl">{product.title}</h1>
            {status === "authenticated" ? (
              <Toggle
                aria-label="Toggle bold"
                onClick={() => handleFavorite(product)}
              >
                {isFavorite(product.id) ? <AiFillHeart /> : <AiOutlineHeart />}
              </Toggle>
            ) : null}
          </div>
          <h3 className="mt-2 text-base md:text-lg">{`Категория: ${product.category}`}</h3>
          <p className="py-2 text-lg md:text-xl">{product.description}</p>
        </div>
        <h1 className="p-2 border border-t-black/10 border-r-0 border-b-black/10 border-l-0 text-3xl md:text-4xl">
          {product.cost}.00 ₽
        </h1>
        <div className="flex justify-around w-[400px]">
          <div className="flex justify-center m-4 w-1/3 max-w-xs">
            {cartItems.some(
              (item) => item.id === product.id && item.quantity >= 1
            ) ? (
              <ButtonMotion>
                <Counter item={product} />
              </ButtonMotion>
            ) : (
              <ButtonMotion>
                <Button
                  onClick={() => addToCart(product)}
                  className="text-lg"
                  size={"lg"}
                >
                  Купить
                </Button>
              </ButtonMotion>
            )}
          </div>
          <div className="flex justify-center m-4">
            <ButtonMotion>
              <Button
                onClick={() => {
                  addToCart(product);
                  redirect("/cart");
                }}
                size={"lg"}
                className="p-4 text-lg"
              >
                Перейти в корзину
              </Button>
            </ButtonMotion>
          </div>
        </div>
        <h2 className="flex items-center p-4 border rounded-lg font-semibold text-lg md:text-xl">
          Бесплатная доставка при заказе на сумму от 1000 рублей.
        </h2>
      </div>
    </div>
  );
};
export default ProductPage;
