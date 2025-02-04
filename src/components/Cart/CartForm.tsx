"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "./schema";
import useCartStore from "@/providers/cartStore";
import MaskedInput from "./MaskedInput";
import ButtonMotion from "../Motion/ButtonMotion";

const CartForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { cartItems, clearCart } = useCartStore();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
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

  const onSubmit = (data: FormValues) => {
    if (cartItems.length > 0) {
      setModalMessage("Заказ успешно оформлен! \n Мы скоро свяжемся с вами.");
      setIsModalOpen(true);
    } else {
      setModalMessage("Добавьте товары в корзину!");
      setIsModalOpen(true);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = e.target.value;
    setValue("phone", maskedValue, { shouldValidate: true });
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (cartItems.length > 0) {
      clearCart();
      form.reset();
      setTimeout(() => {
        redirect("/");
      }, 1000);
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
                <FormLabel className="text-base">Имя</FormLabel>
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
                <FormLabel className="text-base">Email</FormLabel>
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
                <FormLabel className="text-base">Телефон</FormLabel>
                <FormControl>
                  <MaskedInput
                    mask="+{0} (000) 000-00-00"
                    placeholder="+7 (999) 999-99-99"
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
                <FormLabel className="text-base">Номер карты</FormLabel>
                <FormControl>
                  <MaskedInput
                    mask="0000 0000 0000 0000"
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
                <FormLabel className="text-base">Дата истечения</FormLabel>
                <FormControl>
                  <MaskedInput mask="00/00" placeholder="MM/YY" {...field} />
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
                <FormLabel className="text-base">CVV</FormLabel>
                <FormControl>
                  <Input
                    placeholder="CVV"
                    maxLength={4}
                    inputMode="numeric"
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
