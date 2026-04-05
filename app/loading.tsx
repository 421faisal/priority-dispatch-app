import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="w-full">
            {/* Global site skeleton that fakes a standard page load */}
            
            {/* Skeleton Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[70vh] bg-muted/30 overflow-hidden border-b border-border flex flex-col items-center justify-center pt-20 pb-16">
                <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
                
                <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center space-y-6">
                    {/* Badge Skeleton */}
                    <Skeleton className="h-8 w-40 rounded-full" />
                    
                    {/* H1 Title Skeleton */}
                    <Skeleton className="h-14 md:h-20 w-3/4 max-w-3xl rounded-xl" />
                    <Skeleton className="h-14 md:h-20 w-2/4 max-w-xl rounded-xl" />
                    
                    {/* Subtitle / Paragraph Skeleton */}
                    <div className="space-y-3 w-full flex flex-col items-center pt-4">
                        <Skeleton className="h-5 w-5/6 max-w-2xl" />
                        <Skeleton className="h-5 w-4/6 max-w-xl" />
                    </div>

                    {/* Button / CTA Skeleton */}
                    <div className="flex gap-4 pt-8">
                        <Skeleton className="h-12 w-32 rounded-md" />
                        <Skeleton className="h-12 w-32 rounded-md" />
                    </div>
                </div>
            </section>

            {/* Skeleton Body Content */}
            <section className="w-full py-20 bg-background">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature Card Skeletons */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col space-y-4 p-6 border border-border rounded-xl bg-card">
                            <Skeleton className="h-12 w-12 rounded-lg" />
                            <Skeleton className="h-6 w-3/4 mt-4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto px-4 mt-20 space-y-6">
                    <Skeleton className="h-10 w-1/3 mx-auto mb-10" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-11/12" />
                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-6 w-5/6" />
                </div>
            </section>
        </div>
    )
}
