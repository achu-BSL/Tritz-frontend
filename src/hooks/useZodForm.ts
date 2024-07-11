import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { Schema } from "zod";

export const useZodForm = <T extends FieldValues>(schema: Schema) =>
  useForm<T>({
    resolver: zodResolver(schema),
  });
