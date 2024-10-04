"use client";

import Link from "next/link";

export default function AccountSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0B43] to-[#0A0A23] text-white">
      <div className="bg-[#1F1F3D] p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-6">
          Account Created Successfully
        </h2>
        <p className="text-lg mb-6">
          Your account has been created successfully. You can now log in.
        </p>
        <Link
          href="/login"
          className="w-full p-3 rounded bg-blue-500 hover:bg-blue-700 transition-colors duration-300 inline-block"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
