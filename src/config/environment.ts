if (!process.env.NEXT_PUBLIC_BACKEND_URL)
  throw new Error("SEVER_URL env variable required");

export const env = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  GOOGLE_AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID!,
  GOOGLE_AUTH_REDIRECT_URL: process.env.NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URL!,
};
