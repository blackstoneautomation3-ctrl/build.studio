"use client";

import { ArrowRight } from "lucide-react";
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
      "Workflow automation setup",
      "AI integration into existing systems",
      "Business process automation",
      "Custom AI tool development",
      "API integration & automation",
      "AI-powered feature development",
      "Ongoing AI system optimization",
    ],
    timeline: "1–4 weeks",
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
                <div className="bg-carbon border border-white/[0.07] rounded-2xl p-8">
                  <div className="font-mono text-[10px] text-amber tracking-[3px] mb-5">{s.num}</div>
                  <div className="text-3xl mb-5">{s.icon}</div>
                  <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-medium tracking-[-1.5px] text-white mb-3">{s.title}</h2>
                  <p className="font-display text-[16px] italic text-amber/70 mb-5">{s.tagline}</p>
                  <p className="text-[14px] text-[#e8e8e8] leading-[1.9] font-light mb-7">{s.desc}</p>
                  
                  {/* Tech Stack */}
                  <div className="mb-7">
                    <div className="font-mono text-[10px] text-amber tracking-[2.5px] uppercase mb-3">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] font-mono text-[11px] text-[#f0f0f0]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Timeline */}
                  <div className="flex gap-8 mb-7">
                    <div>
                      <div className="font-mono text-[10px] text-[#e8e8e8] tracking-[1.5px] uppercase mb-1">Timeline</div>
                      <div className="text-[15px] font-medium text-white">{s.timeline}</div>
                    </div>
                  </div>
                  
                  {/* What's Included */}
                  <div className="mb-8">
                    <div className="font-mono text-[10px] text-amber tracking-[2.5px] uppercase mb-3">What&apos;s Included</div>
                    <ul className="flex flex-col gap-4">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[14px] text-[#e8e8e8] leading-[1.8]">
                          <span className="text-amber mt-1">â</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact" className="btn-amber inline-flex">
                    Start This Project <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}
