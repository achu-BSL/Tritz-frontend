import { useZodForm } from "@/hooks/useZodForm";
import { registerFormSchema } from "../_schemas/registerForm.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { API_ROUTES } from "@/config/routes";
import { RegisterFormSchema } from "../_interfaces/registerForm.interface";
import { useRegisterTokenStorage } from "./useRegisterTokenStorage";

export const useRegisterForm = (onSubmitCb: () => void) => {

  const { setRegisterToken } = useRegisterTokenStorage();

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
    const data = await res.json() as { msg: string, registerToken: string };
    if (res.ok) {
      console.log("OTP has been sent");
      setRegisterToken(data.registerToken);
      onSubmitCb();
    } else {
      console.log(data.msg);
    }
  };

  const { register, handleSubmit } = useZodForm(registerFormSchema);

  return {
    onSubmit: handleSubmit(submitHandler),
    register,
  };
};
