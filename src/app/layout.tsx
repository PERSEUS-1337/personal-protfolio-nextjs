import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar"; // Adjust the path based on your file structure


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aron Resty Ramillano - Full Stack Developer Portfolio",
  description:
    "Welcome to my portfolio. I am Aron Resty Ramillano, a BS Computer Science Graduate and Aspiring Full Stack Developer with expertise in AI applications, DevOps, and innovative tech solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="business">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gray-50 text-gray-900">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="bg-gray-50 text-gray-900">{children}</main>

          {/* Footer */}
          <footer className="bg-white py-6">
            <div className="container mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} Aron Resty Ramillano. All
                rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
