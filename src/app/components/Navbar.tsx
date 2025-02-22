"use client"
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-10 bg-gray-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link className="text-xl font-bold" href="/">
          Aron Resty Ramillano
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 size={28} /> : <IoMenu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 py-4">
          <div className="container mx-auto flex flex-col items-center space-y-4">
            <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <a href="#about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#experience" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <Link href="/blog" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
