import { z } from "zod";

export const newPasswordFormSchema = z
  .object({
    newPassword: z.string().trim().min(8, "Password must contains 8 character"),
    confirmPassword: z.string().trim(),
  })
  .refine(
    ({ newPassword, confirmPassword }) => newPassword === confirmPassword,
    {
      message: "Confirm password not match",
      path: ["confirmPassword"],
    }
  );
