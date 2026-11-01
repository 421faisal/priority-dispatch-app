import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BlogArticleSchema } from "@/components/site/blog-article-schema"
import { RelatedPosts } from "@/components/site/related-posts"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"

const slug = "never-share-your-mc-case-study"
const title = "Never Hand Over Your MC: A Carrier Reputation Case Study"
const description =
    "A carrier let another dispatcher use its MC. One mishandled, uncancelled load later, a broker filed a report. How to protect your MC and what to do."
const url = `https://prioritydispatchllc.com/blog/${slug}`
const image = "/images/blog/photos/combatting-freight-fraud-2026-og.jpg"

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Priority Dispatch LLC", type: "article", publishedTime: "2026-11-01", authors: ["Muhammad Faisal Bilal"], images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
}

export default function NeverShareYourMcCaseStudy() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <BlogArticleSchema title={title} description={description} datePublished="2026-11-01" slug={slug} imageUrl={image} />
            <article className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <a href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </a>
                    <header className="mb-12 text-center md:text-left">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">From the dispatch desk</p>
                        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary lg:text-5xl">
                            Never Hand Over Your MC: How One Load You Didn&apos;t Book Can Damage Your Reputation
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
                                5 min read
                            </span>
                        </div>
                    </header>

                    <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-xl">
                        <img
                            src="/images/blog/photos/combatting-freight-fraud-2026.webp"
                            alt="Padlock and chain securing metal doors"
                            width={1200}
                            height={800}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="prose prose-lg mx-auto max-w-none leading-relaxed text-foreground/90">
                        <p className="border-l-4 border-accent pl-6 text-xl text-muted-foreground">
                            <strong>The short version:</strong> a carrier let another dispatcher work under its MC. When the owner
                            told that dispatcher to stop, nobody cleaned up what was already booked. A load under the carrier&apos;s
                            MC was not handled properly, the broker was never told and the load was never cancelled, so the broker
                            filed a report against the owner. The carrier had never even dealt with that broker itself.
                        </p>
                        <p>
                            This happened to a carrier we spoke with. I have left out names. The lesson applies to every
                            owner-operator: your MC number is your reputation, and anyone who can book under it can damage it.
                        </p>

                        <h2>What happened</h2>
                        <ul>
                            <li>The owner had been working with another dispatcher who was booking loads under his MC.</li>
                            <li>The owner was not happy with how that dispatcher worked and told him to stop.</li>
                            <li>
                                The dispatcher stopped calling, but the relationship was never properly closed: bookings already made
                                under the MC were not reviewed, and the broker was not contacted.
                            </li>
                            <li>
                                One load under the carrier&apos;s MC was mishandled. The broker was not kept informed and the booking
                                was never cancelled.
                            </li>
                            <li>
                                The broker did what brokers do: filed a report against the carrier, because the MC on the rate
                                confirmation belonged to the owner, not to the dispatcher.
                            </li>
                        </ul>
                        <p>
                            Reports like this, such as a FreightGuard on Carrier411, are seen by other brokers before they book a
                            carrier. A single one can cost a small carrier loads for months, and the carrier is not always notified
                            in time to respond.
                        </p>

                        <h2>How to protect your MC</h2>
                        <h3>1. Never give anyone your MC credentials or load board logins</h3>
                        <p>
                            A legitimate dispatcher does not need your FMCSA portal password, your load board password or your
                            email password. They book under your authority with a written dispatch agreement and send you every
                            rate confirmation before it is signed.
                        </p>
                        <h3>2. Put the dispatch relationship in writing</h3>
                        <p>
                            A short agreement should say what the dispatcher can do on your behalf, that you approve every load,
                            and how either side ends the relationship. If a dispatcher will not sign one, that is your answer.
                        </p>
                        <h3>3. When you end a dispatcher, close everything the same day</h3>
                        <ul>
                            <li>Ask for a list of every load booked or pending under your MC, and confirm each one with the broker.</li>
                            <li>Cancel anything you will not run, in writing, before the pickup time.</li>
                            <li>Change every password the dispatcher ever had access to.</li>
                            <li>Tell the brokers you work with that the dispatcher no longer represents you.</li>
                        </ul>
                        <h3>4. Watch your MC</h3>
                        <p>
                            Check your carrier profile with the load boards and monitoring services brokers use. If a report
                            appears, respond quickly, professionally and with documents. Some report systems give carriers only a
                            short window to answer.
                        </p>
                        <h3>5. If something goes wrong, call the broker yourself</h3>
                        <p>
                            A short honest call (&quot;this booking was made by a dispatcher we no longer work with; here is what we
                            can do&quot;) often stops a report before it is filed.
                        </p>

                        <h2>How we work</h2>
                        <p>
                            At Priority Dispatch you approve every load before we confirm it, and there is no contract, so you can
                            stop at any time. Whoever you work with, ask for the list of open loads under your MC whenever the
                            relationship ends. See{" "}
                            <a href="/owner-operator-dispatch">how owner-operator dispatch works</a> and{" "}
                            <a href="/blog/how-to-choose-dispatch-service">how to choose a dispatch service</a>.
                        </p>
                        <p>
                            Related: <a href="/blog/combatting-freight-fraud-2026">freight fraud and double brokering</a> and{" "}
                            <a href="/blog/eld-down-driver-location-case-study">what we learned when an ELD went down mid-load</a>.
                        </p>

                        <div className="mt-12 rounded-xl border border-border bg-card p-6">
                            <h2 className="mb-2 text-2xl font-bold">About the Author</h2>
                            <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                <strong>Muhammad Faisal Bilal</strong> is the Founder &amp; CEO of Priority Dispatch LLC, a truck
                                dispatching company serving owner-operators and small fleets in all 48 states.
                            </p>
                            <a href="/about-owner" className="font-semibold text-accent hover:underline">
                                More about Faisal →
                            </a>
                        </div>
                    </div>
                </div>
                <RelatedPosts slug={slug} />
            </article>
            <SiteFooter />
        </main>
    )
}
