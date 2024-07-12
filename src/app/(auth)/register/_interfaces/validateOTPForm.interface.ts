import { z } from "zod";
import { validateOTPFormSchema } from "../_schemas/validateForm.schema";

export type ValidateOTPFORMSchema = z.infer<typeof validateOTPFormSchema>;
