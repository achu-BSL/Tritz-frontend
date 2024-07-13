import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z
    .string()
    .trim()
    .min(8, "Password must contain atleast 8 characters"),
});
