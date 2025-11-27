"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set true when scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <style>{`
        @media (min-width: 768px) and (max-width: 1200px) {
          .custom-tablet-logo {
            width: 150px !important;
            min-width: 140px !important;
          }
        }
        @media (min-width: 1201px) {
          .custom-desktop-logo {
            margin-left: 20px !important;
          }
        }
        @media (min-width: 1270px) and (max-width: 1290px) {
          .custom-hubmax-logo {
            margin-left: 16px !important;
            width: 200px !important;
            min-width: 100px !important;
          }
        }

        /* Enlarge header and logo near ~2490px viewport width per request */
        @media (min-width: 2460px) and (max-width: 2520px) {
          /* Increase header vertical size so it looks a bit bigger on ultra-wide */
          header.fixed {
            padding-top: 1.3rem !important;
            padding-bottom: 1.5rem !important;
          }

          /* Make the logo visibly larger on ultra-wide screens */
          .custom-desktop-logo,
          .custom-hubmax-logo {
            width: 420px !important;
            min-width: 320px !important;
          }

          /* Increase nav link text and padding so the header balances */
          nav ul li a {
            font-size: 2rem !important;
            padding: 0.75rem 1.25rem !important;
          }
        }
      `}</style>

      {/* Make header content use same horizontal padding as footer so left edges align */}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-12">
        {/* Define nav items so links target the right sections */}
        {/* About -> #journey, Services -> #service, Contact -> #contact */}

        <div className="flex items-center justify-between py-4 transition-all duration-300">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
              <Image
                src="/LogoHeader.svg"
                alt="Logo"
                width={320}
                height={160}
                className="w-36 h-auto sm:w-44 md:w-56 lg:w-56 transform custom-tablet-logo custom-desktop-logo custom-hubmax-logo"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block md:pr-4 lg:pr-8">
            <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-18">
              {[
                { label: "Services", href: "#service" },
                { label: "About", href: "#journey" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`${
                      isScrolled ? "text-black" : "text-white"
                    } inline-flex justify-center min-w-[100px] px-4 py-2 rounded-full transition-colors duration-200 text-sm md:text-base hover:bg-[#c2161f] hover:text-white`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`p-2 ${
                isScrolled ? "text-black" : "text-white"
              } transition-colors`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-2">
              <ul className="space-y-2">
                {[
                  { label: "Services", href: "#service" },
                  { label: "About", href: "#journey" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-left text-[#111111] hover:text-[#C4A668] py-2 transition-colors font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
