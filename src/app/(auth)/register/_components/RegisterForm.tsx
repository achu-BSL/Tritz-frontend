import { Input } from "@/components/Input";
import { useRegisterForm } from "../_hooks/useRegisterForm";

interface IRegisterFormPorps {
  onSubmitCb: () => void;
}

const RegisterForm = ({ onSubmitCb }: IRegisterFormPorps) => {
  const { onSubmit, register } = useRegisterForm(onSubmitCb);

  return (
    <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-4" action="">
      <Input
        {...register("email")}
        label="Email"
        type="email"
        placeholder="example@gmail.com"
      />
      <Input
        {...register("username")}
        label="Username"
        type="text"
        placeholder="John Deo"
      />
      <Input
        {...register("password")}
        label="Password"
        type="password"
        placeholder="password"
      />
      <Input
        label="Confirm-password"
        type="password"
        placeholder="confirm-password"
        {...register("confirmPassword")}
      />
      <button className="bg-secondary hover:bg-secondary/90 py-2 font-raleway font-medium rounded-lg">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;