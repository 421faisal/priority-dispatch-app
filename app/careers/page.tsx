'use client'

import { useState } from "react"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import Reveal from "@/components/site/reveal"
import { Briefcase, MapPin, Clock, Users, TrendingUp, Heart, Check, Upload, Loader2 } from "lucide-react"

const jobOpenings = [
    {
        id: "freight-dispatcher",
        title: "Freight Dispatcher",
        department: "Operations",
        location: "Remote / Kissimmee, FL",
        type: "Full-Time",
        description: "We're looking for experienced freight dispatchers to join our growing team. You'll be responsible for finding loads, negotiating rates, and providing 24/7 support to our carrier partners.",
        responsibilities: [
            "Search and book loads using DAT, Truckstop, and direct broker relationships",
            "Negotiate competitive rates with freight brokers",
            "Track shipments and provide real-time updates to carriers",
            "Handle detention claims, rate confirmations, and paperwork",
            "Build long-term relationships with brokers and carriers",
            "Provide 24/7 on-call support during emergencies"
        ],
        requirements: [
            "2+ years of freight dispatching experience",
            "Strong knowledge of load boards (DAT, Truckstop, 123Loadboard)",
            "Excellent negotiation and communication skills",
            "Understanding of DOT regulations and compliance",
            "Ability to work independently and manage multiple carriers",
            "Proficiency with TMS software and Microsoft Office"
        ],
        preferred: [
            "Experience with Reefer, Flatbed, or specialized freight",
            "Existing broker relationships",
            "Bilingual (English/Spanish)"
        ]
    },
    {
        id: "sales-agent",
        title: "Sales Agent / Business Development",
        department: "Sales",
        location: "Remote / Kissimmee, FL",
        type: "Full-Time",
        description: "Join our sales team to help owner-operators and small fleets discover how Priority Dispatch can transform their business. This role combines outbound sales, relationship building, and customer success.",
        responsibilities: [
            "Prospect and qualify new carrier leads through cold calling, email, and social media",
            "Present Priority Dispatch services and value proposition to owner-operators",
            "Close deals and onboard new carriers to our dispatch platform",
            "Build and maintain relationships with existing carrier clients",
            "Track sales activities and pipeline in CRM",
            "Collaborate with dispatch team to ensure customer satisfaction"
        ],
        requirements: [
            "1+ years of B2B sales or business development experience",
            "Strong communication and persuasion skills",
            "Self-motivated with a proven track record of meeting quotas",
            "Comfortable with cold calling and prospecting",
            "Basic understanding of trucking industry (training provided)",
            "CRM experience (HubSpot, Salesforce, or similar)"
        ],
        preferred: [
            "Experience in trucking, logistics, or transportation sales",
            "Existing network of owner-operators or carriers",
            "Commission-driven mindset",
            "Social media marketing skills"
        ]
    }
]

const benefits = [
    { icon: TrendingUp, title: "Competitive Pay", description: "Base salary plus performance bonuses and commission" },
    { icon: MapPin, title: "Work from Anywhere", description: "Fully remote or hybrid options available" },
    { icon: Clock, title: "Flexible Schedule", description: "Work-life balance is important to us" },
    { icon: Users, title: "Growth Opportunities", description: "Advance your career as we grow" },
    { icon: Heart, title: "Supportive Team", description: "Join a collaborative, family-like culture" },
]

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        jobId: "",
        fullName: "",
        email: "",
        phone: "",
        location: "",
        workPreference: "remote",
        experience: "",
        resume: null as File | null,
        coverLetter: "",
        linkedIn: "",
        availability: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const formDataToSend = new FormData()
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null) {
                    formDataToSend.append(key, value)
                }
            })

            const response = await fetch('/api/careers', {
                method: 'POST',
                body: formDataToSend,
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you for your application! We will review it and get back to you soon.'
                })
                setFormData({
                    jobId: "",
                    fullName: "",
                    email: "",
                    phone: "",
                    location: "",
                    workPreference: "remote",
                    experience: "",
                    resume: null,
                    coverLetter: "",
                    linkedIn: "",
                    availability: ""
                })
                setSelectedJob(null)
            } else {
                throw new Error(data.error || 'Failed to submit application')
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to submit application. Please try again.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary/10 to-background py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-6">
                            <Briefcase className="h-4 w-4" />
                            Join Our Team
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground mb-6">
                            Build Your Career in Freight Logistics
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Join Priority Dispatch LLC and help owner-operators across America succeed. We're growing fast and looking for talented dispatchers and sales professionals.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-16 md:py-24 bg-background">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-center mb-12">Why Work at Priority Dispatch?</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Reveal key={index} delayMs={index * 100}>
                                <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-all hover:shadow-lg">
                                    <benefit.icon className="h-10 w-10 text-accent mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="mx-auto max-w-6xl px-4">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
                    </Reveal>

                    <div className="space-y-6">
                        {jobOpenings.map((job, index) => (
                            <Reveal key={job.id} delayMs={index * 100}>
                                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all">
                                    <div className="p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Briefcase className="h-4 w-4" />
                                                        {job.department}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="h-4 w-4" />
                                                        {job.location}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        {job.type}
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setSelectedJob(job.id)
                                                    setFormData(prev => ({ ...prev, jobId: job.id }))
                                                    setTimeout(() => {
                                                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                                                    }, 100)
                                                }}
                                                className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all whitespace-nowrap"
                                            >
                                                Apply Now
                                            </button>
                                        </div>

                                        <p className="text-muted-foreground mb-6">{job.description}</p>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold mb-3">Responsibilities</h4>
                                                <ul className="space-y-2">
                                                    {job.responsibilities.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-3">Requirements</h4>
                                                <ul className="space-y-2">
                                                    {job.requirements.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {job.preferred.length > 0 && (
                                            <div className="mt-6 pt-6 border-t border-border">
                                                <h4 className="font-bold mb-3">Preferred Qualifications</h4>
                                                <ul className="grid md:grid-cols-2 gap-2">
                                                    {job.preferred.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="application-form" className="py-16 md:py-24 bg-background">
                <div className="mx-auto max-w-3xl px-4">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-center mb-4">Submit Your Application</h2>
                        <p className="text-center text-muted-foreground mb-12">
                            Fill out the form below and we'll review your application within 2-3 business days.
                        </p>
                    </Reveal>

                    <Reveal delayMs={100}>
                        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-6">
                            {/* Job Selection */}
                            <div>
                                <label htmlFor="jobId" className="block text-sm font-medium mb-2">
                                    Position Applying For <span className="text-destructive">*</span>
                                </label>
                                <select
                                    id="jobId"
                                    name="jobId"
                                    required
                                    value={formData.jobId}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                >
                                    <option value="">Select a position</option>
                                    {jobOpenings.map(job => (
                                        <option key={job.id} value={job.id}>{job.title}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Personal Information */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                                        Full Name <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone Number <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium mb-2">
                                        Current Location <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        required
                                        placeholder="City, State"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                    />
                                </div>
                            </div>

                            {/* Work Preference */}
                            <div>
                                <label htmlFor="workPreference" className="block text-sm font-medium mb-2">
                                    Work Preference <span className="text-destructive">*</span>
                                </label>
                                <select
                                    id="workPreference"
                                    name="workPreference"
                                    required
                                    value={formData.workPreference}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                >
                                    <option value="remote">Remote</option>
                                    <option value="on-site">On-Site (Kissimmee, FL)</option>
                                    <option value="hybrid">Hybrid</option>
                                </select>
                            </div>

                            {/* Experience */}
                            <div>
                                <label htmlFor="experience" className="block text-sm font-medium mb-2">
                                    Years of Relevant Experience <span className="text-destructive">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="experience"
                                    name="experience"
                                    required
                                    placeholder="e.g., 3 years"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>

                            {/* Resume Upload */}
                            <div>
                                <label htmlFor="resume" className="block text-sm font-medium mb-2">
                                    Resume/CV <span className="text-destructive">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        required
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-accent-foreground hover:file:bg-accent/90"
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground mt-2">PDF, DOC, or DOCX (Max 5MB)</p>
                            </div>

                            {/* LinkedIn */}
                            <div>
                                <label htmlFor="linkedIn" className="block text-sm font-medium mb-2">
                                    LinkedIn Profile URL
                                </label>
                                <input
                                    type="url"
                                    id="linkedIn"
                                    name="linkedIn"
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    value={formData.linkedIn}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>

                            {/* Cover Letter */}
                            <div>
                                <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
                                    Cover Letter / Why do you want to work at Priority Dispatch?
                                </label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    rows={6}
                                    placeholder="Tell us about your experience and why you're a great fit for this role..."
                                    value={formData.coverLetter}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                                />
                            </div>

                            {/* Availability */}
                            <div>
                                <label htmlFor="availability" className="block text-sm font-medium mb-2">
                                    When can you start? <span className="text-destructive">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="availability"
                                    name="availability"
                                    required
                                    placeholder="e.g., Immediately, 2 weeks notice, etc."
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>

                            {/* Submit Status */}
                            {submitStatus && (
                                <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-600 border border-green-500/20' : 'bg-destructive/10 text-destructive border border-destructive/20'}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Upload className="h-5 w-5" />
                                        Submit Application
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-muted-foreground text-center">
                                By submitting this application, you agree to our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> and consent to the collection and use of your personal information for employment purposes.
                            </p>
                        </form>
                    </Reveal>
                </div>
            </section>

            {/* Equal Opportunity Statement */}
            <section className="py-12 bg-muted/50">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <Reveal>
                        <p className="text-sm text-muted-foreground">
                            <strong>Priority Dispatch LLC is an Equal Opportunity Employer.</strong> We do not discriminate based on race, color, religion, sex, national origin, age, disability, veteran status, or any other protected characteristic under applicable law. All qualified applicants will receive consideration for employment.
                        </p>
                    </Reveal>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}
