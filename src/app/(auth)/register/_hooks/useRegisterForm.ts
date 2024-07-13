import { useZodForm } from "@/hooks/useZodForm";
import { registerFormSchema } from "../_schemas/registerForm.schema";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { API_ROUTES } from "@/config/routes";
import { RegisterFormSchema } from "../_interfaces/registerForm.interface";
import toast from "react-hot-toast";

export const useRegisterForm = (onSubmitCb: () => void) => {
  const { register, handleSubmit, clearErrors } =
    useZodForm<RegisterFormSchema>(registerFormSchema);

  const generateOTPReqeust = async (body: RegisterFormSchema) => {
    return await fetch(API_ROUTES.AUTH.GENERATE_OTP_POST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    });
  };

  const onValid: SubmitHandler<FieldValues> = async (values) => {
    const res = await generateOTPReqeust(values as RegisterFormSchema);
    const data = (await res.json()) as { msg: string; registerToken: string };
    if (res.ok) {
      toast.success("OTP has been sent to your email");
      onSubmitCb();
    } else {
      toast.error(data.msg);
    }
  };

  const onInValid: SubmitErrorHandler<RegisterFormSchema> = ({
    email,
    username,
    password,
    confirmPassword,
  }) => {
    if (email) toast.error(email.message!);
    else if (username) toast.error(username.message!);
    else if (password) toast.error(password.message!);
    else if (confirmPassword) toast.error(confirmPassword.message!);

    clearErrors();
  };

  return {
    onSubmit: handleSubmit(onValid, onInValid),
    register,
  };
};
