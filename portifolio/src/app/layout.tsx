import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Lwam Bisrat Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Remove bg-gray-900 from body */}
      <body className="relative text-white overflow-x-hidden scroll-smooth">
        {/* ⭐ Starry Background */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(white,transparent_2px)] bg-[length:20px_20px] opacity-20"></div>
        </div>

        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
