"use client";
import Link from "next/link";
import { useState } from "react";
import { EmailForm } from "./_components/EmailForm";
import { Phases } from "./_interfaces";
import OTPForm from "./_components/OTPForm";
import NewPasswordForm from "./_components/NewPasswordForm";

export default function ResetPassword() {
  const [phase, setPhase] = useState<Phases>("email");

  const emailSubmitCb = () => {
    setPhase("otp");
  };

  const onUnauthorizedErrorCB = () => {
    setPhase("email");
  };

  const onOTPVerified = () => {
    setPhase("new-password");
  };

  const onPasswordReseted = () => {};

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-[900px] border-black shadow-xl bg-white">
        <div className="flex-1 flex flex-col justify-center gap-4 px-6 py-8 ">
          <div className="">
            <h3 className="text-xl font-semibold font-merriweather">
              Reset Your Password
            </h3>
            <p className="font-owsald">Recover Access to Your Account</p>
          </div>

          {phase === "email" ? (
            <EmailForm submitCb={emailSubmitCb} />
          ) : phase === "otp" ? (
            <>
              <OTPForm
                onSuccessCB={onOTPVerified}
                onUnauthorizedErrorCB={onUnauthorizedErrorCB}
              />
              <p
                className="text-center font-semibold cursor-pointer"
                onClick={() => setPhase("email")}
              >
                Change email?{" "}
              </p>
            </>
          ) : (
            <NewPasswordForm
              onSuccessCB={onPasswordReseted}
              onUnauthorizedErrorCB={onUnauthorizedErrorCB}
            />
          )}

          <p className="text-center">
            Recollected your password?{" "}
            <Link className="text-blue-700 font-medium" href="/login">
              Login
            </Link>
          </p>
        </div>
        <div className="bg-primary flex-1"></div>
      </div>
    </div>
  );
}
