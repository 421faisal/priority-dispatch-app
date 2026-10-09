import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Verify Certificate | Priority Dispatch LLC",
  description: "Verify the authenticity of Priority Dispatch LLC internship certificates. Enter a certificate ID or scan the QR code to validate credentials.",
  alternates: {
    canonical: "https://prioritydispatchllc.com/verify",
  },
  openGraph: {
    title: "Certificate Verification | Priority Dispatch LLC",
    description: "Verify the authenticity of Priority Dispatch LLC internship certificates.",
    url: "https://prioritydispatchllc.com/verify",
    type: "website",
  },
}

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
