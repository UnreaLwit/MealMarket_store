"use client";
import CartDetails from "@/components/Cart/CartDetails";
import CartInfo from "@/components/Cart/CartInfo";
import CartItems from "@/components/Cart/CartItems";

const CartPage = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col">
          <CartItems />
          <CartInfo />
        </div>

        <CartDetails />
      </div>
    </div>
  );
};
export default CartPage;
