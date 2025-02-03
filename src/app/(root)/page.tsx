import HomeBanner from "@/components/Home/HomeBanner";
import HomeCategory from "@/components/Home/HomeCategory";
import HomeTitle1 from "@/components/Home/HomeTitle1";
import HomeCards from "@/components/Home/HomeCards";
import HomeTitle2 from "@/components/Home/HomeTitle2";
import HomeStores from "@/components/Home/HomeStores";
import HomeAppBanner from "@/components/Home/HomeAppBanner";

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
