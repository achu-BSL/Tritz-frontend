import { useZodForm } from "@/hooks/useZodForm";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { NewPasswordFormSchema } from "../_interfaces/newPasswordForm";
import { newPasswordFormSchema } from "../_schemas/newPasswordForm";
import { resetPasswordRequest } from "../_helpers/newPasswordForm";

export const useNewPasswordForm = (
  onSuccessCB: () => void,
  onUnauthorizedErrorCB: () => void
) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, clearErrors } =
    useZodForm<NewPasswordFormSchema>(newPasswordFormSchema);

  const onValid: SubmitHandler<NewPasswordFormSchema> = async ({
    newPassword,
  }) => {
    setIsLoading(true);
    const res = await resetPasswordRequest(newPassword);
    setIsLoading(false);
    if (res.ok) {
      toast.success("Password has been reseted");
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

  const onInvalid: SubmitErrorHandler<NewPasswordFormSchema> = ({
    newPassword,
    confirmPassword,
  }) => {
    let errorMsg = "Invalid fields";
    if (newPassword)
      errorMsg =
        newPassword.message || "Password must contains at least 8 character";
    else if (confirmPassword)
      errorMsg = confirmPassword.message || "Confirm password not match";

    toast.error(errorMsg);
    clearErrors();
  };

  return {
    submitHandler: handleSubmit(onValid, onInvalid),
    register,
    isLoading,
  };
};
