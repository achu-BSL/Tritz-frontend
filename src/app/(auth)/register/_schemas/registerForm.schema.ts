import { z } from "zod";

export const registerFormSchema = z
  .object({
    username: z
      .string()
      ?.trim()
      .min(4, "Username must contain atleast 4 characters"),
    email: z.string().trim().email(),
    password: z
      .string()
      .trim()
      .min(8, "Password must contain atleast 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password not match",
    path: ["confirmPassword"],
  });
