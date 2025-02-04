"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import useCartStore from "@/providers/cartStore";
import CartMotion from "../Motion/CartMotion";
import Counter from "@/utils/Counter";
import CounterMotion from "../Motion/CounterMotion";
import ButtonMotion from "../Motion/ButtonMotion";

const CartItems = () => {
  const { cartItems, removeFromCart, clearCart } = useCartStore();

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);

  const handleClearCart = () => {
    clearCart();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="shadow-lg border rounded-lg w-[600px]">
          <h1 className="p-4 text-4xl text-center">Корзина пуста</h1>
        </div>
      ) : (
        <div className="shadow-lg border rounded-lg w-[600px]">
          <div className="flex flex-col p-4">
            <div>
              <div className="[&::-webkit-scrollbar-thumb]:bg-[#737975]/70 [&::-webkit-scrollbar-track]:bg-[#737975]/30 snap-proximity snap-y [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar]:w-2 min-h-[340px] max-h-[660px] overflow-x-hidden overflow-y-auto scroll-smooth">
                {cartItems.map((item) => (
                  <CartMotion key={item.id}>
                    <div
                      className="flex justify-around border-2 shadow-lg m-12 mt-4 mb-10 snap-center rounded-lg"
                      key={item.id}
                    >
                      <Link className="m-4 w-1/2" href={`/product/${item.id}`}>
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="shadow-lg"
                          loading="lazy"
                        />
                      </Link>

                      <div className="flex flex-col justify-center items-center mr-4 w-1/2 text-center">
                        <span className="text-xl">
                          <h2 className="mb-2 text-2xl">{item.title}</h2>
                          <span>Цена:</span>
                          {item.cost} ₽
                        </span>
                        <div className="m-2 text-2xl">
                          <div key={item.id}>
                            <CounterMotion>
                              <Counter item={item} />
                            </CounterMotion>
                          </div>
                          <ButtonMotion>
                            <Button
                              onClick={() => removeFromCart(item.id)}
                              color="inherit"
                              variant="outline"
                              className="my-2"
                            >
                              Удалить
                            </Button>
                          </ButtonMotion>
                        </div>
                      </div>
                    </div>
                  </CartMotion>
                ))}
              </div>

              <p className="flex justify-center my-4 text-2xl">
                Итого: {calculateTotal()} ₽
              </p>
              <ButtonMotion>
                <Button
                  className="flex mx-auto my-2"
                  onClick={handleClearCart}
                  color="inherit"
                  variant="outline"
                >
                  Очистить корзину
                </Button>
              </ButtonMotion>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
