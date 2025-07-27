"use client";

import Link from "next/link";
import type React from "react";

import CheckBox from "@/components/auth/checkbox";
import Email from "@/components/auth/email";
import Password from "@/components/auth/password";
import GoogleBtn from "@/components/buttons/google";
import SigninBtn from "@/components/buttons/signin";
import { authClient } from "../../../../lib/auth-client";

const LoginPage = () => {
  const handleSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { data, error } = await authClient.signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      callbackURL: "/",
      rememberMe: false, //Need to handle with form section
    });
  };
  const handleGoogleSignin = async (_e: React.MouseEvent<HTMLButtonElement>) => {
    const _data = await authClient.signIn.social({
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
                  <Email />
                  <Password />
                  <CheckBox />
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
