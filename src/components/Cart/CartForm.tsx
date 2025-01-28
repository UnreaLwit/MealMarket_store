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

const CartForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Ошибки появляются после потери фокуса
    reValidateMode: "onChange", // Перевалидация после потери фокуса
    defaultValues: {
      name: "",
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-lg">Имя</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {fieldState.isTouched && (
                <FormMessage>{fieldState.error?.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel className="text-lg">Номер карты</FormLabel>
              <FormControl>
                <Input {...field} maxLength={16} inputMode="numeric" />
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
              <FormLabel className="text-lg">Дата истечения</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  maxLength={5}
                  inputMode="numeric"
                  placeholder="MM/YY"
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
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-lg">CVV</FormLabel>
              <FormControl>
                <Input {...field} maxLength={4} inputMode="numeric" />
              </FormControl>
              {fieldState.isTouched && (
                <FormMessage>{fieldState.error?.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <Button type="submit">Заказать</Button>
      </form>
    </Form>
  );
};

export default CartForm;
