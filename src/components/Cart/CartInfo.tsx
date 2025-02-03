import { SelectSeparator } from "../ui/select";

const CartInfo = () => {
  return (
    <div className="flex flex-col shadow-lg m-4 p-4 border rounded-lg w-[600px]">
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
  );
};

export default CartInfo;
