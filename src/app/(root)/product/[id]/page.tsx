"use client";
import useCartStore from "@/providers/cartStore";
import { Button } from "@/components/ui/button";
import productsData from "@/data/productsData";
import { redirect, useParams } from "next/navigation";
import Counter from "@/utils/Counter";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const { id } = params as { id: string };

  const { cartItems, addToCart } = useCartStore();

  const product = productsData.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl text-center">Страница не найдена</h1>;
        <Link className="mx-auto" href="/">
          <Button>На главную</Button>
        </Link>
      </div>
    );
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
        <div className="flex justify-between">
          <div className="flex justify-center mx-auto w-1/2 max-w-xs">
            {cartItems.some(
              (item) => item.id === product.id && item.quantity >= 1
            ) ? (
              <Counter item={product} />
            ) : (
              <Button
                onClick={() => addToCart(product)}
                className="m-4 text-lg"
                size={"lg"}
              >
                Купить
              </Button>
            )}
          </div>

          <Button
            onClick={() => {
              addToCart(product);
              redirect("/cart");
            }}
            className="m-4 w-1/2 text-lg"
            size={"lg"}
          >
            Перейти в корзину
          </Button>
        </div>
        <div className="flex items-center shadow-lg p-4 border rounded-lg justify">
          <h3 className="text-xl">
            Бесплатная доставка при заказе на сумму от 1000 рублей.
          </h3>
        </div>
      </div>
    </div>
  );
}
