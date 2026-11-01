import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, MapPin, PhoneCall, Route, CalendarDays, Lightbulb } from "lucide-react"
import { locations, locationBySlug } from "@/lib/locations"
import { blogPosts } from "@/lib/blog-posts"
import { rates, pricingSentence } from "@/lib/pricing"

const BASE = "https://prioritydispatchllc.com"

const equipmentLabels: Record<string, string> = {
    "dry-van-dispatch": "Dry van dispatch",
    "reefer-dispatch": "Reefer dispatch",
    "flatbed-dispatch": "Flatbed dispatch",
    "box-truck-dispatch": "Box truck dispatch",
    "hotshot-dispatch": "Hotshot dispatch",
    "power-only-dispatch": "Power only dispatch",
    "step-deck-dispatch": "Step deck dispatch",
}

export const dynamicParams = false

export function generateStaticParams() {
    return locations.map((l) => ({ state: l.slug }))
}

export async function generateMetadata(props: { params: Promise<{ state: string }> }): Promise<Metadata> {
    const { state } = await props.params
    const loc = locationBySlug(state)
    if (!loc) return {}
    const url = `${BASE}/truck-dispatcher/${loc.slug}`
    return {
        title: loc.title,
        description: loc.description,
        alternates: { canonical: url },
        openGraph: {
            title: loc.title,
            description: loc.description,
            url,
            siteName: "Priority Dispatch LLC",
            type: "website",
            images: ["/images/hero-truck.jpg"],
        },
        twitter: {
            card: "summary_large_image",
            title: loc.title,
            description: loc.description,
            images: ["/images/hero-truck.jpg"],
        },
    }
}

export default async function LocationPage(props: { params: Promise<{ state: string }> }) {
    const { state } = await props.params
    const loc = locationBySlug(state)
    if (!loc) notFound()

    const url = `${BASE}/truck-dispatcher/${loc.slug}`
    const posts = loc.posts
        .map((slug) => blogPosts.find((p) => p.slug === slug))
        .filter((p): p is (typeof blogPosts)[number] => Boolean(p))
    const others = locations.filter((l) => l.slug !== loc.slug)

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Truck dispatch service in ${loc.state}`,
            serviceType: "Truck dispatching",
            url,
            description: loc.summary,
            provider: { "@type": "LocalBusiness", name: "Priority Dispatch LLC", url: BASE, telephone: "+16893148347" },
            areaServed: { "@type": "State", name: loc.state, containedInPlace: { "@type": "Country", name: "United States" } },
            offers: rates.map((r) => ({
                "@type": "Offer",
                name: `${r.equipment} dispatch`,
                description: `${r.percent}% of the gross load, paid after the broker pays. No setup fee, no contract.`,
            })),
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: loc.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE },
                { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${BASE}/areas-we-serve` },
                { "@type": "ListItem", position: 3, name: `Truck Dispatcher in ${loc.state}`, item: url },
            ],
        },
    ]

    return (
        <main>
            <SiteHeader />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/areas-we-serve" className="hover:underline">Areas We Serve</Link>
                        <span className="mx-2">/</span>
                        <span>{loc.state}</span>
                    </nav>
                    <div className="max-w-3xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                            <MapPin className="h-3.5 w-3.5" />
                            {loc.state} ({loc.abbr}) truck dispatching
                        </div>
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">{loc.h1}</h1>
                        <p className="mt-6 text-lg leading-relaxed opacity-90">{loc.summary}</p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a href="/carrier-setup">
                                <Button size="lg" className="bg-accent px-8 text-base font-bold text-accent-foreground hover:bg-accent/90">
                                    Start Dispatching <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                            <a href="tel:+16893148347">
                                <Button size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                    <PhoneCall className="mr-2 h-5 w-5" /> (689) 314-8347
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight">Where we dispatch in {loc.state}</h2>
                        <p className="mt-4 text-muted-foreground">Main freight markets we book loads in and out of:</p>
                        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {loc.hubs.map((h) => (
                                <li key={h} className="flex items-center gap-2 font-medium">
                                    <MapPin className="h-4 w-4 shrink-0 text-accent" /> {h}
                                </li>
                            ))}
                        </ul>
                        <h3 className="mt-10 flex items-center gap-2 text-xl font-bold">
                            <Route className="h-5 w-5 text-accent" /> Key highway corridors
                        </h3>
                        <ul className="mt-4 space-y-2 text-muted-foreground">
                            {loc.corridors.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight">What moves in {loc.state}</h2>
                        <ul className="mt-6 space-y-4">
                            {loc.freight.map((f) => (
                                <li key={f} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-muted py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight">
                        <CalendarDays className="h-7 w-7 text-accent" /> {loc.state} freight seasons
                    </h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {loc.seasons.map((s) => (
                            <div key={s.name} className="rounded-2xl border border-border bg-card p-6">
                                <h3 className="text-lg font-bold">{s.name}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight">
                        <Lightbulb className="h-7 w-7 text-accent" /> How we keep {loc.state} trucks profitable
                    </h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {loc.tips.map((t) => (
                            <div key={t.title} className="rounded-2xl border border-border bg-card p-6">
                                <h3 className="text-lg font-bold">{t.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 rounded-2xl border border-border bg-accent/5 p-6 md:p-8">
                        <h2 className="text-2xl font-extrabold">Dispatch pricing: from 4% of the gross load</h2>
                        <p className="mt-3 text-muted-foreground">
                            {pricingSentence}{" "}
                            <Link href="/pricing" className="font-semibold text-accent hover:underline">See full pricing</Link>
                        </p>
                        <h3 className="mt-6 font-bold">Equipment we dispatch in {loc.state}</h3>
                        <ul className="mt-3 flex flex-wrap gap-3">
                            {loc.equipment.map((e) => (
                                <li key={e}>
                                    <Link
                                        href={`/services/${e}`}
                                        className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-accent hover:text-accent"
                                    >
                                        {equipmentLabels[e]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-muted py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-extrabold tracking-tight">{loc.state} truck dispatch FAQ</h2>
                    <div className="mt-8 space-y-6">
                        {loc.faqs.map((f) => (
                            <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                                <h3 className="text-lg font-bold">{f.q}</h3>
                                <p className="mt-2 leading-relaxed text-muted-foreground">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-16">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-extrabold">Guides for {loc.state} owner-operators</h2>
                        <ul className="mt-4 space-y-3">
                            {posts.map((p) => (
                                <li key={p.slug}>
                                    <Link href={`/blog/${p.slug}`} className="font-semibold text-accent hover:underline">
                                        {p.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-extrabold">Other states we cover</h2>
                        <ul className="mt-4 space-y-3">
                            {others.map((o) => (
                                <li key={o.slug}>
                                    <Link href={`/truck-dispatcher/${o.slug}`} className="font-semibold text-accent hover:underline">
                                        Truck dispatcher in {o.state}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/areas-we-serve" className="font-semibold text-accent hover:underline">
                                    All 48 states we serve
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-primary py-16 text-primary-foreground md:py-20">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h2 className="text-3xl font-extrabold md:text-4xl">Ready for a dispatcher who knows {loc.state} freight?</h2>
                    <p className="mt-4 text-lg opacity-90">Send your MC, W-9 and insurance and we can start booking loads the same day.</p>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a href="/carrier-setup">
                            <Button size="lg" className="bg-accent px-8 text-base font-bold text-accent-foreground hover:bg-accent/90">
                                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                        <a href="/contact">
                            <Button size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                Talk to a Dispatcher
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
            <SiteFooter />
        </main>
    )
}
