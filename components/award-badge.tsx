"use client"

import { Gem, Sparkles } from "lucide-react"
import { useState } from "react"
import styles from "./award-badge.module.css"

export default function AwardBadge() {
  const [replay, setReplay] = useState(0)

  return (
    <div className="relative inline-flex items-center justify-center select-none">
      <div
        onMouseEnter={() => setReplay((n) => n + 1)}
        className={styles.button}
      >
        <span className={styles.shine} />
        <Gem className={`h-4 w-4 ${styles.gem}`} />
        <span>3x Diamond Award Winner</span>
        <Sparkles className={`h-3.5 w-3.5 text-accent/70 hidden sm:block ${styles.floaty}`} />
        <span key={replay} className={styles.burst} />
      </div>
    </div>
  )
}
