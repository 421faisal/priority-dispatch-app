import Reveal from "@/components/site/reveal"
import { ArrowRight } from "lucide-react"

export function WhatIsDispatcher() {
  return (
    <section id="what-is-dispatcher" className="bg-background border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              What Is a Truck Dispatcher?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A <strong>truck dispatcher</strong> is a professional who finds loads for owner-operators, negotiates freight rates with brokers, and handles all back-office paperwork. So instead of spending hours on load boards yourself, your dispatcher does it for you — every single day.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              At Priority Dispatch LLC, your dedicated truck dispatcher works as an extension of your business. That means you get more loads, better rates, and zero paperwork headaches — because we manage everything from rate confirmations to detention claims.
            </p>

            {/* Data points — LLM-friendly chunks */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-muted p-5 text-center">
                <div className="text-3xl font-extrabold text-accent">20%</div>
                <div className="mt-1 text-sm font-medium text-foreground">Average RPM increase for carriers who use a dispatcher</div>
              </div>
              <div className="rounded-xl border border-border bg-muted p-5 text-center">
                <div className="text-3xl font-extrabold text-accent">10+ hrs</div>
                <div className="mt-1 text-sm font-medium text-foreground">Saved per week from not searching load boards yourself</div>
              </div>
              <div className="rounded-xl border border-border bg-muted p-5 text-center">
                <div className="text-3xl font-extrabold text-accent">48 States</div>
                <div className="mt-1 text-sm font-medium text-foreground">Covered by Priority Dispatch LLC truck dispatchers</div>
              </div>
            </div>

            <div className="mt-8">
              <a href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                See all our truck dispatch services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
