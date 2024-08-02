import { Input } from "@/components/Input";
import { LuLoader2 } from "react-icons/lu";
import { useNewPasswordForm } from "../_hooks/useNewPasswordForm";
import { INewPasswordFormProps } from "../_interfaces/newPasswordForm";

export default function NewPasswordForm({
  onSuccessCB,
  onUnauthorizedErrorCB,
}: INewPasswordFormProps) {
  const { register, isLoading, submitHandler } = useNewPasswordForm(
    onSuccessCB,
    onUnauthorizedErrorCB
  );

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      <Input
        label="new-password"
        {...register("newPassword")}
        type="password"
        placeholder="Enter new password"
      />
      <Input
        label="confirm-password"
        {...register("confirmPassword")}
        type="password"
        placeholder="re-enter password"
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
          "Reset"
        )}
      </button>
    </form>
  );
}
