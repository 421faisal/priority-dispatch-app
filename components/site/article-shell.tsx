import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BlogArticleSchema } from "@/components/site/blog-article-schema"
import { RelatedPosts } from "@/components/site/related-posts"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"

export interface Faq {
    q: string
    a: string
}

/** Standard layout for a blog guide: header, photo, prose body, FAQ, sources, author box, related posts. */
export function ArticleShell({
    slug,
    title,
    description,
    h1,
    datePublished,
    dateModified,
    dateLabel,
    readMinutes,
    photo,
    photoAlt,
    eyebrow,
    faqs = [],
    sources = [],
    children,
}: {
    slug: string
    title: string
    description: string
    h1: string
    datePublished: string
    dateModified?: string
    /** Human date shown under the title, e.g. "Updated November 10, 2026" */
    dateLabel: string
    readMinutes: number
    /** Path without extension under /images/blog/photos, e.g. "what-is-twic-card-trucking" */
    photo: string
    photoAlt: string
    eyebrow?: string
    faqs?: Faq[]
    sources?: { label: string; url: string }[]
    children: ReactNode
}) {
    const image = `/images/blog/photos/${photo}-og.jpg`
    const faqSchema = faqs.length
        ? {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }
        : null

    return (
        <main className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <BlogArticleSchema
                title={title}
                description={description}
                datePublished={datePublished}
                dateModified={dateModified}
                slug={slug}
                imageUrl={image}
            />
            {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
            <article className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <a href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </a>
                    <header className="mb-12 text-center md:text-left">
                        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>}
                        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary lg:text-5xl">{h1}</h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 border-b border-border pb-8 text-sm text-muted-foreground md:justify-start">
                            <span className="flex items-center gap-2 font-medium text-foreground">
                                <Calendar className="h-4 w-4 text-accent" />
                                {dateLabel}
                            </span>
                            <span className="flex items-center gap-2 font-medium text-foreground">
                                <User className="h-4 w-4 text-accent" />
                                Muhammad Faisal Bilal
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-accent" />
                                {readMinutes} min read
                            </span>
                        </div>
                    </header>

                    <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-xl">
                        <img
                            src={`/images/blog/photos/${photo}.webp`}
                            alt={photoAlt}
                            width={1200}
                            height={800}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="prose prose-lg mx-auto max-w-none leading-relaxed text-foreground/90">
                        {children}

                        {faqs.length > 0 && (
                            <>
                                <h2>Frequently asked questions</h2>
                                {faqs.map((f) => (
                                    <div key={f.q}>
                                        <h3>{f.q}</h3>
                                        <p>{f.a}</p>
                                    </div>
                                ))}
                            </>
                        )}

                        {sources.length > 0 && (
                            <>
                                <h2>Sources</h2>
                                <ul>
                                    {sources.map((s) => (
                                        <li key={s.url}>
                                            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

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
