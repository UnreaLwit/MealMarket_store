"use client";
import CartDetails from "@/components/Cart/CartDetails";
import CartInfo from "@/components/Cart/CartInfo";
import CartItems from "@/components/Cart/CartItems";

const CartPage = () => {
  return (
    <div className="w-full">
      <div className="mx-auto min-w-36 max-w-4xl min-h-[70vh] text-pretty container">
        <div className="flex flex-row justify-center mt-4">
          <div className="flex flex-col">
            <CartItems />
            <CartInfo />
          </div>

          <CartDetails />
        </div>
      </div>
    </div>
  );
};
export default CartPage;
