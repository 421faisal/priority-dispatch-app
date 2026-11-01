import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { MapPin, Truck, Globe, Navigation, ArrowRight } from "lucide-react"
import { locations } from "@/lib/locations"

export const metadata: Metadata = {
    title: "USA Truck Dispatch Services in All 48 States | Priority Dispatch",
    description: "USA truck dispatching in all 48 states from Kissimmee, FL, with lane knowledge in the Midwest, the East Coast, California, Texas and the Southeast.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/areas-we-serve",
    },
    openGraph: {
        title: "USA Truck Dispatch Services in All 48 States | Priority Dispatch",
        description: "USA truck dispatching in all 48 states from Kissimmee, FL, with lane knowledge in the Midwest, the East Coast, California, Texas and the Southeast.",
        url: "https://prioritydispatchllc.com/areas-we-serve",
        siteName: "Priority Dispatch LLC",
        type: "website",
        images: ["/images/hero-truck.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "USA Truck Dispatch Services in All 48 States | Priority Dispatch",
        description: "USA truck dispatching in all 48 states from Kissimmee, FL.",
    },
}

const regions = [
    {
        name: "Southeast",
        states: ["Florida", "Georgia", "Alabama", "South Carolina", "North Carolina", "Tennessee", "Mississippi"],
        highlight: "Home region: we are based in Kissimmee, FL. Strong reefer and retail freight, with Atlanta as the main reload market.",
    },
    {
        name: "Southwest",
        states: ["Texas", "Arizona", "New Mexico", "Oklahoma", "Louisiana", "Arkansas"],
        highlight: "Cross-border freight through Laredo, Houston industrial loads and oilfield hotshot work.",
    },
    {
        name: "Northeast",
        states: ["New York", "Pennsylvania", "New Jersey", "Maryland", "Virginia", "Massachusetts", "Connecticut", "Maine"],
        highlight: "Dense, short-haul freight along I-95 and I-81, with tight appointment windows we plan around.",
    },
    {
        name: "Midwest",
        states: ["Illinois", "Ohio", "Michigan", "Indiana", "Missouri", "Wisconsin", "Minnesota", "Iowa", "Kansas", "Nebraska"],
        highlight: "Chicago and Columbus distribution, auto parts and seasonal agricultural freight.",
    },
    {
        name: "West",
        states: ["California", "Washington", "Oregon", "Nevada", "Colorado", "Utah", "Idaho", "Montana", "Wyoming"],
        highlight: "Long-haul West Coast lanes, port freight and Central Valley produce.",
    },
]

const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://prioritydispatchllc.com" },
        { "@type": "ListItem", position: 2, name: "Areas We Serve", item: "https://prioritydispatchllc.com/areas-we-serve" },
    ],
}

export default function AreasWeServePage() {
    return (
        <main>
            <SiteHeader />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <section className="bg-primary py-16 text-primary-foreground md:py-24">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">USA Truck Dispatch Services in All 48 States</h1>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <p className="mt-6 text-xl opacity-90">
                            Priority Dispatch LLC is a US truck dispatching company based in Kissimmee, Florida. We dispatch
                            owner-operators and small fleets in all 48 continental states, keeping you on the most profitable
                            lanes from coast to coast.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="bg-background py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold">Regional and state dispatch guides</h2>
                    <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
                        We focus on the Midwest, the East Coast and California, and dispatch in every other state too. These
                        guides cover the hubs, highways, seasons and rates we plan around when we dispatch there.
                    </p>
                    <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {locations.map((l) => (
                            <li key={l.slug}>
                                <Link
                                    href={`/truck-dispatcher/${l.slug}`}
                                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
                                >
                                    <span className="flex items-center gap-2 text-sm font-semibold text-accent">
                                        <MapPin className="h-4 w-4" /> {l.abbr}
                                    </span>
                                    <span className="mt-2 text-lg font-bold group-hover:text-accent">{l.h1}</span>
                                    <span className="mt-2 text-sm text-muted-foreground">{l.hubs.slice(0, 3).join(", ")}</span>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                                        Read the guide <ArrowRight className="h-4 w-4" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-muted py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <Reveal>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">Local dispatcher or nationwide dispatcher?</h2>
                                <p className="text-lg text-muted-foreground">
                                    Both. We are based in Kissimmee, Florida, and the Southeast is our home region. But
                                    dispatching happens by phone, email and load boards, so we book loads for trucks
                                    anywhere in the lower 48. What matters is lane knowledge: knowing which markets pay,
                                    where the reloads are and when the seasons change.
                                </p>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-lg bg-accent/20 p-2 text-accent">
                                            <Globe className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">All 48 States</h3>
                                            <p className="text-sm text-muted-foreground">Loads coast to coast, 24/7 dispatch support.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-lg bg-accent/20 p-2 text-accent">
                                            <Navigation className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Lane Planning</h3>
                                            <p className="text-sm text-muted-foreground">Reloads planned before you deliver.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delayMs={200}>
                            <div className="relative overflow-hidden rounded-2xl bg-card p-8">
                                <MapPin className="absolute -right-8 -top-8 h-48 w-48 opacity-10" />
                                <h2 className="text-2xl font-bold">Regional expertise</h2>
                                <div className="mt-6 space-y-6">
                                    {regions.map((region) => (
                                        <div key={region.name}>
                                            <h3 className="font-bold text-accent">{region.name}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                                {region.states.join(", ")}
                                            </p>
                                            <p className="mt-1 text-sm text-foreground">{region.highlight}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="bg-background py-16">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-bold">Ready to Hit the Road?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            From 4% of the gross load, paid after you get paid. No contract, no setup fee. Whether you run
                            local Southeast freight or long-haul West Coast lanes, we keep you loaded.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a href="/carrier-setup" className="inline-flex items-center">
                                <Truck className="mr-2 inline-block h-6 w-6 text-accent" />
                                <span className="text-lg font-bold underline decoration-accent underline-offset-4">Get Started with Carrier Setup</span>
                            </a>
                            <Link href="/pricing" className="text-lg font-semibold text-muted-foreground hover:text-accent hover:underline">
                                See pricing
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
            <SiteFooter />
        </main>
    )
}
