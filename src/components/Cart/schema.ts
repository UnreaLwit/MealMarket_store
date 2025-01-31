import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Имя обязательно" }),
  email: z.string().email({ message: "Неверный формат email" }),
  phone: z
    .string()
    .min(17, { message: "Телефон должен быть в формате +7 (999) 999-99-99" })
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, {
      message: "Телефон должен быть в формате +7 (999) 999-99-99",
    }),
  cardNumber: z
    .string()
    .min(13, { message: "Номер карты должен быть не менее 13 символов" })
    .max(16, { message: "Номер карты должен быть не более 16 символов" })
    .regex(/^\d+$/, { message: "Номер карты должен содержать только цифры" }),
  expiryDate: z
    .string()
    .min(5, { message: "Дата истечения обязательна" })
    .max(5, { message: "Дата истечения должна быть в формате MM/YY" })
    .regex(/^\d{2}\/\d{2}$/, {
      message: "Дата истечения должна быть в формате MM/YY",
    }),
  cvv: z
    .string()
    .min(3, { message: "CVV должен быть не менее 3 символов" })
    .max(4, { message: "CVV должен быть не более 4 символов" })
    .regex(/^\d+$/, { message: "CVV должен содержать только цифры" }),
});

export type FormValues = z.infer<typeof formSchema>;
