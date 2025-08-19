'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">
          <Link href="/">JustIn</Link>
        </h1>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-white hover:text-bermuda transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-bermuda transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-bermuda transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden focus:outline-none"
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
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      <nav
        className={`md:hidden bg-primary px-4 py-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'animate-slide-in max-h-96' : 'max-h-0'
        }`}
      >
        <Link
          href="/"
          className="block py-2 text-white hover:text-bermuda transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 text-white hover:text-bermuda transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block py-2 text-white hover:text-bermuda transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
