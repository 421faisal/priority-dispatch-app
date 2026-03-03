import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Priority Dispatch LLC",
    description:
        "Find answers to common questions about freight dispatching, owner-operator services, pricing, equipment types, and how Priority Dispatch LLC can help maximize your revenue.",
    openGraph: {
        title: "FAQ | Priority Dispatch LLC",
        description:
            "Everything you need to know about our freight dispatching services.",
        url: "https://prioritydispatchllc.com/faq",
    },
}

const faqs = [
    {
        q: "What is freight dispatching?",
        a: "Freight dispatching is the process of finding and booking loads for truck drivers and carriers. A dispatcher acts as an intermediary between carriers and freight brokers or shippers, negotiating rates, managing paperwork, and ensuring loads are delivered on time. At Priority Dispatch LLC, we go further—providing dedicated lane planning, compliance support, and 24/7 assistance so you can focus on driving.",
    },
    {
        q: "How does Priority Dispatch LLC help owner-operators?",
        a: "We assign every owner-operator a dedicated dispatcher who learns your preferred lanes, equipment type, and weekly revenue targets. Our team handles load searching, rate negotiation, broker vetting, rate confirmations, invoicing, and detention claims. The result: higher earnings per mile, less deadhead, and zero paperwork headaches.",
    },
    {
        q: "What equipment types do you support?",
        a: "We dispatch for a wide range of equipment including Reefers (refrigerated trailers), Dry Vans, Box Trucks, Flatbeds, Step Decks, and more. Whether you run a single truck or manage a fleet, our experienced dispatchers can optimize loads for your specific equipment.",
    },
    {
        q: "How much do your dispatching services cost?",
        a: "We operate on a transparent, percentage-based model with no hidden fees and no lock-in contracts. Our fee is a competitive percentage of the gross load revenue, and you keep the rest. Contact us for a personalized quote based on your operation size and needs.",
    },
    {
        q: "How do I get started with Priority Dispatch?",
        a: "Getting started is simple: fill out our Carrier Setup form with your MC number, insurance details, and preferred lanes. Our team will review your information, set up your carrier packet, and begin finding high-paying loads for you—often within 24–48 hours of sign-up.",
    },
    {
        q: "Do you offer 24/7 support?",
        a: "Absolutely. The freight industry doesn't sleep, and neither do we. Our dispatchers and support team are available around the clock—day, night, weekends, and holidays. Whether you have a breakdown, a detention issue, or need an urgent load, we're just a call or message away.",
    },
    {
        q: "What areas and lanes do you cover?",
        a: "We cover the entire continental United States (48 states). Our dispatchers have deep knowledge of high-demand corridors and seasonal freight trends, allowing us to position you on the most profitable lanes at the right time.",
    },
    {
        q: "How do you vet brokers and shippers?",
        a: "We use industry-standard credit-check platforms and carrier-monitoring tools to vet every broker before booking a load. We verify their credit score, payment history, days-to-pay average, and authority status. If a broker doesn't meet our standards, we don't book them—period.",
    },
    {
        q: "Can I choose which loads I want to run?",
        a: "Yes. You always have the final say. Our dispatchers present you with load options that match your preferences—lane, rate, and schedule—and you decide which ones to accept. We never force a load on any carrier.",
    },
    {
        q: "What makes Priority Dispatch different from other dispatch services?",
        a: "Three things set us apart: a dedicated dispatcher for every carrier (not a rotating team), data-driven lane optimization that minimizes deadhead miles, and complete transparency—no hidden fees, no long-term contracts. Our founder Muhammad Faisal Bilal built this company with a tech-forward approach, using analytics to deliver better rates and smarter routes.",
    },
]

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
        },
    })),
}

export default function FAQPage() {
    return (
        <main>
            <SiteHeader />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <section className="bg-primary text-primary-foreground">
                <div className="mx-auto max-w-4xl px-4 py-14 text-center md:py-20">
                    <Reveal>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Frequently Asked Questions
                        </h1>
                    </Reveal>
                    <Reveal delayMs={80}>
                        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
                            Everything you need to know about freight dispatching and working with
                            Priority Dispatch LLC.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-background">
                <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
                    <div className="space-y-4">
                        {faqs.map((item, i) => (
                            <Reveal key={i} delayMs={60 * i}>
                                <details className="group rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-foreground transition-colors [&::-webkit-details-marker]:hidden">
                                        <span>{item.q}</span>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                        </span>
                                    </summary>
                                    <div className="border-t border-border px-6 py-4 text-sm leading-relaxed text-muted-foreground">
                                        {item.a}
                                    </div>
                                </details>
                            </Reveal>
                        ))}
                    </div>

                    {/* CTA */}
                    <Reveal delayMs={100}>
                        <div className="mt-12 rounded-xl bg-primary p-8 text-center text-primary-foreground md:p-10">
                            <h2 className="text-2xl font-bold md:text-3xl">
                                Still have questions?
                            </h2>
                            <p className="mx-auto mt-3 max-w-lg opacity-90">
                                Our team is ready to help. Reach out and we&apos;ll get back to you within hours.
                            </p>
                            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                                <a href="/#contact">
                                    <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90 shadow-md">
                                        Contact Us
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                                <a href="/carrier-setup">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                                    >
                                        Carrier Setup
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
