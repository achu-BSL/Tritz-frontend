import { Input } from "@/components/Input";
import { LuLoader2 } from "react-icons/lu";
import { useOTPForm } from "../_hooks/useOTPForm";
import { IOTPFormProps } from "../_interfaces/otpForm";

export default function OTPForm({
  onSuccessCB,
  onUnauthorizedErrorCB,
}: IOTPFormProps) {
  const { register, isLoading, submitHandler } = useOTPForm(
    onSuccessCB,
    onUnauthorizedErrorCB
  );

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      <Input
        label="OTP"
        {...register("otp")}
        type="number"
        placeholder="xxxx"
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
          "Verify"
        )}
      </button>
    </form>
  );
}
