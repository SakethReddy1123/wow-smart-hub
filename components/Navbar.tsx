"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/franchise", label: "Franchise" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-wow-pink/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-soft">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-wow-purple transition hover:text-wow-magenta"
        >
          WoW Smart Hub™
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-wow-magenta transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="default" size="default">
            <Link href="/franchise">Become Partner</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg hover:bg-wow-pink/20 text-wow-purple"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container mx-auto flex flex-col gap-4 px-4 py-6 bg-white border-t border-wow-pink/20">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 font-medium text-gray-700 hover:text-wow-magenta"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button asChild variant="default" className="w-full">
              <Link href="/franchise" onClick={() => setOpen(false)}>
                Become Partner
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
