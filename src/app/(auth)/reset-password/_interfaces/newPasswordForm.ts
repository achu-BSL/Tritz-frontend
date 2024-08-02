import { z } from "zod";
import { newPasswordFormSchema } from "../_schemas/newPasswordForm";

export type NewPasswordFormSchema = z.infer<typeof newPasswordFormSchema>;

export interface INewPasswordFormProps {
  onSuccessCB: () => void;
  onUnauthorizedErrorCB: () => void;
}
