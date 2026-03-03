import Reveal from "@/components/site/reveal"

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <Reveal delayMs={50}>
          <div>
            <img
              src="/images/services/carrier-support.jpg"
              alt="Dedicated support team assisting carriers"
              loading="lazy"
              decoding="async"
              className="h-64 w-full rounded-lg object-cover transition-transform duration-500 md:h-80 motion-safe:hover:scale-[1.01]"
            />
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <div>
            <h2 className="text-balance text-2xl font-semibold md:text-3xl">Driven by Your Success.</h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              We exist to maximize carrier profitability through expert dispatching, strategic route planning, and
              proactive support. Our team delivers a dependable, data‑driven service that keeps you moving with
              confidence—day and night.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Founded by Muhammad Faisal Bilal, Priority Dispatch LLC was built on a simple principle: carriers
              deserve a dispatch partner who puts their earnings first. We combine deep industry knowledge with
              modern technology to find the highest-paying loads on the best lanes for your equipment—whether
              you run Reefers, Dry Vans, Box Trucks, Flatbeds, or Step Decks.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Based in Kissimmee, Florida, our freight dispatching team covers all 48 continental states and
              operates 24/7—because the road never stops, and neither does your dispatcher. From load booking to
              invoicing, broker vetting to detention claims, we handle the back-office so you can focus on driving.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                24/7 Dedicated Support
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                Best Freight Rates Negotiated
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                Zero Hidden Fees or Lock-In Contracts
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                Dedicated Route Planning
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                Complete Back-Office Management
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                All 48 States Covered
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
