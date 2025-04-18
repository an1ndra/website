"use client";

import Link from "next/link";

export default function verification() {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
            Check your inbox
          </h2>
          <p className="mb-6 text-lg text-zinc-500">
            We've sent you a verification link to your email address.
            Please check your inbox and click the link to verify your account.
          </p>
          <Link
            href="/login"
            className="w-auto inline-block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center"
          >
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
