import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 character long" })
    .max(255, { message: "Name must be at least 255 characters long" }),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  number: z.string().optional(),
});

export const AuthFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 character long" })
    .max(255, { message: "Name must be at least 255 characters long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(255, { message: "Password must be at least 255 characters long" }),
    otp:z.string().min(1,{message:"OTP is required"}),
});
