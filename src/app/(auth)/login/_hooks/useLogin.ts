import { useZodForm } from "@/hooks/useZodForm";
import { LoginSchema } from "../_interfaces/loginForm.interface";
import { loginSchema } from "../_schema/login.schema";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { API_ROUTES } from "@/config/routes";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLogin = () => {
  const route = useRouter();
  const { register, handleSubmit } = useZodForm<LoginSchema>(loginSchema);

  const loginRequest = async (email: string, password: string) => {
    return await fetch(API_ROUTES.AUTH.LOGIN_POST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
  };

  const onValid: SubmitHandler<LoginSchema> = async ({ email, password }) => {
    const res = await loginRequest(email, password);
    const data = (await res.json()) as { msg: string; accessToken: string };
    if (res.ok) {
      toast.success("Login successfully");
      route.push("/posts");
    } else toast.error(data.msg);
  };

  const onInValid: SubmitErrorHandler<LoginSchema> = ({ email, password }) => {
    if (email) toast.error(email.message!);
    else if (password) toast.error(password.message!);
  };

  return {
    onSubmit: handleSubmit(onValid, onInValid),
    register,
  };
};

export default useLogin;
