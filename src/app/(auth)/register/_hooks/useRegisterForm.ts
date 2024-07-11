import { useZodForm } from "@/hooks/useZodForm";
import { registerFormSchema } from "../_schemas/registerForm.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { API_ROUTES } from "@/config/routes";
import { RegisterFormSchema } from "../_interfaces/registerForm.interface";

export const useRegisterForm = (onSubmitCb: () => void) => {
  const generateOTPReqeust = async (body: RegisterFormSchema) => {
    return await fetch(API_ROUTES.AUTH.GENERATE_OTP_POST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const submitHandler: SubmitHandler<FieldValues> = async (values) => {
    const res = await generateOTPReqeust(values as RegisterFormSchema);
    if (res.ok) {
      console.log("OTP has been sent");
      onSubmitCb();
    } else {
      const err = await res.json();
      console.log(err);
    }
  };

  const { register, handleSubmit } = useZodForm(registerFormSchema);

  return {
    onSubmit: handleSubmit(submitHandler),
    register,
  };
};
