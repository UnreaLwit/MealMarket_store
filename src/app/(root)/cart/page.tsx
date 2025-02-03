import CartDetails from "@/components/Cart/CartDetails";
import CartInfo from "@/components/Cart/CartInfo";
import CartItems from "@/components/Cart/CartItems";

const CartPage = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto">
      <div className="flex flex-col">
        <CartItems />
        <CartInfo />
      </div>
      <CartDetails />
    </div>
  );
};
export default CartPage;
