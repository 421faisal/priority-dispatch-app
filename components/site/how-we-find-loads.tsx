import Reveal from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const offers = [
  { lane: "Columbus, OH → Dallas, TX", miles: 1030, rate: 2150, why: "below your minimum rate" },
  { lane: "Columbus, OH → Charlotte, NC", miles: 430, rate: 1300, why: "broker pays in 65+ days" },
  { lane: "Columbus, OH → Chicago, IL", miles: 355, rate: 900, why: "140 mi deadhead to pickup" },
  { lane: "Columbus, OH → Nashville, TN", miles: 380, rate: 1050, booked: true },
]

export function HowWeFindLoads() {
  return (
    <section id="find-loads" className="bg-background border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
                How We Find High-Paying Loads
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Finding loads isn&apos;t luck — it&apos;s a system. So here&apos;s exactly how your truck dispatcher finds the best freight for you every day.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">1</span>
                  <div>
                    <p className="font-semibold text-foreground">Multi-Load-Board Search</p>
                    <p className="text-sm text-muted-foreground mt-1">We search DAT, Truckstop, and direct broker networks simultaneously. That means you get access to more loads than if you searched yourself.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">2</span>
                  <div>
                    <p className="font-semibold text-foreground">Direct Broker Relationships</p>
                    <p className="text-sm text-muted-foreground mt-1">We build relationships with brokers who pay on time, so repeat lanes come to us before they hit the open boards. For example, repeat lanes with consistent, fast-paying brokers.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">3</span>
                  <div>
                    <p className="font-semibold text-foreground">Smart Lane Planning</p>
                    <p className="text-sm text-muted-foreground mt-1">We analyze freight trends and your preferred routes. So your dispatcher places you on lanes where rates are highest and deadhead is lowest — maximizing your revenue per mile.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <a href="/carrier-setup">
                  <Button className="bg-accent text-accent-foreground hover:opacity-90">
                    Get Started — It&apos;s Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Example search: dry van out of Columbus, OH · your minimum $2.40/mi
              </p>
              <ul className="mt-4 divide-y divide-border">
                {offers.map((o) => (
                  <li key={o.lane} className="flex items-start justify-between gap-3 py-3">
                    <div>
                      <p className="font-semibold">{o.lane}</p>
                      <p className="text-sm text-muted-foreground">
                        {o.miles.toLocaleString("en-US")} mi · ${o.rate.toLocaleString("en-US")} · ${(o.rate / o.miles).toFixed(2)}/mi
                      </p>
                    </div>
                    {o.booked ? (
                      <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Booked</span>
                    ) : (
                      <span className="shrink-0 max-w-[9rem] text-right text-xs text-muted-foreground">Skipped: {o.why}</span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">Illustration of how we screen loads. Real rates vary by lane and week.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
