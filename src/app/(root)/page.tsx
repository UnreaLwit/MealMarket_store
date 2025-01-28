import HomeAppBanner from "@/components/Home/HomeAppBanner";
import HomeBanner from "@/components/Home/HomeBanner";
import { HomeCards } from "@/components/Home/HomeCards";
import { HomeCategory } from "@/components/Home/HomeCategory";
import HomeStores from "@/components/Home/HomeStores";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeCategory />
      <div className="flex justify-end items-center mb-8">
        <h1 className="mr-72 text-4xl">Популярные товары</h1>
        <Link className="flex items-center text-xl" href="/shop">
          Больше товаров
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <HomeCards />
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-4xl">Магазины партнеры</h1>
      </div>
      <HomeStores />
      <HomeAppBanner />
    </>
  );
}
