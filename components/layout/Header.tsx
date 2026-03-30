"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Ventures", href: "/ventures" },
  { name: "Projects", href: "/projects" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-[#F8F6F2]">
      <div className="container mx-auto flex items-center justify-between px-8 py-6 md:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-[13px] font-medium tracking-[0.18em] text-[#1C2E24] uppercase transition-opacity hover:opacity-60"
        >
          One Bite Street
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-12 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-[11px] font-light tracking-[0.16em] text-[#1C2E24]/50 uppercase transition-colors duration-200 hover:text-[#1C2E24]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-[11px] font-medium tracking-[0.16em] text-[#FF3D6B] uppercase transition-opacity hover:opacity-60"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col items-end gap-[6px] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px bg-[#1C2E24] transition-all duration-300 ${mobileOpen ? "w-5 translate-y-[7px] rotate-45" : "w-5"}`}
          />
          <span
            className={`block h-px bg-[#1C2E24] transition-all duration-300 ${mobileOpen ? "w-0 opacity-0" : "w-3.5"}`}
          />
          <span
            className={`block h-px bg-[#1C2E24] transition-all duration-300 ${mobileOpen ? "w-5 -translate-y-[7px] -rotate-45" : "w-5"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#1C2E24]/10 px-8 py-8 md:hidden">
          <nav className="flex flex-col gap-7">
            {[...NAV_LINKS, { name: "Contact", href: "/contact" }].map(
              (link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-[13px] font-light tracking-[0.14em] text-[#1C2E24]/60 uppercase transition-colors hover:text-[#1C2E24]"
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
