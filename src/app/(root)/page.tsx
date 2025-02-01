import HomeAppBanner from "@/components/Home/HomeAppBanner";
import HomeBanner from "@/components/Home/HomeBanner";
import { HomeCards } from "@/components/Home/HomeCards";
import { HomeCategory } from "@/components/Home/HomeCategory";
import HomeStores from "@/components/Home/HomeStores";
import HomeTitle1 from "@/components/Home/HomeTitle1";
import HomeTitle2 from "@/components/Home/HomeTitle2";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeCategory />
      <HomeTitle1 />
      <HomeCards />
      <HomeTitle2 />
      <HomeStores />
      <HomeAppBanner />
    </>
  );
}
