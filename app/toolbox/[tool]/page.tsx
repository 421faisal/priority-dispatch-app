import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { ComponentType } from "react"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator } from "lucide-react"
import { tools, toolBySlug } from "@/lib/tools"
import {
    CostPerMileTool,
    DetentionTool,
    HosTool,
    IftaTool,
    LoadProfitTool,
    PerDiemTool,
} from "@/components/site/trucking-tools"

const BASE = "https://prioritydispatchllc.com"

const components: Record<string, ComponentType> = {
    "cost-per-mile-calculator": CostPerMileTool,
    "load-profit-calculator": LoadProfitTool,
    "hos-calculator": HosTool,
    "ifta-calculator": IftaTool,
    "per-diem-calculator": PerDiemTool,
    "detention-pay-calculator": DetentionTool,
}

export const dynamicParams = false

export function generateStaticParams() {
    return tools.map((t) => ({ tool: t.slug }))
}

export async function generateMetadata(props: { params: Promise<{ tool: string }> }): Promise<Metadata> {
    const { tool } = await props.params
    const t = toolBySlug(tool)
    if (!t) return {}
    const url = `${BASE}/toolbox/${t.slug}`
    return {
        title: t.title,
        description: t.description,
        alternates: { canonical: url },
        openGraph: { title: t.title, description: t.description, url, siteName: "Priority Dispatch LLC", type: "website", images: ["/images/hero-truck.jpg"] },
        twitter: { card: "summary_large_image", title: t.title, description: t.description, images: ["/images/hero-truck.jpg"] },
    }
}

export default async function ToolPage(props: { params: Promise<{ tool: string }> }) {
    const { tool } = await props.params
    const t = toolBySlug(tool)
    const Tool = components[tool]
    if (!t || !Tool) notFound()
    const url = `${BASE}/toolbox/${t.slug}`
    const others = tools.filter((x) => x.slug !== t.slug)

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: t.name,
            url,
            description: t.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Any (web browser)",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            publisher: { "@type": "Organization", name: "Priority Dispatch LLC", url: BASE },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE },
                { "@type": "ListItem", position: 2, name: "Trucking Toolbox", item: `${BASE}/toolbox` },
                { "@type": "ListItem", position: 3, name: t.name, item: url },
            ],
        },
    ]

    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <section className="bg-primary py-12 text-primary-foreground md:py-16">
                <div className="mx-auto max-w-5xl px-4">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/toolbox" className="hover:underline">Trucking Toolbox</Link>
                        <span className="mx-2">/</span>
                        <span>{t.name}</span>
                    </nav>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                        <Calculator className="h-3.5 w-3.5" /> Free tool, no sign-up
                    </div>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">{t.h1}</h1>
                    <p className="mt-5 max-w-3xl text-lg leading-relaxed opacity-90">{t.intro}</p>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-5xl px-4">
                    <Tool />
                    <p className="mt-4 text-xs text-muted-foreground">
                        Everything is calculated in your browser. Nothing you enter is stored or sent anywhere.
                    </p>
                </div>
            </section>

            <section className="bg-muted py-12 md:py-16">
                <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-extrabold">How to use it</h2>
                        <ol className="mt-4 list-decimal space-y-2 pl-5">
                            {t.steps.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ol>
                        {t.sources.length > 0 && (
                            <>
                                <h2 className="mt-8 text-xl font-bold">Sources</h2>
                                <ul className="mt-3 space-y-2 text-sm">
                                    {t.sources.map((s) => (
                                        <li key={s.url}>
                                            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                                {s.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    <div>
                        <h2 className="text-2xl font-extrabold">Questions</h2>
                        <div className="mt-4 space-y-5">
                            {t.faqs.map((f) => (
                                <div key={f.q}>
                                    <h3 className="font-bold">{f.q}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-2xl font-extrabold">More free trucking tools</h2>
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {others.map((o) => (
                            <li key={o.slug}>
                                <Link href={`/toolbox/${o.slug}`} className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent">
                                    <span className="font-bold group-hover:text-accent">{o.name}</span>
                                    <span className="mt-1 text-sm text-muted-foreground">{o.short}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-primary py-12 text-primary-foreground md:py-16">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h2 className="text-3xl font-extrabold">Let a dispatcher run the numbers for you</h2>
                    <p className="mt-4 text-lg opacity-90">
                        We find loads that beat your cost per mile, negotiate detention and handle the paperwork, from 4% of the
                        gross load with no contract.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a href="/carrier-setup">
                            <Button size="lg" className="bg-accent px-8 text-base font-bold text-accent-foreground hover:bg-accent/90">
                                Start Dispatching <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                        <a href="/pricing">
                            <Button size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                See Pricing
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
            <SiteFooter />
        </main>
    )
}
