// components/header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// static import = bulletproof on GitHub Pages
import blinkLogo from "@/../public/logo-blink.png"; // file is public/logo-blink.png

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#about",    label: "About" },
    { href: "/#reviews",  label: "Reviews" },
    { href: "/#contact",  label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 text-white transition-all duration-300
      ${isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/10" : "bg-black/90"}`}>
      <div className="container mx-auto px-4">
        <div className="h-[clamp(64px,7.5vw,84px)] flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={blinkLogo}
              alt="Blink Auto Detailing"
              priority
              className="h-[clamp(52px,6.2vw,78px)] w-auto select-none"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                    className="text-white/90 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/#book"
                  className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition">
              Book Now
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40"
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-black text-white border-b border-white/10 transition-[max-height,opacity] duration-300 overflow-hidden
          ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="container mx-auto px-4 py-3">
          <ul className="flex flex-col gap-3">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="block py-2 text-white/90 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link href="/#book"
                    className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition"
                    onClick={() => setIsMobileMenuOpen(false)}>
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
