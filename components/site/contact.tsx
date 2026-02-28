"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;

    try {
      const formData = new FormData(form);

      const data = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        toast({
          title: "✅ Message Sent!",
          description: "We will contact you shortly.",
        });
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        toast({
          title: "❌ Failed to Send",
          description: body?.error || "Please try again or call us directly.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      toast({
        title: "❌ Network Error",
        description: "Could not reach the server. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">Ready to Maximize Your Earnings?</h2>
          <p className="mt-3 text-foreground/90">Tell us what you're looking for and we'll get back to you promptly.</p>
          <ul className="mt-6 space-y-2 text-sm opacity-90">
            <li>
              Phone: <span className="font-medium">(+1) 689-314-8347</span>
            </li>
            <li>
              Email: <span className="font-medium">prioritydispatch4u@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-card p-6 text-card-foreground">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle2 className="h-14 w-14 text-green-500" />
              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">Message Sent!</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Thank you for reaching out. We&apos;ll get back to you shortly.
              </p>
              <Button
                className="mt-6 bg-accent text-accent-foreground hover:opacity-90"
                onClick={() => setStatus("idle")}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              {status === "error" && (
                <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-900/20 dark:text-red-200">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Something went wrong. Please try again or call us directly.</span>
                </div>
              )}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" required placeholder="(555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" required placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} placeholder={"I'm interested in..."} />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-accent-foreground hover:opacity-90"
              >
                {loading ? "Sending..." : "Send Request"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
