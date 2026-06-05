"use client";

import Link from "next/link";
import {
  ArrowRight, Award, Globe, Users, TrendingUp,
  CheckCircle2, Zap, Heart, Shield
} from "lucide-react";

const MILESTONES = [
  { year: "2011", title: "Founded in Houston",          desc: "Started as a regional ground freight operator with 3 trucks." },
  { year: "2014", title: "Expanded to Air Freight",     desc: "Launched our first air freight corridor between Houston and Miami." },
  { year: "2017", title: "International Operations",    desc: "Opened offices in London, Dubai, and Lagos. 25+ countries served." },
  { year: "2020", title: "Digital Transformation",      desc: "Launched real-time tracking platform and customer portal." },
  { year: "2023", title: "50K Monthly Shipments",       desc: "Hit a major milestone — 50,000 shipments processed in a single month." },
  { year: "2026", title: "180+ Countries, 400 Staff",   desc: "Today we serve clients in 180+ countries with a global team of 400." },
];

const TEAM = [
  { name: "James Okafor",   role: "CEO & Co-Founder",           bio: "20+ years in global logistics. Former VP at DHL Supply Chain." },
  { name: "Priya Sharma",   role: "COO",                        bio: "Operations expert who rebuilt our delivery network from scratch." },
  { name: "Carlos Méndez",  role: "Head of Air Freight",        desc: "", bio: "IATA-certified freight specialist with 15 years of airline cargo experience." },
  { name: "Adaeze Nwosu",   role: "Head of Customs & Compliance", bio: "Licensed customs broker, expert in Africa and Middle East trade lanes." },
  { name: "Tom Whitfield",  role: "CTO",                        bio: "Built our tracking platform from the ground up. Previously at Amazon Logistics." },
  { name: "Sarah Kim",      role: "Head of Sales & Partnerships", bio: "Manages 200+ enterprise accounts across North America and Europe." },
];

const VALUES = [
  { icon: Zap,     title: "Speed Without Compromise",  desc: "We move fast without cutting corners. Every deadline is a commitment, not a suggestion." },
  { icon: Shield,  title: "Radical Transparency",      desc: "Live tracking, upfront pricing, instant updates. We never leave you guessing." },
  { icon: Heart,   title: "People First",              desc: "From our drivers to our clients — every relationship is built on respect and trust." },
  { icon: Globe,   title: "Global, Local",             desc: "We combine the reach of a global network with the care of a local team in every market." },
];

const CERTS = [
  "ISO 9001:2015 Certified",
  "IATA Cargo Agent",
  "C-TPAT Certified (US Customs)",
  "AEO Accredited (EU)",
  "TAPA Level A Certified",
  "GDP Compliant (Pharma)",
];

export default function AboutPage() {
  return (
    <main className="pt-[70px]">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/5"
        style={{ background: "linear-gradient(160deg, #0d1f35 0%, #07111f 100%)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-4">Our Story</p>
            <h1 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              We Started With 3 Trucks.<br />
              <span style={{ color: "#f97316" }}>Now We Move the World.</span>
            </h1>
            <p className="text-[#64748b] leading-relaxed mb-6 text-sm">
              SwiftRoute was founded in 2011 in Houston, Texas, by logistics veterans who were frustrated by the opacity and inefficiency of traditional freight companies. We set out to build something different — a logistics partner that combines the reliability of the world's biggest carriers with the transparency and responsiveness of a startup.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-8 text-sm">
              Today, 15 years later, we move over 50,000 shipments every month across 180+ countries, employing 400 people who genuinely care about getting your cargo there on time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/logistics/quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                Get a Quote <ArrowRight size={15} />
              </Link>
              <Link href="/logistics/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                Our Services
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "15+",   label: "Years in Business",    icon: Award     },
              { value: "180+",  label: "Countries Served",     icon: Globe     },
              { value: "400",   label: "Team Members",         icon: Users     },
              { value: "$2B+",  label: "Cargo Moved Annually", icon: TrendingUp },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] flex flex-col gap-3">
                <s.icon size={20} className="text-[#f97316]" />
                <div className="font-bold text-white text-2xl">{s.value}</div>
                <div className="text-[#64748b] text-xs leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">Our Journey</p>
            <h2 className="font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>15 Years of Growth</h2>
          </div>
          <div className="space-y-0">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                    {m.year.slice(2)}
                  </div>
                  {i < MILESTONES.length - 1 && (
                    <div className="w-px flex-1 bg-[#f97316]/15 my-2" style={{ minHeight: "40px" }} />
                  )}
                </div>
                <div className="pb-10">
                  <p className="text-[#f97316] text-xs font-mono mb-1">{m.year}</p>
                  <h3 className="text-white font-semibold text-base mb-1">{m.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/5" style={{ background: "#050e1a" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">What We Stand For</p>
            <h2 className="font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#f97316]/15 transition-all">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.15)" }}>
                  <v.icon size={20} className="text-[#f97316]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{v.title}</h3>
                <p className="text-[#64748b] text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">Leadership Team</p>
            <h2 className="font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>Meet the People Behind SwiftRoute</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#f97316]/10 transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4"
                  style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-white font-semibold text-base mb-0.5">{m.name}</h3>
                <p className="text-[#f97316] text-xs font-medium mb-3">{m.role}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/5" style={{ background: "#050e1a" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">Standards & Compliance</p>
          <h2 className="font-bold text-white mb-10" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
            Certified. Compliant. Trusted.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CERTS.map((c) => (
              <div key={c} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <CheckCircle2 size={15} className="text-[#f97316] shrink-0" />
                <span className="text-[#94a3b8] text-xs font-medium text-left">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Ready to Work With Us?
          </h2>
          <p className="text-[#64748b] mb-8 text-sm">
            Join 10,000+ businesses worldwide who trust SwiftRoute to move their cargo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/logistics/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(249,115,22,0.45)]"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", fontSize: "0.9375rem" }}>
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link href="/logistics/tracking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              style={{ fontSize: "0.9375rem" }}>
              Track a Shipment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
