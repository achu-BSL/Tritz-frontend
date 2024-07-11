
if(!process.env.NEXT_PUBLIC_BACKEND_URL)
    throw new Error("SEVER_URL env variable required");

export const env = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
};
