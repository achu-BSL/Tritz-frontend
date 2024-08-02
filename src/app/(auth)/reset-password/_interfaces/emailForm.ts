import { z } from "zod";
import { emailFormSchema } from "../_schemas/emailForm";

export type EmailFormSchema = z.infer<typeof emailFormSchema>;

export interface IEmailFormProps {
  submitCb: () => void;
}
