import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { DriverApplyForm } from "@/components/site/driver-apply-form"
import { ArrowRight, BadgeCheck, CheckCircle2, DollarSign, MapPin, MessageCircle, PhoneCall, Route, Truck } from "lucide-react"
import { BASE, DATE_POSTED, PAY_LINE, VALID_THROUGH, driverJobBySlug, driverJobs } from "@/lib/driver-jobs"

export const dynamicParams = false

export function generateStaticParams() {
    return driverJobs.map((j) => ({ role: j.slug }))
}

const site = "https://prioritydispatchllc.com"

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
    const job = driverJobBySlug((await params).role)
    if (!job) return {}
    const url = `${site}/careers/${job.slug}`
    return {
        title: job.metaTitle,
        description: job.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: job.metaTitle,
            description: job.metaDescription,
            url,
            siteName: "Priority Dispatch LLC",
            type: "website",
            images: [job.photo],
        },
        twitter: { card: "summary_large_image", title: job.metaTitle, description: job.metaDescription, images: [job.photo] },
    }
}

export default async function DriverJobPage({ params }: { params: Promise<{ role: string }> }) {
    const job = driverJobBySlug((await params).role)
    if (!job) notFound()
    const other = driverJobBySlug(job.other)!
    const url = `${site}/careers/${job.slug}`

    const jobPosting = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: `<p>${job.lead}</p><p><strong>Equipment:</strong> ${job.equipment}. <strong>License:</strong> ${job.license}. <strong>Pay:</strong> ${PAY_LINE}</p><p><strong>Requirements:</strong></p><ul>${job.requirements.map((r) => `<li>${r}</li>`).join("")}</ul><p><strong>What you do:</strong></p><ul>${job.duties.map((d) => `<li>${d}</li>`).join("")}</ul>`,
        identifier: { "@type": "PropertyValue", name: "Priority Dispatch LLC", value: job.id },
        datePosted: DATE_POSTED,
        validThrough: `${VALID_THROUGH}T23:59:59-08:00`,
        employmentType: "FULL_TIME",
        directApply: true,
        hiringOrganization: {
            "@type": "Organization",
            name: "Priority Dispatch LLC",
            sameAs: site,
            logo: `${site}/images/logo-priority-dispatch.png`,
        },
        jobLocation: {
            "@type": "Place",
            address: { "@type": "PostalAddress", addressLocality: "Torrance", addressRegion: "CA", addressCountry: "US" },
        },
        qualifications: job.requirements.join(". "),
        responsibilities: job.duties.join(". "),
        experienceRequirements: { "@type": "OccupationalExperienceRequirements", monthsOfExperience: 0 },
        industry: "Trucking and freight transportation",
        occupationalCategory: job.id.startsWith("box") ? "53-3033.00 Light Truck Drivers" : "53-3032.00 Heavy and Tractor-Trailer Truck Drivers",
        url,
    }
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: job.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    }
    const breadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site },
            { "@type": "ListItem", position: 2, name: "Careers", item: `${site}/careers` },
            { "@type": "ListItem", position: 3, name: job.title, item: url },
        ],
    }

    const facts = [
        { icon: MapPin, label: "Base", value: BASE },
        { icon: Truck, label: "Equipment", value: job.equipment },
        { icon: BadgeCheck, label: "License", value: job.shortLicense },
        { icon: Route, label: "Routes", value: "OTR and regional" },
        { icon: DollarSign, label: "Pay", value: "Percentage or per mile" },
        { icon: CheckCircle2, label: "Experience", value: "New drivers welcome" },
    ]

    return (
        <main className="min-h-screen flex flex-col bg-background">
            <SiteHeader />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                <img src={job.photo} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" aria-hidden="true" />
                <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">
                                Now hiring · {BASE}
                            </p>
                            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight md:text-5xl">{job.title}</h1>
                            <p className="mt-5 text-pretty text-base opacity-95 md:text-lg">{job.lead}</p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="#apply">
                                    <Button size="lg" className="bg-accent px-6 font-bold text-accent-foreground hover:bg-accent/90">
                                        Apply in 2 minutes
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
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Job at a glance */}
            <section className="border-b border-border bg-muted py-10">
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-6">
                    {facts.map((f) => (
                        <div key={f.label} className="rounded-xl border border-border bg-card p-4">
                            <f.icon className="h-5 w-5 text-accent" aria-hidden />
                            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{f.label}</p>
                            <p className="mt-0.5 text-sm font-bold text-primary">{f.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Details + form */}
            <section className="py-16 md:py-20">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 lg:grid-cols-2">
                    <div className="min-w-0 space-y-10">
                        <Reveal>
                            <div>
                                <h2 className="text-3xl font-extrabold tracking-tight text-primary">Who can apply</h2>
                                <ul className="mt-5 space-y-3">
                                    {job.requirements.map((r) => (
                                        <li key={r} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                                            <span>{r}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div>
                                <h2 className="text-3xl font-extrabold tracking-tight text-primary">The job</h2>
                                <ul className="mt-5 space-y-3">
                                    {job.duties.map((d) => (
                                        <li key={d} className="flex items-start gap-3">
                                            <Truck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="rounded-2xl border border-border bg-muted p-6">
                                <h2 className="text-2xl font-extrabold tracking-tight text-primary">How the pay works</h2>
                                <p className="mt-3 text-muted-foreground">{PAY_LINE}</p>
                                <p className="mt-3 text-muted-foreground">
                                    Questions before you apply? Call us or send a WhatsApp message to the same number.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <a href="tel:+16893148347" className="inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4">
                                        <PhoneCall className="h-4 w-4" aria-hidden /> Call (689) 314-8347
                                    </a>
                                    <a href="https://wa.me/16893148347" className="inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4">
                                        <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp us
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div id="apply" className="min-w-0 scroll-mt-24">
                        <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-primary">Apply now</h2>
                        <p className="mb-6 text-muted-foreground">Your name, phone number and a photo of your license. We call you back.</p>
                        <DriverApplyForm jobId={job.id} jobTitle={job.title} />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-muted py-16 md:py-20">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-primary">Questions drivers ask</h2>
                    <div className="space-y-4">
                        {job.faqs.map((f) => (
                            <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                                <h3 className="text-lg font-bold text-primary">{f.q}</h3>
                                <p className="mt-2 text-muted-foreground">{f.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 rounded-2xl border border-border bg-card p-6">
                        <p className="font-semibold text-primary">Also hiring in Torrance, CA</p>
                        <a href={`/careers/${other.slug}`} className="mt-1 inline-flex items-center gap-1 font-bold text-accent underline underline-offset-4">
                            {other.title} <ArrowRight className="h-4 w-4" aria-hidden />
                        </a>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Have your own truck instead? See <a href="/owner-operator-dispatch" className="text-accent underline">dispatch for owner-operators</a> and{" "}
                            <a href="/truck-dispatcher/california" className="text-accent underline">California truck dispatch</a>.
                        </p>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
