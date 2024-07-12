import { Input } from "@/components/Input";
import { useVerifyOTPForm } from "../_hooks/useVerifyOTPForm";

interface IVerfiyOTPFormProps {
  onChangeEmailButtonClickCb: () => void;
}

const VerifyOTPForm = ({ onChangeEmailButtonClickCb }: IVerfiyOTPFormProps) => {

  const { onChangeEmailButtonClick, register, onSubmit } = useVerifyOTPForm(onChangeEmailButtonClickCb);
  return (
    <>
      <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-4" action="">
        <Input {...register("otp")} label="OTP" type="number" placeholder="Enter Your OTP" />
        <button className="bg-secondary hover:bg-secondary/90 py-2 font-raleway font-medium rounded-lg">
          Verify
        </button>
      </form>
      <button onClick={onChangeEmailButtonClick}>change email</button>
    </>
  );
};

export default VerifyOTPForm;
