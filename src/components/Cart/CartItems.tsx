import React from "react";
import { Button } from "../ui/button";
import useCartStore from "@/providers/cartStore";
import Link from "next/link";
import Counter from "../../utils/Counter";

const CartItems = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useCartStore();
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="shadow-lg border rounded-lg w-[600px]">
          <h1 className="p-4 font-semibold text-3xl text-center">
            Корзина пуста
          </h1>
        </div>
      ) : (
        <div className="shadow-lg border rounded-lg w-[600px]">
          <div className="flex flex-col p-4">
            <h1 className="mb-2 font-semibold text-3xl text-center">
              Список товаров
            </h1>
            <div>
              <div className="[&::-webkit-scrollbar-thumb]:bg-[#737975]/70 [&::-webkit-scrollbar-track]:bg-[#737975]/30 snap-mandatory snap-y [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar]:w-2 min-h-[340px] max-h-[520px] overflow-y-auto scroll-smooth">
                {cartItems.map((item) => (
                  <div
                    className="flex justify-around border-2 shadow-lg m-4 mb-4 snap-center rounded-lg"
                    key={item.id}
                  >
                    <Link className="m-4 w-1/2" href={`/product/${item.id}`}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="shadow-lg"
                      />
                    </Link>

                    <div className="flex flex-col justify-center items-center mr-4 w-1/2 text-center">
                      <span className="text-xl">
                        <h2 className="mb-2 text-xl">{item.title}</h2>
                        <span>Цена:</span>
                        {item.cost} ₽
                      </span>
                      <div className="m-2 w-1/2 text-2xl">
                        <div key={item.id}>
                          <Counter item={item} />
                        </div>

                        <Button
                          onClick={() => removeFromCart(item.id)}
                          color="inherit"
                          variant="outline"
                          className="my-2"
                        >
                          Удалить
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="flex justify-center pt-2 pb-2 text-2xl">
                Итого: {calculateTotal()} ₽
              </p>

              <Button
                className="flex mx-auto my-2"
                onClick={clearCart}
                color="inherit"
                variant="outline"
              >
                Очистить корзину
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
