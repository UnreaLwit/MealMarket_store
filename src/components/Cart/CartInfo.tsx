import React from "react";
import { SelectSeparator } from "../ui/select";

const CartInfo = () => {
  return (
    <div>
      <div className="shadow-lg mt-4 mb-4 border rounded-lg w-[600px]">
        <div className="flex flex-col m-4">
          <h2 className="mb-2 text-4xl text-center">Информация о доставке</h2>
          <span className="text-lg">
            После оплаты заказа мы свяжемся с вами и уточним детали доставки.
            <br />
            <SelectSeparator className="my-2" />
            Адрес: ул. Московская, д. 15, кв. 20 <br />
            Телефон: +7 916 123 45 67 <br />
            Email: dostavka@MealMarket.ru
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
