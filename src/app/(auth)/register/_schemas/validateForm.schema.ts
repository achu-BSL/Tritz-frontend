import { z } from "zod";

export const validateOTPFormSchema = z.object({
  otp: z.string().min(4, "Invalid otp"),
});
