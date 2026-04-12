"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, useMemo } from "react";
import { Navbar, Footer, FinalCTA, PageHero, useReveal } from "@/components/ui";

const ALL_PROJECTS = [
  { title: "Taskflow Platform", category: "SaaS", tags: ["Web App", "AI", "SaaS"], desc: "A full SaaS task management platform with AI-powered prioritisation, team collaboration, and real-time dashboards.", result: "+312% user signups in first 30 days", gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)", year: "2026" },
  { title: "SmartOnboard", category: "Fintech", tags: ["Mobile App", "Fintech"], desc: "A mobile-first fintech dashboard for tracking payments, invoices, and financial analytics across multiple currencies.", result: "Onboarding time reduced by 83%", gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d1b2a 100%)", year: "2025" },
  { title: "FreshMart Store", category: "E-commerce", tags: ["E-commerce", "AI Automation"], desc: "A full e-commerce platform with AI product recommendations, automated inventory, and WhatsApp ordering.", result: "+40% monthly revenue in 30 days", gradient: "linear-gradient(135deg, #0d1a0d 0%, #1a3a1a 50%, #0a2010 100%)", year: "2025" },
  { title: "MedSync Portal", category: "Healthcare", tags: ["Web App", "Healthcare"], desc: "A patient management portal with AI-powered onboarding, appointment scheduling, and automated follow-up workflows.", result: "83% reduction in admin overhead", gradient: "linear-gradient(135deg, #080808 0%, #0f2027 50%, #203a43 100%)", year: "2025" },
  { title: "LearnArc Platform", category: "EdTech", tags: ["SaaS", "EdTech", "AI"], desc: "An online learning platform with course creation tools, AI tutoring assistant, and student progress analytics.", result: "2,000+ students onboarded in month one", gradient: "linear-gradient(135deg, #1a0a0a 0%, #3a1a1a 50%, #1a0808 100%)", year: "2024" },
  { title: "PropVault CRM", category: "Real Estate", tags: ["Web App", "CRM"], desc: "A CRM and property management platform with automated client communication, document signing, and analytics.", result: "Agent productivity increased 70%", gradient: "linear-gradient(135deg, #080808 0%, #0a1628 50%, #0f2744 100%)", year: "2024" },
];

const FILTERS = ["All", "SaaS", "Fintech", "E-commerce", "Healthcare", "EdTech", "Real Estate"];

function MockupVisual() {
  return (
    <div className="w-[65%] bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-5">
      <div className="flex gap-1.5 mb-4">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <span key={c} className="w-2.5 h-2.5 rounded-full block" style={{ background: c }} />
        ))}
      </div>
      {[75, 50, 90, 35, 65].map((w, idx) => (
        <div key={idx} className="h-2 rounded-full mb-2.5 last:mb-0"
          style={{ width: `${w}%`, background: "rgba(255,255,255,0.07)" }} />
      ))}
    </div>
  );
}

export default function Work() {
  useReveal();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return ALL_PROJECTS;
    return ALL_PROJECTS.filter(
      (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      <main>
        <PageHero label="Our Work" title="Results, Not Just" titleAccent="Designs."
          sub="Every project we take on has one goal — to make a measurable difference. Here's the proof." />

        {/* Filter bar */}
        <div className="px-6 lg:px-12 pb-12 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center reveal">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setSelectedCategory(f)}
                className={`px-4 py-2 rounded-full border text-[13px] font-light transition-all duration-200 ${
                  selectedCategory === f
                    ? "border-amber/40 bg-amber/10 text-amber"
                    : "border-white/[0.08] text-ash hover:border-white/20 hover:text-snow"
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid — NO reveal class on cards so filter works */}
        <section className="px-6 lg:px-12 pb-32 max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-4xl mb-4 text-ash">◎</div>
              <p className="text-ash font-light">No projects found in this category yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map((p) => (
                <div key={p.title}
                  className="group rounded-2xl overflow-hidden border border-white/[0.07] transition-all duration-300 hover:border-amber/20 hover:-translate-y-1 cursor-pointer"
                  style={{ opacity: 1 }}>
                  {/* Visual */}
                  <div className="relative h-64 flex items-center justify-center overflow-hidden"
                    style={{ background: p.gradient }}>
                    <MockupVisual />
                    <div className="absolute top-4 right-4 bg-obsidian/80 border border-white/10 rounded-xl px-3 py-2">
                      <div className="font-mono text-[9px] text-amber tracking-wider uppercase mb-0.5">Result</div>
                      <div className="text-[11px] text-green-400 font-medium">{p.result}</div>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="bg-ink p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {p.tags.map((t) => (
                            <span key={t} className="px-2.5 py-1 rounded-full border border-amber/20 bg-amber/[0.06] font-mono text-[10px] text-amber/80">{t}</span>
                          ))}
                        </div>
                        <h3 className="font-display text-[22px] font-medium text-snow tracking-[-0.5px] mb-2">{p.title}</h3>
                        <p className="text-[13px] text-ash font-light leading-[1.7]">{p.desc}</p>
                      </div>
                      <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-ash group-hover:border-amber/40 group-hover:text-amber transition-all flex-shrink-0 mt-1">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}