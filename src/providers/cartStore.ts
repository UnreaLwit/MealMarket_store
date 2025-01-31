import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  cost: number;
  src: string;
  alt: string;
};
type TCartItem = TProduct & {
  quantity: number;
};

type TCartState = {
  cartItems: TCartItem[];
  addToCart: (product: TProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};
const useCartStore = create<TCartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (product: TProduct) =>
        set((state) => {
          const existingItemIndex = state.cartItems.findIndex(
            (item) => item.id === product.id
          );
          if (existingItemIndex !== -1) {
            const updatedCart = [...state.cartItems];
            updatedCart[existingItemIndex].quantity++;
            return { cartItems: updatedCart };
          }
          const newCartItem = { ...product, quantity: 1 };
          return { cartItems: [...state.cartItems, newCartItem] };
        }),
      removeFromCart: (productId: number) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId: number, quantity: number) =>
        set((state) => {
          if (quantity === 0 || quantity < 0 || Number.isNaN(quantity)) {
            return {
              cartItems: state.cartItems.filter(
                (item) => item.id !== productId
              ),
            };
          }
          const updatedCart = state.cartItems.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          );
          return { cartItems: updatedCart };
        }),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage",
      storage:
        typeof window !== "undefined"
          ? createJSONStorage(() => localStorage)
          : {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            },
    }
  )
);

export default useCartStore;
