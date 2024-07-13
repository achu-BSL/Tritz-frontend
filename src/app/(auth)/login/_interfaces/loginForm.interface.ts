import { z } from "zod";
import { loginSchema } from "../_schema/login.schema";

export type LoginSchema = z.infer<typeof loginSchema>;
