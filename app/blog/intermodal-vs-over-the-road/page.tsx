import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Calendar, User, Clock, ArrowLeft, Linkedin } from "lucide-react"

export const metadata: Metadata = {
    title: "Intermodal vs. Over-the-Road: Choosing the Right Path | Priority Dispatch LLC",
    description: "Should your fleet focus on long-haul OTR or intermodal drayage? Discover the pros, cons, and profit potential of each mode in the 2026 market.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/blog/intermodal-vs-over-the-road",
    },
}

export default function BlogPostIntermodal() {
    return (
        <main>
            <SiteHeader />
            <article className="bg-background pb-16 pt-24">
                <div className="mx-auto max-w-4xl px-4">
                    <Reveal>
                        <a href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent mb-8">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </a>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight">
                            Intermodal vs. Over-the-Road: Choosing the Right Path
                        </h1>
                        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-8">
                            <span className="flex items-center gap-1.5 font-medium text-foreground">
                                <Calendar className="h-4 w-4 text-accent" />
                                March 3, 2026
                            </span>
                            <span className="flex items-center gap-1.5 font-medium text-foreground">
                                <User className="h-4 w-4 text-accent" />
                                Muhammad Faisal Bilal
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-accent" />
                                11 min read
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delayMs={100}>
                        <div className="prose prose-slate dark:prose-invert max-w-none mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
                            <p className="text-xl leading-relaxed text-muted-foreground italic">
                                The choice between OTR and Intermodal is a choice between two different business philosophies. In 2026, both are thriving.
                            </p>

                            <h2 className="text-3xl font-bold text-foreground pt-4">Over-the-Road (OTR): The Traditional Powerhouse</h2>
                            <p>
                                OTR remains the king of the high-speed supply chain. In 2026, OTR carriers are focusing on high-value, time-sensitive freight that the rail network cannot handle. The pro? Massive flexibility and higher top-line revenue. The con? Extreme exposure to diesel price fluctuations and longer "away-from-home" cycles for drivers.
                            </p>

                            <h2 className="text-3xl font-bold text-foreground pt-4">Intermodal: The Efficiency Play</h2>
                            <p>
                                Intermodal (moving trailers via rail for the long-haul portion) has seen a massive 20% growth in 2026 as shippers look to reduce their carbon footprints. For carriers, "intermodal drayage" (the short-haul move between the port/rail head and the warehouse) offers a more predictable schedule and lower equipment wear.
                            </p>

                            <h2 className="text-3xl font-bold text-foreground pt-4">Profit Margin Analysis</h2>
                            <p>
                                While OTR offers a higher <strong>Rate Per Mile (RPM)</strong>, Intermodal often offers a higher <strong>Net Profit Margin</strong> due to shorter distances, lower fuel consumption, and more frequent turn-arounds. In 2026, we see many small carriers running a "hybrid" model—using OTR for seasonal peaks and Intermodal for steady, consistent basement revenue.
                            </p>

                            <h2 className="text-3xl font-bold text-foreground pt-4">Sustainability and ESG in 2026</h2>
                            <p>
                                Many of the largest Fortune 500 shippers in 2026 are mandated to use Intermodal for at least 30% of their long-haul freight to meet Environmental, Social, and Governance (ESG) targets. If your fleet is "Intermodal-ready," you gain access to high-volume contracts that OTR-only carriers are excluded from.
                            </p>

                            <h2 className="text-3xl font-bold text-foreground pt-4">The Priority Dispatch Strategy</h2>
                            <p>
                                We help our carriers analyze their specific equipment and regional strengths to determine which mode will maximize their weekly take-home pay. Whether you want to be home every night or see the entire country, we have the load pipeline to support you.
                            </p>

                            <h2 className="text-3xl font-bold text-foreground pt-4">Conclusion</h2>
                            <p>
                                There is no "right" answer, only the right answer for your business goals. By diversifying your mode capabilities, you build a fleet that can thrive in any market environment.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delayMs={200}>
                        <div className="mt-16 rounded-2xl bg-muted p-8 flex flex-col md:flex-row items-center gap-6 border border-border">
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                                alt="Logistics consultants engaged in a strategic dispatch planning session over a laptop."
                                className="h-24 w-24 rounded-2xl object-cover border-2 border-accent"
                            />
                            <div className="text-center md:text-left">
                                <h4 className="text-xl font-bold">About the Author</h4>
                                <p className="mt-2 text-muted-foreground leading-relaxed">
                                    Muhammad Faisal Bilal is a multimodal logistics expert. He specializes in helping carriers optimize their routes across rail and road networks to maximize efficiency.
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/muhammad-faisal-bilal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-accent font-bold hover:underline"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </article>
            <SiteFooter />
        </main>
    )
}
