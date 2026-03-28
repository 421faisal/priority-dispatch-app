import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"

export function Hero() {
  return (
    <section id="home" className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {/* background image */}
          <img
            src="/images/hero-truck.jpg"
            alt="Modern semi-truck on a highway at dawn"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* navy-tinted overlay for readability */}
          <div className="absolute inset-0 bg-primary/70" aria-hidden />
          <div className="relative px-6 py-20 text-primary-foreground md:px-10 md:py-36">
            <Reveal>
              <div className="max-w-2xl">
                <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
                  Professional Truck Dispatcher Services for Owner Operators
                </h1>
                <p className="mt-1 text-xl font-semibold text-accent md:text-2xl">Priority Dispatch LLC</p>
                <p className="mt-4 text-pretty text-base opacity-95 md:text-lg">
                  Struggling to find high-paying loads as an owner-operator? Your dedicated truck dispatcher at Priority Dispatch LLC finds the best loads, negotiates top rates, and handles all your paperwork — so you can focus on driving. We cover Reefers, Dry Vans, Box Trucks, Flatbeds, and more across all 48 states. 24/7 support. No contracts. No hidden fees.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/carrier-setup">
                    <Button size="lg" className="bg-accent text-accent-foreground transition-opacity hover:opacity-90">
                      Carrier Setup
                    </Button>
                  </a>
                  <a href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-accent bg-transparent text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                    >
                      Our Services
                    </Button>
                  </a>
                </div>

                {/* Quick Summary Box — LLM-friendly */}
                <div className="mt-8 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 text-sm backdrop-blur-sm">
                  <p className="font-bold text-accent uppercase tracking-wide text-xs mb-3">Quick Summary</p>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li>✔ <strong className="text-primary-foreground">What is a truck dispatcher?</strong> A professional who finds loads, negotiates rates, and handles paperwork for owner-operators.</li>
                    <li>✔ <strong className="text-primary-foreground">Who we serve:</strong> Owner-operators and small fleets across all 48 states.</li>
                    <li>✔ <strong className="text-primary-foreground">Equipment:</strong> Reefers, Dry Vans, Box Trucks, Flatbeds, Step Decks.</li>
                    <li>✔ <strong className="text-primary-foreground">Key benefit:</strong> Carriers earn up to 20% more per mile with a dedicated truck dispatcher.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
