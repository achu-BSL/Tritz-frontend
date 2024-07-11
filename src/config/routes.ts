import { env } from "./environment";

const { BACKEND_URL } = env;

export const API_ROUTES = {
  AUTH: {
    GENERATE_OTP_POST: `${BACKEND_URL}/otp/generate`,
  },
};
