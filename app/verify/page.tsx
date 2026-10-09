"use client"

import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Shield, QrCode, Search, CheckCircle2, Award, ArrowRight } from "lucide-react"
import Reveal from "@/components/site/reveal"

export default function VerifyPage() {
  return (
    <main>
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white/20 p-4">
                <Shield className="h-16 w-16" />
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
              Certificate Verification
            </h1>
          </Reveal>
          <Reveal delayMs={200}>
            <p className="mt-6 text-xl opacity-90">
              Verify the authenticity of Priority Dispatch LLC internship certificates instantly
            </p>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              How to Verify a Certificate
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delayMs={100}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-shadow hover:shadow-lg">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <QrCode className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Step 1: Scan QR Code
                </h3>
                <p className="text-gray-600">
                  Use your phone camera to scan the QR code on the certificate for instant verification
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-shadow hover:shadow-lg">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Search className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Step 2: Enter Certificate ID
                </h3>
                <p className="text-gray-600">
                  Or manually enter the certificate ID found at the bottom of the certificate
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={300}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-shadow hover:shadow-lg">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Step 3: Verify Details
                </h3>
                <p className="text-gray-600">
                  Instantly view certificate details, internship dates, and authenticity status
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Manual Verification Form */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4">
          <Reveal>
            <div className="rounded-3xl border-2 border-primary/20 bg-white p-8 shadow-xl md:p-12">
              <div className="mb-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h2 className="mb-3 text-3xl font-bold text-gray-900">
                  Verify Certificate Manually
                </h2>
                <p className="text-gray-600">
                  Enter the certificate ID below to verify authenticity
                </p>
              </div>

              <form 
                action="/verify/" 
                method="get" 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const id = formData.get('id') as string
                  if (id) {
                    window.location.href = `/verify/${id.trim().toUpperCase()}`
                  }
                }}
              >
                <div>
                  <label 
                    htmlFor="certificate-id" 
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Certificate ID
                  </label>
                  <input
                    type="text"
                    id="certificate-id"
                    name="id"
                    placeholder="e.g., PD-INT-2026-FZUNBUCA"
                    required
                    className="w-full rounded-xl border-2 border-slate-200 px-6 py-4 text-lg font-mono transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Find the certificate ID at the bottom of the certificate
                  </p>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
                >
                  Verify Certificate
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>

              {/* Example Certificates */}
              <div className="mt-10 border-t border-slate-200 pt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Try Example Certificates
                </h3>
                <div className="space-y-3">
                  <a
                    href="/verify/PD-INT-2026-FZUNBUCA"
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <span className="font-mono text-sm font-medium text-gray-700">
                      PD-INT-2026-FZUNBUCA
                    </span>
                    <span className="text-xs text-gray-500">Muhammad Faisal Bilal</span>
                  </a>
                  <a
                    href="/verify/PD-INT-2026-HMZMZFR"
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <span className="font-mono text-sm font-medium text-gray-700">
                      PD-INT-2026-HMZMZFR
                    </span>
                    <span className="text-xs text-gray-500">Hamza Muzaffar</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-blue-50 p-8 md:p-12">
              <div className="mb-6 flex justify-center">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-900">
                Secure & Trusted Verification
              </h2>
              <p className="mb-6 text-center text-gray-600">
                All certificates issued by Priority Dispatch LLC are digitally verified and stored 
                securely in our system. Each certificate has a unique ID that cannot be duplicated or forged.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Authentic</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">Instant</div>
                  <div className="text-sm text-gray-600">Verification</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">Secure</div>
                  <div className="text-sm text-gray-600">Database</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
