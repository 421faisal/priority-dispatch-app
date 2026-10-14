"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about-owner", label: "Our Team" },
  { href: "/carrier-setup", label: "Carrier Setup" },
  { href: "/areas-we-serve", label: "Areas We Serve" },
  { href: "/blog", label: "Blog" },
  { href: "/toolbox", label: "Toolbox" },
  { href: "/faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
]

const servicesDropdown = [
  { href: "/services", label: "All Services", rate: "" },
  { href: "/services/dry-van-dispatch", label: "Dry Van Dispatch", rate: "$2.50-$3.50/mi" },
  { href: "/services/reefer-dispatch", label: "Reefer Dispatch", rate: "$2.80-$4.00/mi" },
  { href: "/services/flatbed-dispatch", label: "Flatbed Dispatch", rate: "$3.00-$5.00/mi" },
  { href: "/services/box-truck-dispatch", label: "Box Truck Dispatch", rate: "$1.80-$3.50/mi" },
  { href: "/services/step-deck-dispatch", label: "Step Deck Dispatch", rate: "$3.50-$5.50/mi" },
  { href: "/services/power-only-dispatch", label: "Power Only Dispatch", rate: "$2.00-$3.50/mi" },
  { href: "/services/hotshot-dispatch", label: "Hotshot Dispatch", rate: "$2.50-$5.00/mi" },
  { href: "/pricing", label: "Pricing", rate: "5% Fee" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

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
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-opacity"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={cn(
                  "absolute left-0 top-full mt-2 w-72 rounded-xl bg-card border-2 border-border shadow-2xl overflow-hidden transition-all",
                  servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                )}
              >
                <div className="p-2">
                  {servicesDropdown.map((item, i) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors group/item",
                        i === 0 && "border-b border-border mb-2 pb-3 font-bold text-accent"
                      )}
                    >
                      <span className="text-sm font-medium text-foreground group-hover/item:text-accent transition-colors">
                        {item.label}
                      </span>
                      {item.rate && (
                        <span className="text-xs font-bold text-accent">
                          {item.rate}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-opacity ${item.href === "/careers" ? "text-accent font-bold" : ""}`}
              >
                {item.label}{item.href === "/careers" && <span className="ml-1.5 inline-flex items-center rounded-full bg-accent/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">Hiring</span>}
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
        className={cn("md:hidden transition-[max-height] overflow-hidden bg-primary", open ? "max-h-[600px]" : "max-h-0")}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4">
          {/* Services Accordion for Mobile */}
          <div className="rounded-md px-2 py-2 text-sm">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-left hover:opacity-80"
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {servicesDropdown.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between py-1.5 text-sm opacity-80 hover:opacity-100"
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.rate && <span className="text-xs text-accent font-bold">{item.rate}</span>}
                  </a>
                ))}
              </div>
            )}
          </div>

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

