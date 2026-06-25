'use client'

import { useEffect } from 'react'
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Home, RefreshCw, AlertTriangle, MessageCircle } from "lucide-react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error)
    }, [error])

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <SiteHeader />
            
            <section className="relative min-h-[80vh] flex items-center justify-center py-24 px-4">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                    <Reveal>
                        {/* Error Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <AlertTriangle className="h-32 w-32 text-destructive animate-pulse" />
                                <div className="absolute inset-0 bg-destructive/20 blur-3xl rounded-full"></div>
                            </div>
                        </div>
                        
                        {/* Error Title */}
                        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">
                            Oops! Something Went Wrong
                        </h1>
                    </Reveal>
                    
                    <Reveal delayMs={100}>
                        {/* Error Description */}
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We're sorry, but something unexpected happened. Our team has been notified and we're working to fix the issue.
                        </p>
                        
                        {/* Error Details (Optional - only in development) */}
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-left">
                                <p className="text-sm text-destructive font-mono break-all">
                                    {error.message}
                                </p>
                                {error.digest && (
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Error ID: {error.digest}
                                    </p>
                                )}
                            </div>
                        )}
                    </Reveal>
                    
                    <Reveal delayMs={200}>
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <button
                                onClick={reset}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                            >
                                <RefreshCw className="h-5 w-5" />
                                Try Again
                            </button>
                            
                            <Link 
                                href="/"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border text-foreground font-semibold rounded-lg hover:bg-accent/10 transition-all hover:scale-105"
                            >
                                <Home className="h-5 w-5" />
                                Go to Homepage
                            </Link>
                        </div>
                    </Reveal>
                    
                    <Reveal delayMs={300}>
                        {/* Help Section */}
                        <div className="pt-12 border-t border-border mt-12">
                            <p className="text-sm text-muted-foreground mb-6">
                                If the problem persists, please contact our support team:
                            </p>
                            <Link 
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-accent/10 text-accent hover:bg-accent/20 rounded-full transition-colors font-medium"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Contact Support
                            </Link>
                            <p className="text-xs text-muted-foreground mt-4">
                                Or call us at: <span className="font-semibold text-foreground">(689) 314-8347</span>
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>
            
            <SiteFooter />
        </main>
    )
}
