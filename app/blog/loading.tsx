import { Skeleton } from "@/components/ui/skeleton"

export default function BlogLoading() {
    return (
        <div className="w-full min-h-screen bg-background">
            {/* Blog List Loading Skeleton */}
            
            {/* Header Section */}
            <section className="bg-primary py-16 text-primary-foreground">
                <div className="mx-auto max-w-4xl px-4 text-center space-y-4">
                    <Skeleton className="h-12 w-2/3 mx-auto bg-primary-foreground/20" />
                    <Skeleton className="h-6 w-3/4 mx-auto bg-primary-foreground/20" />
                </div>
            </section>

            {/* Blog Grid Section */}
            <section className="bg-background py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-4">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(9)].map((_, i) => (
                            <article 
                                key={i} 
                                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm p-6 space-y-4"
                            >
                                {/* Date and Author */}
                                <div className="flex items-center gap-4">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-4 w-32" />
                                </div>
                                
                                {/* Title */}
                                <Skeleton className="h-6 w-full" />
                                <Skeleton className="h-6 w-4/5" />
                                
                                {/* Excerpt */}
                                <div className="space-y-2 flex-1">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-3/4" />
                                </div>
                                
                                {/* Read More Link */}
                                <Skeleton className="h-5 w-32" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
