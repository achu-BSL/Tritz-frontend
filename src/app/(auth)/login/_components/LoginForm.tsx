import { Input } from "@/components/Input";
import Link from "next/link";
import useLogin from "../_hooks/useLogin";

const LoginForm = () => {
  const { register, onSubmit } = useLogin();
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
        <button className="bg-secondary hover:bg-secondary/90 py-2 font-raleway font-medium rounded-lg">
          Login
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
