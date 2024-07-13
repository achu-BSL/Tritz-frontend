"use client";
import RegisterForm from "./_components/RegisterForm";
import { useState } from "react";
import VerifyOTPForm from "./_components/VerifyOTPForm";
import GoogleOAuthButton from "../_components/GoogleOAuthButton";

type TState = "register" | "verify-otp";

export default function Register() {
  const [state, setState] = useState<TState>("register");

  const toggleState = (state: TState) => {
    return () => setState(state);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-[900px] border-black shadow-xl bg-white">
        <div className="flex-1 flex flex-col justify-center gap-4 px-6 py-8 ">
          <div className="">
            <h3 className="text-xl font-semibold font-merriweather">
              Register
            </h3>
            <p className="font-owsald">Join the Community of Champions</p>
          </div>
          {state === "register" ? (
            <RegisterForm onSubmitCb={toggleState("verify-otp")} />
          ) : (
            <VerifyOTPForm
              onChangeEmailButtonClickCb={toggleState("register")}
            />
          )}
          <h4 className="text-center font-raleway">OR</h4>
          <GoogleOAuthButton />
        </div>
        <div className="bg-primary flex-1"></div>
      </div>
    </div>
  );
}
