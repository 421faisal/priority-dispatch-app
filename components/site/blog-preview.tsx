import Reveal from "./reveal"
import { Calendar, User, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-posts"

const recentPosts = blogPosts.slice(0, 3)

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

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
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
