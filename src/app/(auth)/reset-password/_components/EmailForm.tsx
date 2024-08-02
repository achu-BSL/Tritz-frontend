import { IEmailFormProps } from "../_interfaces/emailForm";

import { useEmailForm } from "../_hooks/useEmailForm";
import { LuLoader2 } from "react-icons/lu";
import { Input } from "@/components/Input";

export const EmailForm = ({ submitCb }: IEmailFormProps) => {
  const { submitHandler, register, isLoading } = useEmailForm(submitCb);

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      <Input
        label="Email"
        {...register("email")}
        type="email"
        placeholder="enter your email"
      />
      <button
        disabled={isLoading}
        className="bg-secondary hover:bg-secondary/90 py-2 font-raleway font-medium rounded-lg disabled:bg-primary/40"
      >
        {isLoading ? (
          <p className="flex gap-2 justify-center items-center text-black/60">
            loading <LuLoader2 size={20} className="animate-spin" />
          </p>
        ) : (
          "Continue"
        )}
      </button>
    </form>
  );
};
