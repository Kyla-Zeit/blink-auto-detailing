"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
// keep if you use it elsewhere; otherwise you can remove
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#about",    label: "About" },
    { href: "/#reviews",  label: "Reviews" },
    { href: "/#contact",  label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300
      ${isScrolled
        ? "bg-black/95 backdrop-blur-sm border-b border-white/10"
        : "bg-black/90"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[clamp(64px,7.5vw,84px)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              // If you prefer your remote image, paste that URL below instead of /logo-blink.png
              // src="https://hebbokandni1as6yf.public.blob.vercel-storage.com/...jpg"
              src="public/logo-blink.png"
              alt="Blink Auto Detailing"
              priority
              width={360}
              height={90}
              className="h-[clamp(52px,6.2vw,78px)] w-auto select-none"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/90 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#book"
              className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden bg-black text-white border-b border-white/10 transition-[max-height,opacity] duration-300 overflow-hidden
        ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="flex flex-col gap-3">
            {navLinks.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2 text-white/90 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/#book"
                className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition"
                onClick={() => setIsMobileMenuOpen(false)}
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
