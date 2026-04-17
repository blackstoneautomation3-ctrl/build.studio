"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar, Footer, FinalCTA, PageHero, useReveal } from "@/components/ui";

const SERVICES = [
  {
    num: "01",
    icon: "⚡",
    title: "Web & App Development",
    tagline: "Websites & Apps That Work as Hard as You Do.",
    desc: "In today's world, your digital product is your first impression, sales team, and customer support — all at once. We build products that don't just look great, but perform, scale, and convert.",
    stack: ["Next.js", "React", "React Native", "Node.js", "Supabase", "MongoDB"],
    items: [
      "Custom website development",
      "Web application development",
      "Mobile app development (iOS & Android)",
      "SaaS product development",
      "E-commerce stores",
      "API development & integration",
      "Performance optimization",
      "Post-launch support & maintenance",
    ],
    price: "From $500",
    timeline: "3–14 days",
  },
  {
    num: "02",
    icon: "✦",
    title: "UX/UI Design",
    tagline: "Design That Converts. Interfaces That Delight.",
    desc: "Beautiful design is not decoration — it's strategy. Every color, button, and spacing decision is intentional. We design products that feel intuitive and reflect the quality of your brand.",
    stack: ["Figma", "FigJam", "Prototyping", "Design Systems", "User Research"],
    items: [
      "User research & journey mapping",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Mobile app design",
      "Design systems & component libraries",
      "Website redesign",
      "Brand identity integration",
      "Figma handoff for developers",
    ],
    price: "From $300",
    timeline: "2–7 days",
  },
  {
    num: "03",
    icon: "◈",
    title: "AI Automation & Tools",
    tagline: "Make Your Business Smarter. Automatically.",
    desc: "AI is the competitive advantage of today. We integrate intelligent automation into your products and operations, replacing manual work with smart systems that run 24/7.",
    stack: ["OpenAI API", "Make.com", "Zapier", "LangChain", "Flowise", "Vercel AI SDK"],
    items: [
      "Custom AI chatbot development",
      "Business workflow automation",
      "OpenAI / Claude API integration",
      "AI-powered features in web & mobile apps",
      "Email & CRM automation",
      "Client onboarding automation",
      "Reporting & analytics automation",
      "Data pipeline automation",
    ],
    price: "From $400",
    timeline: "3–10 days",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "$500",
    desc: "Perfect for landing pages and simple websites.",
    items: ["1-page website", "Mobile responsive", "Contact form", "1 revision round", "7-day delivery"],
    accent: false,
  },
  {
    name: "Growth",
    price: "$2,000",
    desc: "Ideal for web apps and client platforms.",
    items: ["Full web application", "UX/UI design included", "Backend + database", "Auth + payments", "2-week delivery"],
    accent: true,
  },
  {
    name: "Pro",
    price: "$7,000",
    desc: "Full product with AI features built in.",
    items: ["Web or mobile app", "AI automation included", "Custom integrations", "Priority support", "3-week delivery"],
    accent: false,
  },
];

export default function Services() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Services"
          title="What We Build. What We Design."
          titleAccent="What We Automate."
          sub="Three core disciplines. One seamless team. Infinite possibilities for your business."
        />

        {/* Services detail */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-8">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 py-20 border-b border-white/[0.06] items-start reveal ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="font-mono text-[10px] text-amber tracking-[3px] mb-5">{s.num}</div>
                <div className="text-3xl mb-5">{s.icon}</div>
                <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-medium tracking-[-1.5px] text-snow mb-3">{s.title}</h2>
                <p className="font-display text-[16px] italic text-amber/70 mb-5">{s.tagline}</p>
                <p className="text-[14px] text-ash leading-[1.9] font-light mb-7">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {s.stack.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] font-mono text-[11px] text-silver">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-8 mb-8">
                  <div>
                    <div className="font-mono text-[10px] text-ash tracking-[1.5px] uppercase mb-1">Timeline</div>
                    <div className="text-[15px] font-medium text-snow">{s.timeline}</div>
                  </div>
                </div>
                </div>
                </div>
                <Link href="/contact" className="btn-amber inline-flex">
                  Start This Project <ArrowRight size={14} />
                </Link>
              </div>

              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="bg-carbon border border-white/[0.07] rounded-2xl p-8">
                  <div className="font-mono text-[10px] text-amber tracking-[2.5px] uppercase mb-6">What&apos;s Included</div>
                  <ul className="flex flex-col gap-4">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-ash font-light leading-[1.6]">
                        <CheckCircle2 size={15} className="text-amber/60 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section className="px-6 lg:px-12 py-24 bg-ink/40 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label justify-center mb-5">Pricing</div>
              <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-medium leading-[1.05] tracking-[-2px] text-snow">
                Simple, <em className="gradient-text not-italic">Transparent Pricing.</em>
              </h2>
              <p className="text-[16px] text-ash mt-4 font-light">No hidden fees. No surprises. Just honest prices.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {PRICING.map((p) => (
                <div
                  key={p.name}
                  className={`relative rounded-2xl p-8 flex flex-col gap-5 reveal transition-all duration-300 hover-lift ${
                    p.accent
                      ? "border border-amber/30 bg-amber/[0.04]"
                      : "border border-white/[0.07] bg-carbon"
                  }`}
                >
                  {p.accent && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber rounded-full font-mono text-[10px] text-obsidian font-semibold tracking-wider whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="font-mono text-[11px] text-amber tracking-[2px] uppercase">{p.name}</div>
                  <div className="font-display text-[52px] font-medium text-snow tracking-[-2px] leading-none">{p.price}</div>
                  <p className="text-[13px] text-ash font-light">{p.desc}</p>
                  <ul className="flex flex-col gap-3 flex-1">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[13px] text-silver font-light">
                        <CheckCircle2 size={13} className="text-amber/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-2 flex justify-center ${p.accent ? "btn-amber" : "btn-ghost"}`}
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-[14px] text-ash font-light">
              Need something custom?{" "}
              <Link href="/contact" className="text-amber hover:underline">Let&apos;s talk →</Link>
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
