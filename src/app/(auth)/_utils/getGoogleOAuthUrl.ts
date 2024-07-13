import { env } from "@/config/environment";

const getGoogleOAuthUrl = () => {
  const ROOT_URL = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: env.GOOGLE_AUTH_REDIRECT_URL,
    client_id: env.GOOGLE_AUTH_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  return `${ROOT_URL}?${qs.toString()}`;
};

export default getGoogleOAuthUrl;
