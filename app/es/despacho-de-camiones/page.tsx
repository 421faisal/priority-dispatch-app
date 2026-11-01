import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MessageCircle, Languages, ArrowRight, PhoneCall } from "lucide-react"
import { rates } from "@/lib/pricing"

const BASE = "https://prioritydispatchllc.com"
const url = `${BASE}/es/despacho-de-camiones`
const title = "Despacho de Camiones para Dueños-Operadores en EE. UU."
const description =
    "Despachador de camiones para owner operators en los 48 estados. Buscamos y negociamos tus cargas y revisamos a cada broker. Desde 4%, sin contrato."

const whatsapp = `https://wa.me/16893148347?text=${encodeURIComponent("Hola, quiero información sobre el servicio de despacho.")}`

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: url,
        languages: { en: BASE, es: url, "x-default": BASE },
    },
    openGraph: {
        title,
        description,
        url,
        siteName: "Priority Dispatch LLC",
        locale: "es_US",
        type: "website",
        images: ["/images/og-trucks-highway.jpg"],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/og-trucks-highway.jpg"] },
}

/** Spanish names for each equipment type in lib/pricing.ts */
const equipoEs: Record<string, string> = {
    "Dry van": "Caja seca (dry van)",
    Reefer: "Refrigerado (reefer)",
    Flatbed: "Plataforma (flatbed)",
    "Step deck": "Step deck",
    "Power only": "Power only",
    "Box truck": "Box truck",
    Hotshot: "Hotshot",
    "Sprinter / cargo van": "Sprinter / van de carga",
}

const tareas = [
    "Buscamos cargas en DAT, Truckstop y con nuestros brokers para tus rutas",
    "Revisamos a cada broker: autoridad activa, crédito y días de pago",
    "Negociamos la tarifa, la detención y el layover por escrito",
    "Enviamos tu paquete de transportista y la confirmación de tarifa (rate con)",
    "Planeamos tu siguiente carga antes de que entregues, para no correr vacío",
    "Enviamos las facturas y damos seguimiento hasta que te paguen",
]

const pasos: [string, string][] = [
    ["Envía tus documentos", "Autoridad MC, formulario W-9 y certificado de seguro (COI) en nuestro formulario de registro."],
    ["Dinos qué buscas", "Tus rutas, tu equipo, cuándo quieres estar en casa y la tarifa mínima por milla que necesitas."],
    ["Reservamos tu primera carga", "Normalmente en 24 a 48 horas. Tú apruebas cada carga antes de confirmarla."],
    ["Te pagan, luego nos pagas", "Nuestra comisión se cobra solo después de que el broker te paga."],
]

const preguntas = [
    {
        q: "¿Cuánto cobra un despachador de camiones?",
        a: "La mayoría de los despachadores en EE. UU. cobran entre 3% y 10% de la carga bruta, o una cuota semanal fija. Nosotros cobramos 4% para caja seca, refrigerado, plataforma, step deck y power only; 6% para box truck y hotshot; y 10% para sprinter. Solo pagas después de que el broker te paga.",
    },
    {
        q: "¿Necesito mi propia autoridad MC?",
        a: "Sí. Trabajamos bajo tu autoridad MC y tu número USDOT, con tu seguro. Si estás empezando, también te ayudamos con el proceso de una autoridad nueva.",
    },
    {
        q: "¿Trabajan con autoridades MC nuevas?",
        a: "Sí. Muchos brokers no aceptan autoridades con menos de 30 a 90 días, así que buscamos brokers y cargas que sí trabajan con MC nuevos para que construyas tu historial de pagos.",
    },
    {
        q: "¿Me obligan a tomar cargas?",
        a: "No. Te enviamos la ruta, la tarifa y los datos del broker, y tú decides. No hay contrato ni mínimo de cargas.",
    },
    {
        q: "¿En qué idioma me atienden?",
        a: "Por ahora, las llamadas con tu despachador son en inglés. Puedes escribirnos en español por WhatsApp o correo electrónico y te respondemos por escrito.",
    },
]

const schema = [
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Despacho de camiones para dueños-operadores",
        serviceType: "Truck dispatching",
        inLanguage: "es",
        url,
        description,
        provider: { "@type": "Organization", name: "Priority Dispatch LLC", url: BASE, telephone: "+16893148347" },
        areaServed: { "@type": "Country", name: "United States" },
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: "es",
        mainEntity: preguntas.map((p) => ({ "@type": "Question", name: p.q, acceptedAnswer: { "@type": "Answer", text: p.a } })),
    },
]

export default function DespachoDeCamionesPage() {
    return (
        <>
            <SiteHeader />
            <main lang="es">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

                <section className="bg-primary text-primary-foreground">
                    <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:py-20 lg:grid-cols-2">
                        <div>
                            <p className="text-sm font-medium text-primary-foreground/85">
                                <Link href="/" hrefLang="en" lang="en" className="underline underline-offset-2">English</Link>
                                {" · "}Español
                            </p>
                            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight md:text-5xl">
                                Despacho de camiones para dueños-operadores en EE. UU.
                            </h1>
                            <p className="mt-5 max-w-xl text-lg opacity-95">
                                Somos un despachador de camiones para owner operators y flotas pequeñas en los 48 estados. Buscamos y
                                negociamos tus cargas, revisamos a cada broker y hacemos el papeleo, para que tú solo manejes. Desde 4%
                                de la carga bruta, sin contrato.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="bg-accent px-6 font-bold text-accent-foreground hover:bg-accent/90">
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        Escríbenos por WhatsApp
                                    </Button>
                                </a>
                                <a href="/carrier-setup">
                                    <Button size="lg" variant="outline" className="border-primary-foreground/60 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10">
                                        Registrar mi compañía
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </div>
                            <ul className="mt-8 grid max-w-xl grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                                {["Desde 4% de la carga bruta", "Pagas después de que te pagan", "Sin contrato, cancela cuando quieras", "Soporte 24/7"].map((f) => (
                                    <li key={f} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <img
                            src="/images/hero-trucks-highway-1600.webp"
                            srcSet="/images/hero-trucks-highway-900.webp 900w, /images/hero-trucks-highway-1600.webp 1600w"
                            sizes="(min-width: 1024px) 560px, 100vw"
                            alt="Dos tractocamiones con caja seca en una carretera interestatal"
                            width={1600}
                            height={1066}
                            fetchPriority="high"
                            className="aspect-[16/10] w-full rounded-2xl object-cover shadow-2xl"
                        />
                    </div>
                </section>

                <section className="border-b border-border bg-accent/5">
                    <div className="mx-auto flex max-w-4xl items-start gap-4 px-4 py-6">
                        <Languages className="mt-1 h-6 w-6 text-primary" aria-hidden />
                        <p className="text-sm leading-relaxed">
                            <strong>Idioma:</strong> por ahora, las llamadas con tu despachador son en inglés. Puedes escribirnos en
                            español por{" "}
                            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">
                                WhatsApp
                            </a>{" "}
                            al (689) 314-8347 o por correo a prioritydispatch4u@gmail.com, y te respondemos por escrito.
                        </p>
                    </div>
                </section>

                <section className="bg-background py-16 md:py-20">
                    <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight">¿Qué hace tu despachador?</h2>
                            <ul className="mt-6 space-y-3">
                                {tareas.map((t) => (
                                    <li key={t} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" aria-hidden />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-sm text-muted-foreground">Tú apruebas cada carga. Nunca te obligamos a tomar una.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight">Tarifas de despacho</h2>
                            <p className="mt-3 text-muted-foreground">Porcentaje de la carga bruta. Pagas solo después de que el broker te paga.</p>
                            <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
                                {rates.map((r) => (
                                    <li key={r.equipment} className="flex justify-between p-4">
                                        <span className="font-medium">{equipoEs[r.equipment] ?? r.equipment}</span>
                                        <span className="font-bold">{r.percent}%</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-3 text-sm text-muted-foreground">
                                ¿Tienes 2 o más camiones? La tarifa para flotas es negociable. Sin cuota de inscripción.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-muted py-16 md:py-20">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="text-3xl font-extrabold tracking-tight">Cómo empezar</h2>
                        <ol className="mt-8 space-y-5">
                            {pasos.map(([h, p], i) => (
                                <li key={h} className="flex gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">{i + 1}</span>
                                    <span>
                                        <strong className="block">{h}</strong>
                                        <span className="text-muted-foreground">{p}</span>
                                    </span>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-6 text-sm text-muted-foreground">
                            El formulario de registro está en inglés. Si tienes dudas, escríbenos por WhatsApp y te ayudamos.
                        </p>
                    </div>
                </section>

                <section className="bg-background py-16 md:py-20">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="text-3xl font-extrabold tracking-tight">Preguntas frecuentes</h2>
                        <div className="mt-8 space-y-5">
                            {preguntas.map((p) => (
                                <div key={p.q} className="rounded-2xl border border-border bg-card p-6">
                                    <h3 className="text-lg font-bold">{p.q}</h3>
                                    <p className="mt-2 leading-relaxed text-muted-foreground">{p.a}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-sm text-muted-foreground">
                            Priority Dispatch LLC es una compañía registrada en Florida (número de documento L25000443970). También
                            tenemos{" "}
                            <Link href="/toolbox" hrefLang="en" className="font-semibold text-primary underline">calculadoras gratis</Link>{" "}
                            (en inglés) para costo por milla, horas de servicio (HOS), IFTA y per diem.
                        </p>
                    </div>
                </section>

                <section className="bg-primary py-16 text-primary-foreground">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h2 className="text-3xl font-extrabold">¿Listo para tener tu propio despachador?</h2>
                        <p className="mt-4 text-lg opacity-90">Escríbenos hoy y empezamos a buscar tu próxima carga.</p>
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-accent px-8 font-bold text-accent-foreground hover:bg-accent/90">
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    WhatsApp: (689) 314-8347
                                </Button>
                            </a>
                            <a href="tel:+16893148347">
                                <Button size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                    <PhoneCall className="mr-2 h-5 w-5" />
                                    Llamar (en inglés)
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    )
}
