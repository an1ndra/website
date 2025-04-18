"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "../../../../lib/auth-client";

export default function SignupPage() {
  const router = useRouter();

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
          console.log("Loading..." + ctx);
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          console.log("Signup success " + ctx.response.status);
          const res = ctx.response.status;
          if (res === 200) {
            router.push("/login");
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

  const handleGoogleSignup = async (e) => {
    const data = await authClient.signIn.social({
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
                Sign up to your account
              </h1>
              {/* <script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
                async
                defer
              ></script> */}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSumit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <div
                    id="container"
                    className="cf-turnstile block flex-row"
                    data-sitekey="1x00000000000000000000AA"
                    data-size="flexible"
                  ></div>
                </div> */}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="text-white w-full bg-blue-600 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
                  onClick={handleGoogleSignup}
                >
                  <svg
                    className="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign up with Google<div></div>
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
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
