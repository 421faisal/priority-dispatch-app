"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-owner", label: "Our Team" },
  { href: "/carrier-setup", label: "Carrier Setup" },
  { href: "/areas-we-serve", label: "Areas We Serve" },
  { href: "/blog", label: "Blog" },
  { href: "/toolbox", label: "Toolbox" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary/95 text-primary-foreground shadow-md backdrop-blur-sm border-b border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo-priority-dispatch.png" alt="Priority Dispatch LLC" className="h-[60px] md:h-[72px] lg:h-[80px] w-auto object-contain drop-shadow-sm transition-all" />
          <div className="hidden sm:flex flex-col ml-1">
            <span className="text-base md:text-lg lg:text-xl font-bold tracking-widest leading-none">PRIORITY DISPATCH</span>
            <span className="text-[10px] md:text-xs tracking-[0.25em] font-medium opacity-80 mt-1">LLC</span>
          </div>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">

          
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-opacity"
              >
                {item.label}
              </a>
            ))}
            <a href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-sm">
                Request a Quote
              </Button>
            </a>
          </nav>

          <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={cn("md:hidden transition-[max-height] overflow-hidden bg-primary", open ? "max-h-96" : "max-h-0")}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)}>
            <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">Request a Quote</Button>
          </a>
        </nav>
      </div>
    </header>
  )
}
