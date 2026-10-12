import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"
import { Truck, CheckCircle2, PhoneCall, ArrowRight, Clock, DollarSign, Shield, Headset } from "lucide-react"

export const metadata: Metadata = {
    title: "Owner-Operator Dispatch Services | Priority Dispatch LLC",
    description: "Dispatch for owner-operators: loads booked, rates negotiated, brokers vetted and paperwork handled. Fee: 5-10% of the load. Based in Kissimmee, FL.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/owner-operator-dispatch",
    },
    openGraph: {
        title: "Owner-Operator Dispatch Services | Priority Dispatch LLC",
        description: "Dispatch for owner-operators: loads booked, rates negotiated, brokers vetted and paperwork handled.",
        url: "https://prioritydispatchllc.com/owner-operator-dispatch",
        type: "website",
        images: ["/images/hero-truck.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Owner-Operator Dispatch Services | Priority Dispatch LLC",
        description: "Dispatch for owner-operators: loads booked, rates negotiated, brokers vetted and paperwork handled.",
    },
}

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Truck Dispatching for Owner-Operators",
    provider: {
        "@type": "LocalBusiness",
        name: "Priority Dispatch LLC",
        address: {
            "@type": "PostalAddress",
            streetAddress: "804 Brack St",
            addressLocality: "Kissimmee",
            addressRegion: "FL",
            postalCode: "34744",
            addressCountry: "US"
        },
        telephone: "+16893148347"
    },
    areaServed: "United States",
    description: "Full-service truck dispatching for owner-operators: load booking, rate negotiation, broker vetting, and back-office paperwork."
}

const dailyTasks = [
    "Find loads that match your lanes and equipment",
    "Vet each broker's credit and payment history before booking",
    "Negotiate the rate to maximize your revenue per mile",
    "Manage paperwork from rate confirmation to proof of delivery"
]

const equipmentTypes = [
    "Reefers (refrigerated trailers)",
    "Dry Vans",
    "Flatbeds & Step Decks",
    "Box Trucks",
    "Hotshots"
]

export default function OwnerOperatorDispatchPage() {
    return (
        <main>
            <SiteHeader />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle at 25% 50%, #ff6700 0%, transparent 60%), radial-gradient(circle at 75% 50%, #0055a5 0%, transparent 60%)" }}
                />
                <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
                    <Reveal>
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl leading-tight">
                                Dispatch Services for <span className="text-accent">Owner-Operators</span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90 leading-relaxed">
                                Priority Dispatch LLC is a truck dispatching company for owner-operators and small fleets. Your dedicated dispatcher searches load boards and broker networks, negotiates rates, sends rate confirmations and handles invoicing, so you spend your time driving instead of calling brokers.
                            </p>
                            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                                <a href="/carrier-setup">
                                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 text-base font-bold px-8">
                                        Request a Free Dispatch Quote
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                                <a href="tel:+16893148347">
                                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors text-base px-8">
                                        <PhoneCall className="mr-2 h-5 w-5" />
                                        (+1) 689-314-8347
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="bg-background py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-4">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                What does your dispatcher do every day?
                            </h2>
                        </div>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Your dispatcher finds loads that match your lanes and equipment, vets each broker's credit and payment history before booking, negotiates the rate, and manages paperwork from rate confirmation to proof of delivery. You always make the final decision on every load. We never force dispatch.
                            </p>
                            <ul className="space-y-3">
                                {dailyTasks.map((task) => (
                                    <li key={task} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-base">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-muted py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-4">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                How much does a truck dispatcher cost?
                            </h2>
                        </div>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <DollarSign className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-lg leading-relaxed mb-4">
                                        Most truck dispatchers charge a percentage of gross load revenue, commonly 5–10%. Priority Dispatch LLC charges a competitive percentage of each delivered load. There are no monthly fees.
                                    </p>
                                    <p className="text-base text-muted-foreground">
                                        <strong>Contract terms:</strong> 30-day written notice for cancellation. No lock-in contracts. You can cancel anytime with proper notice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Who Is This For Section */}
            <section className="bg-background py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-4">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                Who is this for?
                            </h2>
                        </div>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                            <p className="text-lg leading-relaxed mb-6">
                                Owner-operators running the following equipment, and new carriers who just received their MC authority and need help building broker relationships:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {equipmentTypes.map((equipment) => (
                                    <div key={equipment} className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                                        <Truck className="h-5 w-5 text-accent shrink-0" />
                                        <span className="font-medium">{equipment}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="bg-muted py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                Why Choose Priority Dispatch LLC?
                            </h2>
                        </div>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Reveal delayMs={0}>
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm text-center">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <Clock className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Round-the-clock assistance for breakdowns, detention disputes, and emergencies.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delayMs={100}>
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm text-center">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <Shield className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Broker Vetting</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Every broker is credit-checked and verified before we book any load.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delayMs={200}>
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm text-center">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <Headset className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Dedicated Dispatcher</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    One point of contact who learns your lanes, preferences, and revenue goals.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* How to Get Started */}
            <section className="bg-background py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-4">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                How do I get started?
                            </h2>
                        </div>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm text-center">
                            <p className="text-lg leading-relaxed mb-8">
                                Call <a href="tel:+16893148347" className="font-bold text-accent hover:underline">(+1) 689-314-8347</a> or request a callback. We confirm your lanes and equipment, then complete a short carrier packet. Most carriers start receiving load options within 24–48 hours of onboarding.
                            </p>
                            <a href="/carrier-setup">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md text-base font-bold px-8">
                                    Request a Free Dispatch Quote
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-primary-foreground py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-extrabold md:text-4xl">
                            Ready to Work with a Dedicated Dispatcher?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-lg opacity-90 leading-relaxed">
                            Join the owner-operators who trust Priority Dispatch LLC for reliable loads, expert support, and higher revenue per mile.
                        </p>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                            <a href="tel:+16893148347">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md text-base font-bold px-8">
                                    <PhoneCall className="mr-2 h-5 w-5" />
                                    Call Now: (+1) 689-314-8347
                                </Button>
                            </a>
                            <a href="/carrier-setup">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors text-base px-8"
                                >
                                    Get Started Online
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
