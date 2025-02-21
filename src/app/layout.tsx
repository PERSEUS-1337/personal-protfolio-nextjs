import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
          <nav className="fixed w-full z-10 bg-gray-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
              <Link className="text-xl font-bold" href="/">
                Aron Resty Ramillano
              </Link>
              <div className="space-x-4">
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
                <a href="#about" className="hover:text-blue-600">
                  About
                </a>
                <a href="#experience" className="hover:text-blue-600">
                  Experience
                </a>
                <a href="#projects" className="hover:text-blue-600">
                  Projects
                </a>
                <a href="#skills" className="hover:text-blue-600">
                  Skills
                </a>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
              </div>
            </div>
          </nav>

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
