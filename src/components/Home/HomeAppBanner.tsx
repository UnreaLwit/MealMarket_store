import Link from "next/link";

const HomeAppBanner = () => {
  return (
    <div className="flex justify-center items-center shadow-lg mx-2 border rounded-lg max-w-5xl h-auto container">
      <div className="flex flex-col justify-start items-start m-10 w-[40%]">
        <h1 className="mb-4 font-extrabold text-3xl md:text-4xl">
          Оставайся дома и получи все необходимое из нашего магазина!
        </h1>
        <h2 className="mb-4 font-semibold text-xl md:text-2xl">
          Скачай приложение из Google Play или App Store
        </h2>
        <div className="flex justify-around items-center">
          <Link
            className="w-[45%]"
            target="_blank"
            href="https://play.google.com"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/ru_badge_web_generic.png"
              alt="google play"
              className="object-contain"
            />
          </Link>
          <Link
            className="w-[45%]"
            target="_blank"
            href="https://www.apple.com/app-store/"
          >
            <img
              src="https://retail.ch-sk.ru/UserFiles/Publications//6b8df6fc-ba8a-41e8-83e8-3b108848877a/app_store_2x.png"
              alt="apple store"
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      <img
        className="max-w-[50%] object-contain"
        src="https://rabota.magnit.ru/app/courier_bicycle_mob.ea90604c.png"
        alt="корзина"
        width={500}
        height={500}
      />
    </div>
  );
};

export default HomeAppBanner;
