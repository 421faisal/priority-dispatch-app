import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { ToolboxCalculators } from "@/components/site/toolbox-calculators"
import { Calculator, ArrowRight } from "lucide-react"
import Link from "next/link"
import { tools } from "@/lib/tools"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Free Trucking Calculators: Cost Per Mile, HOS, IFTA",
    description: "Free trucking calculators for owner-operators: cost per mile, load profit and deadhead, HOS, IFTA, per diem and detention pay. No sign-up, works on your phone.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/toolbox",
    },
    openGraph: {
        title: "Free Trucking Calculators: Cost Per Mile, HOS, IFTA",
        description: "Free trucking calculators for owner-operators: cost per mile, load profit and deadhead, HOS, IFTA, per diem and detention pay. No sign-up, works on your phone.",
        url: "https://prioritydispatchllc.com/toolbox",
        siteName: "Priority Dispatch LLC",
        type: "website",
        images: ["/images/hero-truck.jpg"],
    },
}

export default function ToolboxPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />

            {/* Hero Section */}
            <section className="bg-primary py-16 text-primary-foreground md:py-24">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                            <Calculator className="h-6 w-6" />
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                            Trucking <span className="text-accent italic">Toolbox</span>
                        </h1>
                        <p className="mt-6 text-xl opacity-90">
                            Free calculators owner-operators use every week: cost per mile, load profit, hours of service, IFTA,
                            per diem and detention pay. No sign-up, and nothing you enter leaves your browser.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="pt-16 md:pt-24">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-3xl font-extrabold text-primary">Trucking calculators</h2>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {tools.map((t) => (
                            <li key={t.slug}>
                                <Link
                                    href={`/toolbox/${t.slug}`}
                                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-accent"
                                >
                                    <Calculator className="h-6 w-6 text-accent" />
                                    <span className="mt-3 text-lg font-bold group-hover:text-accent">{t.name}</span>
                                    <span className="mt-2 text-sm text-muted-foreground">{t.short}</span>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                                        Open calculator <ArrowRight className="h-4 w-4" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Quick calculators */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="mb-8 text-2xl font-extrabold text-primary">Quick calculators</h2>
                    <Reveal delayMs={100}>
                        <ToolboxCalculators />
                    </Reveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-muted py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-extrabold md:text-4xl text-primary">
                            Need a Professional to Handle the Math?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our expert dispatchers use advanced data modeling to ensure every load we book for you is optimized for maximum profit. Focus on driving, let us handle the numbers.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a href="/carrier-setup">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
                                    Start Dispatching Today
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <a href="/contact">
                                <Button size="lg" variant="outline">
                                    Request a Free Quote
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
