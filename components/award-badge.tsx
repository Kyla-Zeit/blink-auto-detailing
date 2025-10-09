"use client"

import { Gem, Sparkles } from "lucide-react"
import { useState } from "react"

export default function AwardBadge() {
  const [replay, setReplay] = useState(0)

  return (
    <div className="relative inline-flex items-center justify-center">
      <button
        onMouseEnter={() => setReplay((n) => n + 1)}
        className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium
                   text-foreground/90 bg-white/80 backdrop-blur border border-white/60 shadow-sm
                   hover:shadow-md transition focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-accent/40"
      >
        {/* moving shine */}
        <span className="absolute -inset-px rounded-full pointer-events-none shine" />

        {/* icons */}
        <Gem className="h-4 w-4 text-accent twinkle" />
        <span>3x Diamond Award Winner</span>
        <Sparkles className="h-3.5 w-3.5 text-accent/70 floaty hidden sm:block" />

        {/* sparkle burst */}
        <span key={replay} className="burst" />
      </button>

      {/* External style block for safety */}
      <style jsx global>{`
        .shine {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
          background-size: 200% 100%;
          animation: shimmer 2.25s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .twinkle {
          animation: twinkle 2s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes twinkle {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.9; }
          50% { transform: rotate(12deg) scale(1.15); opacity: 1; }
        }

        .floaty {
          animation: floaty 3.5s ease-in-out infinite;
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }

        .burst {
          position: absolute;
          right: -6px;
          top: -6px;
          width: 6px;
          height: 6px;
          background: #f59e0b;
          border-radius: 9999px;
          pointer-events: none;
          animation: pop 600ms ease-out, drift 800ms ease-out;
          opacity: 0;
        }
        @keyframes pop {
          0% { transform: scale(0.4); opacity: 0; }
          60% { transform: scale(1.8); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(10px, -10px); }
        }
      `}</style>
    </div>
  )
}
