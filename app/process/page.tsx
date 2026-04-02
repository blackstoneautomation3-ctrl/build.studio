"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar, Footer, FinalCTA, PageHero, useReveal } from "@/components/ui";

const STEPS = [
  { num: "01", day: "Day 1", duration: "30 min call", title: "Discovery", icon: "◎", desc: "We start with a focused 30-minute call to understand your idea, goals, users, and timeline. No templates. No assumptions. We listen first.", detail: "Before a single decision is made, we need to deeply understand your world. What problem are you solving? Who are your users? What does success look like in 6 months?", deliverable: "Project scope document + timeline" },
  { num: "02", day: "Day 1–2", duration: "1–2 days", title: "Strategy", icon: "◈", desc: "We map out the full architecture — pages, features, user flows, integrations. You see the full plan before we start building.", detail: "No guesswork. A detailed project roadmap covering every screen, every feature, every integration. You approve the plan before anything is built.", deliverable: "Sitemap, feature list, project roadmap" },
  { num: "03", day: "Day 2–5", duration: "3–5 days", title: "Design", icon: "✦", desc: "Every screen designed in Figma before development begins. You review, give feedback, and approve. Nothing moves forward without your sign-off.", detail: "High-fidelity mockups of every screen, complete with interactions and transitions. You'll see exactly what you're getting before a single line of code.", deliverable: "Full Figma design file + clickable prototype" },
  { num: "04", day: "Day 5–14", duration: "7–14 days", title: "Build", icon: "⚡", desc: "Our engineers bring the approved designs to life with clean, scalable, production-grade code. Weekly progress updates throughout.", detail: "Modern technologies — Next.js, React Native, Supabase, Node.js — to build products that are fast, secure, and scalable from day one.", deliverable: "Fully functional staging environment" },
  { num: "05", day: "Day 14–16", duration: "2–3 days", title: "Test & QA", icon: "◉", desc: "Rigorous testing across all devices, browsers, and scenarios. Every bug caught. Every detail polished before launch.", detail: "We test on all major browsers and devices, check every user flow, validate all integrations, and stress-test performance. Nothing ships until it's ready.", deliverable: "Bug-free, production-ready product" },
  { num: "06", day: "Day 16–18", duration: "1–2 days", title: "Launch", icon: "◆", desc: "Your product goes live — on time. Full handover with code, logins, and documentation. You own everything completely.", detail: "We handle deployment, domain setup, and final configuration. You receive a complete handover package — source code, credentials, documentation, and walkthrough.", deliverable: "Live product + full handover pack" },
];

const FAQS = [
  { q: "What if I need changes mid-project?", a: "Minor adjustments are handled at no extra cost. Significant scope changes are discussed openly and priced fairly before we proceed." },
  { q: "Do I own the code and design files?", a: "Yes, 100%. Once the project is complete and payment is settled, all source code, design files, and assets belong to you entirely." },
  { q: "What do I need to provide before we start?", a: "Just your brand content (text, logo if available), colors you like, and examples of websites or apps you admire. We handle everything else." },
  { q: "Do you offer post-launch support?", a: "Yes. All website projects include 30 days of free post-launch support. App projects include 60 days. Extended maintenance plans are also available." },
  { q: "Can you work with my existing team?", a: "Absolutely. We're comfortable working alongside your in-house team, handing off Figma files to your developers, or integrating into your workflow." },
  { q: "What time zone do you operate in?", a: "We're based in Lagos (WAT, UTC+1) but work with clients globally. We're flexible with US, UK, and European time zones." },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber/20 transition-colors">
      <button
        className="w-full flex items-center justify-between gap-4 p-7 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display text-[17px] font-medium text-snow tracking-[-0.3px]">{faq.q}</span>
        <ChevronRight size={18} className={`text-amber flex-shrink-0 transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="px-7 pb-7">
          <p className="text-[14px] text-ash font-light leading-[1.8]">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function Process() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Process"
          title="How We Turn Your Idea"
          titleAccent="Into a Product."
          sub="A clear, proven six-step process — designed to keep you informed, in control, and excited at every stage."
        />

        {/* Meta bar */}
        <div className="px-6 lg:px-12 pb-16 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-0 border border-white/[0.07] rounded-2xl overflow-hidden divide-x divide-white/[0.07] reveal">
            {[["16–18 Days", "Average Timeline"], ["Unlimited", "Revision Rounds"], ["30–60 Days", "Free Support After Launch"]].map(([val, lbl]) => (
              <div key={lbl} className="flex-1 min-w-[160px] text-center py-6 px-8">
                <div className="font-display text-[22px] font-medium text-snow gradient-text">{val}</div>
                <div className="font-mono text-[10px] text-ash tracking-[1.5px] uppercase mt-1">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <section className="px-6 lg:px-12 max-w-4xl mx-auto pb-8">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex gap-8 pb-16 reveal">
              {/* Left */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-amber/40 bg-obsidian flex items-center justify-center shadow-[0_0_20px_rgba(232,184,109,0.15)] z-10">
                  <span className="font-mono text-[11px] text-amber">{step.num}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 mt-3 bg-gradient-to-b from-amber/30 to-transparent" />
                )}
              </div>

              {/* Right */}
              <div className="pt-1.5 pb-4 flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-amber tracking-[2px] uppercase">{step.day}</span>
                  <span className="px-2.5 py-1 border border-white/[0.07] rounded font-mono text-[10px] text-ash">{step.duration}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl text-amber/70">{step.icon}</span>
                  <h2 className="font-display text-[clamp(22px,3vw,30px)] font-medium text-snow tracking-[-0.8px]">{step.title}</h2>
                </div>
                <p className="text-[15px] text-snow/70 leading-[1.8] font-light mb-3">{step.desc}</p>
                <p className="text-[13px] text-ash leading-[1.8] font-light mb-5">{step.detail}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-carbon border border-white/[0.07] rounded-xl font-mono text-[12px] text-ash">
                  <span className="text-amber">→</span> {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="px-6 lg:px-12 py-20 bg-ink/40 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-8 reveal">FAQs</div>
            <h2 className="font-display text-[clamp(32px,4vw,50px)] font-medium leading-[1.08] tracking-[-2px] text-snow mb-12 reveal">
              Common <em className="gradient-text not-italic">Questions.</em>
            </h2>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq) => (
                <div key={faq.q} className="reveal">
                  <FAQItem faq={faq} />
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-4 reveal">
              <p className="text-[15px] text-ash font-light">Still have questions?</p>
              <Link href="/contact" className="btn-amber">Ask Us Anything →</Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
