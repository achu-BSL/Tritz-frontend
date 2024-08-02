import { useZodForm } from "@/hooks/useZodForm";
import { useState } from "react";
import { OTPFormSchema } from "../_interfaces/otpForm";
import { otpFormSchema } from "../_schemas/otpForm";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { verifyResetPasswordOTPRequest } from "../_helpers/otpForm";

export const useOTPForm = (
  onSuccessCB: () => void,
  onUnauthorizedErrorCB: () => void
) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, clearErrors } =
    useZodForm<OTPFormSchema>(otpFormSchema);

  const onValid: SubmitHandler<OTPFormSchema> = async ({ otp }) => {
    setIsLoading(true);
    const res = await verifyResetPasswordOTPRequest(otp);
    setIsLoading(false);
    if (res.ok) {
      toast.success("Email has been varified");
      onSuccessCB();
    } else {
      if (res.status === 401) {
        toast.error("Unauthorized request, Please try again");
        onUnauthorizedErrorCB();
      }
      const err = (await res.json()) as { msg?: string };
      toast.error(err.msg || "Something went wrong, please try again later");
    }
  };

  const onInvalid: SubmitErrorHandler<OTPFormSchema> = ({ otp }) => {
    if (otp) toast.error(otp.message || "Invalid otp");
    clearErrors();
  };

  return {
    submitHandler: handleSubmit(onValid, onInvalid),
    register,
    isLoading,
  };
};
