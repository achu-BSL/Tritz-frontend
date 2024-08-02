import { API_ROUTES } from "@/config/routes";

export const verifyResetPasswordOTPRequest = async (otp: string) => {
  return await fetch(API_ROUTES.AUTH.VERIFY_RESET_PASSWORD_OTP_POST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp }),
    credentials: "include",
  });
};
