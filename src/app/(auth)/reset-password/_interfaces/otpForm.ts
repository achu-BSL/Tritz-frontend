import { z } from "zod";
import { otpFormSchema } from "../_schemas/otpForm";

export type OTPFormSchema = z.infer<typeof otpFormSchema>;

export interface IOTPFormProps {
  onSuccessCB: () => void;
  onUnauthorizedErrorCB: () => void;
}
