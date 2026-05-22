"use client"

import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"

export function Hero() {
  return (
    <section id="home" className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="/images/hero-truck.jpg"
            alt="Modern semi-truck on a highway at dawn"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" aria-hidden />
          <div className="relative px-6 py-20 text-primary-foreground md:px-10 md:py-32">
            <Reveal>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Dispatchers online now
                </div>
                <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight md:text-6xl">
                  Keep your wheels turning - profitably.
                </h1>
                <p className="mt-2 text-xl font-semibold text-accent md:text-2xl">Priority Dispatch LLC</p>
                <p className="mt-4 text-pretty text-base opacity-95 md:text-lg">
                  Expert truck dispatching for owner-operators and small fleets. We source high-paying loads, plan smarter routes,
                  negotiate stronger rates, and handle back-office paperwork 24/7.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/carrier-setup">
                    <Button size="lg" className="bg-accent text-accent-foreground transition-opacity hover:opacity-90">
                      Get a Dispatcher Today
                    </Button>
                  </a>
                  <a href="#how-it-works">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-accent bg-transparent text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                    >
                      See How It Works
                    </Button>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
