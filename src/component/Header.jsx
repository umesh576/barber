"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/barbers", label: "Barbers" },
    { href: "/gallery", label: "Gallery" },
    { href: "/booknow", label: "Book Now" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black backdrop-blur-md border-b border-black shadow-sm ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          <div className="relative w-30 h-30 md:w-40 md:h-40 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-full ">
            <Link href="/">
              <Image
                src="/logo1.png"
                alt="logo"
                fill
                className=" relative object-contain hover:scale-105 rounded-full transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 lg:gap-15">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="relative text-white hover:text-gray-300 font-medium text-sm lg:text-base transition-colors duration-200 py-2 px-1 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-black hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
