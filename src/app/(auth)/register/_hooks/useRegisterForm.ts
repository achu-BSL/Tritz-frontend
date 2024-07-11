import { useZodForm } from "@/hooks/useZodForm";
import { registerFormSchema } from "../_schemas/registerForm.schema";

export const useRegisterForm = (onSubmitCb: () => void) => {
    
  const submitHandler = (values: {}) => {
    console.log(values);
    onSubmitCb();
  };

  const {
    register,
    handleSubmit,
  } = useZodForm(registerFormSchema);

  return {
    onSubmit: handleSubmit(submitHandler),
    register
  };
};
