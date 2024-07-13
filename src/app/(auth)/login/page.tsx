"use client";

import GoogleOAuthButton from "../_components/GoogleOAuthButton";
import LoginForm from "./_components/LoginForm";

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-[900px] border-black shadow-xl bg-white">
        <div className="flex-1 flex flex-col justify-center gap-4 px-6 py-8 ">
          <div className="">
            <h3 className="text-xl font-semibold font-merriweather">
              Welcome back
            </h3>
            <p className="font-owsald">Login to Your Account</p>
          </div>
          <LoginForm />
          <h4 className="text-center font-raleway">OR</h4>
          <GoogleOAuthButton />
        </div>
        <div className="bg-primary flex-1"></div>
      </div>
    </div>
  );
}
