import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Link from "next/link";
import { Toggle } from "../components/ui/toggle";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Button } from "../components/ui/button";
import useCartStore from "@/providers/cartStore";
import useFavoritesStore from "@/providers/favoritesStore";
import Counter from "./Counter";
import { useSession } from "next-auth/react";
import CardMotion from "@/components/Motion/CardMotion";
import ButtonMotion from "@/components/Motion/ButtonMotion";
type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  cost: number;
  src: string;
  alt: string;
};

const CardItem = ({ product }: { product: Product }) => {
  const { cartItems, addToCart } = useCartStore();
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useFavoritesStore();

  const { data: session, status } = useSession();

  const handleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <CardMotion>
      <Card key={product.id} className="relative shadow-lg m-2">
        <div className="flex flex-col justify-between items-center w-[240px] h-[380px]">
          <CardHeader>
            <Link href={`/product/${product.id}`}>
              <img
                className="rounded-lg"
                src={product.src}
                alt={product.alt}
                width={150}
                height={150}
              />
            </Link>
          </CardHeader>
          {status === "authenticated" ? (
            <Toggle
              className="top-4 right-0 absolute"
              aria-label="Toggle bold"
              onClick={() => handleFavorite(product)}
            >
              {isFavorite(product.id) ? <AiFillHeart /> : <AiOutlineHeart />}
            </Toggle>
          ) : null}

          <CardContent className="flex flex-1 justify-center items-start p-4 h-[100%] text-center">
            <CardTitle>{product.title}</CardTitle>
          </CardContent>

          <CardFooter className="flex flex-col justify-center items-center">
            <CardTitle className="pb-2">{`${product.cost} ₽`}</CardTitle>
            <div className="flex justify-center mx-auto w-2/6">
              {cartItems.some(
                (item) => item.id === product.id && item.quantity >= 1
              ) ? (
                <Counter item={product} />
              ) : (
                <ButtonMotion>
                  <Button
                    onClick={() => addToCart(product)}
                    className="w-24 h-11 text-lg"
                  >
                    Купить
                  </Button>
                </ButtonMotion>
              )}
            </div>
          </CardFooter>
        </div>
      </Card>
    </CardMotion>
  );
};

export default CardItem;
