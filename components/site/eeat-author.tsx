import Reveal from "@/components/site/reveal"
import { Linkedin, GraduationCap, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EEATAuthor() {
  return (
    <section id="about-founder" className="bg-background border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Photo side */}
              <div className="relative flex flex-col items-center justify-center bg-primary px-8 py-10 text-primary-foreground">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-accent shadow-xl bg-muted">
                  <img
                    src="/images/muhammad-faisal-bilal-founder-priority-dispatch.png"
                    alt="Muhammad Faisal Bilal — Founder of Priority Dispatch LLC"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-center">Muhammad Faisal Bilal</h3>
                <p className="mt-2 text-sm opacity-80 text-center">Founder &amp; CEO, Priority Dispatch LLC</p>
                <a
                  href="https://www.linkedin.com/in/muhammad-faisal-bilal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>

              {/* Content side */}
              <div className="col-span-2 px-8 py-10">
                <p className="text-sm font-bold tracking-widest text-accent uppercase mb-3">About the Expert</p>
                <p className="leading-relaxed text-muted-foreground">
                  Muhammad Faisal Bilal founded Priority Dispatch LLC after seeing how many owner-operators were leaving money on the table by dispatching themselves. With a background in Computer Science and years of hands-on experience in freight logistics, he built a dispatch service focused on one thing: <strong>helping drivers earn more per mile</strong>.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Because he&apos;s worked directly with carriers across all 48 states, Faisal understands the real challenges owner-operators face — from finding consistent high-paying loads to dealing with slow-paying brokers. That experience is baked into every process at Priority Dispatch LLC.
                </p>

                {/* Credentials */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent/10">
                      <GraduationCap className="h-4 w-4 text-accent" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">BS Computer Science</div>
                      <div className="text-xs text-muted-foreground">Technology-driven dispatch</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent/10">
                      <Users className="h-4 w-4 text-accent" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">100+ Active Carriers</div>
                      <div className="text-xs text-muted-foreground">Dispatched across all 48 states</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent/10">
                      <TrendingUp className="h-4 w-4 text-accent" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">$1.80 → $2.60 RPM</div>
                      <div className="text-xs text-muted-foreground">Avg. RPM increase for clients</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/carrier-setup">
                    <Button className="bg-accent text-accent-foreground hover:opacity-90">
                      Work with Faisal&apos;s Team
                    </Button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
