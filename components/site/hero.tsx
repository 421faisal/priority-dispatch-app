import { Button } from "@/components/ui/button"
import { ArrowRight, BadgeCheck, CheckCircle2, PhoneCall } from "lucide-react"

const facts = ["From 4% of the gross load", "Paid after the broker pays you", "No contract, cancel anytime", "24/7 dispatch support"]

/** A sample load laid out the way a dispatcher reviews it. Clearly labeled as an example. */
function ExampleLoadCard() {
    return (
        <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-white p-5 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-slate-500">Example load</span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">Booked</span>
            </div>
            <p className="mt-3 text-lg font-bold">Chicago, IL → Atlanta, GA</p>
            <p className="text-sm text-slate-500">Dry van · 42,000 lb · pickup tomorrow 08:00</p>
            <dl className="mt-4 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 text-sm">
                <div>
                    <dt className="text-xs text-slate-500">Loaded</dt>
                    <dd className="font-semibold">716 mi</dd>
                </div>
                <div>
                    <dt className="text-xs text-slate-500">Deadhead</dt>
                    <dd className="font-semibold">38 mi</dd>
                </div>
                <div>
                    <dt className="text-xs text-slate-500">Rate</dt>
                    <dd className="font-semibold">$1,950</dd>
                </div>
            </dl>
            <ul className="mt-3 space-y-1.5 text-sm">
                {["Broker authority active", "Credit checked, pays in 30 days", "Detention $50/hr after 2 hrs, in writing"].map((x) => (
                    <li key={x} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                        {x}
                    </li>
                ))}
            </ul>
            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-slate-500">Dispatch fee (4%)</span>
                    <span className="font-semibold">−$78</span>
                </div>
                <div className="mt-1 flex justify-between text-base">
                    <span className="font-semibold">You keep</span>
                    <span className="font-bold">$1,872</span>
                </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">Illustration of how we review a load. Real rates vary by lane and week.</p>
        </div>
    )
}

export function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:py-20 lg:grid-cols-2">
                <div>
                    <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/85">
                        <BadgeCheck className="h-4 w-4 text-accent" aria-hidden />
                        Florida-registered LLC · dispatching in all 48 states
                    </p>
                    <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight md:text-6xl">
                        USA Truck Dispatcher: More Loads, Better Rates
                    </h1>
                    <p className="mt-5 max-w-xl text-pretty text-base opacity-95 md:text-lg">
                        Truck dispatching services for owner-operators and small fleets in all 48 states, with a focus on the{" "}
                        <a href="/truck-dispatcher/midwest" className="underline decoration-accent underline-offset-2">Midwest</a>,{" "}
                        <a href="/truck-dispatcher/east-coast" className="underline decoration-accent underline-offset-2">East Coast</a> and{" "}
                        <a href="/truck-dispatcher/california" className="underline decoration-accent underline-offset-2">California</a>.
                        We find and negotiate loads, check every broker and handle the paperwork, so you can drive.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="/carrier-setup">
                            <Button size="lg" className="bg-accent px-6 font-bold text-accent-foreground hover:bg-accent/90">
                                Get a Dispatcher Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                        <a href="tel:+16893148347">
                            <Button size="lg" variant="outline" className="border-primary-foreground/60 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10">
                                <PhoneCall className="mr-2 h-5 w-5" />
                                (689) 314-8347
                            </Button>
                        </a>
                    </div>
                    <ul className="mt-8 grid max-w-xl grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                        {facts.map((f) => (
                            <li key={f} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-sm">
                        <a href="/es/despacho-de-camiones" hrefLang="es" lang="es" className="font-semibold underline decoration-accent underline-offset-2">
                            ¿Hablas español? Información en español
                        </a>
                    </p>
                </div>
                <div className="relative">
                    <img
                        src="/images/hero-trucks-highway-1600.webp"
                        srcSet="/images/hero-trucks-highway-900.webp 900w, /images/hero-trucks-highway-1600.webp 1600w"
                        sizes="(min-width: 1024px) 560px, 100vw"
                        alt="Two semi-trucks with dry van trailers on an interstate highway"
                        width={1600}
                        height={1066}
                        fetchPriority="high"
                        className="aspect-[16/10] w-full rounded-2xl object-cover shadow-2xl"
                    />
                    <div className="relative -mt-20 flex justify-end px-4 sm:-mt-28">
                        <ExampleLoadCard />
                    </div>
                </div>
            </div>
        </section>
    )
}
