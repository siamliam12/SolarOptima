"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://solaroptima.onrender.com/auth/api/login/`,
        { email, password }
      );

      if (response.data.error) {
        console.error("Error logging in:", response.data.error);
      } else {
        Cookies.set("authToken", response.data.access);
        Cookies.set("refreshToken", response.data.refresh);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0B43] to-[#0A0A23] text-white">
      <div className="bg-[#1F1F3D] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-[#2A2A4A] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-[#2A2A4A] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded bg-blue-500 hover:bg-blue-700 transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Not registered?{" "}
          <Link href="/register" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
        <div className="mt-6 p-4 bg-[#2A2A4A] rounded">
          <h3 className="text-lg font-semibold mb-2">Default Login Credentials</h3>
          <p>Email: <span className="font-mono">saadmangalib@gmail.com</span></p>
          <p>Password: <span className="font-mono">12345678</span></p>
        </div>
      </div>
    </div>
  );
}