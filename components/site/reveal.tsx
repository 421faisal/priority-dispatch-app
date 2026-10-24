"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  className?: string
  as?: string
  delayMs?: number
  once?: boolean
}

// Reveal component - animation disabled to prevent white screen flashing
// Content is always visible for better UX and SEO
export default function Reveal({ 
  children, 
  className, 
  as = "div", 
}: RevealProps) {
  // Simply render content without animation
  // This prevents white screen issues on zoom, scroll, and resize
  return React.createElement(
    as,
    {
      className: cn(className),
    },
    children
  )
}
