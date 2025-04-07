"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full mt-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
