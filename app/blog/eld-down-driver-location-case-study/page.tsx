import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BlogArticleSchema } from "@/components/site/blog-article-schema"
import { RelatedPosts } from "@/components/site/related-posts"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"

const slug = "eld-down-driver-location-case-study"
const title = "ELD Down, Driver Off Track: A Dispatch Case Study"
const description =
    "A real Texas to Nevada dry van load: the ELD failed and the driver misreported his location. How honest updates to the broker protected the carrier."
const url = `https://prioritydispatchllc.com/blog/${slug}`
const image = "/images/blog/photos/how-to-choose-dispatch-service-og.jpg"

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Priority Dispatch LLC", type: "article", publishedTime: "2026-11-01", authors: ["Muhammad Faisal Bilal"], images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
}

export default function EldDownCaseStudy() {
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
                            The ELD Went Down and the Driver Wasn&apos;t Where He Said: What We Learned
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
                                6 min read
                            </span>
                        </div>
                    </header>

                    <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-xl">
                        <img
                            src="/images/blog/photos/how-to-choose-dispatch-service.webp"
                            alt="Semi-truck on a rural highway"
                            width={1200}
                            height={800}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="prose prose-lg mx-auto max-w-none leading-relaxed text-foreground/90">
                        <p className="border-l-4 border-accent pl-6 text-xl text-muted-foreground">
                            <strong>The short version:</strong> on a dry van load from Texas to Nevada, the truck&apos;s ELD stopped
                            working and the driver told us he was in New Mexico while the broker&apos;s tracking still showed Texas. The
                            load delivered late. Because we told the broker the truth early and kept updating them, the carrier
                            kept the broker relationship and did not receive a FreightGuard report.
                        </p>
                        <p>
                            Every week on the dispatch desk teaches something new. This is a real load we dispatched. I have left out
                            the names of the broker, the carrier and the driver; the lessons are what matter.
                        </p>

                        <h2>What happened</h2>
                        <ul>
                            <li>We booked a dry van load from Texas to Nevada with a large national freight broker.</li>
                            <li>The driver picked up on time. So far, a normal load.</li>
                            <li>
                                Then the truck&apos;s ELD stopped working. Without it, neither we nor the broker had reliable location
                                data from the truck.
                            </li>
                            <li>
                                The driver told us he was already in New Mexico. The broker&apos;s tracking still showed him in Texas.
                                When we asked again, he kept insisting. He was not telling the truth.
                            </li>
                            <li>
                                The owner of the company trusted his driver, which is understandable. But the broker&apos;s data and
                                the driver&apos;s story did not match, and the load was getting later every hour.
                            </li>
                        </ul>

                        <h2>What we did</h2>
                        <p>
                            We had a choice: cover for the driver and hope he made up the time, or tell the broker exactly what we
                            knew. We told the broker. We explained that the ELD was down, that the driver&apos;s reported location did
                            not match their tracking, and that we were working to confirm where the truck really was.
                        </p>
                        <p>
                            From then on we kept the broker updated with every piece of information we had, cooperated fully with
                            their team, and gave realistic arrival times instead of hopeful ones. The load delivered late, but the
                            broker never felt lied to by the carrier&apos;s dispatch.
                        </p>
                        <p>
                            The result: the carrier did not receive a FreightGuard report. FreightGuard is Carrier411&apos;s system
                            where brokers file reports about carriers, and other brokers check it before booking. A report for
                            dishonesty can keep a small carrier from getting loads for a long time.
                        </p>

                        <h2>Lessons for owner-operators and small fleets</h2>
                        <h3>1. When the broker&apos;s data and your driver disagree, believe the data until proven otherwise</h3>
                        <p>
                            Trust your driver, but verify. Ask for a photo of a mile marker or exit sign, a shared phone location, or
                            a fuel receipt. It takes one minute and settles the question.
                        </p>
                        <h3>2. Tell the broker the truth early</h3>
                        <p>
                            Brokers deal with late loads every day. What they do not forgive is being lied to. A late load with
                            honest updates is a bad day; a late load with a cover story is how carriers get reported.
                        </p>
                        <h3>3. Know the ELD malfunction rules before you need them</h3>
                        <p>
                            Under FMCSA rule 49 CFR 395.34, when an ELD malfunctions the driver must report it to the carrier within
                            24 hours, rebuild the record of duty status for the current day and the previous 7 days, and keep paper
                            logs until it is fixed. The carrier has 8 days to repair or replace the device. Keep blank paper logs
                            and the ELD malfunction instructions in every truck.
                        </p>
                        <h3>4. Have a backup way to track the truck</h3>
                        <p>
                            The broker&apos;s tracking app, a phone-based tracking link and regular check calls all help when the ELD
                            is down. Agree on the backup before the load, not in the middle of it.
                        </p>
                        <h3>5. Your reputation belongs to your MC, not your driver</h3>
                        <p>
                            Brokers report the carrier, not the driver. Every decision a driver makes on a load lands on the
                            owner&apos;s MC. Hire carefully, and set clear rules for honesty and communication from day one.
                        </p>

                        <h2>How a dispatcher helps in a moment like this</h2>
                        <p>
                            A good dispatcher is the carrier&apos;s voice to the broker. Our job is to protect your reputation,
                            not just book the next load: keep the broker informed, check the facts and give honest updates. That is
                            part of the service at <a href="/owner-operator-dispatch">Priority Dispatch</a>, along with{" "}
                            <a href="/pricing">rates from 4% of the gross load</a>.
                        </p>
                        <p>
                            Related: <a href="/blog/eld-compliance-checklist-2026">our ELD compliance checklist</a> and{" "}
                            <a href="/toolbox/hos-calculator">the free HOS calculator</a>.
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
