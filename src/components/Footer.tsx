import {
  IoBriefcaseOutline,
  IoGiftOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="flex justify-center mt-8 mr-2 mb-8 ml-2">
      <div className="flex flex-col lg:w-full max-w-5xl">
        <div className="flex justify-between">
          <div className="flex flex-col w-[30%]">
            <div className="mb-4">
              <h2 className="flex items-center">
                <Image
                  className="drop-shadow-md w-[25%]"
                  src="/ShopIcon.webp"
                  alt="logo"
                  width={50}
                  height={50}
                ></Image>
                <span className="flex-1 drop-shadow-md ml-1 text-xl sm:text-2xl md:text-3xl">
                  MealMarket
                </span>
              </h2>
              <p className="mt-1 text-sm sm:text-base md:text-lg">
                От полки до двери – с любовью.
              </p>
              <img
                className="mr-2 w-[90%]"
                src="https://amkgrup.ru/upload/visa_mc_mir.png"
                alt="payment"
                width={200}
                height={50}
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex justify-between w-[70%] text-xs sm:text-sm md:text-base">
            <div className="px-2">
              <h4 className="mb-2 font-bold text-sm sm:text-base md:text-lg">
                Отделы
              </h4>
              <ul>
                <li>Маркетинг</li>
                <li>Доставка</li>
                <li>Органические продукты</li>
                <li>Хранение</li>
              </ul>
            </div>
            <div className="px-2">
              <h4 className="mb-2 font-bold text-sm sm:text-base md:text-lg">
                О нас
              </h4>
              <ul>
                <li>О корзине</li>
                <li>Карьера</li>
                <li>Рассылка</li>
                <li>Помощь</li>
              </ul>
            </div>
            <div className="px-2">
              <h4 className="mb-2 font-bold text-sm sm:text-base md:text-lg">
                Услуги
              </h4>
              <ul>
                <li>Подарочная карта</li>
                <li>Мобильное приложение</li>
                <li>Доставка</li>
                <li>Самовывоз</li>
              </ul>
            </div>
            <div className="px-2">
              <h4 className="mb-2 font-bold text-sm sm:text-base md:text-lg">
                Помощь
              </h4>
              <ul>
                <li>Помощь с корзиной</li>
                <li>Возврат</li>
                <li>Отслеживание заказа</li>
                <li>Связаться с нами</li>
              </ul>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-end mt-4">
          <div className="flex flex-1 justify-between">
            <p className="flex items-end text-xs sm:text-sm md:text-base">
              <IoBriefcaseOutline size={25} className="mr-0.5" />
              Стать продавцом
            </p>
            <p className="flex items-end text-xs sm:text-sm md:text-base">
              <IoGiftOutline size={25} className="mr-0.5" />
              Подарочные карты
            </p>
            <p className="flex items-end text-xs sm:text-sm md:text-base">
              <IoHelpCircleOutline size={25} className="mr-0.5" />
              Центр помощи
            </p>
            <p className="ml-2 text- text-xs sm:text-sm md:text-base">
              Все права защищены | 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
