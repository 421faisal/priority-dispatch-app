import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { CheckCircle2, XCircle, Calendar, Code, Globe, Award, MapPin } from "lucide-react"
import { notFound } from "next/navigation"

// Certificate database
const certificates = {
  "PD-INT-2026-FZUNBUCA": {
    name: "Muhammad Faisal Bilal",
    role: "Web Development Intern",
    technology: "MERN Stack",
    description: "Full-stack web development tasks using the MERN Stack (MongoDB, Express.js, React, and Node.js)",
    startDate: "July 01, 2026",
    endDate: "September 30, 2026",
    issued: "October 04, 2026",
    mode: "Remote Internship",
    location: "Florida, USA",
    performance: "Demonstrated professionalism, technical competence, and dedication",
  },
  "PD-INT-2026-HMZMZFR": {
    name: "Hamza Muzaffar",
    role: "Web Development Intern",
    technology: "MERN Stack",
    description: "Full-stack web development tasks using the MERN Stack (MongoDB, Express.js, React, and Node.js)",
    startDate: "July 01, 2026",
    endDate: "September 30, 2026",
    issued: "October 04, 2026",
    mode: "Remote Internship",
    location: "Florida, USA",
    performance: "Demonstrated professionalism, technical competence, and dedication",
  },
}

type CertificateId = keyof typeof certificates

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params
  const certificate = certificates[params.id as CertificateId]
  
  if (!certificate) {
    return {
      title: "Certificate Not Found | Priority Dispatch LLC",
      description: "The requested certificate could not be verified.",
    }
  }

  return {
    title: `Verify Certificate - ${certificate.name} | Priority Dispatch LLC`,
    description: `Official certificate verification for ${certificate.name}, ${certificate.role} at Priority Dispatch LLC.`,
    alternates: {
      canonical: `https://prioritydispatchllc.com/verify/${params.id}`,
    },
    openGraph: {
      title: `Certificate Verification - ${certificate.name}`,
      description: `Official internship certificate verification for ${certificate.name} at Priority Dispatch LLC.`,
      url: `https://prioritydispatchllc.com/verify/${params.id}`,
      type: "website",
    },
  }
}

export default async function VerifyCertificatePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const certificate = certificates[params.id as CertificateId]

  if (!certificate) {
    notFound()
  }

  const isValid = !!certificate

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <SiteHeader />
      
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Verification Status */}
          <div className="mb-8 text-center">
            {isValid ? (
              <div className="inline-flex items-center gap-3 rounded-full bg-green-100 px-6 py-3 text-green-800">
                <CheckCircle2 className="h-6 w-6" />
                <span className="text-lg font-semibold">Certificate Verified</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-3 rounded-full bg-red-100 px-6 py-3 text-red-800">
                <XCircle className="h-6 w-6" />
                <span className="text-lg font-semibold">Certificate Not Found</span>
              </div>
            )}
          </div>

          {/* Certificate Details Card */}
          <div className="overflow-hidden rounded-3xl border-2 border-primary/20 bg-white shadow-2xl">
            {/* Header with Logo */}
            <div className="relative bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-white">
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full bg-white p-3">
                <img 
                  src="/images/logo-priority-dispatch.png" 
                  alt="Priority Dispatch LLC" 
                  className="h-full w-full object-contain"
                />
              </div>
              <h1 className="text-3xl font-bold">PRIORITY DISPATCH LLC</h1>
              <p className="mt-2 flex items-center justify-center gap-2 text-white/90">
                <MapPin className="h-4 w-4" />
                {certificate.location}
              </p>
            </div>

            {/* Certificate Content */}
            <div className="p-8 md:p-12">
              <div className="mb-8 text-center">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  Certificate of Internship Completion
                </h2>
                <p className="text-gray-600">This certificate is proudly presented to</p>
              </div>

              {/* Recipient Name */}
              <div className="mb-8 text-center">
                <h3 className="text-4xl font-bold text-gray-900 md:text-5xl">
                  {certificate.name}
                </h3>
                <p className="mt-3 text-xl text-primary font-semibold">
                  {certificate.role}
                </p>
              </div>

              {/* Certificate Description */}
              <div className="mb-10 rounded-2xl bg-slate-50 p-6 text-center">
                <p className="text-gray-700 leading-relaxed">
                  This is to certify that <strong>{certificate.name}</strong> has successfully 
                  completed a remote internship with <strong>Priority Dispatch LLC</strong>, {certificate.location}, 
                  as a <strong>{certificate.role}</strong> from <strong>{certificate.startDate}</strong> to{" "}
                  <strong>{certificate.endDate}</strong>. During this period, they worked on {certificate.description}, 
                  demonstrating {certificate.performance.toLowerCase()}.
                </p>
              </div>

              {/* Certificate Details Grid */}
              <div className="mb-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <Calendar className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Internship Period
                  </h4>
                  <p className="text-sm font-medium text-gray-900">
                    {certificate.startDate}
                  </p>
                  <p className="text-sm text-gray-600">to</p>
                  <p className="text-sm font-medium text-gray-900">
                    {certificate.endDate}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <Code className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Technology
                  </h4>
                  <p className="text-lg font-semibold text-gray-900">
                    {certificate.technology}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <Globe className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Mode
                  </h4>
                  <p className="text-lg font-semibold text-gray-900">
                    {certificate.mode}
                  </p>
                </div>
              </div>

              {/* Certificate ID and Issued Date */}
              <div className="border-t border-slate-200 pt-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div className="text-center md:text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Certificate ID
                    </p>
                    <p className="mt-1 font-mono text-lg font-bold text-gray-900">
                      {params.id}
                    </p>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Issued
                    </p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">
                      {certificate.issued}
                    </p>
                  </div>
                </div>
              </div>

              {/* Authorized Signatory */}
              <div className="mt-8 border-t border-slate-200 pt-6 text-center">
                <div className="mb-4">
                  <p className="font-signature text-3xl text-gray-700">Juan Ablino Martinez</p>
                </div>
                <p className="text-sm font-semibold text-gray-900">Authorized Signatory</p>
                <p className="text-xs text-gray-600">Priority Dispatch LLC</p>
              </div>

              {/* Verification Badge */}
              <div className="mt-10 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-green-900">
                  This certificate has been verified as authentic
                </p>
                <p className="mt-2 text-xs text-green-700">
                  Verified on {new Date().toLocaleDateString("en-US", { 
                    year: "numeric", 
                    month: "long", 
                    day: "numeric" 
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              ← Back to Priority Dispatch LLC
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

// Generate static paths for the two certificates
export function generateStaticParams() {
  return [
    { id: "PD-INT-2026-FZUNBUCA" },
    { id: "PD-INT-2026-HMZMZFR" },
  ]
}
