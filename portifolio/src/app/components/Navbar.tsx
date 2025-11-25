"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#2c0f0f] shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Lwam Bisrat</h1>
        <ul className="flex space-x-8">
          <li><a href="#about" className="hover:text-red-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-red-400 transition">Projects</a></li>
          <li><a href="#blogs" className="hover:text-red-400 transition">Blogs</a></li>
          <li><a href="#contact" className="hover:text-red-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
