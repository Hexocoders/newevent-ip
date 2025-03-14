'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
      `}</style>
      <header className="flex justify-between items-center p-4 bg-white border-b border-gray-100">
        <Link href="/" className="flex items-center">
          <span className="font-['Great_Vibes'] text-3xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
            Event-ip
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/explore" className="text-gray-600 hover:text-pink-500 transition-colors">
            Explore
          </Link>
          <Link href="/categories" className="text-gray-600 hover:text-pink-500 transition-colors">
            Categories
          </Link>
          <Link href="/new-events" className="text-gray-600 hover:text-pink-500 transition-colors">
            New Events
          </Link>
          <div className="h-5 w-px bg-gray-200"></div>
          <Link href="/signin" className="text-gray-600 hover:text-pink-500 transition-colors">
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/explore"
                className="text-gray-600 hover:text-pink-500 transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Explore
              </Link>
              <Link
                href="/categories"
                className="text-gray-600 hover:text-pink-500 transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/new-events"
                className="text-gray-600 hover:text-pink-500 transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                New Events
              </Link>
              <div className="h-px w-full bg-gray-200 my-2"></div>
              <Link
                href="/signin"
                className="text-gray-600 hover:text-pink-500 transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
} 