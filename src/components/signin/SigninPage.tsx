"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Check for error in URL
  const error = searchParams.get("error");
  if (error) {
    setErrorMsg("An error occurred during sign in. Please try again.");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("Email and password are required.");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setErrorMsg("Invalid email or password.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google", {
        redirect: false,
      });

      if (result?.error) {
        setErrorMsg("Failed to sign in with Google. Please try again.");
      }
    } catch (error) {
      setErrorMsg("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-[500px] flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full bg-[#1a1a1a] rounded-2xl shadow-xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>

        {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-black text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#ceff00]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-black text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#ceff00]"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-[#ceff00] text-black font-semibold hover:bg-lime-400 transition-colors cursor-pointer"
          >
            Sign in as Admin
          </button>
        </form>

        <div className="mt-6 text-center text-white/70">or</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
