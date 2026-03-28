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
            <h2 className="text-balance text-2xl font-semibold md:text-3xl">Your Truck Dispatcher. Your Success.</h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              You drive. We handle everything else. Priority Dispatch LLC is a professional truck dispatcher service built for owner-operators who want to earn more and stress less. So instead of chasing loads and brokers, you get a dedicated dispatcher who does it all for you.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Founded by Muhammad Faisal Bilal, we built this company on one idea: owner-operators deserve better. That means better rates, smarter lanes, and a freight dispatch service that actually picks up the phone. For example, we vet every broker before booking — so you never get stuck with a bad payer. We dispatch Reefers, Dry Vans, Box Trucks, Flatbeds, and Step Decks across all 48 states.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Based in Kissimmee, Florida, our truck dispatchers work 24/7. Because the road never stops — and neither do we. From load booking to invoicing, detention claims to broker negotiation, we handle the back-office so you can stay on the road and keep earning.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                24/7 Dedicated Truck Dispatcher
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                Top Rates Negotiated For You
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                No Hidden Fees. No Contracts.
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                Smart Lane Planning
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                Full Back-Office Management
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
