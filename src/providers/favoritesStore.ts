import { TFavoritesState, TProduct } from "@/types/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFavoritesStore = create<TFavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addToFavorites: (product: TProduct) =>
        set((state) => {
          const existingItemIndex = state.favorites.findIndex(
            (item) => item.id === product.id
          );
          if (existingItemIndex === -1) {
            return { favorites: [...state.favorites, product] };
          }
          return { favorites: state.favorites };
        }),
      removeFromFavorites: (productId: number) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== productId),
        })),
      isFavorite: (productId: number) => {
        const state = get();
        return state.favorites.some((item) => item.id === productId);
      },
    }),
    {
      name: "favorites-storage",
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

export default useFavoritesStore;
