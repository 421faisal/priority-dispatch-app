// Dispatch fee per equipment type, as a percentage of the gross load.
// Every page that shows a rate reads it from here.
export interface Rate {
    equipment: string
    percent: number
    href?: string
}

export const rates: Rate[] = [
    { equipment: "Dry van", percent: 4, href: "/services/dry-van-dispatch" },
    { equipment: "Reefer", percent: 4, href: "/services/reefer-dispatch" },
    { equipment: "Flatbed", percent: 4, href: "/services/flatbed-dispatch" },
    { equipment: "Step deck", percent: 4, href: "/services/step-deck-dispatch" },
    { equipment: "Power only", percent: 4, href: "/services/power-only-dispatch" },
    { equipment: "Box truck", percent: 6, href: "/services/box-truck-dispatch" },
    { equipment: "Hotshot", percent: 6, href: "/services/hotshot-dispatch" },
    { equipment: "Sprinter / cargo van", percent: 10 },
]

export const minRate = Math.min(...rates.map((r) => r.percent))

/** Fee for one service page, by its slug (e.g. "box-truck-dispatch") */
export function rateFor(serviceSlug: string): number | undefined {
    return rates.find((r) => r.href === `/services/${serviceSlug}`)?.percent
}

export const pricingTerms =
    "Paid only after the broker pays you. No setup fee, no contract, no minimum loads. Fleets of 2+ trucks get negotiable rates."

/** One sentence for answers, FAQs and AI summaries */
export const pricingSentence =
    "Dispatch fees are 4% of the gross load for dry van, reefer, flatbed, step deck and power only, 6% for box trucks and hotshots, and 10% for sprinter vans, paid only after the broker pays, with no setup fee or contract. Fleet rates are negotiable."
