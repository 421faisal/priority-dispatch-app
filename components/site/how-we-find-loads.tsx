import Reveal from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
                    <p className="text-sm text-muted-foreground mt-1">Because we work with hundreds of brokers, we get first access to premium loads before they hit the open market. For example, repeat lanes with consistent, fast-paying brokers.</p>
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
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Truck dispatcher finding high-paying loads for owner operators"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
