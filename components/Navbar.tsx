// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing",  label: "Pricing" },
  { href: "/#gallery",  label: "Gallery" },
  { href: "/#contact",  label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Black bar to match logo background */}
      <nav className="bg-black/95 text-white border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[clamp(64px,7.5vw,84px)] flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo-blink.png"              // change if your filename differs
                alt="Blink Auto Detailing"
                priority
                width={360}
                height={90}
                className="h-[clamp(48px,6.2vw,76px)] w-auto select-none"
              />
            </Link>

            {/* desktop links */}
            <ul className="hidden md:flex items-center gap-7">
              {links.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#book"
                  className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition"
                >
                  Book Now
                </Link>
              </li>
            </ul>

            {/* mobile trigger */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile panel */}
      <div
        className={`md:hidden bg-black text-white border-b border-white/10 transition-[max-height,opacity] duration-300 overflow-hidden ${
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
                className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition"
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
