import React from "react";
import { FaCcApplePay, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import CartForm from "./CartForm";

const CartDetails = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center border-2 shadow-lg ml-4 p-4 rounded-lg w-[250px] h-fit text-center">
        <h2 className="mb-2 font-semibold text-3xl">Детали платежа</h2>
        <div>
          <ul className="border-2 mb-2 rounded-lg">
            <li>Оплата курьеру</li>
            <li className="border-2 border-t-2 border-r-0 border-l-0">
              Apple Pay
            </li>
            <li>Кредитная или дебетовая карта</li>
          </ul>
          <div className="flex flex-row justify-around">
            <FaCcVisa size={50} />
            <FaCcMastercard size={50} />
            <FaCcApplePay size={50} />
          </div>
          <CartForm />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
