"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Bot className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">
                Verbosity AI
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 font-semibold">
            <NavLink href="/#">Home</NavLink>
            <NavLink href="/#">About</NavLink>
            <NavLink href="/#">Features</NavLink>
            <NavLink href="/#">Contact</NavLink>
            <Link href="/login">
              <Button variant="secondary" className="ml-4 font-bold text-black">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/#">About</MobileNavLink>
            <MobileNavLink href="/#">Features</MobileNavLink>
            <MobileNavLink href="/#">Contact</MobileNavLink>
            <Link
              href="/login"
              className="block px-3 py-2 mt-1 text-base font-medium text-blue-600 bg-white rounded-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700 transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  );
}
