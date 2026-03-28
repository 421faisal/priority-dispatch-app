import Reveal from "@/components/site/reveal"
import { TrendingUp, Clock, ShieldCheck, FileText, Banknote, RefreshCw } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "You Earn More Per Mile",
    desc: "Your truck dispatcher negotiates rates with brokers every day. So you stop leaving money on the table and start getting paid what your truck is worth.",
  },
  {
    icon: Clock,
    title: "You Save Time Every Week",
    desc: "No more spending hours searching load boards. Because your dispatcher does it for you — that means more time driving and earning.",
  },
  {
    icon: ShieldCheck,
    title: "You Only Work with Trusted Brokers",
    desc: "We vet every broker before booking. That means no bad payers, no scams, and no surprises. Your dispatcher protects your business.",
  },
  {
    icon: FileText,
    title: "Zero Paperwork for You",
    desc: "Rate confirmations, invoices, PODs, detention claims — your freight dispatch team handles all of it. So you can focus on driving.",
  },
  {
    icon: Banknote,
    title: "No Hidden Fees. No Contracts.",
    desc: "Our truck dispatcher services run on a simple percentage of the load revenue. No monthly fees, no lock-in. Cancel anytime.",
  },
  {
    icon: RefreshCw,
    title: "Consistent Loads Every Week",
    desc: "Because we know your preferred lanes and equipment, you get steady, high-paying load options week after week.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="bg-muted border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
              Benefits of Hiring a Truck Dispatcher
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Here&apos;s what changes when you stop dispatching yourself and let a professional do it for you.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delayMs={80 * i}>
              <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
