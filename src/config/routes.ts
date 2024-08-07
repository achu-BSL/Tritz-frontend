import { env } from "./environment";

const { BACKEND_URL } = env;

export const API_ROUTES = {
  AUTH: {
    GENERATE_OTP_POST: `${BACKEND_URL}/api/auth/otp/generate`,
    VALIDATE_OTP_POST: `${BACKEND_URL}/api/auth/otp/validate`,
    LOGIN_POST: `${BACKEND_URL}/api/auth/login`,
    GOOGLE_AUTH_POST: `${BACKEND_URL}/api/auth/oauth/google`,
    GENERATE_RESET_PASSWORD_OTP_POST: `${BACKEND_URL}/api/auth/reset-password-otp/generate`,
    VERIFY_RESET_PASSWORD_OTP_POST: `${BACKEND_URL}/api/auth/reset-password-otp/validate`,
    RESET_PASSWORD_PATCH: `${BACKEND_URL}/api/auth/reset-password`,
  },
};
