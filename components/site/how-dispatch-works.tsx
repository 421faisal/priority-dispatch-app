import Reveal from "@/components/site/reveal"
import { ClipboardList, Search, CheckCircle, DollarSign } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Sign Up in Minutes",
    desc: "Fill out our simple carrier setup form. Share your MC number, equipment type, and preferred lanes. That's it.",
  },
  {
    icon: Search,
    step: "Step 2",
    title: "We Find Your Loads",
    desc: "Your dedicated truck dispatcher searches load boards and broker networks to find the best-paying loads every day. So you don't have to.",
  },
  {
    icon: CheckCircle,
    step: "Step 3",
    title: "You Approve the Load",
    desc: "We send you the load details. You decide. Because you always have the final say — no load is ever forced on you.",
  },
  {
    icon: DollarSign,
    step: "Step 4",
    title: "You Get Paid",
    desc: "We handle all the paperwork — rate confirmations, invoicing, PODs, and detention claims. That means faster payments for you.",
  },
]

export function HowDispatchWorks() {
  return (
    <section id="how-it-works" className="bg-background border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              How Our Truck Dispatchers Help You
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Getting started with a professional truck dispatcher is simple. Here&apos;s exactly how it works — from sign-up to your first load.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <Reveal key={step} delayMs={100 * i}>
              <div className="relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-accent uppercase">{step}</span>
                </div>
                <h3 className="text-base font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
