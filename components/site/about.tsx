import Reveal from "@/components/site/reveal"

const day = [
  ["06:40", "Search DAT, Truckstop and broker contacts for loads on your lane"],
  ["07:15", "Check the broker: authority, credit score, days to pay"],
  ["07:30", "Negotiate the rate and detention terms, get them in writing"],
  ["08:05", "Sign the rate confirmation and send your carrier packet"],
  ["14:20", "Check call with the receiver; detention clock started on time"],
  ["18:00", "Tomorrow's reload already booked before you deliver"],
]

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <Reveal delayMs={50}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Example day with your dispatcher</p>
            <ol className="mt-4 space-y-4">
              {day.map(([time, what], i) => (
                <li key={time} className="grid grid-cols-[4.5rem_1fr] gap-3">
                  <span className="font-mono text-sm font-semibold text-primary">{time}</span>
                  <span className={i === day.length - 1 ? "border-l-2 border-accent pl-3 text-sm font-semibold" : "border-l-2 border-border pl-3 text-sm text-foreground/80"}>
                    {what}
                  </span>
                </li>
              ))}
            </ol>
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
