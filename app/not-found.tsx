import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BackButton } from "@/components/site/back-button"
import { Home, FileQuestion } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <SiteHeader />

            <section className="relative min-h-[80vh] flex items-center justify-center py-24 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <FileQuestion className="h-32 w-32 text-accent animate-pulse" />
                            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                        </div>
                    </div>

                    {/* Code */}
                    <h1 className="text-8xl md:text-9xl font-extrabold text-primary/20 select-none">404</h1>

                    {/* Title */}
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Page Not Found</h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                        >
                            <Home className="h-5 w-5" />
                            Go to Homepage
                        </Link>
                        <BackButton />
                    </div>

                    {/* Quick links */}
                    <div className="pt-12 border-t border-border mt-12">
                        <p className="text-sm text-muted-foreground mb-6">
                            Looking for something specific? Try these popular pages:
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                { href: "/services",     label: "Our Services" },
                                { href: "/blog",         label: "Blog" },
                                { href: "/carrier-setup",label: "Carrier Setup" },
                                { href: "/careers",      label: "Careers" },
                                { href: "/faq",          label: "FAQ" },
                                { href: "/contact",      label: "Contact Us" },
                            ].map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="px-4 py-2 text-sm bg-accent/10 text-accent hover:bg-accent/20 rounded-full transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
