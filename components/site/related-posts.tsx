import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { relatedPosts, serviceFor } from "@/lib/blog-posts"

export function RelatedPosts({ slug }: { slug: string }) {
    const posts = relatedPosts(slug)
    const service = serviceFor(slug)

    return (
        <aside aria-labelledby="keep-reading" className="mx-auto mt-16 max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-border pt-12">
                <h2 id="keep-reading" className="text-2xl font-bold text-primary">
                    Keep reading
                </h2>
                <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
                            >
                                <span className="text-xs text-muted-foreground">{post.date}</span>
                                <span className="mt-2 font-bold leading-snug text-foreground group-hover:text-accent">
                                    {post.title}
                                </span>
                                <span className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
                    <Link href={service.href} className="inline-flex items-center gap-2 text-accent hover:underline">
                        {service.label}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/blog" className="text-muted-foreground hover:text-accent hover:underline">
                        All articles
                    </Link>
                </p>
            </div>
        </aside>
    )
}
