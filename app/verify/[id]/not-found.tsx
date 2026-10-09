import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { XCircle, Search, Home } from "lucide-react"

export default function CertificateNotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <SiteHeader />
      
      <section className="py-20 px-4">
        <div className="mx-auto max-w-2xl text-center">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-red-100 p-6">
              <XCircle className="h-16 w-16 text-red-600" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Certificate Not Found
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            We couldn't verify the certificate with the provided ID. Please check the ID and try again.
          </p>

          {/* Info Box */}
          <div className="mb-10 rounded-2xl border-2 border-red-200 bg-red-50 p-8 text-left">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-900">
              <Search className="h-5 w-5" />
              Common Issues:
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span>The certificate ID may have been entered incorrectly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span>The certificate might not exist in our system</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">•</span>
                <span>The QR code may have been scanned incorrectly</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Contact Support
            </a>
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-sm text-gray-600">
            <p>Need help verifying a certificate?</p>
            <p className="mt-2">
              Email us at{" "}
              <a href="mailto:prioritydispatch4u@gmail.com" className="text-primary hover:underline">
                prioritydispatch4u@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
