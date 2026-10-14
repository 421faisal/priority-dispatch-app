import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"
import {
    Check,
    X,
    ArrowRight,
    PhoneCall,
    DollarSign,
    FileText,
    Clock,
    Shield,
    TrendingUp,
    HelpCircle,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Dispatch Service Pricing | Priority Dispatch LLC",
    description:
        "Simple, transparent dispatch pricing. 5% of gross load revenue with no setup fees, no contracts, and no hidden charges. You only pay when you get paid.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/pricing",
    },
    openGraph: {
        title: "Dispatch Service Pricing | Priority Dispatch LLC",
        description: "Clear pricing for professional truck dispatch services. No contracts, no setup fees.",
        url: "https://prioritydispatchllc.com/pricing",
        type: "website",
        images: ["/images/hero-truck.jpg"],
    },
}

const included = [
    "Daily load search & booking across all major load boards",
    "Aggressive rate negotiation for every load",
    "24/7 phone & email carrier support",
    "Broker credit checks & MC verification",
    "Rate confirmation & BOL review",
    "Professional invoicing & POD submission",
    "Detention & TONU claim filing",
    "Collections follow-up & payment tracking",
    "Dedicated dispatcher who learns your lanes",
    "Lane optimization & deadhead reduction",
]

const notIncluded = [
    "Factoring fees (if you use a factoring company)",
    "Load board subscriptions (we use ours)",
    "Fuel cards or fuel advance programs",
    "Insurance, permits, or compliance fees",
    "MC Authority setup (see New Carrier Setup)",
]

const comparison = [
    {
        feature: "Dispatch Fee",
        ours: "5% of gross load",
        typical: "5-10% of gross load",
    },
    {
        feature: "Setup Fee",
        ours: "$0",
        typical: "$100-$500",
    },
    {
        feature: "Cancellation Fee",
        ours: "$0",
        typical: "$250-$1,000",
    },
    {
        feature: "Contract Length",
        ours: "No contract",
        typical: "3-12 months",
    },
    {
        feature: "24/7 Support",
        ours: "Included",
        typical: "Extra charge or limited",
    },
    {
        feature: "Dedicated Dispatcher",
        ours: "Included",
        typical: "Premium tier only",
    },
]

const faqs = [
    {
        q: "When do I pay the dispatch fee?",
        a: "You only pay after you receive payment from the broker. If a load doesn't pay, neither do we.",
    },
    {
        q: "Is there a minimum number of loads per week?",
        a: "No minimum. We work around your schedule and availability. You're in control of how much or how little you run.",
    },
    {
        q: "Can I cancel anytime?",
        a: "Yes. No long-term contracts. If you want to stop, just let us know. No penalties, no paperwork.",
    },
    {
        q: "Do you charge extra for detention claims?",
        a: "No. Detention and TONU claims are included in our standard 5% fee. We handle all the paperwork and follow-up.",
    },
    {
        q: "What if I find my own loads?",
        a: "You only pay dispatch on loads we book for you. If you book your own, there's no fee.",
    },
    {
        q: "Do you offer discounts for multiple trucks?",
        a: "Yes. Contact us to discuss fleet pricing if you have 2+ trucks. We offer volume discounts.",
    },
]

const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Freight Dispatching",
    provider: {
        "@type": "LocalBusiness",
        name: "Priority Dispatch LLC",
        url: "https://prioritydispatchllc.com",
    },
    offers: {
        "@type": "Offer",
        price: "5",
        priceCurrency: "USD",
        priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "5",
            priceCurrency: "USD",
            unitText: "PERCENT",
        },
        description: "5% of gross load revenue. No setup fees, no contracts, no hidden charges.",
    },
}

export default function PricingPage() {
    return (
        <main>
            <SiteHeader />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
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
                                <DollarSign className="h-3.5 w-3.5" />
                                Transparent Pricing
                            </span>
                            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl leading-tight">
                                Simple Dispatch Pricing. <span className="text-accent">No Hidden Fees.</span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90 leading-relaxed">
                                Pay 5% of gross load revenue. No setup fees, no contracts, no cancellation penalties. You only pay when you get paid.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Main Pricing */}
            <section className="bg-background py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="mx-auto max-w-2xl">
                            <div className="rounded-3xl border-2 border-accent bg-card shadow-2xl overflow-hidden">
                                <div className="bg-accent text-accent-foreground p-8 text-center">
                                    <h2 className="text-2xl font-extrabold mb-2">Standard Dispatch</h2>
                                    <p className="opacity-90">Full-service truck dispatching for owner-operators</p>
                                </div>
                                <div className="p-8 md:p-12">
                                    <div className="text-center mb-8 pb-8 border-b border-border">
                                        <div className="flex items-baseline justify-center gap-2 mb-3">
                                            <span className="text-6xl font-extrabold">5%</span>
                                            <span className="text-2xl text-muted-foreground">of gross load</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Example: $3,000 load = $150 dispatch fee
                                        </p>
                                    </div>

                                    <div className="space-y-6 mb-10">
                                        <div>
                                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                                <Check className="h-5 w-5 text-accent" />
                                                What's Included
                                            </h3>
                                            <ul className="space-y-3">
                                                {included.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm">
                                                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                                <X className="h-5 w-5 text-muted-foreground" />
                                                Not Included
                                            </h3>
                                            <ul className="space-y-3">
                                                {notIncluded.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <X className="h-4 w-4 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <a href="/carrier-setup" className="w-full">
                                            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md text-base font-bold">
                                                Get Started Today
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Button>
                                        </a>
                                        <a href="/contact" className="w-full">
                                            <Button size="lg" variant="outline" className="w-full">
                                                <PhoneCall className="mr-2 h-5 w-5" />
                                                Talk to a Dispatcher
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="bg-muted py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl mb-3">
                                How We Compare
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                See how Priority Dispatch LLC stacks up against typical dispatch services.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delayMs={100}>
                        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-accent/5">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-bold">Feature</th>
                                            <th className="px-6 py-4 text-left font-bold">Priority Dispatch LLC</th>
                                            <th className="px-6 py-4 text-left font-bold text-muted-foreground">Typical Dispatch</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparison.map((row, i) => (
                                            <tr key={i} className="border-t border-border">
                                                <td className="px-6 py-4 font-medium">{row.feature}</td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center gap-2 text-accent font-bold">
                                                        <Check className="h-4 w-4" />
                                                        {row.ours}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-muted-foreground">{row.typical}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-background py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-4">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl mb-3">
                                Pricing FAQs
                            </h2>
                            <p className="text-muted-foreground">
                                Common questions about our dispatch pricing and billing.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <Reveal key={i} delayMs={60 * i}>
                                <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                                    <h3 className="font-bold text-lg mb-2 flex items-start gap-2">
                                        <HelpCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                        {faq.q}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed ml-7">{faq.a}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="bg-accent/5 border-y border-border py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-extrabold mb-3">Additional Services Available</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                                Need help getting started or managing your carrier operations? We offer these services separately.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid gap-6 md:grid-cols-3">
                        <Reveal delayMs={80}>
                            <div className="bg-card rounded-xl border border-border p-6 shadow-sm text-center">
                                <FileText className="h-10 w-10 text-accent mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">New Carrier Setup</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Complete LLC formation, MC Authority, permits, and free website creation.
                                </p>
                                <a href="/services/new-carrier-setup">
                                    <Button variant="outline" size="sm">
                                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                                    </Button>
                                </a>
                            </div>
                        </Reveal>

                        <Reveal delayMs={160}>
                            <div className="bg-card rounded-xl border border-border p-6 shadow-sm text-center">
                                <Shield className="h-10 w-10 text-accent mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">Compliance Support</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    IFTA, IRP, UCR, and other compliance services available on request.
                                </p>
                                <a href="/contact">
                                    <Button variant="outline" size="sm">
                                        Contact Us <ArrowRight className="ml-1 h-3 w-3" />
                                    </Button>
                                </a>
                            </div>
                        </Reveal>

                        <Reveal delayMs={240}>
                            <div className="bg-card rounded-xl border border-border p-6 shadow-sm text-center">
                                <TrendingUp className="h-10 w-10 text-accent mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">Fleet Pricing</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Volume discounts available for carriers with 2+ trucks.
                                </p>
                                <a href="/contact">
                                    <Button variant="outline" size="sm">
                                        Get Quote <ArrowRight className="ml-1 h-3 w-3" />
                                    </Button>
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-primary-foreground py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-extrabold md:text-4xl mb-4">
                            Ready to Start Earning More?
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg opacity-90 leading-relaxed mb-8">
                            Join Priority Dispatch LLC today. No setup fees, no long-term contracts, and no risk. You only pay when you get paid.
                        </p>
                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                            <a href="/carrier-setup">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg text-base font-bold px-8">
                                    Sign Up Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                            <a href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors text-base px-8"
                                >
                                    <PhoneCall className="mr-2 h-5 w-5" />
                                    (689) 314-8347
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
