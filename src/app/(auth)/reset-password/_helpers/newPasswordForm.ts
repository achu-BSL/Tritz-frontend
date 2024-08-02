import { API_ROUTES } from "@/config/routes";

export const resetPasswordRequest = async (newPassword: string) => {
  return await fetch(API_ROUTES.AUTH.RESET_PASSWORD_PATCH, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newPassword }),
    credentials: "include",
  });
};
