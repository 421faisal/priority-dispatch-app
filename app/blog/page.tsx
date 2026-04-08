import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Trucking Industry Blog — Insights & Tips | Priority Dispatch LLC",
    description: "Stay updated with the latest trucking industry trends, dispatching tips, and revenue-maximizing strategies on the Priority Dispatch LLC blog.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/blog",
    },
}

const posts = [
    {
        title: "How to Start a Trucking Company: From LLC to IRP Plates",
        slug: "how-to-start-trucking-company-llc-mc-authority",
        excerpt: "The ultimate A-to-Z guide on setting up your carrier authority. Learn exactly how to get your LLC, MC Authority, BOC-3, UCR, and Interstate permits.",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Insider Trucking Tips: What I Learned the Hard Way in Logistics",
        slug: "insider-trucking-dispatch-tips-faisal",
        excerpt: "Faisal Bilal shares deep, unfiltered industry secrets on negotiating detention, spotting bad brokers, and surviving freight recessions.",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The Reality of Autonomous Trucking in 2026",
        slug: "impact-of-autonomous-trucking-2026",
        excerpt: "Explore the real-world impact of autonomous trucking in 2026. Are robot trucks taking over, or is the human driver still the most vital asset in logistics?",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Navigating the 2026 Freight Rate Rebound",
        slug: "navigating-freight-rate-rebound",
        excerpt: "The 2026 freight market is officially exiting the recession. Learn how to renegotiate contract rates, leverage spot market volatility, and push average RPM higher.",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Electric Semis (EV) and the Future of Green Logistics in 2026",
        slug: "sustainability-ev-trucks-future",
        excerpt: "Are heavy-duty EV trucks ready for prime time? Explore the charging infrastructure hurdles, weight limits, and how regional haulers can leverage sustainability.",
        date: "March 19, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The EPA 2027 Pre-Buy Strategy: Why Carriers Are Buying Now",
        slug: "epa-2027-pre-buy-strategy",
        excerpt: "A massive regulatory shift is coming in 2027 with the EPA NOx standards, causing a surge in Class 8 truck orders in 2026. Discover the pre-buy strategy.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Combatting Freight Fraud and Digital Theft in 2026",
        slug: "combatting-freight-fraud-2026",
        excerpt: "Freight fraud and double brokering have reached record highs. Learn the 2026 carrier vetting checklist and how to detect chameleon carriers.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "AI Dispatching vs. Human Intuition: The Co-Pilot Model",
        slug: "ai-dispatching-co-pilot-model",
        excerpt: "Fully autonomous trucks are delayed, but AI dispatching is a baseline in 2026. See how the Human-in-the-Loop model uncovers hidden backhauls.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The Non-Domiciled CDL Crackdown and Capacity Tightening",
        slug: "dot-cdl-crackdown-capacity-tightening",
        excerpt: "The DOT crackdown on non-domiciled CDLs could remove 200,000 drivers. Analyze how this capacity shortage will cause a spot rate recovery.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Micro-Niche Specialization: The Rise of Reefer and Flatbed",
        slug: "micro-niche-reefer-flatbed",
        excerpt: "While dry van rates stabilize, Reefer and Flatbed demand is exploding. Explore our transition guide to high-paying trucking niches.",
        date: "March 12, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "What Is Freight Dispatching? A Complete Guide for 2026",
        slug: "what-is-freight-dispatching",
        excerpt: "Learn how professional dispatching services can transform your trucking business by handling rate negotiations, scheduling, and back‑office work.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "2026 Freight Market Outlook: Navigating the Recovery",
        slug: "2026-freight-market-outlook",
        excerpt: "What should carriers and owner-operators expect in the 2026 freight market? Get real-time data on rates, volume, and supply chain trends.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "AI and Machine Learning: The New Frontier of Dispatching",
        slug: "ai-machine-learning-dispatching",
        excerpt: "How is AI transforming trucking in 2026? Learn about automated load matching, predictive maintenance, and AI-driven route optimization.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The Evolution of Logistics: A History of American Trucking",
        slug: "evolution-of-logistics",
        excerpt: "Explore the fascinating history of the transportation industry, from early steam-powered wagons to the high-tech electric fleets of 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Autonomous Trucks: Reality vs. Hype in 2026",
        slug: "autonomous-trucks-2026",
        excerpt: "Are self-driving trucks taking over the road? Discover the true state of autonomous trucking technology in 2026 and what it means for drivers.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "ELD Compliance Checklist: Essential Guardrails for 2026",
        slug: "eld-compliance-checklist-2026",
        excerpt: "Stay ahead of the FMCSA with our 2026 ELD compliance checklist. Avoid fines, maintain your CSA score, and keep your fleet on the road.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Maximizing Fuel Efficiency: Strategies for High-Mileage Fleets",
        slug: "maximizing-fuel-efficiency",
        excerpt: "Diesel prices remain the #1 expense for carriers in 2026. Learn how to slash fuel costs through aerodynamic upgrades and strategic routing.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "From One Truck to a Fleet: A Scaling Guide for Carriers",
        slug: "scaling-trucking-fleet-guide",
        excerpt: "Thinking about adding your second or third truck? Learn the financial, operational, and technical challenges of scaling your company in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Reefer Market Deep Dive: Protecting Perishable Profits",
        slug: "reefer-market-deep-dive",
        excerpt: "Refrigerated freight requires a specialized touch. Learn the latest trends in reefer dispatching and cold-chain compliance for 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Intermodal vs. Over-the-Road: Choosing the Right Path",
        slug: "intermodal-vs-over-the-road",
        excerpt: "Should your fleet focus on long-haul OTR or intermodal drayage? Discover the pros, cons, and profit potential of each mode in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The Driver Shortage Solved? Modern Retention Strategies",
        slug: "driver-retention-strategies-2026",
        excerpt: "Discover the top retention strategies that small fleets are using to build loyalty and reduce turnover in the competitive 2026 market.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Last-Mile Logistics: The Boom in Box Truck Opportunities",
        slug: "last-mile-logistics-box-trucks",
        excerpt: "The E-commerce explosion has created a massive niche for last-mile delivery. Learn how box truck carriers are maximizing profits in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "The Future of Freight Brokerage: Digital Matching Platforms",
        slug: "future-of-freight-brokerage",
        excerpt: "Explore how digital freight matching (DFM) platforms and AI-driven brokerage are reshaping the carrier-broker relationship in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Mental Health and the Long-Haul Driver: Staying Healthy",
        slug: "mental-health-long-haul-drivers",
        excerpt: "Trucking is a lifestyle that can be taxing on mental health. Explore strategies for staying connected and healthy while over-the-road in 2026.",
        date: "March 3, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "Owner-Operator Success: How to Maximize Your Revenue",
        slug: "owner-operator-guide",
        excerpt: "Discover the top strategies for owner-operators to increase their rate-per-mile and reduce deadhead through smart lane planning.",
        date: "March 1, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "How to Choose the Best Truck Dispatch Service",
        slug: "how-to-choose-dispatch-service",
        excerpt: "Not all dispatch services are created equal. Here is what to look for when choosing a partner for your carrier business.",
        date: "February 25, 2026",
        author: "Muhammad Faisal Bilal",
    },
    {
        title: "How to Use Load Boards Effectively as an Owner‑Operator",
        slug: "how-to-use-load-boards",
        excerpt: "Load boards can flood your truck with freight — or waste hours of dead time. Here's how owner‑operators and small fleets can use them strategically to find better rates, avoid bad brokers, and keep wheels turning.",
        date: "April 8, 2026",
        author: "Muhammad Faisal Bilal",
    }
]

export default function BlogPage() {
    return (
        <main>
            <SiteHeader />
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">Trucking & Dispatch Blog</h1>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <p className="mt-6 text-xl opacity-90">
                            Expert insights and strategies to help you navigate the freight market and grow your fleet.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="bg-background py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-4">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, i) => (
                            <Reveal key={post.slug} delayMs={100 * i}>
                                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="h-3 w-3" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <User className="h-3 w-3" />
                                                {post.author}
                                            </span>
                                        </div>
                                        <h2 className="mt-4 text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                                        </h2>
                                        <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto pt-6">
                                            <a
                                                href={`/blog/${post.slug}`}
                                                className="flex items-center gap-2 text-sm font-bold text-accent"
                                            >
                                                Read Full Article
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            <SiteFooter />
        </main>
    )
}
