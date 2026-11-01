import Reveal from "@/components/site/reveal"
import { Landmark, Receipt, FileSignature, Hand, PhoneCall, ListChecks } from "lucide-react"

// Verifiable facts in place of testimonials until real carrier reviews are collected.
const facts = [
    {
        icon: Landmark,
        title: "Registered Florida LLC",
        body: "Priority Dispatch LLC, Florida document number L25000443970.",
        link: { href: "https://search.sunbiz.org/Inquiry/CorporationSearch/ByDocumentNumber", label: "Verify on Sunbiz", external: true },
    },
    {
        icon: Receipt,
        title: "Published rates",
        body: "4% for dry van, reefer, flatbed, step deck and power only; 6% box truck and hotshot; 10% sprinter van.",
        link: { href: "/pricing", label: "See pricing" },
    },
    {
        icon: Hand,
        title: "Paid after you get paid",
        body: "Our fee comes only after the broker pays you. If a load does not pay, neither do we.",
    },
    {
        icon: FileSignature,
        title: "No contract",
        body: "No setup fee, no minimum loads, no cancellation penalty. Stop whenever you want.",
    },
    {
        icon: ListChecks,
        title: "You approve every load",
        body: "We send you the lane, rate and broker details. Nothing is booked without your OK.",
    },
    {
        icon: PhoneCall,
        title: "A real phone line, 24/7",
        body: "Call (689) 314-8347 any time and talk to a dispatcher.",
        link: { href: "tel:+16893148347", label: "Call now" },
    },
]

export function Testimonials() {
    return (
        <section id="trust" className="bg-background">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
                <Reveal>
                    <h2 className="text-balance text-center text-2xl font-semibold md:text-3xl">Facts you can check before you sign up</h2>
                    <p className="mx-auto mt-2 max-w-2xl text-center text-foreground/70">
                        No made-up reviews. Here is what we commit to, in writing.
                    </p>
                </Reveal>
                <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {facts.map(({ icon: Icon, title, body, link }) => (
                        <li key={title} className="rounded-2xl border border-border bg-card p-6">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" aria-hidden />
                            </span>
                            <h3 className="mt-4 font-bold">{title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                            {link && (
                                <a
                                    href={link.href}
                                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-2 hover:text-accent"
                                >
                                    {link.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
                <p className="mt-10 text-center text-sm text-muted-foreground">
                    Partners we work with:{" "}
                    <a href="https://www.bobtail.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-2 hover:text-accent">
                        Bobtail
                    </a>{" "}
                    (freight factoring) and{" "}
                    <a href="https://simplexgroup.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-2 hover:text-accent">
                        Simplex Group
                    </a>{" "}
                    (ELD).
                </p>
            </div>
        </section>
    )
}
