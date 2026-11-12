import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"
import { driverJobs } from "@/lib/driver-jobs"

export const runtime = "nodejs"

const MAX_BYTES = 4 * 1024 * 1024
const OK_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif", "application/pdf"]

const esc = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string)
const text = (v: FormDataEntryValue | null, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(request: NextRequest) {
    try {
        const form = await request.formData()

        // Bots fill the hidden field; pretend it worked.
        if (text(form.get("company"))) return NextResponse.json({ message: "ok" })

        const job = driverJobs.find((j) => j.id === text(form.get("jobId")))
        const fullName = text(form.get("fullName"), 120)
        const phone = text(form.get("phone"), 40)
        const email = text(form.get("email"), 160)
        const licenseType = text(form.get("licenseType"), 80)
        const experience = text(form.get("experience"), 80)
        const routes = text(form.get("routes"), 40) || "Either"
        const consent = text(form.get("consent"))
        const file = form.get("license")

        if (!job || !fullName || !phone || !licenseType || !experience || !consent) {
            return NextResponse.json({ error: "Fill in your name, phone, license and experience, and tick the box." }, { status: 400 })
        }
        if (phone.replace(/\D/g, "").length < 10) {
            return NextResponse.json({ error: "Write a phone number with at least 10 digits." }, { status: 400 })
        }
        if (!(file instanceof File) || file.size === 0) {
            return NextResponse.json({ error: "Add a photo of your driver's license." }, { status: 400 })
        }
        if (file.size > MAX_BYTES) {
            return NextResponse.json({ error: "That file is over 4 MB. Take a new photo and try again." }, { status: 400 })
        }
        if (file.type && !OK_TYPES.includes(file.type)) {
            return NextResponse.json({ error: "Send the license as a photo (JPG or PNG) or a PDF." }, { status: 400 })
        }

        const ext = file.type === "application/pdf" ? "pdf" : file.type === "image/png" ? "png" : "jpg"
        const safeName = fullName.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").slice(0, 40) || "driver"
        const rows: [string, string][] = [
            ["Job", job.title],
            ["Name", fullName],
            ["Phone", phone],
            ["Email", email || "(not given)"],
            ["License", licenseType],
            ["Experience", experience],
            ["Routes", routes],
            ["Base", "Torrance, CA"],
        ]

        await sendEmail({
            to: process.env.GMAIL_USER!,
            subject: `New driver application: ${job.shortLicense} - ${fullName}`,
            html: `<div style="font-family:Arial,sans-serif;max-width:600px">
<h2 style="color:#001f3f">New driver application</h2>
<table style="border-collapse:collapse;width:100%">${rows
                .map(([k, v]) => `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;width:160px">${esc(k)}</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(v)}</td></tr>`)
                .join("")}</table>
<p style="margin-top:16px">Call: <a href="tel:${esc(phone.replace(/[^\d+]/g, ""))}">${esc(phone)}</a>. License photo attached.</p>
<p style="color:#888;font-size:12px">Sent from prioritydispatchllc.com/careers/${job.slug}</p></div>`,
            attachments: [
                {
                    filename: `license-${safeName}.${ext}`,
                    content: Buffer.from(await file.arrayBuffer()),
                    contentType: file.type || "application/octet-stream",
                },
            ],
        })

        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            await sendEmail({
                to: email,
                subject: "We got your driver application - Priority Dispatch LLC",
                html: `<div style="font-family:Arial,sans-serif;max-width:600px">
<p>Hi ${esc(fullName)},</p>
<p>Thanks for applying for the <strong>${esc(job.title)}</strong> job based in Torrance, CA. We will call you at ${esc(phone)}.</p>
<p>Questions? Call or WhatsApp <a href="tel:+16893148347">(689) 314-8347</a>.</p>
<p>Priority Dispatch LLC</p></div>`,
            }).catch((e) => console.error("Driver confirmation email failed:", e))
        }

        return NextResponse.json({ message: "Application sent." })
    } catch (error) {
        console.error("Driver application error:", error)
        return NextResponse.json({ error: "We could not send your application. Call us at (689) 314-8347." }, { status: 500 })
    }
}
