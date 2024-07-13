import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import getGoogleOAuthUrl from "../_utils/getGoogleOAuthUrl";

export default function GoogleOAuthButton() {
  return (
    <Link className="flex gap-2 font-owsald border-2 border-primary/60 rounded-lg py-2 items-start justify-center hover:bg-primary/10" href={getGoogleOAuthUrl()}>
      <FcGoogle size={20}/> Continue with Google
    </Link>
  );
}
