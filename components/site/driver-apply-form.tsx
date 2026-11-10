"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, Upload } from "lucide-react"

// Driver application: name, phone, license type, experience and a photo of the
// license. Photos are shrunk in the browser (Vercel caps a request at 4.5 MB),
// then posted to /api/driver-apply, which emails them to the hiring inbox.

const MAX_BYTES = 4 * 1024 * 1024

async function shrinkImage(file: File): Promise<Blob> {
    if (!file.type.startsWith("image/") || file.size < 1.5 * 1024 * 1024) return file
    try {
        const bitmap = await createImageBitmap(file)
        const scale = Math.min(1, 1800 / Math.max(bitmap.width, bitmap.height))
        const canvas = document.createElement("canvas")
        canvas.width = Math.round(bitmap.width * scale)
        canvas.height = Math.round(bitmap.height * scale)
        canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
        const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/jpeg", 0.85))
        return blob ?? file
    } catch {
        return file
    }
}

const field = "w-full rounded-lg border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent"
const label = "mb-1.5 block text-sm font-semibold"

export function DriverApplyForm({ jobId, jobTitle }: { jobId: string; jobTitle: string }) {
    const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle")
    const [error, setError] = useState("")
    const [fileName, setFileName] = useState("")

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError("")
        const form = e.currentTarget
        const data = new FormData(form)
        const file = data.get("license") as File | null
        if (!file || file.size === 0) {
            setError("Add a photo of your driver's license.")
            return
        }
        setState("sending")
        const shrunk = await shrinkImage(file)
        if (shrunk.size > MAX_BYTES) {
            setState("idle")
            setError("That file is over 4 MB. Take a new photo of the license and try again.")
            return
        }
        data.set("license", shrunk, shrunk === file ? file.name : "license.jpg")
        try {
            const res = await fetch("/api/driver-apply", { method: "POST", body: data })
            const json = await res.json().catch(() => ({}))
            if (!res.ok) throw new Error(json.error || "Something went wrong.")
            setState("sent")
            form.reset()
        } catch (err) {
            setState("error")
            setError(err instanceof Error ? err.message : "Something went wrong.")
        }
    }

    if (state === "sent") {
        return (
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm" role="status">
                <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden />
                <h3 className="mt-4 text-2xl font-bold">Application received</h3>
                <p className="mt-2 text-muted-foreground">
                    Thanks for applying for the {jobTitle} job. We will call you at the number you gave us. You can also reach
                    us now at <a className="font-semibold text-accent" href="tel:+16893148347">(689) 314-8347</a>.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8" noValidate={false}>
            <input type="hidden" name="jobId" value={jobId} />
            {/* honeypot: people never see or fill this */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="fullName" className={label}>Full name *</label>
                    <input id="fullName" name="fullName" required autoComplete="name" className={field} />
                </div>
                <div>
                    <label htmlFor="phone" className={label}>Phone number *</label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
                </div>
            </div>

            <div>
                <label htmlFor="email" className={label}>Email (optional)</label>
                <input id="email" name="email" type="email" autoComplete="email" className={field} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="licenseType" className={label}>License *</label>
                    <select id="licenseType" name="licenseType" required className={field} defaultValue="">
                        <option value="" disabled>Choose one</option>
                        <option>Class A CDL</option>
                        <option>Class B CDL</option>
                        <option>Regular driver&apos;s license (non-CDL)</option>
                        <option>CDL permit or in training</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="experience" className={label}>Driving experience *</label>
                    <select id="experience" name="experience" required className={field} defaultValue="">
                        <option value="" disabled>Choose one</option>
                        <option>New driver</option>
                        <option>Less than 1 year</option>
                        <option>1 to 2 years</option>
                        <option>3 years or more</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="routes" className={label}>Routes</label>
                    <select id="routes" name="routes" className={field} defaultValue="Either">
                        <option>Either</option>
                        <option>OTR</option>
                        <option>Regional</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="payType" className={label}>Pay you prefer</label>
                    <select id="payType" name="payType" className={field} defaultValue="Not sure yet">
                        <option>Not sure yet</option>
                        <option>Percentage of the load</option>
                        <option>Per mile</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="license" className={label}>Photo of your driver&apos;s license *</label>
                <label htmlFor="license" className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-background px-4 py-4 text-sm hover:border-accent">
                    <Upload className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                    <span className="truncate">{fileName || "Take a photo or choose a file (JPG, PNG or PDF)"}</span>
                </label>
                <input
                    id="license"
                    name="license"
                    type="file"
                    accept="image/*,application/pdf"
                    required
                    className="sr-only"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
                <p className="mt-1.5 text-xs text-muted-foreground">Front of the license. It goes only to our hiring team.</p>
            </div>

            <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-accent" />
                <span>
                    I agree that Priority Dispatch may contact me about this job by phone, text or WhatsApp and use my license
                    photo to check that I can drive the truck. See our <a href="/privacy" className="text-accent underline">privacy policy</a>.
                </span>
            </label>

            {error && <p className="text-sm font-medium text-red-600" role="alert">{error}</p>}

            <Button type="submit" size="lg" disabled={state === "sending"} className="w-full bg-accent font-bold text-accent-foreground hover:bg-accent/90">
                {state === "sending" ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden />Sending</>) : "Send my application"}
            </Button>
        </form>
    )
}
