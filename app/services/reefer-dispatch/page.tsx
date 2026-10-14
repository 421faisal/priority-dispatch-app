import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"
import {
    Snowflake,
    CheckCircle2,
    ArrowRight,
    PhoneCall,
    DollarSign,
    MapPin,
    Clock,
    Shield,
    TrendingUp,
    Thermometer,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Reefer Dispatch Services | Priority Dispatch LLC",
    description:
        "Professional refrigerated truck dispatch for owner-operators. Temperature-controlled freight, premium rates, and 24/7 support. No contracts.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/services/reefer-dispatch",
    },
    openGraph: {
        title: "Reefer Dispatch Services | Priority Dispatch LLC",
        description: "Expert reefer dispatching for owner-operators. High-paying temperature-controlled loads nationwide.",
        url: "https://prioritydispatchllc.com/services/reefer-dispatch",
        type: "website",
        images: ["/images/hero-truck.jpg"],
    },
}

const benefits = [
    {
        icon: DollarSign,
        title: "Earn $2.80–$4.00+ Per Mile",
        desc: "Reefer pays premium because it's specialized. We target produce seasons, pharma routes, and high-demand cold chain lanes where rates are strongest.",
    },
    {
        icon: MapPin,
        title: "Loads from Coast to Coast",
        desc: "From California produce to Florida citrus, Midwest meat to East Coast grocery chains—we cover every major cold chain corridor in America.",
    },
    {
        icon: Thermometer,
        title: "No Temperature Surprises",
        desc: "We confirm exact temp settings, pre-cool schedules, and receiver protocols before dispatch. No rejected loads. No wasted fuel.",
    },
    {
        icon: Shield,
        title: "Only Verified, Paying Brokers",
        desc: "Every broker gets credit-checked. We secure detention clauses upfront so you never sit for free.",
    },
]

const whyReefer = [
    "Higher pay—$0.50 to $1.00 more per mile than dry van on average",
    "Consistent demand from grocery stores, restaurants, pharma companies year-round",
    "Access to premium lanes: California, Texas, Florida, Pacific Northwest",
    "Less competition—fewer carriers can handle temperature-controlled freight",
]

const howWeHelp = [
    {
        step: "01",
        title: "We Find Cold Chain Loads 24/7",
        desc: "We monitor reefer boards around the clock and book the best-paying temperature-controlled freight for your route.",
    },
    {
        step: "02",
        title: "We Lock In Top Rates & Temps",
        desc: "We negotiate hard, confirm temperature settings, pre-cool times, and detention pay—all in writing before you move.",
    },
    {
        step: "03",
        title: "We Monitor Your Trip",
        desc: "Scheduling, receiver coordination, temperature checks—we handle it. Any issues on the road, we're on it immediately.",
    },
    {
        step: "04",
        title: "We Invoice & Collect Fast",
        desc: "Invoice submitted right after delivery with detention and fuel surcharges. We chase payment daily until you're paid.",
    },
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Refrigerated Truck Dispatch",
    provider: {
        "@type": "LocalBusiness",
        name: "Priority Dispatch LLC",
        url: "https://prioritydispatchllc.com",
    },
    areaServed: { "@type": "Country", name: "United States" },
    description:
        "Professional refrigerated truck dispatch services for owner-operators. Temperature-controlled freight booking, rate negotiation, 24/7 support.",
}

export default function ReeferDispatchPage() {
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
                            <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                                <Snowflake className="h-3.5 w-3.5" />
                                Reefer Dispatch
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl leading-tight">
                                Reefer Dispatch That Pays <span className="text-accent">$2.80–$4.00/Mile</span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90 leading-relaxed">
                                Premium cold chain loads. Temperature control handled. Detention locked in. We book produce, pharma, and frozen freight across all 48 states while you focus on the road.
                            </p>
                            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                                <a href="/carrier-setup">
                                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 text-base font-bold px-8">
                                        Get Started Today
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                                <a href="/contact">
                                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors text-base px-8">
                                        <PhoneCall className="mr-2 h-5 w-5" />
                                        Call (689) 314-8347
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Why Reefer */}
            <section className="bg-muted py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                Why Reefer Freight?
                            </h2>
                            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                                Temperature-controlled freight offers premium rates and consistent demand year-round.
                            </p>
                        </div>
                    </Reveal>
                    <div className="grid gap-4 md:grid-cols-2">
                        {whyReefer.map((item, i) => (
                            <Reveal key={i} delayMs={80 * i}>
                                <div className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                    <p className="text-sm leading-relaxed">{item}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-background py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="text-center mb-14">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                How We Help Reefer Owner-Operators
                            </h2>
                            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                                From pre-cool confirmation to payment, we maximize your earning potential on every temperature-controlled load.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid gap-8 md:grid-cols-2">
                        {benefits.map((b, i) => (
                            <Reveal key={b.title} delayMs={100 * i}>
                                <div className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm">
                                        <b.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Help */}
            <section className="bg-muted py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="text-center mb-14">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                Our Reefer Dispatch Process
                            </h2>
                            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                                A seamless workflow designed to keep your reefer loaded and profitable.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {howWeHelp.map((step, i) => (
                            <Reveal key={step.step} delayMs={80 * i}>
                                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center hover:-translate-y-1 transition-transform">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-extrabold text-lg">
                                        {step.step}
                                    </div>
                                    <h3 className="font-bold text-base mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Teaser */}
            <section className="bg-accent/5 border-y border-border py-12">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <TrendingUp className="h-10 w-10 text-accent mx-auto mb-4" />
                        <h2 className="text-2xl font-extrabold mb-3">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-5 max-w-xl mx-auto">
                            We charge 5% of the gross load revenue. No setup fees, no cancellation penalties, no long-term contracts. You only pay when you get paid.
                        </p>
                        <a href="/pricing">
                            <Button variant="outline" className="font-bold">
                                View Full Pricing <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </a>
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-primary-foreground py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-extrabold md:text-4xl mb-4">
                            Ready to Start Hauling Premium Reefer Loads?
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg opacity-90 leading-relaxed mb-8">
                            Join Priority Dispatch LLC and let our expert team find you the best-paying temperature-controlled freight while you focus on the road.
                        </p>
                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                            <a href="/carrier-setup">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg text-base font-bold px-8">
                                    Sign Up Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                            <a href="/services">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors text-base px-8"
                                >
                                    View All Services
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
