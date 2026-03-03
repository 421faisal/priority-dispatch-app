import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"
import {
    Truck,
    Headset,
    FileText,
    MapPinned,
    ShieldCheck,
    Fuel,
    BadgeCheck,
    Clock,
    ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Our Services — Freight Dispatching & Carrier Support | Priority Dispatch LLC",
    description:
        "Explore Priority Dispatch LLC's full range of freight dispatching services: load booking, carrier support, route optimization, broker vetting, invoicing, and 24/7 assistance for owner-operators.",
    openGraph: {
        title: "Services | Priority Dispatch LLC",
        description:
            "Full-service freight dispatching for Reefers, Dry Vans, Box Trucks, Flatbeds, and more.",
        url: "https://prioritydispatchllc.com/services",
    },
}

const coreServices = [
    {
        icon: Truck,
        title: "Freight Dispatching",
        desc: "Our dispatchers search multiple load boards and broker networks daily to find the highest-paying loads for your equipment. We handle rate negotiation, rate confirmations, and scheduling so you never sit idle. Whether you run Reefers, Dry Vans, Box Trucks, or Flatbeds, we'll keep your wheels turning profitably.",
        bullets: [
            "Daily load search & booking",
            "Aggressive rate negotiation",
            "Multi-board & broker network access",
            "Equipment-specific matchmaking",
        ],
    },
    {
        icon: Headset,
        title: "24/7 Carrier Support",
        desc: "The road doesn't stop at 5 PM—and neither do we. Our support team is available around the clock to assist with breakdowns, detention disputes, shipper/receiver issues, and any questions. You'll always have a real person to call, not a voicemail.",
        bullets: [
            "Round-the-clock phone & email",
            "Breakdown & emergency coordination",
            "Shipper/receiver communication",
            "Detention & layover negotiation",
        ],
    },
    {
        icon: FileText,
        title: "Back-Office & Invoicing",
        desc: "Paperwork slows you down. We handle invoicing, POD and BOL audits, detention claims, collections tracking, and all the administrative work that keeps cash flowing. Our clean, organized process means faster payments and fewer disputes.",
        bullets: [
            "Professional invoicing",
            "POD & BOL document audits",
            "Detention & TONU claims",
            "Collections follow-up",
        ],
    },
]

const additionalServices = [
    {
        icon: MapPinned,
        title: "Smart Lane Planning",
        desc: "Data-driven lane intelligence to minimize deadhead miles and maximize your rate-per-mile on preferred corridors.",
    },
    {
        icon: ShieldCheck,
        title: "Broker Vetting & Compliance",
        desc: "MC/authority verification, credit checks, carrier packets, and rate-confirmation review for every load we book.",
    },
    {
        icon: Fuel,
        title: "Fuel & Route Optimization",
        desc: "Optimized routing that reduces idle time, lowers fuel consumption, and improves MPG on your regular lanes.",
    },
    {
        icon: BadgeCheck,
        title: "Claims & Detention Support",
        desc: "Proactive detention negotiation and thorough documentation to ensure you get paid for every hour you wait.",
    },
    {
        icon: Clock,
        title: "Dedicated Dispatcher",
        desc: "One dedicated point of contact who learns your lanes, preferences, and revenue goals—no rotating teams.",
    },
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Freight Dispatching",
    provider: {
        "@type": "LocalBusiness",
        name: "Priority Dispatch LLC",
        url: "https://prioritydispatchllc.com",
    },
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Freight Dispatching Services",
        itemListElement: coreServices.map((svc) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: svc.title, description: svc.desc },
        })),
    },
}

export default function ServicesPage() {
    return (
        <main>
            <SiteHeader />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Hero */}
            <section className="bg-primary text-primary-foreground">
                <div className="mx-auto max-w-4xl px-4 py-14 text-center md:py-20">
                    <Reveal>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Our Services
                        </h1>
                    </Reveal>
                    <Reveal delayMs={80}>
                        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
                            Comprehensive freight dispatching solutions built to maximize your
                            revenue, reduce downtime, and keep your operation running smoothly.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Core Services */}
            <section className="bg-background">
                <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                    <Reveal>
                        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
                            Core Solutions
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
                            The backbone of our dispatching partnership—everything you need from load
                            booking to getting paid.
                        </p>
                    </Reveal>

                    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {coreServices.map((svc, i) => (
                            <Reveal key={svc.title} delayMs={100 * i}>
                                <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <svc.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold">{svc.title}</h3>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                                        {svc.desc}
                                    </p>
                                    <ul className="mt-5 space-y-2 border-t border-border pt-4">
                                        {svc.bullets.map((b) => (
                                            <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="bg-muted">
                <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                    <Reveal>
                        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
                            Additional Services
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
                            Beyond dispatching—tools and support that give you a competitive edge on the road.
                        </p>
                    </Reveal>

                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {additionalServices.map((svc, i) => (
                            <Reveal key={svc.title} delayMs={80 * i}>
                                <div className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                                        <svc.icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="font-bold">{svc.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-primary-foreground">
                <div className="mx-auto max-w-4xl px-4 py-14 text-center md:py-20">
                    <Reveal>
                        <h2 className="text-3xl font-extrabold md:text-4xl">
                            Ready to Maximize Your Earnings?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl opacity-90">
                            Join the carriers who trust Priority Dispatch LLC for reliable loads,
                            expert support, and higher revenue per mile.
                        </p>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                            <a href="/carrier-setup">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90 shadow-md">
                                    Carrier Setup
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                                >
                                    Contact Us
                                </Button>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
