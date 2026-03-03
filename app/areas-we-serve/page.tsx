import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { MapPin, Truck, Globe, Navigation } from "lucide-react"

export const metadata: Metadata = {
    title: "Areas We Serve — 48 State Freight Coverage | Priority Dispatch LLC",
    description: "Priority Dispatch LLC provides expert freight dispatching across the continental United States. We serve all 48 states with dedicated support in Florida, Texas, California, and more.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/areas-we-serve",
    },
}

const regions = [
    {
        name: "Southeast",
        states: ["Florida", "Georgia", "Alabama", "South Carolina", "North Carolina", "Tennessee", "Mississippi"],
        highlight: "Primary hub in Kissimmee, FL."
    },
    {
        name: "Southwest",
        states: ["Texas", "Arizona", "New Mexico", "Oklahoma", "Louisiana", "Arkansas"],
        highlight: "High volume lanes in TX and AZ."
    },
    {
        name: "Northeast",
        states: ["New York", "Pennsylvania", "New Jersey", "Maryland", "Virginia", "Massachusetts", "Connecticut", "Maine"],
        highlight: "Dense corridor expertise."
    },
    {
        name: "Midwest",
        states: ["Illinois", "Ohio", "Michigan", "Indiana", "Missouri", "Wisconsin", "Minnesota", "Iowa", "Kansas", "Nebraska"],
        highlight: "LTL and Full Truckload hubs."
    },
    {
        name: "West",
        states: ["California", "Washington", "Oregon", "Nevada", "Colorado", "Utah", "Idaho", "Montana", "Wyoming"],
        highlight: "Long haul West Coast lanes."
    }
]

export default function AreasWeServePage() {
    return (
        <main>
            <SiteHeader />
            <section className="bg-primary py-16 text-primary-foreground md:py-24">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">Areas We Serve</h1>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <p className="mt-6 text-xl opacity-90">
                            Expanding your horizons. We dispatch freight across all 48 continental states, keeping you on the most profitable lanes from coast to coast.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="bg-background py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <Reveal>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">Nationwide Coverage</h2>
                                <p className="text-lg text-muted-foreground">
                                    At Priority Dispatch LLC, we don&apos;t just book loads; we optimize your travel. Our dispatchers have deep knowledge of regional markets, seasonal trends, and high-demand corridors across America.
                                </p>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-lg bg-accent/20 p-2 text-accent">
                                            <Globe className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">All 48 States</h4>
                                            <p className="text-sm text-muted-foreground">Consistent loads nationwide.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-lg bg-accent/20 p-2 text-accent">
                                            <Navigation className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Lane Optimization</h4>
                                            <p className="text-sm text-muted-foreground">Backhauls always planned.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delayMs={200}>
                            <div className="relative overflow-hidden rounded-2xl bg-muted p-8">
                                <MapPin className="absolute -right-8 -top-8 h-48 w-48 opacity-10" />
                                <h3 className="text-2xl font-bold">Regional Expertise</h3>
                                <div className="mt-6 space-y-6">
                                    {regions.map((region) => (
                                        <div key={region.name}>
                                            <h4 className="font-bold text-accent">{region.name}</h4>
                                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                                {region.states.join(", ")}
                                            </p>
                                            <p className="mt-1 text-xs font-medium text-foreground">{region.highlight}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="bg-muted py-16">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-bold">Ready to Hit the Road?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Whether you prefer local Southeast runs or long‑haul West Coast lanes, we have the network to keep you moving.
                        </p>
                        <div className="mt-8">
                            <a href="/carrier-setup">
                                <Truck className="inline-block h-6 w-6 mr-2 animate-bounce text-accent" />
                                <span className="text-lg font-bold underline decoration-accent underline-offset-4">Get Started with Carrier Setup</span>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
            <SiteFooter />
        </main>
    )
}
