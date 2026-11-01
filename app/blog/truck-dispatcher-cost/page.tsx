import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BlogArticleSchema } from "@/components/site/blog-article-schema"
import { RelatedPosts } from "@/components/site/related-posts"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import { rates } from "@/lib/pricing"

const title = "How Much Does a Truck Dispatcher Charge? (2026 Rates)"
const description =
    "Truck dispatchers usually charge 3% to 10% of each load or a flat weekly fee. See typical rates by equipment, what the fee should include and red flags."
const url = "https://prioritydispatchllc.com/blog/truck-dispatcher-cost"

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
        title,
        description,
        url,
        siteName: "Priority Dispatch LLC",
        type: "article",
        publishedTime: "2026-11-01",
        authors: ["Muhammad Faisal Bilal"],
        images: ["/images/blog/rate-intelligence.jpg"],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/blog/rate-intelligence.jpg"] },
}

const faqs = [
    {
        q: "How much does a truck dispatcher charge per load?",
        a: "Most percentage-based dispatchers charge between 3% and 10% of the gross load. On a $3,000 load that is $90 to $300. Priority Dispatch charges 4% for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots and 10% for sprinter vans.",
    },
    {
        q: "Is a percentage or a flat weekly fee better?",
        a: "A percentage fee is better when your weekly gross changes a lot, because you pay less in slow weeks. A flat weekly fee can be cheaper for a truck that grosses a lot every week, but you pay it even when the dispatcher books few loads.",
    },
    {
        q: "Should I pay a dispatcher before I get paid?",
        a: "It is safer not to. Ask for a dispatcher that charges only after the broker pays you, and avoid large setup fees or long contracts with cancellation penalties.",
    },
    {
        q: "Do dispatchers charge more for box trucks and hotshots?",
        a: "Often yes. Smaller trucks haul lower-paying loads, so dispatchers usually charge a higher percentage to cover the same amount of work. The dollar fee per load is still usually lower than for a semi.",
    },
]

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

export default function TruckDispatcherCostPost() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <BlogArticleSchema
                title={title}
                description={description}
                datePublished="2026-11-01"
                slug="truck-dispatcher-cost"
                imageUrl="/images/blog/rate-intelligence.jpg"
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <article className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <a href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </a>
                    <header className="mb-12 text-center md:text-left">
                        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary lg:text-5xl">
                            How Much Does a Truck Dispatcher Charge?
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 border-b border-border pb-8 text-sm text-muted-foreground md:justify-start">
                            <span className="flex items-center gap-2 font-medium text-foreground">
                                <Calendar className="h-4 w-4 text-accent" />
                                November 1, 2026
                            </span>
                            <span className="flex items-center gap-2 font-medium text-foreground">
                                <User className="h-4 w-4 text-accent" />
                                Muhammad Faisal Bilal
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-accent" />
                                7 min read
                            </span>
                        </div>
                    </header>

                    <div className="prose prose-lg mx-auto max-w-none leading-relaxed text-foreground/90">
                        <p className="border-l-4 border-accent pl-6 text-xl text-muted-foreground">
                            <strong>Short answer:</strong> most truck dispatchers in the USA charge <strong>3% to 10% of the gross load</strong>,
                            or a <strong>flat weekly fee</strong>. Semi-truck equipment like dry van, reefer and flatbed usually sits at the
                            low end. Box trucks, hotshots and sprinter vans usually pay a higher percentage. The fee should be paid only after
                            the broker pays you, with no setup fee and no long contract.
                        </p>

                        <h2>The three ways dispatchers charge</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>How it works</th>
                                    <th>Best for</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Percentage of the load</td>
                                    <td>A share of each load&apos;s gross, commonly 3% to 10%</td>
                                    <td>Owner-operators whose weekly gross changes</td>
                                </tr>
                                <tr>
                                    <td>Flat weekly fee</td>
                                    <td>One fixed price per truck per week, whatever you haul</td>
                                    <td>Trucks that gross a lot every single week</td>
                                </tr>
                                <tr>
                                    <td>Per-load fee</td>
                                    <td>A fixed dollar amount for each load booked</td>
                                    <td>Carriers who only want help with some loads</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            The percentage model is the most common because the dispatcher only earns when you earn. If a load
                            pays more because the dispatcher negotiated well, both of you benefit.
                        </p>

                        <h2>What it costs in real money</h2>
                        <p>Here is what each percentage costs on a single $3,000 load and on a $10,000 week:</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Fee</th>
                                    <th>$3,000 load</th>
                                    <th>$10,000 week</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[3, 4, 5, 6, 8, 10].map((p) => (
                                    <tr key={p}>
                                        <td>{p}%</td>
                                        <td>${(30 * p).toLocaleString("en-US")}</td>
                                        <td>${(100 * p).toLocaleString("en-US")}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>
                            A good dispatcher should pay for themselves. If they negotiate even $0.10 more per mile on a 2,500-mile
                            week, that is $250 extra, which covers most dispatch fees on its own.
                        </p>

                        <h2>Why the rate changes by equipment</h2>
                        <p>
                            Finding, negotiating and booking a load takes roughly the same work whether it pays $800 or $4,000.
                            That is why box trucks, hotshots and sprinter vans, which haul lower-paying loads, usually pay a higher
                            percentage than semis. Specialized semi work like flatbed and step deck can need more phone time with
                            brokers, but the higher load value keeps the percentage low.
                        </p>

                        <h2>What the fee should include</h2>
                        <ul>
                            <li>Searching load boards and broker contacts for your lanes</li>
                            <li>Negotiating the rate, plus detention and layover terms</li>
                            <li>Checking the broker&apos;s authority, credit and payment history</li>
                            <li>Rate confirmations, carrier packets and booking paperwork</li>
                            <li>Check calls and problem solving while you are on the road</li>
                            <li>Sending invoices and following up until you are paid</li>
                        </ul>
                        <p>If a dispatcher charges extra for any of these, compare the total cost, not just the headline rate.</p>

                        <h2>Red flags when comparing prices</h2>
                        <ul>
                            <li><strong>Setup fees.</strong> Paying hundreds of dollars before a single load is booked.</li>
                            <li><strong>Long contracts.</strong> Three- to twelve-month terms with cancellation penalties.</li>
                            <li><strong>Paying before you are paid.</strong> The fee should come after the broker pays you.</li>
                            <li><strong>Forced dispatch.</strong> You should always be able to turn down a load.</li>
                            <li><strong>No written agreement.</strong> Get the fee, terms and power of attorney scope in writing.</li>
                        </ul>
                        <p>
                            For a full checklist, read{" "}
                            <a href="/blog/how-to-choose-dispatch-service">how to choose a truck dispatch service</a>.
                        </p>

                        <h2>Priority Dispatch rates</h2>
                        <p>
                            Priority Dispatch LLC is a US truck dispatching company based in Kissimmee, Florida. Our fees are paid
                            only after the broker pays you, with no setup fee and no contract:
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Equipment</th>
                                    <th>Dispatch fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rates.map((r) => (
                                    <tr key={r.equipment}>
                                        <td>{r.href ? <a href={r.href}>{r.equipment}</a> : r.equipment}</td>
                                        <td>{r.percent}% of gross</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>
                            Running two or more trucks? Fleet rates are negotiable. See the <a href="/pricing">pricing page</a> or{" "}
                            <a href="/contact">talk to a dispatcher</a>.
                        </p>

                        <h2>Frequently asked questions</h2>
                        {faqs.map((f) => (
                            <div key={f.q}>
                                <h3>{f.q}</h3>
                                <p>{f.a}</p>
                            </div>
                        ))}

                        <div className="mt-12 rounded-xl border border-border bg-card p-6">
                            <h2 className="mb-2 text-2xl font-bold">About the Author</h2>
                            <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                <strong>Muhammad Faisal Bilal</strong> is the Founder &amp; CEO of Priority Dispatch LLC, a truck
                                dispatching company in Kissimmee, Florida, serving owner-operators and small fleets in all 48 states.
                            </p>
                            <a href="/about-owner" className="font-semibold text-accent hover:underline">
                                More about Faisal →
                            </a>
                        </div>
                    </div>
                </div>
                <RelatedPosts slug="truck-dispatcher-cost" />
            </article>
            <SiteFooter />
        </main>
    )
}
