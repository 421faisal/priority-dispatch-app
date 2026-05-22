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
    Briefcase,
    CheckCircle2,
    Star,
    TrendingUp,
    Users,
    Award,
    PhoneCall,
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
        image: "/images/services-dispatch.jpg",
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
        image: "/images/services-carrier.jpg",
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
        image: "/images/services-load.jpg",
    },
]

const additionalServices = [
    {
        icon: Briefcase,
        title: "New Carrier Setup & MC Lease",
        desc: "Complete A-to-Z setup for new carriers and investors. We handle LLC formation, free website creation, MC Authority, BOC-3, UCR, 2290, IFTA, IRP plates, and state permits.",
        href: "/services/new-carrier-setup"
    },
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

const howItWorks = [
    {
        step: "01",
        title: "Get Set Up in 24 Hours",
        desc: "Sign a simple dispatch agreement. We collect your MC number, insurance, and equipment details — and we're ready to find your first load within 24 hours.",
    },
    {
        step: "02",
        title: "We Hunt, You Drive",
        desc: "While you're on the road, we're monitoring load boards, negotiating rates, and securing the most profitable freight for your next move.",
    },
    {
        step: "03",
        title: "We Handle All Paperwork",
        desc: "Rate confirmations, BOL audits, POD submissions, detention claims — your dispatcher handles it all so you never waste time on admin.",
    },
    {
        step: "04",
        title: "Get Paid Faster",
        desc: "We invoice brokers immediately upon delivery and follow up aggressively. Most of our carriers are paid within 5–7 business days.",
    },
]

const stats = [
    { icon: TrendingUp, value: "18–25%", label: "Average Revenue Increase" },
    { icon: Users, value: "150+", label: "Active Carrier Partners" },
    { icon: Award, value: "4.9/5", label: "Average Carrier Rating" },
    { icon: Clock, value: "24/7", label: "Support Coverage" },
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
            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle at 25% 50%, #ff6700 0%, transparent 60%), radial-gradient(circle at 75% 50%, #0055a5 0%, transparent 60%)" }}
                />
                <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
                    <Reveal>
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                                Full-Service Dispatch
                            </span>
                            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl leading-tight">
                                Everything Your Trucking Business Needs to{" "}
                                <span className="text-accent">Dominate</span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90 leading-relaxed">
                                From load booking and rate negotiation to 24/7 support and back-office paperwork — we handle everything so you can focus entirely on driving profitably.
                            </p>
                            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                                <a href="/carrier-setup">
                                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 text-base font-bold px-8">
                                        Start Working With Us
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                                <a href="/contact">
                                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors text-base px-8">
                                        <PhoneCall className="mr-2 h-5 w-5" />
                                        Talk to a Dispatcher
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-accent/5 border-y border-border">
                <div className="mx-auto max-w-6xl px-4 py-8">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {stats.map((s, i) => (
                            <Reveal key={s.label} delayMs={80 * i}>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <s.icon className="h-6 w-6 text-accent" />
                                    <span className="text-3xl font-extrabold text-foreground">{s.value}</span>
                                    <span className="text-sm text-muted-foreground font-medium">{s.label}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="bg-background py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="text-center mb-14">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Core Solutions</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                                The backbone of our dispatching partnership — everything you need from load booking to getting paid.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-12">
                        {coreServices.map((svc, i) => (
                            <Reveal key={svc.title} delayMs={100 * i}>
                                <div className={`flex flex-col gap-8 rounded-2xl border border-border overflow-hidden shadow-sm transition-shadow hover:shadow-lg md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                                    <div className="relative md:w-2/5 min-h-[250px]">
                                        <img
                                            src={svc.image}
                                            alt={svc.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-primary/50" />
                                        <div className="relative z-10 flex h-full items-end p-6">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg">
                                                <svc.icon className="h-7 w-7" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold mb-3">{svc.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-5">{svc.desc}</p>
                                        <ul className="space-y-2">
                                            {svc.bullets.map((b) => (
                                                <li key={b} className="flex items-center gap-2 text-sm font-medium">
                                                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-muted py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="text-center mb-14">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">How It Works</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                                From first contact to consistent loads — we make it seamless.
                            </p>
                        </div>
                    </Reveal>
                    <div className="grid gap-8 md:grid-cols-4">
                        {howItWorks.map((step, i) => (
                            <Reveal key={step.step} delayMs={80 * i}>
                                <div className="relative bg-card border border-border rounded-2xl p-6 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-extrabold text-lg">
                                        {step.step}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                    {i < howItWorks.length - 1 && (
                                        <div className="hidden md:block absolute top-10 -right-4 text-muted-foreground/30 text-2xl">›</div>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="bg-background py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="text-center mb-14">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                Additional Services
                            </h2>
                            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                                Beyond dispatching — tools and support that give you a competitive edge on the road.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {additionalServices.map((svc, i) => (
                            <Reveal key={svc.title} delayMs={80 * i}>
                                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-accent/30">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm">
                                        <svc.icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-base">{svc.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                                        {'href' in svc && svc.href && (
                                            <a href={svc.href} className="mt-3 inline-flex items-center text-sm font-bold text-accent hover:underline">
                                                Learn More <ArrowRight className="ml-1 h-3 w-3" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proof / Testimonial */}
            <section className="bg-primary text-primary-foreground py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <Star className="h-8 w-8 text-accent mx-auto mb-4" />
                        <p className="text-2xl font-bold italic leading-relaxed opacity-90 max-w-3xl mx-auto">
                            &ldquo;Since joining Priority Dispatch, my revenue per mile went from $2.10 to $2.85 in the first month. They found loads I never knew existed and my deadhead dropped from 22% to 8%.&rdquo;
                        </p>
                        <p className="mt-6 font-semibold opacity-70">— Carlos M., Reefer Owner-Operator, Texas</p>
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-background border-t border-border py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-extrabold md:text-4xl">
                            Ready to Maximize Your Earnings?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
                            Join the carriers who trust Priority Dispatch LLC for reliable loads,
                            expert support, and higher revenue per mile. No long-term contracts. Cancel anytime.
                        </p>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                            <a href="/carrier-setup">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md text-base font-bold px-8">
                                    Carrier Setup
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-border text-foreground hover:bg-muted transition-colors text-base px-8"
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
