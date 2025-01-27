import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  IoBriefcaseOutline,
  IoGiftOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex flex-col w-[80%]">
        <div className="flex justify-between">
          <div className="flex flex-col w-[30%]">
            <div className="mb-4">
              <h2 className="flex items-center">
                <Image
                  className="drop-shadow-md"
                  src="/ShopIcon.webp"
                  alt="logo"
                  width={50}
                  height={50}
                ></Image>
                <span className="drop-shadow-md ml-1 text-3xl">MealMarket</span>
              </h2>
              <p className="mt-1 text-lg">От полки до двери – с любовью.</p>
              <img
                src="https://amkgrup.ru/upload/visa_mc_mir.png"
                alt="payment"
                width={200}
                height={50}
              />
            </div>
          </div>
          <div className="flex justify-between w-[70%]">
            <div>
              <h4 className="mb-2 font-bold text-lg">Отделы</h4>
              <ul>
                <li>Маркетинг</li>
                <li>Доставка</li>
                <li>Органические продукты</li>
                <li>Хранение</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-bold text-lg">О нас</h4>
              <ul>
                <li>О корзине</li>
                <li>Карьера</li>
                <li>Рассылка</li>
                <li>Помощь</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-bold text-lg">Услуги</h4>
              <ul>
                <li>Подарочная карта</li>
                <li>Мобильное приложение</li>
                <li>Доставка</li>
                <li>Самовывоз</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-bold text-lg">Помощь</h4>
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
        <div className="flex justify-between items-center mt-4">
          <div className="flex justify-between w-[50%]">
            <p className="flex items-end">
              <IoBriefcaseOutline size={25} className="mr-0.5" />
              Стать продавцом
            </p>
            <p className="flex items-end">
              <IoGiftOutline size={25} className="mr-0.5" />
              Подарочные карты
            </p>
            <p className="flex items-end">
              <IoHelpCircleOutline size={25} className="mr-0.5" />
              Центр помощи
            </p>
          </div>
          <div>Все права защищены | 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
