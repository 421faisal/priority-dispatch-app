"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  className?: string
  as?: string
  delayMs?: number
  once?: boolean
}

// Reveal component with intersection observer for animations
export default function Reveal({ 
  children, 
  className, 
  as = "div", 
  delayMs = 0, 
  once = true 
}: RevealProps) {
  const ref = useRef<any>(null)
  const [visible, setVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setVisible(true)
              setHasAnimated(true)
            }, delayMs)
            if (once) observer.unobserve(entry.target)
          } else if (!once && !hasAnimated) {
            setVisible(false)
          }
        })
      },
      { threshold: 0.15 },
    )
    
    observer.observe(node)
    return () => observer.disconnect()
  }, [delayMs, once, hasAnimated])

  // Using React.createElement to avoid TypeScript ref union type complexity
  return React.createElement(
    as,
    {
      ref,
      className: cn(
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        "motion-safe:[transform:translateY(var(--y,0))] motion-safe:[opacity:var(--o,1)]",
        visible || hasAnimated ? "motion-safe:[--y:0] motion-safe:[--o:1]" : "motion-safe:[--y:12px] motion-safe:[--o:0]",
        className,
      ),
    },
    children
  )
}
