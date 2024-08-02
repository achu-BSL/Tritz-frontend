import { useZodForm } from "@/hooks/useZodForm";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { EmailFormSchema } from "../_interfaces/emailForm";
import { emailFormSchema } from "../_schemas/emailForm";
import toast from "react-hot-toast";
import { generateResetOTPRequest } from "../_helpers/emailForm.";
import { useState } from "react";

export const useEmailForm = (onValidCb: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, clearErrors } =
    useZodForm<EmailFormSchema>(emailFormSchema);

  const onValid: SubmitHandler<EmailFormSchema> = async ({ email }) => {
    setIsLoading(true);
    const res = await generateResetOTPRequest(email);
    setIsLoading(false);
    if (res.ok) {
      toast.success("Varification OTP has been sent");
      onValidCb();
    } else {
      const err = ((await res.json()) as { msg?: string }) || {};
      toast.error(err.msg || "Something went wrong, please try again later");
    }
  };

  const onInValid: SubmitErrorHandler<EmailFormSchema> = ({ email }) => {
    if (email) toast.error(email.message || "Invalid email");
    clearErrors();
  };

  return {
    register,
    submitHandler: handleSubmit(onValid, onInValid),
    isLoading
  };
};
