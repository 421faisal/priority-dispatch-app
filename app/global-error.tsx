'use client'

import { useEffect } from 'react'
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Global error:', error)
    }, [error])

    return (
        <html lang="en">
            <body className="min-h-screen bg-background text-foreground">
                <main className="min-h-screen flex items-center justify-center px-4">
                    <div className="max-w-2xl mx-auto text-center space-y-8">
                        {/* Error Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <AlertTriangle className="h-32 w-32 text-red-500 animate-pulse" />
                                <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"></div>
                            </div>
                        </div>
                        
                        {/* Error Title */}
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100">
                            Critical Error
                        </h1>
                        
                        {/* Error Description */}
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            We encountered a critical error. Please try refreshing the page or return to the homepage.
                        </p>
                        
                        {/* Error Details (Development Only) */}
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-left">
                                <p className="text-sm text-red-700 dark:text-red-300 font-mono break-all">
                                    {error.message}
                                </p>
                                {error.digest && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                        Error ID: {error.digest}
                                    </p>
                                )}
                            </div>
                        )}
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <button
                                onClick={reset}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
                            >
                                <RefreshCw className="h-5 w-5" />
                                Try Again
                            </button>
                            
                            <a 
                                href="/"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:scale-105"
                            >
                                <Home className="h-5 w-5" />
                                Go to Homepage
                            </a>
                        </div>
                        
                        {/* Support Contact */}
                        <div className="pt-12 border-t border-gray-200 dark:border-gray-800 mt-12">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Need help? Contact us at{" "}
                                <a href="tel:6893148347" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                                    (689) 314-8347
                                </a>
                            </p>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    )
}
