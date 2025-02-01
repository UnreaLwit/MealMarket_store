import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Имя обязательно" })
    .max(25, { message: "Имя не должно превышать 25 символов" }),
  email: z
    .string()
    .email({ message: "Неверный формат email" })
    .max(25, { message: "Email не должен превышать 25 символов" }),
  phone: z
    .string()
    .min(18, { message: "Телефон должен быть в формате +7 (999) 999-99-99" }),
  cardNumber: z
    .string()
    .min(19, { message: "Номер карты должен быть не менее 19 символов" }),
  expiryDate: z
    .string()
    .min(5, { message: "Дата истечения должна быть в формате MM/YY" })
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: "Дата истечения должна быть в формате MM/YY",
    }),
  cvv: z
    .string()
    .min(3, { message: "CVV должен быть не менее 3 символов" })
    .regex(/^\d+$/, { message: "CVV должен содержать только цифры" }),
});

export type FormValues = z.infer<typeof formSchema>;
