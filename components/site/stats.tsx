"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Truck, Clock, TrendingUp, ShieldCheck, FileText, Fuel, Headset, BadgeCheck, MapPinned } from "lucide-react"
import Reveal from "@/components/site/reveal"

function StatValue({
  target,
  suffix = "",
  prefix = "",
  durationMs = 1000,
  start,
}: {
  target: number
  suffix?: string
  prefix?: string
  durationMs?: number
  start: boolean
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      setValue(Math.round(target * progress))
      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [durationMs, start, target])

  return (
    <span>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

export function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [showCount, setShowCount] = useState(false)

  const stats = [
    { target: 98, suffix: "%", label: "On-Time Pickup & Delivery", icon: Truck },
    { target: 24, suffix: "/7", label: "Dispatcher Support Coverage", icon: Clock },
    { target: 500, suffix: "+", label: "Owner-Operators & Fleets Supported", icon: TrendingUp },
  ]

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (first.isIntersecting) {
          setShowCount(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const offers = [
    {
      icon: Headset,
      title: "Dedicated Dispatcher",
      desc: "One point of contact who learns your lanes, prefs, and weekly targets.",
    },
    {
      icon: MapPinned,
      title: "Smart Lane Planning",
      desc: "AI lane intelligence to minimize deadhead and maximize rate-per-mile.",
    },
    {
      icon: ShieldCheck,
      title: "Broker Compliance",
      desc: "MC/authority checks, carrier packets, and rate-conf verification.",
    },
    { icon: FileText, title: "Paperwork & Billing", desc: "RCs, PODs, invoicing, detention/TONU—handled end-to-end." },
    {
      icon: Fuel,
      title: "Fuel Optimization",
      desc: "Routes that reduce idle time and improve MPG on your preferred corridors.",
    },
    {
      icon: BadgeCheck,
      title: "Claims & Detention",
      desc: "Proactive detention negotiation and documentation for faster payouts.",
    },
  ]

  const processSteps = useMemo(
    () => [
      {
        step: "Step 1",
        title: "Sign Up",
        desc: "Complete carrier setup with your MC details, equipment type, and lanes.",
      },
      {
        step: "Step 2",
        title: "Get Loads",
        desc: "We source, negotiate, and present high-paying loads that match your goals.",
      },
      {
        step: "Step 3",
        title: "Get Paid",
        desc: "You haul while we manage confirmations, PODs, invoicing, and detention follow-up.",
      },
    ],
    [],
  )

  return (
    <section id="why" className="bg-muted" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <Reveal>
          <h2 className="text-balance text-center text-2xl font-semibold md:text-3xl">Why Owner-Operators Choose Us</h2>
        </Reveal>
        <Reveal className="mx-auto mt-2 max-w-2xl">
          <p className="text-center text-foreground/70">
            Here&apos;s what you get when you work with a truck dispatcher from Priority Dispatch LLC.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delayMs={100 * i}>
              <div className="rounded-lg border border-border bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="text-3xl font-bold text-primary">
                    <StatValue target={s.target} suffix={s.suffix} start={showCount} />
                  </div>
                </div>
                <div className="mt-2 text-center text-sm text-foreground/70">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="text-center text-xl font-semibold md:text-2xl">How It Works</h3>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delayMs={90 * i}>
              <div className="rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">{step.step}</p>
                <p className="mt-2 text-lg font-semibold">{step.title}</p>
                <p className="mt-2 text-sm text-foreground/70">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="text-center text-xl font-semibold md:text-2xl">What We Offer</h3>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.title} delayMs={80 * i}>
              <div className="group rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <o.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <div className="font-medium">{o.title}</div>
                    <p className="mt-1 text-sm text-foreground/70">{o.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
