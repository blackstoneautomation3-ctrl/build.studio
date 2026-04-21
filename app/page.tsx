"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers, Zap, Star } from "lucide-react";
import { Navbar, Footer, FinalCTA, useReveal, LINKS } from "@/components/ui";

// ─── DATA ────────────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "Web Apps","Mobile Apps","SaaS Products","AI Automation",
  "UX/UI Design","E-commerce","Dashboards","AI Chatbots",
  "Next.js","React Native","Supabase","OpenAI API",
];

const TRUSTED_LOGOS = [
  { name: "Stripe",  letter: "S", color: "#635bff" },
  { name: "Notion",  letter: "N", color: "#fff" },
  { name: "Shopify", letter: "Sh", color: "#96bf48" },
  { name: "Slack",   letter: "Sl", color: "#4a154b" },
  { name: "Airbnb",  letter: "A", color: "#ff5a5f" },
  { name: "Netflix", letter: "N", color: "#e50914" },
];

const SERVICES = [
  {
    num: "01", icon: <Layers size={20} />,
    title: "Web & App Development",
    desc: "We build fast, scalable, and beautiful web and mobile applications that your users will love and your business will grow on.",
    items: ["Business Websites","Web Applications","Mobile Apps (iOS & Android)","SaaS Products","E-commerce Stores"],
  },
  {
    num: "02", icon: <Star size={20} />,
    title: "UX/UI Design",
    desc: "Great products don't just work — they feel effortless. We craft interfaces that are intuitive, visually stunning, and built to convert.",
    items: ["Product Design","Website UI Design","Mobile App Design","Design Systems","Prototyping"],
  },
  {
    num: "03", icon: <Zap size={20} />,
    title: "AI Automation & Tools",
    desc: "We integrate AI and automation into your workflows, products, and customer experiences — saving time and unlocking revenue.",
    items: ["Custom AI Chatbots","Workflow Automation","OpenAI API Integration","Business Process Automation","AI-Powered Features"],
  },
];

export const ALL_PROJECTS = [
  {
    slug: "taskflow-platform",
    title: "Taskflow Platform",
    category: "SaaS",
    tags: ["Web App","AI","SaaS"],
    industry: "Productivity",
    desc: "A full SaaS task management platform with AI-powered prioritisation, team collaboration, and real-time dashboards.",
    result: "+312% user signups in 30 days",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    year: "2026",
    tech: ["Next.js","Supabase","OpenAI","Stripe"],
  },
  {
    slug: "smartonboard",
    title: "SmartOnboard",
    category: "Fintech",
    tags: ["Mobile App","Fintech"],
    industry: "Finance",
    desc: "A mobile-first fintech dashboard for tracking payments, invoices, and financial analytics across multiple currencies.",
    result: "Onboarding reduced 83%",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d1b2a 100%)",
    year: "2025",
    tech: ["React Native","Node.js","PostgreSQL"],
  },
  {
    slug: "freshmart-store",
    title: "FreshMart Store",
    category: "E-commerce",
    tags: ["E-commerce","AI"],
    industry: "Retail",
    desc: "A full e-commerce platform with AI product recommendations, automated inventory, and WhatsApp ordering integration.",
    result: "+40% monthly revenue in 30 days",
    gradient: "linear-gradient(135deg, #0d1a0d 0%, #1a3a1a 50%, #0a2010 100%)",
    year: "2025",
    tech: ["Next.js","Shopify","OpenAI","WhatsApp API"],
  },
  {
    slug: "medsync-portal",
    title: "MedSync Portal",
    category: "Healthcare",
    tags: ["Web App","Healthcare"],
    industry: "Health",
    desc: "A patient management portal with AI-powered onboarding, appointment scheduling, and automated follow-up workflows.",
    result: "83% reduction in admin overhead",
    gradient: "linear-gradient(135deg, #080808 0%, #0f2027 50%, #203a43 100%)",
    year: "2025",
    tech: ["Next.js","Supabase","Twilio","Make.com"],
  },
  {
    slug: "learnarc-platform",
    title: "LearnArc Platform",
    category: "EdTech",
    tags: ["SaaS","EdTech","AI"],
    industry: "Education",
    desc: "An online learning platform with course creation tools, AI tutoring assistant, and student progress analytics.",
    result: "2,000+ students onboarded in month one",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #3a1a1a 50%, #1a0808 100%)",
    year: "2024",
    tech: ["Next.js","Supabase","OpenAI","Stripe"],
  },
  {
    slug: "propvault-crm",
    title: "PropVault CRM",
    category: "Real Estate",
    tags: ["Web App","CRM"],
    industry: "Real Estate",
    desc: "A CRM and property management platform with automated client communication, document signing, and analytics.",
    result: "Agent productivity increased 70%",
    gradient: "linear-gradient(135deg, #080808 0%, #0a1628 50%, #0f2744 100%)",
    year: "2024",
    tech: ["Next.js","PostgreSQL","Zapier","DocuSign"],
  },
];

const PROCESS_STEPS = [
  { num: "01", day: "Day 1",     title: "Discovery",   desc: "Deep dive into your goals, users, and business. No assumptions." },
  { num: "02", day: "Day 1–2",   title: "Strategy",    desc: "Full architecture map — pages, features, flows, integrations." },
  { num: "03", day: "Day 2–5",   title: "Design",      desc: "Every screen in Figma. You approve before we write a line of code." },
  { num: "04", day: "Day 5–14",  title: "Build",       desc: "Clean, scalable, production-grade code. Weekly progress updates." },
  { num: "05", day: "Day 14–16", title: "Test & QA",   desc: "Rigorous testing across all devices, browsers, and edge cases." },
  { num: "06", day: "Day 16–18", title: "Launch",      desc: "Live on time. Full handover. 30–60 days of free support." },
];

const TESTIMONIALS = [
  { quote: "Build.Studio didn't just build our platform — they transformed how we operate. Delivered in 2 weeks, flawlessly.", name: "Sarah M.",  role: "Founder, Taskflow SaaS",  initials: "SM", stars: 5 },
  { quote: "The design quality is on par with the best agencies in the US. Delivered faster and at a fraction of the cost.",   name: "James T.",  role: "CEO, NovaMed Health",     initials: "JT", stars: 5 },
  { quote: "Our conversion rate jumped 60% after the redesign. The best investment we made this entire year.",                 name: "Chioma A.", role: "E-commerce Brand Owner",  initials: "CA", stars: 5 },
  { quote: "They automated our entire client onboarding process. What used to take 3 hours now takes 10 minutes.",            name: "David K.",  role: "Operations Director",     initials: "DK", stars: 5 },
];

// ─── STAT COMPONENT ──────────────────────────────────────────────────────────
interface StatDef { target: number; prefix?: string; suffix: string; label: string; }
const STATS: StatDef[] = [
  { target: 150, suffix: "+",  label: "Products Delivered" },
  { target: 98,  suffix: "%",  label: "Client Satisfaction" },
  { target: 12,  suffix: "+",  label: "Countries Served" },
  { target: 2,   prefix: "$", suffix: "M+", label: "Revenue Generated" },
];

function StatCard({ stat }: { stat: StatDef }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 border-r border-[#2a2a2a] last:border-r-0 hover:bg-white/[0.015] transition-colors group">
      <div className="font-display font-bold text-[#ffffff] leading-none tracking-[-0.04em] relative" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}>
        {stat.prefix}{stat.target}<span style={{ color: "#f0c060" }}>{stat.suffix}</span>
        <span className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-[#f0c060] to-transparent" style={{ width: "100%" }} />
      </div>
      <div className="font-mono text-[11px] text-[#f0f0f0] tracking-[0.15em] uppercase mt-4">{stat.label}</div>
    </div>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')` }}
      >
        {/* Lighter charcoal overlay keeps image more visible */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.46) 0%, rgba(17,17,17,0.52) 60%, rgba(10,10,10,0.6) 100%)" }} />
        {/* Gentle center vignette for text readability */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(10,10,10,0.16) 0%, rgba(10,10,10,0.28) 48%, rgba(10,10,10,0.42) 100%)" }} />
        {/* Amber tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{ background: "linear-gradient(to top, rgba(240,192,96,0.08), transparent)" }} />
      </div>

      {/* Subtle top-left brand mark */}
      <div className="absolute top-7 left-6 md:top-10 md:left-10 z-20 pointer-events-none">
        <span
          className="font-display font-bold uppercase tracking-[0.06em] text-[var(--text-primary)]"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)", opacity: 0.05 }}
        >
          BUILD.STUDIO
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center w-full -mt-8 md:-mt-12">

        {/* Headline */}
        <div className={`space-y-2 md:space-y-4 mb-8 md:mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className={`font-display font-extrabold uppercase tracking-[0.02em] md:tracking-[0.05em] transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: 1.1, color: "#f0c060" }}>
            DIGITAL PRODUCTS.
          </p>
          <p className={`font-display font-extrabold uppercase tracking-[0.02em] md:tracking-[0.05em] transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: 1.1, color: "#f0c060" }}>
            BUILT DIFFERENTLY.
          </p>

          <p
            className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-[var(--text-secondary)] font-normal leading-[1.6] md:leading-[1.75]"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.4rem)" }}
          >
            We design, develop, and automate world-class digital products for startups,
            <br className="hidden sm:block" />
            brands, and enterprises <br className="hidden sm:block" />
            wherever you are in the world.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 mb-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            href="/contact"
            className="btn-amber min-h-[52px] justify-center"
            style={{ padding: "18px 44px", fontSize: "0.9375rem", borderRadius: "16px" }}
          >
            Start a Project <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/work"
            className="btn-ghost min-h-[52px] justify-center"
            style={{ padding: "18px 44px", fontSize: "0.9375rem", borderRadius: "16px", borderColor: "rgba(240,192,96,0.35)", color: "#ffffff", background: "rgba(255,255,255,0.02)" }}
          >
            See Our Work
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex flex-col items-center gap-2 mt-16 transition-all duration-700 delay-400 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <span className="font-mono text-[10px] text-[#b8b8b8] tracking-[0.2em] uppercase">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </div>

      {/* Bottom trust bar */}
      <div
        className={`absolute bottom-14 left-1/2 z-20 -translate-x-1/2 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 lg:gap-10 font-mono text-[9px] sm:text-[10px] text-[#b8b8b8] tracking-[0.1em] sm:tracking-[0.15em] uppercase text-center sm:text-left">
          <span>16-18 Day Delivery</span>
          <span className="text-[#f0c060]/30 hidden sm:inline">-</span>
          <span>Worldwide</span>
          <span className="text-[#f0c060]/30 hidden sm:inline">-</span>
          <span>Transparent Pricing</span>
        </div>
      </div>

      {/* Premium Ticker at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden">
        <div className="relative py-3 border-t border-[#f0c060]/10"
          style={{ background: "linear-gradient(135deg, rgba(240,192,96,0.05) 0%, rgba(240,192,96,0.02) 50%, rgba(240,192,96,0.05) 100%)" }}>
          <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.8), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, rgba(0,0,0,0.8), transparent)" }} />
          <div className="animate-marquee">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="font-mono uppercase tracking-[0.18em] px-7 flex items-center gap-7 whitespace-nowrap font-medium"
                style={{ fontSize: "0.65rem", color: "#c4963a" }}>
                {item}
                <span style={{ color: "#f0c060", opacity: 0.5 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── STATS ───────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <div className="border-t border-b border-[#2a2a2a] bg-[#111111]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1a1a1a]">
        {STATS.map((s, i) => <StatCard key={i} stat={s} />)}
      </div>
    </div>
  );
}

// ─── TRUSTED BY ──────────────────────────────────────────────────────────────
function TrustedBy() {
  return (
    <section className="py-24 px-6 lg:px-12 border-b border-[#2a2a2a] bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="font-mono text-[12px] md:text-[13px] text-[var(--text-secondary)] tracking-[0.22em] uppercase font-semibold">
            Trusted by teams at world-class companies
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:gap-x-16 lg:gap-y-10 reveal">
          {TRUSTED_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-3 opacity-85 hover:opacity-100 transition-opacity duration-300 cursor-default group"
              title={logo.name}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-[12px] shadow-sm border border-white/10"
                style={{ background: logo.color, filter: "grayscale(0.35) brightness(1.15)" }}
              >
                {logo.letter}
              </div>
              <span className="font-body font-semibold text-[var(--text-secondary)] text-base md:text-[17px] tracking-tight group-hover:text-[var(--text-primary)] transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section className="py-36 px-6 lg:px-12 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <div className="section-label mb-5">What We Do</div>
          <h2 className="font-display font-bold text-white leading-[1.05] tracking-[-0.03em] max-w-xl"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Everything Your Product Needs —{" "}
            <em className="not-italic" style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Under One Roof.
            </em>
          </h2>
          <p className="text-[#b8b8b8] mt-4 font-light leading-[1.85] max-w-lg" style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)" }}>
            From the first wireframe to the final deployment — design, development, and intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((s) => (
            <div key={s.num} className="group bg-[#111111] hover:bg-[#151515] p-6 sm:p-8 lg:p-10 flex flex-col gap-6 transition-all duration-300 reveal rounded-2xl border border-[#222222] hover:border-[#f0c060]/30 shadow-lg hover:shadow-xl">
              {/* Header */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] text-[#f0c060] tracking-[0.2em] font-bold">{s.num}</div>
                  <div className="w-12 h-12 rounded-xl bg-[#f0c060]/15 border border-[#f0c060]/30 flex items-center justify-center text-[#f0c060] group-hover:scale-105 transition-transform">
                    {s.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-white tracking-[-0.02em]" style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.8rem)" }}>{s.title}</h3>
                <p className="text-[#e8e8e8] leading-[1.8] font-medium" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>{s.desc}</p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] text-[#f0c060] tracking-[0.15em] uppercase font-bold">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {s.items.slice(0, 3).map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333333] text-[#d4d4d4] text-[11px] font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <h4 className="font-mono text-[10px] text-[#f0c060] tracking-[0.15em] uppercase font-bold">Timeline</h4>
                <p className="text-[#e8e8e8] text-sm">2-4 weeks</p>
              </div>

              {/* What's Included */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] text-[#f0c060] tracking-[0.15em] uppercase font-bold">What's Included</h4>
                <ul className="flex flex-col gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#e8e8e8] text-sm">
                      <CheckCircle2 size={14} className="flex-shrink-0 text-[#f0c060]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <Link href="/contact" className="w-full bg-[#f0c060] hover:bg-[#e8b86d] text-[#0a0a0a] font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center block hover:scale-105">
                  Start This Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ───────────────────────────────────────────────────────────────
function Mockup({ lines = [80, 55, 95, 40, 70] }: { lines?: number[] }) {
  return (
    <div className="w-[68%] bg-white/[0.05] border border-white/[0.1] rounded-2xl p-5 backdrop-blur-sm">
      <div className="flex gap-1.5 mb-4">
        {["#ff5f57","#febc2e","#28c840"].map((c) => <span key={c} className="w-2.5 h-2.5 rounded-full block" style={{ background: c }} />)}
      </div>
      {lines.map((w, i) => <div key={i} className="h-2 rounded-full mb-2.5 last:mb-0" style={{ width:`${w}%`, background:"rgba(255,255,255,0.07)" }} />)}
    </div>
  );
}

function Portfolio() {
  const featured = ALL_PROJECTS.slice(0, 2);
  const rest = ALL_PROJECTS.slice(2);

  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 lg:px-12 border-t" style={{ backgroundColor: "var(--ink)", borderColor: "var(--carbon)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20 gap-8 flex-wrap reveal">
          <div>
            <div className="section-label mb-5">Selected Work</div>
            <h2 className="font-display font-bold text-[var(--text-primary)] leading-[1.03] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)" }}>
              Selected Work
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-xl leading-[1.75]" style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}>
              Premium product execution with measurable outcomes, delivered with speed and precision.
            </p>
          </div>
          <Link href="/work" className="btn-ghost flex-shrink-0" style={{ fontSize: "0.875rem" }}>
            View All 6 Projects <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured 2 — large */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-10">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group portfolio-card rounded-2xl overflow-hidden border cursor-pointer reveal block"
              style={{ transitionDelay: `${120 + i * 90}ms`, borderColor: "var(--carbon)" }}
            >
              <div className="portfolio-media h-[20rem] sm:h-[22rem] flex items-center justify-center" style={{ background: p.gradient }}>
                <div style={{ animation: "float 7s ease-in-out infinite" }} className="portfolio-media-inner w-full flex justify-center">
                  <Mockup />
                </div>
              </div>
              <div className="p-7 md:p-8" style={{ backgroundColor: "var(--ink)" }}>
                <div className="flex items-stretch justify-between gap-5">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full border font-mono text-[10px]"
                          style={{ borderColor: "var(--amber-glow)", backgroundColor: "var(--amber-glow)", color: "var(--amber-bright)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase mb-2.5 text-[var(--amber-bright)]">{p.category} · {p.year}</div>
                    <h3 className="font-display font-bold text-[var(--text-primary)] tracking-[-0.02em]" style={{ fontSize: "1.55rem" }}>{p.title}</h3>
                    <p className="text-[13px] text-[var(--text-secondary)] mt-2.5 leading-[1.72]">{p.desc}</p>
                    <p className="text-[12px] font-semibold mt-4 text-[var(--green-live)]">Outcome: {p.result}</p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full border flex items-center justify-center text-[var(--text-muted)] transition-all duration-300 flex-shrink-0 self-center group-hover:text-[var(--amber-bright)] group-hover:border-[var(--amber-glow)]"
                    style={{ borderColor: "var(--smoke)" }}
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="py-36 px-6 lg:px-12 bg-[#111111] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal">
          <div className="section-label mb-6">About BUILD.STUDIO</div>
          <h2 className="font-display font-bold text-white leading-[1.08] tracking-[-0.03em] mb-8" style={{ fontSize: "clamp(2.3rem, 4.5vw, 3.6rem)" }}>
            Built to Be{" "}
            <em className="not-italic" style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", color: "white" }}>Different.</em>
          </h2>
          <div className="flex flex-col gap-5 text-[#b8b8b8] font-light leading-[1.9]" style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)" }}>
            <p>Too many businesses have been burned by agencies that over-promise, under-deliver, and disappear after the invoice is paid.</p>
            <p className="font-display font-medium text-white leading-[1.6]" style={{ fontSize: "clamp(1.2rem, 1.7vw, 1.4rem)" }}>
              &ldquo;We built Build.Studio to be different.&rdquo;
            </p>
            <p>We believe great digital products should be accessible to every serious business — not just those with Silicon Valley budgets.</p>
            <p>Whatever your stage &mdash; if you&apos;re serious, we&apos;re in.</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            <Link href="/about" className="btn-amber" style={{ padding: "14px 30px", fontSize: "0.9rem" }}>Meet the Team <ArrowRight size={14} /></Link>
            <Link href="/work" className="btn-ghost" style={{ padding: "14px 30px", fontSize: "0.9rem" }}>See Our Work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS (single — no duplication) ───────────────────────────────────────
function Process() {
  return (
    <section className="py-24 md:py-32 lg:py-36 px-6 lg:px-12 border-t" style={{ backgroundColor: "var(--ink)", borderColor: "var(--carbon)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 reveal">
          <div className="section-label mb-5 justify-center">How We Work</div>
          <h2 className="font-display font-bold text-[var(--text-primary)] leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto" style={{ fontSize: "clamp(2.2rem, 4.8vw, 4rem)" }}>
            A Precise Build System
            <span className="block mt-2 text-[var(--amber-light)]">from idea to launch in 16–18 days</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto mt-5 leading-[1.75]" style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.08rem)" }}>
            No surprises. No delays. A clear, founder-led system that keeps momentum from kickoff to go-live.
          </p>
          <div className="inline-flex mt-7 items-center gap-2.5 px-4 py-2 rounded-full border" style={{ borderColor: "var(--amber-glow)", backgroundColor: "var(--amber-glow)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber-bright)]" />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--amber-bright)]">16–18 Day Delivery Window</span>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative process-timeline">
          <div className="process-timeline-line" />
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.num} className="process-step-card reveal flex flex-col items-center text-center px-3 py-3 rounded-2xl" style={{ transitionDelay: `${100 + i * 70}ms` }}>
              <div className="w-11 h-11 rounded-full border flex items-center justify-center mb-6 z-10 process-step-orb" style={{ backgroundColor: "var(--obsidian)", borderColor: "var(--amber-glow)" }}>
                <span className="font-mono text-[11px] text-[var(--amber-bright)]">{s.num}</span>
              </div>
              <div className="font-mono text-[9px] text-[var(--amber-bright)] tracking-[0.15em] uppercase mb-2 opacity-75">{s.day}</div>
              <h3 className="font-display font-semibold text-[var(--text-primary)] text-[1.03rem] mb-2 tracking-[-0.02em]">{s.title}</h3>
              <p className="text-[12px] text-[var(--text-secondary)] leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.num} className="flex gap-5 reveal process-mobile-row" style={{ transitionDelay: `${80 + i * 65}ms` }}>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full border flex items-center justify-center z-10" style={{ backgroundColor: "var(--obsidian)", borderColor: "var(--amber-glow)" }}>
                  <span className="font-mono text-[11px] text-[var(--amber-bright)]">{s.num}</span>
                </div>
                {i < PROCESS_STEPS.length - 1 && <div className="w-px flex-1 my-2 process-mobile-connector" />}
              </div>
              <div className="pb-9 pt-1.5">
                <div className="font-mono text-[9px] text-[var(--amber-bright)] tracking-[0.15em] uppercase mb-1 opacity-75">{s.day}</div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2" style={{ fontSize: "1.125rem" }}>{s.title}</h3>
                <p className="text-[13px] text-[var(--text-secondary)] leading-[1.75]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="py-36 px-6 lg:px-12 bg-[#111111] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-5 justify-center">Client Love</div>
          <h2 className="font-display font-bold text-white leading-[1.05] tracking-[-0.03em]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Trusted by Founders &amp;{" "}
            <em className="not-italic" style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Brands Worldwide.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.initials} className="glass rounded-2xl p-6 lg:p-8 flex flex-col gap-4 lg:gap-5 hover-lift reveal border border-[#2a2a2a]">
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => <span key={i} style={{ color: "#f0c060", fontSize: "13px" }}>★</span>)}
              </div>
              <div className="font-display text-[2.5rem] lg:text-[3.5rem] text-[#f0c060]/20 leading-none -mt-2">&ldquo;</div>
              <p className="font-display font-medium italic text-[#d4d4d4] leading-[1.65] tracking-[-0.01em] -mt-6" style={{ fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)" }}>{t.quote}</p>
              <div className="flex items-center gap-3 mt-auto pt-4 lg:pt-5 border-t border-[#2a2a2a]">
                <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#f0c060]/10 border border-[#f0c060]/20 flex items-center justify-center font-body font-semibold text-[11px] lg:text-[12px] text-[#f0c060] flex-shrink-0">{t.initials}</div>
                <div>
                  <div className="text-[12px] lg:text-[13px] font-medium text-white">{t.name}</div>
                  <div className="text-[10px] lg:text-[11px] text-[#b8b8b8]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <TrustedBy />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}