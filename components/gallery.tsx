"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const FALLBACKS = [
  // Generic placeholders for now; replace with your Facebook image URLs later.
  "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571607388143-58f8b1b4b6eb?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop#2",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop#3",
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1400&auto=format&fit=crop#2",
]

type Props = {
  images?: string[]
}

export default function Gallery({ images = FALLBACKS }: Props) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const show = (i: number) => {
    setIdx(i)
    setOpen(true)
  }

  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, images.length])

  return (
    <>
      {/* grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => show(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
          </button>
        ))}
      </div>

      {/* lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setOpen(false)
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <div className="relative w-[88vw] md:w-[80vw] lg:w-[70vw] aspect-[16/10]">
            <Image
              src={images[idx]}
              alt={`Full image ${idx + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </>
  )
}
