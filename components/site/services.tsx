import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"
import Link from "next/link"
import { rates } from "@/lib/pricing"

const items = [
  {
    image: "/images/services/dispatch.webp",
    title: "Truck Dispatching",
    desc: "Your truck dispatcher finds high-paying loads every day — for Reefers, Dry Vans, Box Trucks, and more. So you spend more time driving and less time searching.",
    bullets: ["Daily load opportunities", "Broker vetting", "Rate confirmations"],
  },
  {
    image: "/images/services/carrier-support.webp",
    title: "Carrier Support",
    desc: "You get real 24/7 support — not a voicemail. We handle calls, paperwork, and compliance. That means you can focus on what you do best: driving.",
    bullets: ["24/7 phone + email", "Carrier setup & paperwork", "Detention negotiation"],
  },
  {
    image: "/images/services/load-management.webp",
    title: "Load Management",
    desc: "We take care of the back-office so you don't have to. Invoicing, detention claims, POD audits — all handled by your freight dispatch team.",
    bullets: ["Clean invoicing", "POD & BOL audits", "Claims + collections"],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-muted py-12 md:py-20 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sleek, efficient, and focused solutions tailored to keep your wheels turning profitably.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ image, title, desc, bullets }, i) => (
            <Reveal key={title} delayMs={100 * i}>
              <Card className="group border-border shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative h-44 w-full overflow-hidden rounded-t-lg md:h-48">
                  <img
                    src={image}
                    alt={`${title} thumbnail`}
                    width={800}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <CardHeader className="flex flex-col items-start gap-3">
                  <CardTitle className="text-xl font-bold">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-lg font-bold">Dispatch by equipment</h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-3">
            {rates.filter((r) => r.href).map((r) => (
              <li key={r.equipment}>
                <Link
                  href={r.href!}
                  className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-accent hover:text-accent"
                >
                  {r.equipment} dispatch
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/owner-operator-dispatch"
                className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-accent hover:text-accent"
              >
                Owner-operator dispatch
              </Link>
            </li>
          </ul>
        </div>

        <Reveal className="mt-8 flex justify-center" delayMs={150}>
          <a href="/services">
            <Button className="bg-accent text-accent-foreground hover:opacity-90">See All Truck Dispatch Services</Button>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
