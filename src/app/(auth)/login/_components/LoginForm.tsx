import { Input } from "@/components/Input";
import Link from "next/link";
import useLogin from "../_hooks/useLogin";
import { LuLoader2 } from "react-icons/lu";

const LoginForm = () => {
  const { register, onSubmit, isLoading } = useLogin();
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
          {...register("password")}
          label="Password"
          type="password"
          placeholder="password"
        />
        <Link className="text-sm text-primary font-owsald" href="/reset-password">Forgot password?</Link>
        <button
          disabled={isLoading}
          className="bg-secondary hover:bg-secondary/90 py-2 font-raleway font-medium rounded-lg disabled:bg-primary/40"
        >
          {isLoading ? (
            <p className="flex gap-2 justify-center items-center text-black/60">
              loading <LuLoader2 size={20} className="animate-spin" />
            </p>
          ) : (
            "Login"
          )}
        </button>
      </form>
      <p className="text-center">
        Don&apos;t have Account?{" "}
        <Link className="text-blue-700 font-medium" href="/register">
          Register
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
