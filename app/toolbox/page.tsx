import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { ToolboxCalculators } from "@/components/site/toolbox-calculators"
import { Calculator, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Trucking Toolbox — Profit & Fuel Calculators | Priority Dispatch LLC",
    description: "Free tools for truck drivers and carriers. Calculate your profit per mile, fuel costs, and load profitability with the Priority Dispatch LLC Trucking Toolbox.",
    keywords: "trucking calculator, profit per mile calculator, fuel cost calculator, load profitability, dispatch tools, priority dispatch llc",
    alternates: {
        canonical: "https://prioritydispatchllc.com/toolbox",
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
                            Free professional calculators to help you manage your revenue, optimize fuel costs, and verify load profitability in real-time.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Calculators Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-4">
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
