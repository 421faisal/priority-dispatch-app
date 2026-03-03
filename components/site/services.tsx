import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"

const items = [
  {
    image: "/images/services/dispatch.jpg",
    title: "Dispatching",
    desc: "Fast, high-paying load booking for Reefers, Dry Vans, Box Trucks, and more with proactive lane scouting and smart route optimization.",
    bullets: ["Daily load opportunities", "Broker vetting", "Rate confirmations"],
  },
  {
    image: "/images/services/carrier-support.jpg",
    title: "Carrier Support",
    desc: "24/7 assistance for drivers and fleets. We handle calls, paperwork, and compliance so you can drive.",
    bullets: ["24/7 phone + email", "Setups & paperwork", "Detention negotiation"],
  },
  {
    image: "/images/services/load-management.jpg",
    title: "Load Management",
    desc: "Complete back-office: invoicing, detention claims, POD audits, and collections tracking.",
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

        <Reveal className="mt-8 flex justify-center" delayMs={150}>
          <a href="/contact">
            <Button className="bg-accent text-accent-foreground hover:opacity-90">Contact Us for Custom Solutions</Button>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
