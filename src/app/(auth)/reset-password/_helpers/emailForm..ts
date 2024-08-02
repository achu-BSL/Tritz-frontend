import { API_ROUTES } from "@/config/routes";

export const generateResetOTPRequest = async (email: string) => {
  return await fetch(API_ROUTES.AUTH.GENERATE_RESET_PASSWORD_OTP_POST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
    credentials: "include"
  });
};
