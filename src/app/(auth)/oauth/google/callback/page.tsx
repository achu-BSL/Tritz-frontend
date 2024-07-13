"use client";

import { API_ROUTES } from "@/config/routes";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";
import { LuLoader2 } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";

export default function GoogleOAuthCallback() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [error, setError] = useState("");
  const router = useRouter();

  const codeSubmitRequest = async () => {
    const res = await fetch(API_ROUTES.AUTH.GOOGLE_AUTH_POST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
      credentials: "include",
    });

    const data = (await res.json()) as { msg: string; accessToken: string };
    if (res.ok) {
      toast.success("Login successfully");
      router.replace("/home");
    } else {
      toast.error(data.msg);
      setError(data.msg);
    }
  };

  useEffect(() => {
    codeSubmitRequest();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen min-h-[400px]">
      <div className="bg-white/60 shadow-xl border-2 border-primary rounded-xl flex flex-col gap-4 p-6">
        <div className="h-[100px] w-[100px] self-center">
          <FcGoogle size={80} />
        </div>
        <h1 className="font-merriweather font-semibold text-lg">
          Your Google account has been authenticated
        </h1>
        <p className="text-center font-raleway text-lg">
          You will be logged in
        </p>
        {error ? (
          <>
            <p className="text-red-600 font-owsald font-medium text-center">
              {error}
            </p>
            <Link
              replace={true}
              className="self-center text-blue-800 font-medium flex items-center gap-2"
              href="/login"
            >
              <FaArrowLeft /> Go back to login page
            </Link>
          </>
        ) : (
          <h1 className="text-4xl self-center my-2">
            <LuLoader2 className="animate-spin" />
          </h1>
        )}
      </div>
    </div>
  );
}
