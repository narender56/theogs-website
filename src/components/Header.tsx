'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-playfair font-bold tracking-tight">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            TheOGs
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide font-semibold">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden bg-black/90 border-t border-gray-800 px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-60 py-4' : 'max-h-0'
        }`}
      >
        <Link
          href="/"
          className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
