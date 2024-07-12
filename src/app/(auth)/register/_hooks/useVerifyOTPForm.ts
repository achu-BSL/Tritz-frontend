import { validateOTPFormSchema } from "../_schemas/validateForm.schema";
import { ValidateOTPFORMSchema } from "../_interfaces/validateOTPForm.interface";
import { FieldValues, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { API_ROUTES } from "@/config/routes";
import toast from "react-hot-toast";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRegisterTokenStorage } from "./useRegisterTokenStorage";
import { useZodForm } from "@/hooks/useZodForm";
import { useAccessTokenStorage } from "@/hooks/useAccessTokenStorage";

export const useVerifyOTPForm = (onChangeEmailButtonClickCb: () => void) => {

  const { getRegisterToken } = useRegisterTokenStorage();
  const { setAccessToken } = useAccessTokenStorage();
  const token = getRegisterToken();

  const router = useRouter();
  const { register, handleSubmit } = useZodForm<ValidateOTPFORMSchema>(
    validateOTPFormSchema
  );

  useEffect(() => {
    if (!token) onChangeEmailButtonClickCb();
  }, []);


  const onChangeEmailButtonClick = () => {
    onChangeEmailButtonClickCb();
  };

  const validateOTPRequest = async (otp: string) => {
    return await fetch(API_ROUTES.AUTH.VALIDATE_OTP_POST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ otp }),
    });
  };

  const onValid: SubmitHandler<FieldValues & ValidateOTPFORMSchema> = async ({
    otp,
  }) => {
    const res = await validateOTPRequest(otp);
    const data = await res.json() as { msg: string, accessToken: string };
    if (res.ok) {
      toast.success('Validation successfully');
      setAccessToken(data.accessToken);
      router.push("/posts");
    } else {
      toast.error(data.msg);
    }
  };

  const onInValid: SubmitErrorHandler<ValidateOTPFORMSchema> = ({ otp }) => {
    if (otp) toast.error(otp.message!);
  }

  return {
    onChangeEmailButtonClick,
    register,
    onSubmit: handleSubmit(onValid, onInValid),
  };
};
