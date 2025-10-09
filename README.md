# Blink Auto Detailing

A modern lash studio website built with **Next.js, React, and Tailwind CSS**.  
Designed for clean visuals, smooth section-based navigation, and classy on-scroll animations.

👉 **Live site:** https://kyla-zeit.github.io/blink-auto-detailing/

---

## 🚀 Features

- **Responsive** across desktop, tablet, and mobile
- **Smooth scroll** navigation (anchors + sticky header offset)
- **On-scroll reveal** micro-animations (with prefers-reduced-motion fallback)
- **Hero, Services, Gallery, Reviews, Contact** sections
- **“3× Diamond Award Winner”** animated badge + **gold star** review styling
- **Click-to-call / email** CTAs and a persistent **“Book Now”** entry point
- **Accessible**: high contrast, focus states, keyboard-friendly

---

## 📂 Project Structure

<pre>
blink-auto-detailing/
├─ app/
│  ├─ globals.css            # Tailwind base + global styles
│  ├─ layout.tsx             # App shell (fonts, metadata, header/footer)
│  └─ page.tsx               # Home page: composes sections
│
├─ components/
│  ├─ header.tsx             # Fixed header + mobile menu
│  ├─ hero.tsx               # Headline, award badge, stars, CTAs
│  ├─ award-badge.tsx        # “3× Diamond Award Winner” badge
│  ├─ services.tsx           # Services grid (edit copy here)
│  ├─ about.tsx              # Story + stats + contact block
│  ├─ gallery.tsx            # Image grid (swap images/links here)
│  ├─ reviews.tsx            # Review cards + star icons (edit array)
│  ├─ contact.tsx            # Call/Text, Email, Visit Us, Hours
│  └─ footer.tsx             # Footer + legal strip
│
├─ components/ui/            # Minimal shadcn-style primitives (button, card, etc.)
│
├─ public/
│  ├─ logo.png               # Header logo (transparent background)
│  └─ favicon.ico            # Site icon (optional)
│
├─ tailwind.config.ts
├─ postcss.config.js
├─ package.json
└─ README.md
</pre>

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React** + **TypeScript**
- **Tailwind CSS v4** (+ small utility layer for animations & edge-feather)
- **Lucide Icons**
- Optional: **shadcn/ui**-style button variants
