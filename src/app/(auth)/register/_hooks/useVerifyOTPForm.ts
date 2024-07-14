import { validateOTPFormSchema } from "../_schemas/validateForm.schema";
import { ValidateOTPFORMSchema } from "../_interfaces/validateOTPForm.interface";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { API_ROUTES } from "@/config/routes";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useZodForm } from "@/hooks/useZodForm";
import { useState } from "react";

export const useVerifyOTPForm = (onChangeEmailButtonClickCb: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useZodForm<ValidateOTPFORMSchema>(
    validateOTPFormSchema
  );

  const onChangeEmailButtonClick = () => {
    onChangeEmailButtonClickCb();
  };

  const validateOTPRequest = async (otp: string) => {
    return await fetch(API_ROUTES.AUTH.VALIDATE_OTP_POST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp }),
      credentials: "include",
    });
  };

  const onValid: SubmitHandler<FieldValues & ValidateOTPFORMSchema> = async ({
    otp,
  }) => {
    setIsLoading(true);
    const res = await validateOTPRequest(otp);
    setIsLoading(false);
    const data = (await res.json()) as { msg: string; accessToken: string };
    if (res.ok) {
      toast.success("Validation successfully");
      router.push("/posts");
    } else {
      toast.error(data.msg);
    }
  };

  const onInValid: SubmitErrorHandler<ValidateOTPFORMSchema> = ({ otp }) => {
    if (otp) toast.error(otp.message!);
  };

  return {
    onChangeEmailButtonClick,
    register,
    onSubmit: handleSubmit(onValid, onInValid),
    isLoading,
  };
};
