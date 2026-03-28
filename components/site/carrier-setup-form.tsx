"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { submitCarrierSignup } from "@/app/carrier-setup/actions"
import { CheckCircle2, UploadCloud, Truck, FileText, User } from "lucide-react"

export function CarrierSetupForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const MAX_TOTAL_SIZE = 4 * 1024 * 1024 // 4MB total limit (Vercel serverless limit)
    const MAX_FILE_SIZE = 2 * 1024 * 1024  // 2MB per file

    function validateFiles(formData: FormData): string | null {
        const fileFields = ["mcCertificate", "w9", "coi", "noticeOfAssignment", "cdl"]
        let totalSize = 0

        for (const field of fileFields) {
            const file = formData.get(field) as File | null
            if (file && file.size > 0) {
                if (file.size > MAX_FILE_SIZE) {
                    return `"${file.name}" is too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Each file must be under 2MB. Please compress or resize it.`
                }
                totalSize += file.size
            }
        }

        if (totalSize > MAX_TOTAL_SIZE) {
            return `Total file size is ${(totalSize / 1024 / 1024).toFixed(1)}MB, but the maximum is 4MB. Please compress your documents or use smaller images.`
        }

        return null
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMessage("")

        const form = e.currentTarget
        const formData = new FormData(form)

        // Validate file sizes before uploading
        const fileError = validateFiles(formData)
        if (fileError) {
            setErrorMessage(fileError)
            setIsSubmitting(false)
            return
        }

        try {
            const res = await submitCarrierSignup(formData)
            if (res.success) {
                setSuccessMessage(res.message)
                form.reset()
            } else {
                setErrorMessage(
                    res.message ||
                    "We couldn't submit your setup packet. Please try again or contact us directly.",
                )
            }
        } catch (error: any) {
            console.error(error)
            // Detect Vercel body size limit error
            const msg = error?.message || ""
            if (msg.includes("Body exceeded") || msg.includes("413") || msg.includes("Too Large")) {
                setErrorMessage(
                    "Your files are too large for our server. Please compress your PDFs (under 2MB each) and try again, or email them directly to prioritydispatch4u@gmail.com.",
                )
            } else {
                setErrorMessage(
                    "An unexpected error occurred during submission. Please try again or contact us directly at prioritydispatch4u@gmail.com.",
                )
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    if (successMessage) {
        return (
            <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center shadow-sm dark:border-green-900 dark:bg-green-900/20">
                <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
                <h2 className="mt-6 text-2xl font-bold text-foreground">Setup Packet Submitted!</h2>
                <p className="mt-2 pl-4 pr-4 text-lg text-muted-foreground">{successMessage}</p>
                <Button
                    className="mt-8 bg-green-600 hover:bg-green-700"
                    onClick={() => setSuccessMessage("")}
                >
                    Submit Another Application
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 rounded-xl bg-card p-6 shadow-lg md:p-10 border border-border">

            {errorMessage && (
                <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-900/20 dark:text-red-200">
                    {errorMessage}
                </div>
            )}

            {/* Section 1: Personal Info */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border pb-2 text-xl font-semibold">
                    <User className="h-5 w-5 text-accent" />
                    <h2>Driver & Contact Information</h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">First Name <span className="text-red-500">*</span></label>
                        <input type="text" id="firstName" name="firstName" required className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Last Name <span className="text-red-500">*</span></label>
                        <input type="text" id="lastName" name="lastName" required className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                        <input type="email" id="email" name="email" required className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
                        <input type="tel" id="phone" name="phone" required className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                    </div>
                </div>
            </div>

            {/* Section 2: Company Info */}
            <div className="space-y-4 pt-6">
                <div className="flex items-center gap-2 border-b border-border pb-2 text-xl font-semibold">
                    <Truck className="h-5 w-5 text-accent" />
                    <h2>Company & Equipment</h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="companyName" className="text-sm font-medium">Full Company Name <span className="text-red-500">*</span></label>
                        <input type="text" id="companyName" name="companyName" required className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="mcNumber" className="text-sm font-medium">MC Number <span className="text-red-500">*</span></label>
                        <input type="text" id="mcNumber" name="mcNumber" required className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="dotNumber" className="text-sm font-medium">DOT Number <span className="text-red-500">*</span></label>
                        <input type="text" id="dotNumber" name="dotNumber" required className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="equipmentType" className="text-sm font-medium">Equipment Type <span className="text-red-500">*</span></label>
                        <select id="equipmentType" name="equipmentType" required className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                            <option value="">Select Equipment</option>
                            <option value="Reefer">Reefer</option>
                            <option value="Dry Van">Dry Van</option>
                            <option value="Box Truck">Box Truck</option>
                            <option value="Flatbed">Flatbed</option>
                            <option value="Step Deck">Step Deck</option>
                            <option value="Power Only">Power Only</option>
                            <option value="Hotshot">Hotshot</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Section 3: Document Uploads */}
            <div className="space-y-4 pt-6">
                <div className="flex items-center gap-2 border-b border-border pb-2 text-xl font-semibold">
                    <FileText className="h-5 w-5 text-accent" />
                    <h2>Required Documents</h2>
                </div>
                <p className="text-sm text-muted-foreground">Please upload clear PDF or image files (max 2MB each, 4MB total).</p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="mcCertificate" className="text-sm font-medium">MC Authority Certificate <span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-2">
                            <UploadCloud className="h-4 w-4 text-muted-foreground" />
                            <input type="file" id="mcCertificate" name="mcCertificate" accept=".pdf,.png,.jpg,.jpeg" required className="text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-accent-foreground hover:file:bg-accent/90" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="w9" className="text-sm font-medium">W-9 Form <span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-2">
                            <UploadCloud className="h-4 w-4 text-muted-foreground" />
                            <input type="file" id="w9" name="w9" accept=".pdf,.png,.jpg,.jpeg" required className="text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-accent-foreground hover:file:bg-accent/90" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="coi" className="text-sm font-medium">Certificate of Insurance (COI) <span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-2">
                            <UploadCloud className="h-4 w-4 text-muted-foreground" />
                            <input type="file" id="coi" name="coi" accept=".pdf,.png,.jpg,.jpeg" required className="text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-accent-foreground hover:file:bg-accent/90" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="noticeOfAssignment" className="text-sm font-medium">NOA / Factoring Info</label>
                        <div className="flex items-center gap-2">
                            <UploadCloud className="h-4 w-4 text-muted-foreground" />
                            <input type="file" id="noticeOfAssignment" name="noticeOfAssignment" accept=".pdf,.png,.jpg,.jpeg" className="text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-primary/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-foreground hover:file:bg-primary/30" />
                        </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="cdl" className="text-sm font-medium">Copy of CDL / Voided Check</label>
                        <div className="flex items-center gap-2">
                            <UploadCloud className="h-4 w-4 text-muted-foreground" />
                            <input type="file" id="cdl" name="cdl" accept=".pdf,.png,.jpg,.jpeg" className="text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-primary/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-foreground hover:file:bg-primary/30" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-lg">
                    {isSubmitting ? "Uploading Securely Server..." : "Submit Carrier Packet"}
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to Priority Dispatch LLC&apos;s <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a>. Your documents are transmitted securely.
                </p>
            </div>

        </form>
    )
}
