import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Calendar, User, ArrowRight } from "lucide-react"
import { blogPosts as posts } from "@/lib/blog-posts"

export const metadata: Metadata = {
    title: "Trucking & Dispatch Blog | Priority Dispatch LLC",
    description: "Practical guides for owner-operators: dispatch fees, new MC authority, load boards and broker vetting.",
    alternates: {
        canonical: "https://prioritydispatchllc.com/blog",
    },
    openGraph: {
        title: "Trucking & Dispatch Blog | Priority Dispatch LLC",
        description: "Practical guides for owner-operators: dispatch fees, new MC authority, load boards and broker vetting.",
        url: "https://prioritydispatchllc.com/blog",
        siteName: "Priority Dispatch LLC",
        type: "website",
        images: ["/images/og-trucks-highway.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Trucking & Dispatch Blog | Priority Dispatch LLC",
        description: "Practical guides for owner-operators: dispatch fees, new MC authority, load boards and broker vetting.",
    },
}


export default function BlogPage() {
    return (
        <main>
            <SiteHeader />
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">Trucking & Dispatch Blog</h1>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <p className="mt-6 text-xl opacity-90">
                            Expert insights and strategies to help you navigate the freight market and grow your fleet.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="bg-background py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-4">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, i) => (
                            <Reveal key={post.slug} delayMs={100 * i}>
                                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="h-3 w-3" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <User className="h-3 w-3" />
                                                {post.author}
                                            </span>
                                        </div>
                                        <h2 className="mt-4 text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                                        </h2>
                                        <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto pt-6">
                                            <a
                                                href={`/blog/${post.slug}`}
                                                className="flex items-center gap-2 text-sm font-bold text-accent"
                                            >
                                                Read Full Article
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            <SiteFooter />
        </main>
    )
}
