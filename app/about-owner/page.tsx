import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Facebook, Linkedin, Instagram, GraduationCap, Briefcase, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"

export const metadata: Metadata = {
    title: "Meet the Founder — Muhammad Faisal Bilal | Priority Dispatch LLC",
    description:
        "Learn about Muhammad Faisal Bilal, founder and CEO of Priority Dispatch LLC. A Computer Science graduate from the University of Gujrat driving innovation in freight dispatching.",
    openGraph: {
        title: "Meet the Founder — Muhammad Faisal Bilal | Priority Dispatch LLC",
        description:
            "Learn about Muhammad Faisal Bilal, founder and CEO of Priority Dispatch LLC.",
        url: "https://prioritydispatchllc.com/about-owner",
        images: [
            {
                url: "/images/muhammad-faisal-bilal-founder-priority-dispatch.png",
                width: 600,
                height: 600,
                alt: "Muhammad Faisal Bilal — Founder of Priority Dispatch LLC",
            },
        ],
    },
}

const socials = [
    {
        href: "https://www.facebook.com/share/1CKZQBUsui/",
        icon: Facebook,
        label: "Facebook",
        color: "hover:bg-[#1877F2]",
    },
    {
        href: "https://www.instagram.com/m_faisal_balal?igsh=dHAwM2FtdGthc3A5",
        icon: Instagram,
        label: "Instagram",
        color: "hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    },
    {
        href: "https://www.linkedin.com/in/muhammad-faisal-bilal",
        icon: Linkedin,
        label: "LinkedIn",
        color: "hover:bg-[#0A66C2]",
    },
]

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Faisal Bilal",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "Priority Dispatch LLC", url: "https://prioritydispatchllc.com" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Gujrat" },
    sameAs: [
        "https://www.facebook.com/share/1CKZQBUsui/",
        "https://www.instagram.com/m_faisal_balal",
        "https://www.linkedin.com/in/muhammad-faisal-bilal",
    ],
    image: "https://prioritydispatchllc.com/images/muhammad-faisal-bilal-founder-priority-dispatch.png",
    url: "https://prioritydispatchllc.com/about-owner",
}

export default function AboutOwnerPage() {
    return (
        <main>
            <SiteHeader />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            {/* ── Hero ── */}
            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                {/* decorative gradient circles */}
                <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent/5 blur-3xl" />

                <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-32">
                    {/* Photo Container */}
                    <Reveal>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto overflow-hidden rounded-2xl border-2 border-accent/20 bg-muted shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                                <img
                                    src="/images/muhammad-faisal-bilal-founder-priority-dispatch.png"
                                    alt="Muhammad Faisal Bilal — Founder of Priority Dispatch LLC"
                                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-xl font-serif italic text-accent tracking-wide drop-shadow-sm">
                                        M. Faisal Bilal
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Intro text */}
                    <Reveal delayMs={120}>
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 border border-accent/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                                    Founder &amp; CEO
                                </span>
                            </div>

                            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                                Muhammad <br className="hidden md:block" />
                                <span className="text-accent italic">Faisal</span> Bilal
                            </h1>

                            <p className="text-xl leading-relaxed text-primary-foreground/90 font-medium border-l-4 border-accent pl-6 py-2">
                                Redefining U.S. freight dispatching through technical precision and elite carrier advocacy.
                            </p>

                            <p className="text-lg leading-relaxed opacity-80">
                                Based in Kissimmee, Florida, I bridge the gap between high-level computer science and the raw power of the trucking industry. My mission is simple: use data to ensure every mile you drive is a profitable one.
                            </p>

                            {/* Social links */}
                            <div className="flex items-center gap-4 pt-4">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow on ${s.label}`}
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary-foreground transition-all duration-300 ${s.color} hover:text-white hover:-translate-y-1 hover:border-accent/40`}
                                    >
                                        <s.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Bio Section ── */}
            <section className="bg-background">
                <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        {/* Education */}
                        <Reveal>
                            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <h3 className="mt-4 text-lg font-bold">Education</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Currently pursuing a <span className="font-semibold text-foreground">Bachelor&apos;s degree in Computer Science</span> from the
                                    University of Gujrat, Pakistan. Combining technical expertise with
                                    business acumen to build technology-driven logistics solutions.
                                </p>
                            </div>
                        </Reveal>

                        {/* Entrepreneurship */}
                        <Reveal delayMs={100}>
                            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                                    <Briefcase className="h-6 w-6" />
                                </div>
                                <h3 className="mt-4 text-lg font-bold">Entrepreneurship</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Founded <span className="font-semibold text-foreground">Priority Dispatch LLC</span> to bridge the gap between freight
                                    carriers and profitable loads. Bringing a fresh, data‑driven
                                    approach to dispatching that puts carriers first—always.
                                </p>
                            </div>
                        </Reveal>

                        {/* Vision */}
                        <Reveal delayMs={200}>
                            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h3 className="mt-4 text-lg font-bold">Vision</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    To become the most trusted dispatch partner in the U.S. freight
                                    industry by blending <span className="font-semibold text-foreground">cutting-edge technology</span> with
                                    personalized, 24/7 carrier support—empowering every driver to
                                    earn more while driving smarter.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── Meet Our Team ── */}
            <section className="bg-background/50 border-t border-border">
                <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Meet Our Team</h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                                The dedicated professionals driving Priority Dispatch LLC forward.
                            </p>
                        </div>
                    </Reveal>
                    
                    <Reveal delayMs={100}>
                        <div className="max-w-3xl mx-auto">
                            <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-card to-muted border border-border shadow-lg overflow-hidden">
                                {/* Decorative accent */}
                                <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                                
                                <div className="relative">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-1 w-12 bg-accent rounded-full"></div>
                                        <span className="text-accent text-xs font-bold uppercase tracking-widest">Social Media Manager</span>
                                    </div>
                                    
                                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                        Fatima Qasim
                                    </h3>
                                    
                                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                                        The backbone of our digital presence, <span className="font-semibold text-foreground">Fatima Qasim</span> orchestrates every aspect of Priority Dispatch LLC's social media strategy. From crafting compelling content that resonates with owner-operators to analyzing engagement metrics that drive real business growth, she ensures our carriers and our brand stay connected, visible, and thriving in the digital landscape.
                                    </p>
                                    
                                    <p className="text-base leading-relaxed text-muted-foreground mb-8">
                                        With a keen eye for trends and a deep understanding of the trucking industry's unique challenges, Fatima transforms complex logistics concepts into engaging stories that educate, inspire, and build community across all our platforms.
                                    </p>
                                    
                                    <a 
                                        href="https://www.linkedin.com/in/fatima-qasim-29284932b/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-semibold hover:bg-[#004182] transition-colors shadow-md"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Story / Extended Bio ── */}
            <section className="bg-muted">
                <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
                    <Reveal>
                        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
                            The Story Behind Priority Dispatch
                        </h2>
                    </Reveal>
                    <Reveal delayMs={80}>
                        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
                            <p>
                                Muhammad Faisal Bilal started Priority Dispatch LLC with a clear
                                mission: to offer owner-operators the kind of dependable, transparent
                                dispatching service they deserve but rarely get. Having studied
                                Computer Science at the University of Gujrat, Faisal brings a unique
                                analytical mindset to the trucking world—leveraging data science,
                                route-optimization algorithms, and real-time market analysis to find
                                the highest-paying loads for every carrier.
                            </p>
                            <p>
                                What sets Faisal apart is his commitment to relationships. Every
                                carrier is assigned a dedicated dispatcher who understands their
                                preferred lanes, equipment, and weekly revenue targets. There are no
                                hidden fees, no lock-in contracts—just results. Under his
                                leadership, Priority Dispatch has grown into a trusted partner for
                                carriers operating Reefers, Dry Vans, Box Trucks, Flatbeds, and more
                                across the continental United States.
                            </p>
                            <p>
                                Based in Kissimmee, Florida, Faisal continues to blend academic
                                rigor with entrepreneurial hustle, building a company where
                                technology and humanity converge to keep America&apos;s supply chain
                                moving.
                            </p>
                        </div>
                    </Reveal>

                    {/* CTA */}
                    <Reveal delayMs={150}>
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <a href="/carrier-setup">
                                <Button
                                    size="lg"
                                    className="bg-accent text-accent-foreground hover:opacity-90 shadow-md"
                                >
                                    Get Started — Carrier Setup
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    Contact Us
                                </Button>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
