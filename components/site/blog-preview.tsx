import Reveal from "./reveal"
import { Calendar, User, ArrowRight } from "lucide-react"

const recentPosts = [
    {
        title: "What Is Freight Dispatching? A Complete Guide for 2026",
        slug: "what-is-freight-dispatching",
        excerpt: "Learn how professional dispatching services can transform your trucking business by handling rate negotiations...",
        date: "Mar 3, 2026",
    },
    {
        title: "Owner-Operator Success: How to Maximize Your Revenue",
        slug: "owner-operator-guide",
        excerpt: "Discover the top strategies for owner-operators to increase their rate-per-mile and reduce deadhead...",
        date: "Mar 1, 2026",
    }
]

export function BlogPreview() {
    return (
        <section className="bg-muted/30 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4">
                <Reveal>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">Industry Insights</h2>
                            <p className="mt-3 max-w-xl text-muted-foreground">
                                Stay informed with the latest trucking trends, dispatch strategies, and revenue-maximizing tips from our experts.
                            </p>
                        </div>
                        <a href="/blog" className="flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                            View All Articles
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </Reveal>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {recentPosts.map((post, i) => (
                        <Reveal key={post.slug} delayMs={100 * i}>
                            <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {post.date}
                                    </span>
                                </div>
                                <h3 className="mt-4 text-xl font-bold group-hover:text-accent transition-colors">
                                    <a href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
