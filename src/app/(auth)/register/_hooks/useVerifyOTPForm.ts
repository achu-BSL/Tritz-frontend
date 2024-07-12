import { useZodForm } from "@/hooks/useZodForm";
import { validateOTPFormSchema } from "../_schemas/validateForm.schema";
import { ValidateOTPFORMSchema } from "../_interfaces/validateOTPForm.interface";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { API_ROUTES } from "@/config/routes";
import { useEffect } from "react";
import { useRegisterTokenStorage } from "./useRegisterTokenStorage";
import { useRouter } from "next/router";

export const useVerifyOTPForm = (onChangeEmailButtonClickCb: () => void) => {

  const { getRegisterToken } = useRegisterTokenStorage();
  const { setAccessToken } = useAccessTokenStorage();
  const token = getRegisterToken();

  const router = useRouter();

  useEffect(() => {
    console.log('token', token);
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

  const submitHandler: SubmitHandler<FieldValues & ValidateOTPFORMSchema> = async ({
    otp,
  }) => {
    const res = await validateOTPRequest(otp);
    const data = await res.json() as { msg: string, accessToken: string };
    if (res.ok) {
      setAccessToken(data.accessToken);
      router.push("/posts");
    }
  };

  const { register, handleSubmit } = useZodForm<ValidateOTPFORMSchema>(
    validateOTPFormSchema
  );

  return {
    onChangeEmailButtonClick,
    register,
    onSubmit: handleSubmit(submitHandler),
  };
};
