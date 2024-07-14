import { Input } from "@/components/Input";
import { useVerifyOTPForm } from "../_hooks/useVerifyOTPForm";
import { LuLoader2 } from "react-icons/lu";

interface IVerfiyOTPFormProps {
  onChangeEmailButtonClickCb: () => void;
}

const VerifyOTPForm = ({ onChangeEmailButtonClickCb }: IVerfiyOTPFormProps) => {
  const { onChangeEmailButtonClick, register, onSubmit, isLoading } =
    useVerifyOTPForm(onChangeEmailButtonClickCb);
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex-1 flex flex-col gap-4"
        action=""
      >
        <Input
          {...register("otp")}
          label="OTP"
          type="number"
          placeholder="Enter Your OTP"
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
      <button onClick={onChangeEmailButtonClick}>change email</button>
    </>
  );
};

export default VerifyOTPForm;
