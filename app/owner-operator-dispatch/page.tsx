import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"
import { CheckCircle2, PhoneCall, ArrowRight, X } from "lucide-react"
import { rates, pricingSentence } from "@/lib/pricing"

const title = "Dispatch Service for Owner-Operators & One-Truck Carriers"
const description =
    "Independent truck dispatcher for owner-operators with one truck or a new MC authority. Loads, rates, broker checks and paperwork from 4% of gross, no contract."
const url = "https://prioritydispatchllc.com/owner-operator-dispatch"

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Priority Dispatch LLC", type: "website", images: ["/images/hero-truck.jpg"] },
    twitter: { card: "summary_large_image", title, description, images: ["/images/hero-truck.jpg"] },
}

const faqs = [
    {
        q: "Do I need a dispatcher if I only have one truck?",
        a: "You do not need one, but most single-truck owner-operators find it hard to drive 11 hours and also search load boards, call brokers, check credit and chase invoices. A dispatcher does that work for a percentage of the load, so you only pay when you earn.",
    },
    {
        q: "Can you dispatch a new MC authority?",
        a: "Yes. Many brokers will not book a carrier whose authority is younger than 30 to 90 days, so we focus on brokers and load types that accept new authorities, build your carrier packets and help you grow a payment history.",
    },
    {
        q: "What is an independent truck dispatcher?",
        a: "An independent truck dispatcher is a dispatcher or dispatch company that works for the carrier, not for a broker or shipper. Priority Dispatch is independent: we work under your MC authority, for your interests, and you approve every load.",
    },
    {
        q: "Will you force me to take loads?",
        a: "No. We never force dispatch. We send you the load details and rate, and you decide. You can also book your own loads, and you only pay our fee on loads we book.",
    },
    {
        q: "How much does dispatching cost for an owner-operator?",
        a: pricingSentence,
    },
]

const schema = [
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Dispatch service for owner-operators",
        serviceType: "Truck dispatching for owner-operators",
        url,
        description,
        provider: { "@type": "LocalBusiness", name: "Priority Dispatch LLC", url: "https://prioritydispatchllc.com", telephone: "+16893148347" },
        areaServed: { "@type": "Country", name: "United States" },
        audience: { "@type": "BusinessAudience", audienceType: "Owner-operators and one-truck carriers" },
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
]

const dailyTasks = [
    "Search DAT, Truckstop and our broker contacts for loads on your lanes",
    "Check each broker's authority, credit and payment history before booking",
    "Negotiate the rate, detention and layover terms in writing",
    "Send carrier packets and rate confirmations, and handle check calls",
    "Plan your next load before you deliver, so you do not sit empty",
    "Send invoices and follow up until you are paid",
]

const compare = [
    ["Time on the phone with brokers", "Hours every day", "Done for you"],
    ["Broker credit checks", "Only if you remember", "Every load"],
    ["Rate negotiation", "When you have time", "On every load"],
    ["Next load planned before delivery", "Often not", "Yes"],
    ["Invoicing and follow-up", "Evenings and weekends", "Done for you"],
    ["Cost", "Your time", "From 4% of the gross load"],
]

export default function OwnerOperatorDispatchPage() {
    return (
        <main>
            <SiteHeader />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
                    <Reveal>
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                                Dispatch Service for <span className="text-accent">Owner-Operators</span> and One-Truck Carriers
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-90">
                                Priority Dispatch is an independent truck dispatcher for owner-operators who run their own truck,
                                including new MC authorities. Your dedicated dispatcher finds and negotiates loads, checks every
                                broker and handles the paperwork, from 4% of the gross load, with no contract and no setup fee.
                            </p>
                            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                                <a href="/carrier-setup">
                                    <Button size="lg" className="bg-accent px-8 text-base font-bold text-accent-foreground shadow-lg hover:bg-accent/90">
                                        Get a Dedicated Dispatcher
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                                <a href="tel:+16893148347">
                                    <Button size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                        <PhoneCall className="mr-2 h-5 w-5" />
                                        (+1) 689-314-8347
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="bg-background py-16 md:py-24">
                <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight">Who this is for</h2>
                        <ul className="mt-6 space-y-4">
                            {[
                                ["Owner-operators with one truck", "You drive, we run the office: loads, brokers, paperwork and invoices."],
                                ["New MC authorities", "We target brokers that accept new authorities and help you build a payment history in your first 90 days."],
                                ["Drivers leaving a lease", "Going independent with your own authority? We help you replace the freight your carrier used to give you."],
                                ["Small fleets of 2 to 5 trucks", "One dispatcher plans all your trucks together, with negotiable fleet rates."],
                            ].map(([h, p]) => (
                                <li key={h} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                                    <span>
                                        <strong className="block">{h}</strong>
                                        <span className="text-muted-foreground">{p}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight">What your dispatcher does every day</h2>
                        <ul className="mt-6 space-y-3">
                            {dailyTasks.map((task) => (
                                <li key={task} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm text-muted-foreground">You approve every load. We never force dispatch.</p>
                    </div>
                </div>
            </section>

            <section className="bg-muted py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-extrabold tracking-tight">Self-dispatch vs. a dedicated dispatcher</h2>
                    <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
                        <table className="w-full min-w-[520px] text-left text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="p-4"><span className="sr-only">Task</span></th>
                                    <th className="p-4 font-bold">Dispatching yourself</th>
                                    <th className="p-4 font-bold text-accent">With Priority Dispatch</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compare.map(([task, self, us]) => (
                                    <tr key={task} className="border-b border-border/60 last:border-0">
                                        <td className="p-4 font-medium">{task}</td>
                                        <td className="p-4 text-muted-foreground">
                                            <X className="mr-1 inline h-4 w-4" aria-hidden /> {self}
                                        </td>
                                        <td className="p-4">
                                            <CheckCircle2 className="mr-1 inline h-4 w-4 text-accent" aria-hidden /> {us}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 md:py-24">
                <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight">Owner-operator dispatch rates</h2>
                        <p className="mt-4 text-muted-foreground">
                            Paid only after the broker pays you. No setup fee, no contract, no minimum loads.
                        </p>
                        <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
                            {rates.map((r) => (
                                <li key={r.equipment} className="flex justify-between p-4">
                                    {r.href ? (
                                        <Link href={r.href} className="font-medium hover:text-accent hover:underline">{r.equipment} dispatch</Link>
                                    ) : (
                                        <span className="font-medium">{r.equipment} dispatch</span>
                                    )}
                                    <span className="font-bold">{r.percent}%</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm">
                            <Link href="/pricing" className="font-semibold text-accent hover:underline">Full pricing details</Link>
                            {" · "}
                            <Link href="/blog/truck-dispatcher-cost" className="font-semibold text-accent hover:underline">How much dispatchers charge</Link>
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight">How to get started</h2>
                        <ol className="mt-6 space-y-5">
                            {[
                                ["Send your documents", "MC authority, W-9 and certificate of insurance through our carrier setup form."],
                                ["Talk to your dispatcher", "Tell us your lanes, home time, equipment and the rate per mile you need."],
                                ["We book your first load", "Usually within 24 to 48 hours. You approve it before anything is confirmed."],
                                ["Get paid, then pay us", "Our fee comes only after the broker pays you."],
                            ].map(([h, p], i) => (
                                <li key={h} className="flex gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">{i + 1}</span>
                                    <span>
                                        <strong className="block">{h}</strong>
                                        <span className="text-muted-foreground">{p}</span>
                                    </span>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-6 text-sm text-muted-foreground">
                            Before you start, work out your minimum rate with the free{" "}
                            <Link href="/toolbox/cost-per-mile-calculator" className="font-semibold text-accent hover:underline">cost per mile calculator</Link>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-muted py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-extrabold tracking-tight">Owner-operator dispatch questions</h2>
                    <div className="mt-8 space-y-5">
                        {faqs.map((f) => (
                            <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                                <h3 className="text-lg font-bold">{f.q}</h3>
                                <p className="mt-2 leading-relaxed text-muted-foreground">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-16">
                <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-3">
                    <div>
                        <h2 className="text-xl font-extrabold">Guides for owner-operators</h2>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="/blog/what-is-freight-dispatching" className="text-accent hover:underline">What is freight dispatching?</Link></li>
                            <li><Link href="/blog/how-to-choose-dispatch-service" className="text-accent hover:underline">How to choose a dispatch service</Link></li>
                            <li><Link href="/blog/how-to-survive-new-trucking-authority-mc-leasing" className="text-accent hover:underline">Surviving your first 90 days with new authority</Link></li>
                            <li><Link href="/blog/owner-operator-guide" className="text-accent hover:underline">How owner-operators earn more</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-extrabold">Where we dispatch</h2>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="/truck-dispatcher/midwest" className="text-accent hover:underline">Midwest</Link></li>
                            <li><Link href="/truck-dispatcher/east-coast" className="text-accent hover:underline">East Coast</Link></li>
                            <li><Link href="/truck-dispatcher/california" className="text-accent hover:underline">California</Link></li>
                            <li><Link href="/areas-we-serve" className="text-accent hover:underline">All 48 states</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-extrabold">Free tools</h2>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="/toolbox/load-profit-calculator" className="text-accent hover:underline">Load profit calculator</Link></li>
                            <li><Link href="/toolbox/hos-calculator" className="text-accent hover:underline">HOS calculator</Link></li>
                            <li><Link href="/toolbox/per-diem-calculator" className="text-accent hover:underline">Per diem calculator</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-primary py-16 text-primary-foreground md:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl font-extrabold md:text-4xl">Ready to work with a dedicated dispatcher?</h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed opacity-90">
                        Send your documents today and we can book your first load within 24 to 48 hours.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                        <a href="/carrier-setup">
                            <Button size="lg" className="bg-accent px-8 text-base font-bold text-accent-foreground shadow-md hover:bg-accent/90">
                                Get Started Online
                            </Button>
                        </a>
                        <a href="tel:+16893148347">
                            <Button size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <PhoneCall className="mr-2 h-5 w-5" />
                                Call (+1) 689-314-8347
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
