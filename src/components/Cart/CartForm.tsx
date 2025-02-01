import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema, FormValues } from "./schema";
import MaskedInput from "./MaskedInput";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import useCartStore from "@/providers/cartStore";
import { redirect } from "next/navigation";
import ButtonMotion from "../Motion/ButtonMotion";

const CartForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState(""); // Состояние для сообщения в модальном окне
  const { cartItems, clearCart } = useCartStore();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = form;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = e.target.value;
    setValue("phone", maskedValue, { shouldValidate: true });
  };

  const onSubmit = (data: FormValues) => {
    if (cartItems.length > 0) {
      setModalMessage("Заказ успешно оформлен! \n Мы скоро свяжемся с вами."); // Устанавливаем сообщение об успешном заказе
      setIsModalOpen(true);
    } else {
      setModalMessage("Добавьте товары в корзину!"); // Устанавливаем сообщение о пустой корзине
      setIsModalOpen(true);
    }
  };
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setIsModalOpen(true); // Открываем модальное окно только программно
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    if (cartItems.length > 0) {
      clearCart();
      form.reset();
      setTimeout(() => {
        // Устанавливаем таймер на 1 секунду
        redirect("/"); // Перенаправляем на "/" после очистки корзины
      }, 1000); // 1000 миллисекунд = 1 секунда
    }
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Введите ваше имя"
                    maxLength={25}
                    {...field}
                  />
                </FormControl>
                {errors.name && (
                  <FormMessage>{errors.name.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Введите ваш email"
                    maxLength={25}
                    {...field}
                  />
                </FormControl>
                {errors.email && (
                  <FormMessage>{errors.email.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            rules={{
              required: "Поле телефон обязательно",
            }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <MaskedInput // Используем наш компонент MaskedInput
                    mask="+{0} (000) 000-00-00"
                    placeholder="+1 (___) ___-__-__"
                    {...field}
                    onChange={handlePhoneChange}
                  />
                </FormControl>
                {fieldState.isTouched && (
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Номер карты</FormLabel>
                <FormControl>
                  <MaskedInput
                    mask="0000 0000 0000 0000" // Маска для номера карты
                    placeholder="0000 0000 0000 0000"
                    {...field}
                  />
                </FormControl>
                {fieldState.isTouched && (
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Дата истечения</FormLabel>
                <FormControl>
                  <MaskedInput
                    mask="00/00" // Маска для даты
                    placeholder="MM/YY"
                    {...field}
                  />
                </FormControl>
                {fieldState.isTouched && (
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input
                    placeholder="CVV"
                    maxLength={4}
                    inputMode="numeric" // Разрешаем ввод только цифр
                    {...field}
                  />
                </FormControl>
                {errors.cvv && <FormMessage>{errors.cvv.message}</FormMessage>}
              </FormItem>
            )}
          />
          <ButtonMotion>
            <Button type="submit">Отправить</Button>
          </ButtonMotion>
        </form>
      </Form>
      <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              {modalMessage}
            </DialogTitle>
          </DialogHeader>
          <Button className="mx-auto" onClick={handleCloseModal}>
            Закрыть
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CartForm;
