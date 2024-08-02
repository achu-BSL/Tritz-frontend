import { z } from "zod";

export const otpFormSchema = z.object({
    otp: z.string().trim().length(4, "OTP Should be 4 number")
})