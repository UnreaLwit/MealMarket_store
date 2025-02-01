import useCartStore from "@/providers/cartStore";
import React from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  cost: number;
  src: string;
  alt: string;
};

type CounterProps = {
  item: Product;
};

const Counter: React.FC<CounterProps> = ({ item }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();
  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  const handleIncrement = () => {
    updateQuantity(item.id, (cartItem?.quantity || 0) + 1);
  };

  const handleDecrement = () => {
    if (cartItem?.quantity && cartItem.quantity > 1) {
      updateQuantity(item.id, cartItem.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <form className="flex justify-center">
      <div className="flex justify-center items-center">
        <button
          onClick={handleDecrement}
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
          value={cartItem?.quantity || 0}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          type="text"
          id={`quantity-input-${item.id}`}
          data-input-counter
          aria-describedby="helper-text-explanation"
          className="block border-gray-300 border-x-0 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 py-2.5 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 w-[30%] h-11 text-center text-gray-900 text-lg dark:text-white dark:placeholder-gray-400"
          placeholder="0"
          required
        />
        <button
          onClick={handleIncrement}
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
  );
};

export default Counter;
