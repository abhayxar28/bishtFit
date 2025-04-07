'use client'

import { useState } from "react";
import Logo from "@/Icons/Logo";
import Link from "next/link";
import { Session } from "next-auth";

interface NavbarProps {
  session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBookSessionClick = () => {
    const section = document.getElementById("book-session-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="w-full px-4 sm:px-5 md:px-20 py-4 bg-black text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href='/' className="cursor-pointer">
            <Logo />
          </Link>
        </div>

        {/* Menu toggle button for mobile */}
        <button
          className="md:hidden text-[#cef522] text-lg font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-5 text-xl text-[#cef522] font-mono">
          <Link href="/" className="hover:border-b">Home</Link>
          <Link href="/blogs" className="hover:border-b">Blogs</Link>
          <Link href="/about" className="hover:border-b">About</Link>
          <a className="hover:border-b cursor-pointer" onClick={handleBookSessionClick}>Contact</a>
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href='/contact'>
            <button className="cursor-pointer py-2 px-3.5 rounded-lg bg-[#cef522] text-[#292e0f] font-semibold">Book a session</button>
          </Link>
          {session?.user?.role === "admin" && (
            <Link href='/dashboard'>
              <button className="cursor-pointer py-2 px-3.5 rounded-lg bg-[#cef522] text-[#292e0f] font-semibold">Dashboard</button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 gap-4 md:hidden text-[#cef522] font-mono text-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <a href="/" className="hover:border-b cursor-pointer" onClick={handleBookSessionClick}>Contact</a>
          <Link href='/contact'>
            <button
              className="w-max py-2 px-3.5 rounded-lg bg-[#cef522] text-[#292e0f] font-semibold cursor-pointer"
            >
              Book a session
            </button>
          </Link>
          {session?.user?.role === "admin" && (
            <Link href='/dashboard'>
              <button
                className="w-max py-2 px-3.5 rounded-lg bg-[#cef522] text-[#292e0f] font-semibold cursor-pointer"
              >
                Dashboard
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
