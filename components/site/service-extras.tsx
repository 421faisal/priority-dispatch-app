import Link from "next/link"
import { serviceContent } from "@/lib/service-content"
import { blogPosts } from "@/lib/blog-posts"
import { locationBySlug } from "@/lib/locations"
import { toolBySlug } from "@/lib/tools"
import { rates } from "@/lib/pricing"

/** FAQ (with schema) and related links at the end of a service page */
export function ServiceExtras({ slug }: { slug: string }) {
    const c = serviceContent[slug]
    if (!c) return null
    const guides = c.guides.map((s) => blogPosts.find((p) => p.slug === s)).filter((p) => p !== undefined)
    const states = c.states.map(locationBySlug).filter((l) => l !== undefined)
    const tools = c.tools.map(toolBySlug).filter((t) => t !== undefined)
    const siblings = rates.filter((r) => r.href && r.href !== `/services/${slug}`)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-background py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-extrabold tracking-tight">{c.name} dispatch questions</h2>
                    <div className="mt-8 space-y-5">
                        {c.faqs.map((f) => (
                            <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                                <h3 className="text-lg font-bold">{f.q}</h3>
                                <p className="mt-2 leading-relaxed text-muted-foreground">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-muted py-16">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
                    <div>
                        <h2 className="text-lg font-extrabold">Guides</h2>
                        <ul className="mt-3 space-y-2 text-sm">
                            {guides.map((g) => (
                                <li key={g.slug}>
                                    <Link href={`/blog/${g.slug}`} className="text-accent hover:underline">{g.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-extrabold">Where we dispatch</h2>
                        <ul className="mt-3 space-y-2 text-sm">
                            {states.map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/truck-dispatcher/${s.slug}`} className="text-accent hover:underline">{s.h1}</Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/areas-we-serve" className="text-accent hover:underline">All 48 states</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-extrabold">Free tools</h2>
                        <ul className="mt-3 space-y-2 text-sm">
                            {tools.map((t) => (
                                <li key={t.slug}>
                                    <Link href={`/toolbox/${t.slug}`} className="text-accent hover:underline">{t.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-extrabold">Other equipment</h2>
                        <ul className="mt-3 space-y-2 text-sm">
                            {siblings.map((r) => (
                                <li key={r.equipment}>
                                    <Link href={r.href!} className="text-accent hover:underline">{r.equipment} dispatch ({r.percent}%)</Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/owner-operator-dispatch" className="text-accent hover:underline">Owner-operator dispatch</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
