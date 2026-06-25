import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPostLoading() {
    return (
        <div className="w-full min-h-screen bg-background">
            <article className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Back to Blog Link Skeleton */}
                    <Skeleton className="h-5 w-32 mb-8" />
                    
                    {/* Header Section */}
                    <header className="mb-12 text-center md:text-left space-y-6">
                        {/* Title */}
                        <Skeleton className="h-12 w-full max-w-3xl mx-auto md:mx-0" />
                        <Skeleton className="h-12 w-3/4 max-w-2xl mx-auto md:mx-0" />
                        
                        {/* Metadata (Date, Author, Reading Time) */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 border-b border-border pb-8">
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-5 w-36" />
                            <Skeleton className="h-5 w-24" />
                        </div>
                    </header>
                    
                    {/* Featured Image Skeleton */}
                    <Skeleton className="relative mb-12 aspect-[16/9] w-full rounded-2xl" />
                    
                    {/* Content Section */}
                    <div className="prose prose-lg mx-auto max-w-none space-y-6">
                        {/* Intro Quote */}
                        <div className="space-y-3 mb-8">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-5/6" />
                        </div>
                        
                        {/* Section 1 */}
                        <Skeleton className="h-8 w-2/3 mt-12 mb-6" />
                        <div className="space-y-4">
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-11/12" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-4/5" />
                        </div>
                        
                        {/* Section 2 */}
                        <Skeleton className="h-8 w-1/2 mt-12 mb-6" />
                        <div className="space-y-4">
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-5/6" />
                        </div>
                        
                        {/* Card/Callout Skeleton */}
                        <div className="my-10 rounded-xl border border-border p-8 space-y-4">
                            <Skeleton className="h-6 w-2/3" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-4/5" />
                        </div>
                        
                        {/* Section 3 */}
                        <Skeleton className="h-8 w-3/5 mt-12 mb-6" />
                        <div className="space-y-4">
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-11/12" />
                            <Skeleton className="h-5 w-full" />
                        </div>
                        
                        {/* Author Bio Skeleton */}
                        <div className="mt-12 p-6 bg-card border border-border rounded-xl space-y-4">
                            <Skeleton className="h-6 w-40" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-5 w-36 mt-4" />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
