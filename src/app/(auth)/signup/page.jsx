"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import CheckBox from "@/components/auth/checkbox";
import Email from "@/components/auth/email";
import Password from "@/components/auth/password";
import GoogleBtn from "@/components/buttons/google";
import SigninBtn from "@/components/buttons/signin";

import { authClient } from "../../../../lib/auth-client";

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const _handleLoading = (data) => {
    setIsLoading(data);
  };
  const handleSumit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { data, error } = await authClient.signUp.email(
      {
        name: "",
        email: formData.get("email"),
        password: formData.get("password"),
        // fetchOptions: {
        //   headers: {
        //     "x-captcha-response": turnstileToken,
        //     "x-captcha-user-remote-ip": userIp, // optional: forwards the user's IP address to the captcha service
        //   },
        // },
        callbackURL: "/login",
      },
      // sendEmail(formData.get("email")),
      {
        onRequest: (ctx) => {
          //show loading
          setIsLoading(true);
          console.log(`Loading...${ctx}`);
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          console.log(`Signup success ${ctx.response.status}`);
          setIsLoading(false);
          const res = ctx.response.status;
          if (res === 200) {
            router.push("/"); //Neext to push verify page
          } else if (res === 422) {
            console.log("Email already registered!");
          }
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
          console.log(ctx.error.message);
        },
      }
    );
  };

  const handleGoogleSignup = async (_e) => {
    const _data = await authClient.signIn.social({
      provider: "google",
    });
  };

  //Cloudflare verification
  /**
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onloadTurnstileCallback = function () {
        if (window.turnstile) {
          window.turnstile.render("#container", {
            sitekey: "0x4AAAAAABL9grRQVExF4BOj",
            callback: function (token) {
              console.log(`Challenge Success ${token}`);
            },
          });
        }
      };
    }
  }, []);
   */
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create new Account
              </h1>
              {/* <script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
                async
                defer
              ></script> */}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSumit}>
                <Email />
                <Password />
                <CheckBox />
                {/* <div>
                  <div
                    id="container"
                    className="cf-turnstile block flex-row"
                    data-sitekey="1x00000000000000000000AA"
                    data-size="flexible"
                  ></div>
                </div> */}
                <SigninBtn
                  name="Create new account"
                  type="submit"
                  isLoading={isLoading}
                />
                <GoogleBtn onClick={handleGoogleSignup} />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 link link-primary"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
