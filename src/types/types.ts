export type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  cost: number;
  src: string;
  alt: string;
};

export type TMaskedInputProps = {
  mask: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export type TShopFilter = {
  category: string;
  price: string;
  alphabet: string;
};

export type TShopFilterProps = {
  filter: TShopFilter;
  onFilterChange: (newFilter: TShopFilter) => void;
  handleResetFilters: () => void;
};

export type TCounterProps = {
  item: TProduct;
};

export type TCartItem = TProduct & {
  quantity: number;
};

export type TCartState = {
  cartItems: TCartItem[];
  addToCart: (product: TProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

export type TFavoritesState = {
  favorites: TProduct[];
  addToFavorites: (product: TProduct) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
};
