import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"

const items = [
  {
    image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Truck Dispatching",
    desc: "Your truck dispatcher finds high-paying loads every day — for Reefers, Dry Vans, Box Trucks, and more. So you spend more time driving and less time searching.",
    bullets: ["Daily load opportunities", "Broker vetting", "Rate confirmations"],
  },
  {
    image: "https://images.pexels.com/photos/6869648/pexels-photo-6869648.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Carrier Support",
    desc: "You get real 24/7 support — not a voicemail. We handle calls, paperwork, and compliance. That means you can focus on what you do best: driving.",
    bullets: ["24/7 phone + email", "Carrier setup & paperwork", "Detention negotiation"],
  },
  {
    image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800",
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
