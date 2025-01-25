"use client";
import { useParams } from "next/navigation";

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Product 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Product 4", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Product 5", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Product 6", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Product 7", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Product 8", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Product 9", image: "https://via.placeholder.com/150" },
];

export default function ProductPage() {
  const params = useParams();
  const { id } = params as { id: string };

  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 font-bold text-2xl">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 rounded w-64 h-64"
      />
      <p className="text-gray-700">Описание: {product.name}</p>
    </div>
  );
}
