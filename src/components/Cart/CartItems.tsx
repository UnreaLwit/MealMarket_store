import React from "react";
import { Button } from "../ui/button";
import useCartStore from "@/providers/ZustandContext";
import Link from "next/link";

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
                      <div className="m-2 text-2xl">
                        <form className="flex justify-center mx-auto my-2 max-w-xs">
                          <div className="relative flex items-center max-w-[8rem]">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              type="button"
                              id={`decrement-button-${item.id}`}
                              key={item.id}
                              data-input-counter-decrement="quantity-input"
                              className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:hover:bg-gray-600 hover:bg-gray-200 dark:bg-gray-700 p-3 border rounded-s-lg focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 h-11 transition-all focus:outline-none"
                            >
                              <svg
                                className="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <input
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value)
                                )
                              }
                              type="text"
                              id={`quantity-input-${item.id}`}
                              data-input-counter
                              aria-describedby="helper-text-explanation"
                              className="block border-gray-300 border-x-0 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 py-2.5 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 w-full h-11 text-center text-gray-900 text-sm dark:text-white dark:placeholder-gray-400"
                              placeholder="0"
                              required
                            />
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              type="button"
                              id={`increment-button-${item.id}`}
                              data-input-counter-increment="quantity-input"
                              className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:hover:bg-gray-600 hover:bg-gray-200 dark:bg-gray-700 p-3 border rounded-e-lg focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 h-11 transition-all focus:outline-none"
                            >
                              <svg
                                className="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </form>

                        <Button
                          onClick={() => removeFromCart(item.id)}
                          color="inherit"
                          variant="outline"
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
