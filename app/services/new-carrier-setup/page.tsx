import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    CheckCircle2,
    ClipboardCheck,
    FileSignature,
    Fuel,
    Globe,
    Landmark,
    MapPinned,
    PhoneCall,
    Receipt,
    ShieldCheck,
} from "lucide-react"
import { ServiceExtras } from "@/components/site/service-extras"

const url = "https://prioritydispatchllc.com/services/new-carrier-setup"
const title = "New Carrier Setup & MC Authority | Priority Dispatch"
const description =
    "Start a trucking company in the right order: LLC and EIN, USDOT and MC authority, BOC-3, insurance filing, UCR, IRP, IFTA, Form 2290 and state permits, then dispatch."

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
        title,
        description,
        url,
        siteName: "Priority Dispatch LLC",
        type: "website",
        images: ["/images/og-trucks-highway.jpg"],
    },
}

const heroFacts = [
    "LLC to first load, one checklist",
    "Filings done in the order FMCSA expects",
    "Dispatch ready once your authority is active",
    "24/7 support at (689) 314-8347",
]

const steps = [
    {
        title: "Form your company",
        desc: "Register an LLC (or other entity) in your home state and get your EIN from the IRS. Your bank account, insurance and authority all use this name.",
    },
    {
        title: "Apply for USDOT and MC authority",
        desc: "We file through FMCSA's registration system. The fee is $300 for each type of authority and is not refunded if the application is dismissed.",
    },
    {
        title: "File BOC-3 and proof of insurance",
        desc: "Your process agent files the BOC-3 and your insurer files liability coverage with FMCSA. Both must be on file within 90 days, or the application is dismissed.",
    },
    {
        title: "Wait out the protest period",
        desc: "FMCSA usually activates new authority after a protest period of about 21 days. We use the time to line up UCR, plates and your drug and alcohol program.",
    },
    {
        title: "Register to run",
        desc: "Once you are active: UCR, IRP apportioned plates, IFTA, Form 2290 for trucks of 55,000 lb or more, and any state permits your lanes need.",
    },
    {
        title: "Book your first loads",
        desc: "We send your carrier packet to brokers that accept new authorities, so you can build a payment history in your first 90 days.",
    },
]

const inclusions = [
    { icon: Building2, title: "LLC formation & EIN", desc: "We register your company and get your Employer Identification Number from the IRS." },
    { icon: BadgeCheck, title: "USDOT & MC authority", desc: "Your application filed through FMCSA's registration system, with the details checked before it goes in." },
    { icon: FileSignature, title: "BOC-3 filing", desc: "Process agents named for every state you operate in, filed with FMCSA." },
    { icon: ShieldCheck, title: "Insurance filing", desc: "Help binding liability and cargo cover and getting it filed with FMCSA inside the 90-day window." },
    { icon: Receipt, title: "UCR & Form 2290", desc: "Your Unified Carrier Registration and the IRS Heavy Highway Vehicle Use Tax return." },
    { icon: Fuel, title: "IRP plates & IFTA", desc: "Apportioned plates and your fuel tax account, set up once your authority is active." },
    { icon: Globe, title: "Free company website", desc: "A simple professional website for your new MC, so brokers can check who you are." },
    { icon: MapPinned, title: "State permits", desc: "Kentucky KYU, New York HUT, New Mexico and Oregon weight-mile permits when your lanes need them." },
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "New trucking company setup",
    name: "New carrier setup",
    url,
    provider: { "@type": "Organization", name: "Priority Dispatch LLC", url: "https://prioritydispatchllc.com" },
    areaServed: { "@type": "Country", name: "United States" },
    description,
}

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://prioritydispatchllc.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://prioritydispatchllc.com/owner-operator-dispatch" },
        { "@type": "ListItem", position: 3, name: "New carrier setup", item: url },
    ],
}

export default function NewCarrierSetupPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <SiteHeader />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                <img
                    src="/images/blog/photos/how-to-start-trucking-company-llc-mc-authority.webp"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" aria-hidden="true" />
                <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/85">
                                <Landmark className="h-4 w-4 text-accent" aria-hidden />
                                New carrier setup · all 48 states
                            </p>
                            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight md:text-6xl">
                                Start Your Trucking Company the Right Way
                            </h1>
                            <p className="mt-5 text-pretty text-base opacity-95 md:text-lg">
                                FMCSA deadlines can sink a new carrier before the first load. We handle your LLC, USDOT and MC
                                authority, BOC-3, insurance filing, plates and permits in the right order, then dispatch you
                                once you are active.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="/contact">
                                    <Button size="lg" className="bg-accent px-6 font-bold text-accent-foreground hover:bg-accent/90">
                                        Start My Setup Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                                <a href="tel:+16893148347">
                                    <Button size="lg" variant="outline" className="border-primary-foreground/60 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10">
                                        <PhoneCall className="mr-2 h-5 w-5" />
                                        (689) 314-8347
                                    </Button>
                                </a>
                            </div>
                            <ul className="mt-8 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                                {heroFacts.map((f) => (
                                    <li key={f} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Why the order matters */}
            <section className="py-20 bg-muted">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-12 md:grid-cols-2 md:items-start">
                        <Reveal>
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl md:aspect-square">
                                <img
                                    src="/images/blog/photos/how-to-survive-new-trucking-authority-mc-leasing.webp"
                                    alt="Semi-truck with a dry van trailer parked at a truck stop"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </Reveal>
                        <Reveal delayMs={100}>
                            <div>
                                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                                    Why Pay Professionals to Do It?
                                </h2>
                                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                                    Many new owner-operators file their own paperwork to save money and then miss a deadline. If
                                    your insurance and BOC-3 are not on file with FMCSA within <strong>90 days</strong>, the
                                    application is dismissed and the $300 fee is gone.
                                </p>
                                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                                    Order matters after that too: IRP plates and IFTA need active authority first. We keep every
                                    filing in sequence so you start hauling sooner and pay for nothing twice.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                                        <span className="text-foreground"><strong>Avoid the 90-day trap:</strong> we time your FMCSA filings with your insurance agent.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ClipboardCheck className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                                        <span className="text-foreground"><strong>Checked before filing:</strong> your BOC-3, UCR and IFTA details are reviewed before they go in.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Globe className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                                        <span className="text-foreground"><strong>Free company website:</strong> brokers vet new MCs, and a real website helps you pass.</span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Step order */}
            <section className="py-20 bg-background">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                            Your Setup, Step by Step
                        </h2>
                        <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
                            The order FMCSA and the states expect, from forming your company to your first booked load.
                        </p>
                    </Reveal>
                    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((s, i) => (
                            <Reveal key={s.title} delayMs={40 * i}>
                                <li className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                                        {i + 1}
                                    </span>
                                    <h3 className="mt-4 mb-2 text-lg font-bold text-primary">{s.title}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                                </li>
                            </Reveal>
                        ))}
                    </ol>
                    <p className="mt-8 text-sm text-muted-foreground">
                        Not ready for your own authority yet? Read{" "}
                        <a href="/blog/how-to-survive-new-trucking-authority-mc-leasing" className="font-semibold text-accent underline underline-offset-2">
                            how leasing onto another carrier works
                        </a>{" "}
                        and{" "}
                        <a href="/blog/never-share-your-mc-case-study" className="font-semibold text-accent underline underline-offset-2">
                            why you should never share your MC
                        </a>
                        .
                    </p>
                </div>
            </section>

            {/* Included */}
            <section className="py-20 bg-muted">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <Reveal>
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                            The Complete Formation Package
                        </h2>
                        <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
                            Everything from deciding to start a trucking company to being cleared to cross state lines.
                        </p>
                    </Reveal>

                    <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
                        {inclusions.map((item, i) => (
                            <Reveal key={item.title} delayMs={40 * i}>
                                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                                    <item.icon className="mb-4 h-8 w-8 text-accent" aria-hidden />
                                    <h3 className="mb-2 text-lg font-bold text-primary">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <ServiceExtras slug="new-carrier-setup" />

            {/* CTA */}
            <section className="py-20 bg-accent text-accent-foreground text-center">
                <Reveal>
                    <div className="mx-auto max-w-3xl px-4">
                        <h2 className="mb-6 text-3xl font-extrabold">Don&apos;t Delay Your Authority Any Longer</h2>
                        <p className="mb-10 text-xl opacity-90">
                            Contact Priority Dispatch today. We will outline the timeline and the costs for your state so you
                            can start operating legally.
                        </p>
                        <a href="/contact">
                            <Button size="lg" variant="secondary" className="h-14 bg-white px-10 text-lg font-bold text-primary hover:bg-gray-100 shadow-xl">
                                Book a Free Setup Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </Reveal>
            </section>

            <SiteFooter />
        </main>
    )
}
