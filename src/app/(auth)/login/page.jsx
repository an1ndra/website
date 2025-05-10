// Add loading animation to the button after clicking
"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "../../../../lib/auth-client";
import { LoaderCircle } from "lucide-react";
import SigninBtn from "@/components/buttons/signin";
import GoogleBtn from "@/components/buttons/google";
import EmailLable from "@/components/lables/EmailLable";

const LoginPage = () => {
  const handleSumit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { data, error } = await authClient.signIn.email({
      email: formData.get("email"),
      password: formData.get("password"),
      callbackURL: "/",
      rememberMe: false, //Need to handle with form section
    });
  };
  const handleGoogleSignin = async (e) => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div>
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSumit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <label className="input validator w-full">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="mail@site.com"
                        required
                      />
                    </label>
                    <div className="validator-hint hidden">
                      Enter valid email address
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Password
                    </label>
                    <label className="input validator w-full">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                          <circle
                            cx="16.5"
                            cy="7.5"
                            r=".5"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Password"
                        minLength="8"
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="checkbox"
                          defaultChecked
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
                    <a href="#" className="text-sm font-medium text-white ">
                      Forgot password?
                    </a>
                  </div>
                  <SigninBtn name="Sign In" type="submit" />
                  <GoogleBtn onClick={handleGoogleSignin} />
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      href="/signup"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 link link-primary"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
