// components/header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Use the EXACT file name you have in /public
import blinkLogo from "@/public/logo-blink.dfc256cf.png";

const NAV_H = "clamp(64px,7.2vw,96px)"; // sane height

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#about",    label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "/#reviews",  label: "Reviews" },
    { href: "/#contact",  label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50" style={{ ["--nav-h" as any]: NAV_H }}>
      {/* EXACT same color as your logo background: #1e1e1e */}
      <nav className="bg-[#1e1e1e] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[var(--nav-h)]">
            {/* Logo: never taller than the bar */}
            <Link href="/" className="inline-flex items-center select-none shrink-0">
              <Image
                src={blinkLogo}
                alt="Blink Auto Detailing"
                priority
                className="max-h-[calc(var(--nav-h)-1px)] w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/90 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#book"
                  className="inline-flex items-center rounded-xl px-5 py-2.5 bg-white text-black font-medium hover:bg-white/90 transition"
                >
                  Book Now
                </Link>
              </li>
            </ul>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center p-3 rounded-lg text-white/90 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Toggle menu"
              onClick={() => setOpen(v => !v)}
            >
              {open ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel (same exact color) */}
      <div
        className={`md:hidden bg-[#1e1e1e] text-white border-b border-white/10 overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <ul className="flex flex-col gap-3">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2 text-white/90 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/#book"
                className="inline-flex items-center rounded-xl px-5 py-2.5 bg-white text-black font-medium hover:bg-white/90 transition"
                onClick={() => setOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
