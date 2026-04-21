"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar, Footer, FinalCTA, PageHero, useReveal } from "@/components/ui";

const TEAM = [
  {
    icon: "✦",
    name: "Design Team",
    role: "UX/UI Specialists",
    desc: "Turning complex problems into clean, elegant interfaces. Every screen crafted with the user's experience and client's goals at the center.",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    icon: "⚡",
    name: "Engineering Team",
    role: "Full-Stack Developers",
    desc: "Backend, frontend, APIs, databases — handling the full stack with precision and zero compromise on code quality.",
    skills: ["Node.js", "PostgreSQL", "Supabase", "API Design"],
  },
  {
    icon: "◈",
    name: "Automation Team",
    role: "AI & Systems Engineers",
    desc: "Workflow automation, AI integration, API connections — making businesses smarter with systems that work 24/7.",
    skills: ["OpenAI API", "Make.com", "LangChain", "Zapier"],
  },
];

const VALUES = [
  { num: "01", title: "Quality Over Volume", desc: "We take on fewer projects so we can give each one the attention it deserves. You're never just a number here." },
  { num: "02", title: "Radical Transparency", desc: "You'll always know where your project stands. No ghosting. No surprises. Clear, honest communication throughout." },
  { num: "03", title: "Results First", desc: "We don't celebrate finishing a project — we celebrate what it achieves. Design and code that moves your metrics." },
  { num: "04", title: "Speed Without Compromise", desc: "We move fast. Really fast. But never at the expense of quality. Most projects launch in days, not months." },
];

export default function About() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="About Us"
          title="We're Build.Studio. A Team That Builds"
          titleAccent="With Purpose."
          sub="A focused studio partnering with ambitious founders and brands to build digital products that actually move the needle."
        />

        {/* Story */}
        <section className="px-6 lg:px-12 py-20 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <div className="section-label mb-6">Why We Exist</div>
              <h2 className="font-display text-[clamp(32px,4vw,50px)] font-medium leading-[1.08] tracking-[-2px] text-white mb-6">
                Built to Be <em className="gradient-text not-italic">Different.</em>
              </h2>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
                {[["5+", "Years"], ["150+", "Projects"], ["12+", "Countries"]].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div className="font-display text-[28px] font-medium gradient-text">{val}</div>
                    <div className="font-mono text-[10px] text-white tracking-wider uppercase mt-1">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 text-[17px] text-white leading-[1.9] font-light reveal">
              <p>Too many businesses have been burned by agencies that over-promise, under-deliver, and disappear after the invoice is paid.</p>
              <p className="font-display text-[22px] font-medium italic text-white/80 leading-[1.5]">
                &ldquo;We built Build.Studio to be different.&rdquo;
              </p>
              <p>We believe great digital products should be accessible to every serious business — not just those with Silicon Valley budgets. World-class design, clean engineering, and intelligent automation at honest prices.</p>
              <p>Startups raising their first round. Established businesses going digital. Solo founders turning ideas into real products. Whatever your stage — if you&apos;re serious, we&apos;re in.</p>
            </div>
          </div>
        </section>

        {/* Founder spotlight */}
        <section className="px-6 lg:px-12 py-20 bg-ink/40 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-10 reveal">The Founder</div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="border-gradient rounded-3xl bg-carbon p-10 overflow-hidden relative reveal">
                <div className="absolute top-0 right-0 w-40 h-40 opacity-10" style={{ background: "radial-gradient(circle at top right, var(--amber), transparent 70%)" }} />
                <div className="w-20 h-20 rounded-2xl bg-amber/15 border border-amber/25 flex items-center justify-center mb-8">
                  <span className="font-display text-3xl font-medium text-amber">A</span>
                </div>
                <div className="font-mono text-[10px] text-amber tracking-[3px] uppercase mb-3">Founder & Creative Director</div>
                <h3 className="font-display text-4xl font-medium text-white tracking-[-1px] mb-4">Ayo</h3>
                <p className="text-[16px] text-white leading-[1.9] font-light mb-7">
                  5+ years building web products, AI automation tools, and digital experiences at the highest level. Every project led with a bias for quality and a deep understanding of what clients actually need to grow.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React Native", "AI Integration", "Product Strategy", "UX Design"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] font-mono text-[11px] text-silver">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="reveal">
                <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium leading-[1.1] tracking-[-1.5px] text-white mb-6">
                  The person behind <em className="gradient-text not-italic">every project.</em>
                </h2>
                <p className="text-[17px] text-white leading-[1.9] font-light mb-5">
                  Based in Lagos, Nigeria, Ayo brings a global mindset and local expertise to every engagement. Having worked with clients across 12+ countries, he understands what it takes to build products that compete at the highest level — regardless of timezone.
                </p>
                <p className="text-[17px] text-white leading-[1.9] font-light mb-8">
                  Every project at Build.Studio is personally overseen by Ayo — from the first strategy call to the final deployment. You&apos;re never handed off to a junior team.
                </p>
                <Link href="/contact" className="btn-amber inline-flex">
                  Work With Ayo <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Full team */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-10 reveal">The Team</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {TEAM.map((t) => (
                <div key={t.name} className="bg-carbon border border-white/[0.07] rounded-2xl p-7 hover-lift reveal">
                  <div className="text-3xl mb-5">{t.icon}</div>
                  <div className="font-display text-[22px] font-medium text-white mb-1 tracking-[-0.3px]">{t.name}</div>
                  <div className="font-mono text-[10px] text-amber tracking-[1px] uppercase mb-4">{t.role}</div>
                  <p className="text-[15px] text-white font-light leading-[1.8] mb-5">{t.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.skills.map((s) => (
                      <span key={s} className="px-2 py-1 border border-white/[0.06] rounded font-mono text-[10px] text-white">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 lg:px-12 py-20 bg-ink/40 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-10 reveal">Our Values</div>
            <div className="grid md:grid-cols-2 gap-5">
              {VALUES.map((v) => (
                <div key={v.num} className="p-8 border border-white/[0.07] rounded-2xl hover-lift reveal">
                  <div className="font-mono text-[10px] text-amber tracking-[3px] mb-5">{v.num}</div>
                  <h3 className="font-display text-[26px] font-medium text-white tracking-[-0.5px] mb-3">{v.title}</h3>
                  <p className="text-[16px] text-white font-light leading-[1.8]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
