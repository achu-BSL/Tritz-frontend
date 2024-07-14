import { Input } from "@/components/Input";
import { useRegisterForm } from "../_hooks/useRegisterForm";
import Link from "next/link";
import { LuLoader2 } from "react-icons/lu";

interface IRegisterFormPorps {
  onSubmitCb: () => void;
}

const RegisterForm = ({ onSubmitCb }: IRegisterFormPorps) => {
  const { onSubmit, register, isLoading } = useRegisterForm(onSubmitCb);

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex-1 flex flex-col gap-4"
        action=""
      >
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
        <button
          disabled={isLoading}
          className="bg-secondary hover:bg-secondary/90 py-2 font-raleway font-medium rounded-lg disabled:bg-primary/40"
        >
          {isLoading ? (
            <p className="flex gap-2 justify-center items-center text-black/60">
              loading <LuLoader2 size={20} className="animate-spin" />
            </p>
          ) : (
            "Register"
          )}
        </button>
      </form>
      <p className="text-center">
        Already have an Account?{" "}
        <Link className="text-blue-700 font-medium" href="/login">
          Login
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
