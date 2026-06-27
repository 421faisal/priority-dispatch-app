'use client'

import { useState } from "react"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import {
    Briefcase, MapPin, Clock, Users, TrendingUp, Heart,
    Check, Upload, Loader2, ArrowRight
} from "lucide-react"

/* ─────────────────────────── DATA ─────────────────────────── */

const jobOpenings = [
    {
        id: "freight-dispatcher",
        title: "Freight Dispatcher",
        department: "Operations",
        location: "Remote / Kissimmee, FL",
        type: "Full-Time",
        description:
            "We're looking for experienced freight dispatchers to join our growing team. You'll be responsible for finding loads, negotiating rates, and providing 24/7 support to our carrier partners.",
        responsibilities: [
            "Search and book loads using DAT, Truckstop, and direct broker relationships",
            "Negotiate competitive rates with freight brokers",
            "Track shipments and provide real-time updates to carriers",
            "Handle detention claims, rate confirmations, and paperwork",
            "Build long-term relationships with brokers and carriers",
            "Provide 24/7 on-call support during emergencies",
        ],
        requirements: [
            "2+ years of freight dispatching experience",
            "Strong knowledge of load boards (DAT, Truckstop, 123Loadboard)",
            "Excellent negotiation and communication skills",
            "Understanding of DOT regulations and compliance",
            "Ability to work independently and manage multiple carriers",
            "Proficiency with TMS software and Microsoft Office",
        ],
        preferred: [
            "Experience with Reefer, Flatbed, or specialized freight",
            "Existing broker relationships",
            "Bilingual (English/Spanish)",
        ],
    },
    {
        id: "sales-agent",
        title: "Sales Agent / Business Development",
        department: "Sales",
        location: "Remote / Kissimmee, FL",
        type: "Full-Time",
        description:
            "Join our sales team to help owner-operators and small fleets discover how Priority Dispatch can transform their business. This role combines outbound sales, relationship building, and customer success.",
        responsibilities: [
            "Prospect and qualify new carrier leads through cold calling, email, and social media",
            "Present Priority Dispatch services and value proposition to owner-operators",
            "Close deals and onboard new carriers to our dispatch platform",
            "Build and maintain relationships with existing carrier clients",
            "Track sales activities and pipeline in CRM",
            "Collaborate with dispatch team to ensure customer satisfaction",
        ],
        requirements: [
            "1+ years of B2B sales or business development experience",
            "Strong communication and persuasion skills",
            "Self-motivated with a proven track record of meeting quotas",
            "Comfortable with cold calling and prospecting",
            "Basic understanding of trucking industry (training provided)",
            "CRM experience (HubSpot, Salesforce, or similar)",
        ],
        preferred: [
            "Experience in trucking, logistics, or transportation sales",
            "Existing network of owner-operators or carriers",
            "Commission-driven mindset",
            "Social media marketing skills",
        ],
    },
]

const benefits = [
    { icon: TrendingUp, title: "Competitive Pay",       description: "Base salary plus performance bonuses and commission" },
    { icon: MapPin,     title: "Work from Anywhere",    description: "Fully remote or hybrid options available" },
    { icon: Clock,      title: "Flexible Schedule",     description: "Work-life balance is important to us" },
    { icon: Users,      title: "Growth Opportunities",  description: "Advance your career as we grow" },
    { icon: Heart,      title: "Supportive Team",       description: "Join a collaborative, family-like culture" },
]

const jobTitles: Record<string, string> = {
    "freight-dispatcher": "Freight Dispatcher",
    "sales-agent":        "Sales Agent / Business Development",
}

/* ─────────────────────────── COMPONENT ─────────────────────── */

export default function CareersPage() {
    const [formData, setFormData] = useState({
        jobId:          "",
        fullName:       "",
        email:          "",
        phone:          "",
        location:       "",
        workPreference: "remote",
        experience:     "",
        resume:         null as File | null,
        coverLetter:    "",
        linkedIn:       "",
        availability:   "",
    })
    const [isSubmitting,  setIsSubmitting]  = useState(false)
    const [submitStatus,  setSubmitStatus]  = useState<{ type: "success" | "error"; message: string } | null>(null)

    /* helpers */
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) setFormData(p => ({ ...p, resume: e.target.files![0] }))
    }

    const scrollToForm = (jobId: string) => {
        setFormData(p => ({ ...p, jobId }))
        setTimeout(() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" }), 50)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)
        try {
            const fd = new FormData()
            Object.entries(formData).forEach(([k, v]) => { if (v !== null) fd.append(k, v as string | Blob) })
            const res  = await fetch("/api/careers", { method: "POST", body: fd })
            const data = await res.json()
            if (!res.ok) throw new Error(data.error || "Failed to submit")
            setSubmitStatus({ type: "success", message: "Application submitted! We'll be in touch within 2–3 business days." })
            setFormData({ jobId: "", fullName: "", email: "", phone: "", location: "", workPreference: "remote", experience: "", resume: null, coverLetter: "", linkedIn: "", availability: "" })
        } catch (err) {
            setSubmitStatus({ type: "error", message: err instanceof Error ? err.message : "Submission failed. Please try again." })
        } finally {
            setIsSubmitting(false)
        }
    }

    /* ── render ── */
    return (
        <main className="min-h-screen bg-background text-foreground">
            <SiteHeader />

            {/* ── HERO ── */}
            <section className="bg-gradient-to-b from-primary/10 to-background py-20 md:py-28">
                <div className="mx-auto max-w-5xl px-4 text-center space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                        <Briefcase className="h-4 w-4" /> Join Our Team
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
                        Build Your Career in Freight Logistics
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Join Priority Dispatch LLC and help owner-operators across America succeed. We're growing fast and looking for talented dispatchers and sales professionals.
                    </p>
                </div>
            </section>

            {/* ── WHY US ── */}
            <section className="py-16 md:py-24 bg-background">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Work at Priority Dispatch?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all">
                                <Icon className="h-10 w-10 text-accent mb-4" />
                                <h3 className="text-xl font-bold mb-2">{title}</h3>
                                <p className="text-muted-foreground text-sm">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── JOB LISTINGS ── */}
            <section className="py-16 md:py-24 bg-muted/40">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
                    <div className="space-y-8">
                        {jobOpenings.map(job => (
                            <div key={job.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all">
                                <div className="p-6 md:p-8">
                                    {/* title row */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.department}</span>
                                                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                                                <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.type}</span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => scrollToForm(job.id)}
                                            className="inline-flex items-center gap-2 self-start px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all whitespace-nowrap"
                                        >
                                            Apply Now <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <p className="text-muted-foreground mb-6">{job.description}</p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold mb-3">Responsibilities</h4>
                                            <ul className="space-y-2">
                                                {job.responsibilities.map(item => (
                                                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />{item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-3">Requirements</h4>
                                            <ul className="space-y-2">
                                                {job.requirements.map(item => (
                                                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />{item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {job.preferred.length > 0 && (
                                        <div className="mt-6 pt-6 border-t border-border">
                                            <h4 className="font-bold mb-3">Preferred Qualifications</h4>
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                {job.preferred.map(item => (
                                                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />{item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── APPLICATION FORM ── */}
            <section id="application-form" className="py-16 md:py-24 bg-background">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-3">Submit Your Application</h2>
                    <p className="text-center text-muted-foreground mb-12">
                        Fill out the form below and we'll review your application within 2–3 business days.
                    </p>

                    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">

                        {/* position */}
                        <Field label="Position Applying For" required>
                            <select name="jobId" required value={formData.jobId} onChange={handleInput} className={selectCls}>
                                <option value="">Select a position</option>
                                {jobOpenings.map(j => <option key={j.id} value={j.id}>{jobTitles[j.id]}</option>)}
                            </select>
                        </Field>

                        {/* name + email */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Field label="Full Name" required>
                                <input type="text" name="fullName" required value={formData.fullName} onChange={handleInput} className={inputCls} />
                            </Field>
                            <Field label="Email Address" required>
                                <input type="email" name="email" required value={formData.email} onChange={handleInput} className={inputCls} />
                            </Field>
                        </div>

                        {/* phone + location */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Field label="Phone Number" required>
                                <input type="tel" name="phone" required value={formData.phone} onChange={handleInput} className={inputCls} />
                            </Field>
                            <Field label="Current Location" required>
                                <input type="text" name="location" required placeholder="City, State" value={formData.location} onChange={handleInput} className={inputCls} />
                            </Field>
                        </div>

                        {/* work preference */}
                        <Field label="Work Preference" required>
                            <select name="workPreference" required value={formData.workPreference} onChange={handleInput} className={selectCls}>
                                <option value="remote">Remote</option>
                                <option value="on-site">On-Site (Kissimmee, FL)</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </Field>

                        {/* experience */}
                        <Field label="Years of Relevant Experience" required>
                            <input type="text" name="experience" required placeholder="e.g., 3 years" value={formData.experience} onChange={handleInput} className={inputCls} />
                        </Field>

                        {/* resume */}
                        <Field label="Resume / CV" required hint="PDF, DOC, or DOCX · Max 5 MB">
                            <input
                                type="file"
                                name="resume"
                                required
                                accept=".pdf,.doc,.docx"
                                onChange={handleFile}
                                className={`${inputCls} file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-accent-foreground hover:file:bg-accent/90`}
                            />
                        </Field>

                        {/* linkedin */}
                        <Field label="LinkedIn Profile URL">
                            <input type="url" name="linkedIn" placeholder="https://linkedin.com/in/yourprofile" value={formData.linkedIn} onChange={handleInput} className={inputCls} />
                        </Field>

                        {/* cover letter */}
                        <Field label="Cover Letter / Why Priority Dispatch?">
                            <textarea name="coverLetter" rows={5} placeholder="Tell us about your experience and why you're a great fit…" value={formData.coverLetter} onChange={handleInput} className={`${inputCls} resize-none`} />
                        </Field>

                        {/* availability */}
                        <Field label="When can you start?" required>
                            <input type="text" name="availability" required placeholder="e.g., Immediately, 2 weeks notice…" value={formData.availability} onChange={handleInput} className={inputCls} />
                        </Field>

                        {/* status banner */}
                        {submitStatus && (
                            <div className={`p-4 rounded-lg text-sm font-medium border ${
                                submitStatus.type === "success"
                                    ? "bg-green-500/10 text-green-600 border-green-500/20"
                                    : "bg-destructive/10 text-destructive border-destructive/20"
                            }`}>
                                {submitStatus.message}
                            </div>
                        )}

                        {/* submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? <><Loader2 className="h-5 w-5 animate-spin" /> Submitting…</> : <><Upload className="h-5 w-5" /> Submit Application</>}
                        </button>

                        <p className="text-xs text-muted-foreground text-center">
                            By submitting you agree to our{" "}
                            <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>{" "}
                            and consent to use of your information for employment purposes.
                        </p>
                    </form>
                </div>
            </section>

            {/* ── EEO ── */}
            <section className="py-10 bg-muted/40 border-t border-border">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        <strong>Priority Dispatch LLC is an Equal Opportunity Employer.</strong>{" "}
                        We do not discriminate based on race, color, religion, sex, national origin, age, disability, veteran status, or any other protected characteristic under applicable law.
                    </p>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}

/* ─────────────────────── TINY HELPERS ─────────────────────── */

const inputCls  = "w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
const selectCls = "w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">
                {label}{required && <span className="text-destructive ml-1">*</span>}
            </label>
            {children}
            {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
        </div>
    )
}
