'use client'

import { ArrowLeft } from "lucide-react"

export function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border text-foreground font-semibold rounded-lg hover:bg-accent/10 transition-all hover:scale-105"
        >
            <ArrowLeft className="h-5 w-5" />
            Go Back
        </button>
    )
}
