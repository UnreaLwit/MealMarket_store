"use client";
import useFavoritesStore from "@/providers/favoritesStore";
import CardItem from "@/utils/CardItem";

const FavPage = () => {
  const { favorites } = useFavoritesStore();

  return (
    <div className="mb-8 text-center">
      {favorites.length === 0 ? (
        <h1 className="mb-8 text-4xl">Добавьте товар в избранное!</h1>
      ) : (
        <div className="flex flex-col">
          <h1 className="mb-8 text-4xl">Избранное</h1>
          <div className="flex flex-wrap justify-center">
            {favorites.map((product) => (
              <div key={product.id}>
                <CardItem product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavPage;
