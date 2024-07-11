import { z } from "zod";
import { registerFormSchema } from "../_schemas/registerForm.schema";

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;