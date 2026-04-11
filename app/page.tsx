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
    price: "From $500",
  },
  {
    num: "02", icon: <Star size={20} />,
    title: "UX/UI Design",
    desc: "Great products don't just work — they feel effortless. We craft interfaces that are intuitive, visually stunning, and built to convert.",
    items: ["Product Design","Website UI Design","Mobile App Design","Design Systems","Prototyping"],
    price: "From $300",
  },
  {
    num: "03", icon: <Zap size={20} />,
    title: "AI Automation & Tools",
    desc: "We integrate AI and automation into your workflows, products, and customer experiences — saving time and unlocking revenue.",
    items: ["Custom AI Chatbots","Workflow Automation","OpenAI API Integration","Business Process Automation","AI-Powered Features"],
    price: "From $400",
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
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const FRAMES = 72;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / FRAMES;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * stat.target));
      if (frame >= FRAMES) { setCount(stat.target); setDone(true); clearInterval(timer); }
    }, 1800 / FRAMES);
    return () => clearInterval(timer);
  }, [started, stat.target]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-12 px-6 border-r border-[#1a1a1a] last:border-r-0 hover:bg-white/[0.015] transition-colors group">
      <div className="font-display font-bold text-[#f4f4f4] leading-none tracking-[-0.04em] relative" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}>
        {stat.prefix}{count}<span style={{ color: "#f0c060" }}>{stat.suffix}</span>
        {done && (
          <span className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-[#f0c060] to-transparent" style={{ animation: "count-underline 0.6s ease forwards", width: "100%" }} />
        )}
      </div>
      <div className="font-mono text-[11px] text-[#c8c8c8] tracking-[0.15em] uppercase mt-4">{stat.label}</div>
    </div>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 100); return () => clearTimeout(t); }, []);
  const show = (delay: number) => ({
    style: { transitionDelay: `${delay}ms` },
    className: `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
  });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-0 overflow-hidden bg-[#0a0a0a]">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(240,192,96,0.08) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(91,91,214,0.06) 0%, transparent 70%)" }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* Badge */}
      <div {...show(0)} className={`relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f0c060]/25 bg-[#f0c060]/[0.07] mb-10 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700`}>
        <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse" />
        <span className="font-mono text-[11px] text-[#f0c060] tracking-[0.2em] uppercase font-medium">Currently Accepting Projects</span>
      </div>

      {/* Brand lockup */}
      <div className={`relative z-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "100ms" }}>
        <div className="font-mono text-[12px] text-[#888] tracking-[0.35em] uppercase mb-5 font-medium">Digital Product Studio</div>

        {/* BUILD.STUDIO — dominant */}
        <h1
          className="font-display font-bold text-white leading-[0.92] tracking-[-0.04em] mb-5"
          style={{
            fontSize: "clamp(3.25rem, 10vw, 9rem)",
            textShadow: "0 0 80px rgba(240,192,96,0.15)",
          }}
        >
          BUILD.STUDIO
        </h1>

        {/* Tagline */}
        <p
          className="font-display font-semibold leading-[1.0] tracking-[-0.03em] mb-10"
          style={{
            fontSize: "clamp(1.75rem, 4.5vw, 4.5rem)",
            fontStyle: "italic",
            background: "linear-gradient(135deg, #f0cb8a 0%, #e8b86d 50%, #c4963a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Built Differently.
        </p>

        <p
          className="text-[#c8c8c8] max-w-[540px] mx-auto font-light mb-12 leading-[1.9]"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
        >
          We design, develop, and automate world-class digital products for startups,
          brands, and enterprises — wherever you are in the world.
        </p>

        {/* CTAs */}
        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "280ms" }}>
          <Link href="/contact" className="btn-amber" style={{ padding: "16px 36px", fontSize: "0.9375rem" }}>
            Start a Project <ArrowUpRight size={16} />
          </Link>
          <Link href="/work" className="btn-ghost" style={{ padding: "16px 36px", fontSize: "0.9375rem" }}>
            See Our Work
          </Link>
        </div>
      </div>

      {/* Premium Ticker */}
      <div
        className={`relative z-10 w-full overflow-hidden mt-20 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "450ms" }}
      >
        {/* Gold premium ticker bar */}
        <div className="relative py-3.5 border-t border-b border-[#f0c060]/15"
          style={{ background: "linear-gradient(135deg, rgba(240,192,96,0.06) 0%, rgba(240,192,96,0.03) 50%, rgba(240,192,96,0.06) 100%)" }}>
          {/* Soft edge fades */}
          <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #0a0a0a, transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #0a0a0a, transparent)" }} />
          <div className="animate-marquee">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="font-mono uppercase tracking-[0.18em] px-7 flex items-center gap-7 whitespace-nowrap font-medium"
                style={{ fontSize: "0.7rem", color: "#d4a851" }}>
                {item}
                <span style={{ color: "#f0c060", fontSize: "0.75rem", opacity: 0.6 }}>✦</span>
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
    <div className="border-t border-b border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1a1a1a]">
        {STATS.map((s, i) => <StatCard key={i} stat={s} />)}
      </div>
    </div>
  );
}

// ─── TRUSTED BY ──────────────────────────────────────────────────────────────
function TrustedBy() {
  return (
    <section className="py-20 px-6 lg:px-12 border-b border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 reveal">
          <p className="font-mono text-[11px] text-[#555] tracking-[0.25em] uppercase font-medium">
            Trusted by teams at world-class companies
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 reveal">
          {TRUSTED_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2.5 opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-default group"
              title={logo.name}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white text-[11px]"
                style={{ background: logo.color, filter: "grayscale(1) brightness(1.5)" }}
              >
                {logo.letter}
              </div>
              <span className="font-body font-semibold text-[#888] text-[15px] tracking-tight" style={{ filter: "grayscale(1)" }}>
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
    <section className="py-36 px-6 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <div className="section-label mb-5">What We Do</div>
          <h2 className="font-display font-bold text-white leading-[1.05] tracking-[-0.03em] max-w-xl"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}>
            Everything Your Product Needs —{" "}
            <em className="not-italic" style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Under One Roof.
            </em>
          </h2>
          <p className="text-[#a3a3a3] mt-4 font-light leading-[1.85] max-w-lg" style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)" }}>
            From the first wireframe to the final deployment — design, development, and intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-[1px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#1a1a1a]">
          {SERVICES.map((s) => (
            <div key={s.num} className="group bg-[#0a0a0a] hover:bg-[#0f0f0f] p-10 flex flex-col gap-6 transition-colors duration-300 reveal">
              <div className="font-mono text-[10px] text-[#f0c060] tracking-[0.2em]">{s.num}</div>
              <div className="w-11 h-11 rounded-xl bg-[#f0c060]/10 border border-[#f0c060]/20 flex items-center justify-center text-[#f0c060] group-hover:scale-105 transition-transform">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-white tracking-[-0.02em]" style={{ fontSize: "1.375rem" }}>{s.title}</h3>
              <p className="text-[14px] text-[#a3a3a3] leading-[1.85] font-light flex-1">{s.desc}</p>
              <ul className="flex flex-col gap-2.5 mt-1">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] text-[#c8c8c8] font-light">
                    <CheckCircle2 size={13} className="flex-shrink-0" style={{ color: "rgba(240,192,96,0.65)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1a]">
                <span className="font-mono text-[12px] text-[#f0c060]">{s.price}</span>
                <div className="w-8 h-8 rounded-full border border-[#222] flex items-center justify-center text-[#555] group-hover:border-[#f0c060]/30 group-hover:text-[#f0c060] transition-all">
                  <ArrowUpRight size={14} />
                </div>
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
    <section className="py-36 px-6 lg:px-12 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap reveal">
          <div>
            <div className="section-label mb-5">Selected Work</div>
            <h2 className="font-display font-bold text-white leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}>
              Products We&apos;re{" "}
              <em className="not-italic" style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Proud Of.
              </em>
            </h2>
            <p className="text-[#a3a3a3] mt-3 font-light" style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)" }}>
              Real results for real clients — not just beautiful designs.
            </p>
          </div>
          <Link href="/work" className="btn-ghost flex-shrink-0" style={{ fontSize: "0.875rem" }}>
            View All 6 Projects <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured 2 — large */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="group rounded-2xl overflow-hidden border border-[#1a1a1a] hover-lift cursor-pointer reveal block">
              <div className="relative h-72 flex items-center justify-center overflow-hidden" style={{ background: p.gradient }}>
                <div style={{ animation: "float 7s ease-in-out infinite" }} className="relative w-full flex justify-center">
                  <Mockup />
                </div>
                <div className="absolute top-4 right-4 bg-[#0a0a0a]/85 border border-white/10 rounded-xl px-3 py-2">
                  <div className="font-mono text-[9px] text-[#f0c060] tracking-wider uppercase mb-0.5">Result</div>
                  <div className="text-[11px] text-[#4ade80] font-medium">{p.result}</div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="bg-[#111] p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full border border-[#f0c060]/20 bg-[#f0c060]/[0.06] font-mono text-[10px] text-[#f0c060]/80">{t}</span>
                      ))}
                    </div>
                    <div className="font-mono text-[10px] text-[#f0c060] tracking-[0.15em] uppercase mb-2">{p.category} · {p.year}</div>
                    <h3 className="font-display font-semibold text-white tracking-[-0.02em]" style={{ fontSize: "1.375rem" }}>{p.title}</h3>
                    <p className="text-[13px] text-[#a3a3a3] font-light mt-2 leading-[1.7]">{p.desc}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-[#222] flex items-center justify-center text-[#555] group-hover:border-[#f0c060]/40 group-hover:text-[#f0c060] transition-all flex-shrink-0 mt-1">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Rest 4 — smaller grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="group rounded-xl overflow-hidden border border-[#1a1a1a] hover-lift cursor-pointer reveal block">
              <div className="relative h-40 flex items-center justify-center overflow-hidden" style={{ background: p.gradient }}>
                <Mockup lines={[70,40,85,30]} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="bg-[#111] p-5">
                <div className="font-mono text-[9px] text-[#f0c060] tracking-[0.12em] uppercase mb-1.5">{p.category}</div>
                <h3 className="font-display font-semibold text-white tracking-[-0.02em] mb-1" style={{ fontSize: "1.0625rem" }}>{p.title}</h3>
                <div className="text-[11px] text-[#4ade80] font-light">{p.result}</div>
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
    <section className="py-36 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal">
          <div className="relative">
            <div className="glow-amber w-80 h-80 -top-16 -left-16 opacity-25" />
            <div className="relative rounded-3xl bg-[#111] border border-[#1a1a1a] p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.07]"
                style={{ background: "radial-gradient(circle at top right, #f0c060, transparent 70%)" }} />
              <div className="w-20 h-20 rounded-2xl bg-[#f0c060]/10 border border-[#f0c060]/20 flex items-center justify-center mb-8">
                <span className="font-display text-3xl font-bold text-[#f0c060]">A</span>
              </div>
              <div className="font-mono text-[10px] text-[#f0c060] tracking-[0.2em] uppercase mb-3">Founder &amp; Creative Director</div>
              <h3 className="font-display font-bold text-white tracking-[-0.03em] mb-4" style={{ fontSize: "2.5rem" }}>Ayo</h3>
              <p className="text-[14px] text-[#a3a3a3] leading-[1.9] font-light mb-7">
                5+ years building web products, AI automation tools, and digital experiences at the highest level. Every project led with a bias for quality.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js","React Native","AI Integration","Product Strategy","UX Design"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full border border-[#222] bg-[#161616] font-mono text-[11px] text-[#a3a3a3]">{skill}</span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1a1a1a]">
                {[["5+","Years"],["150+","Projects"],["12+","Countries"]].map(([val,lbl]) => (
                  <div key={lbl}>
                    <div className="font-display font-bold leading-none" style={{ fontSize: "1.75rem", color: "#f0c060" }}>{val}</div>
                    <div className="font-mono text-[10px] text-[#666] tracking-wider uppercase mt-1">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="reveal">
          <div className="section-label mb-6">About BUILD.STUDIO</div>
          <h2 className="font-display font-bold text-white leading-[1.08] tracking-[-0.03em] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Built to Be{" "}
            <em className="not-italic" style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Different.</em>
          </h2>
          <div className="flex flex-col gap-5 text-[#a3a3a3] font-light leading-[1.9]" style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)" }}>
            <p>Too many businesses have been burned by agencies that over-promise, under-deliver, and disappear after the invoice is paid.</p>
            <p className="font-display font-medium text-[#c8c8c8] leading-[1.6]" style={{ fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)", fontStyle: "italic" }}>
              &ldquo;We built Build.Studio to be different.&rdquo;
            </p>
            <p>We believe great digital products should be accessible to every serious business — not just those with Silicon Valley budgets.</p>
            <p>Whatever your stage — if you&apos;re serious, we&apos;re in.</p>
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
    <section className="py-36 px-6 lg:px-12 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-5 justify-center">How We Work</div>
          <h2 className="font-display font-bold text-white leading-[1.05] tracking-[-0.03em] max-w-2xl mx-auto" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}>
            From Idea to Live Product{" "}
            <em className="not-italic" style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>in 16–18 Days.</em>
          </h2>
          <p className="text-[#a3a3a3] max-w-md mx-auto mt-5 font-light leading-[1.85]" style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)" }}>
            No surprises. No delays. A clear, proven path from idea to launch.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-6 gap-0 relative reveal">
          <div className="absolute top-5 left-[8%] right-[8%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(240,192,96,0.2), transparent)" }} />
          {PROCESS_STEPS.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center px-3">
              <div className="w-10 h-10 rounded-full border border-[#f0c060]/35 bg-[#0a0a0a] flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(240,192,96,0.12)]">
                <span className="font-mono text-[11px] text-[#f0c060]">{s.num}</span>
              </div>
              <div className="font-mono text-[9px] text-[#f0c060]/60 tracking-[0.15em] uppercase mb-2">{s.day}</div>
              <h3 className="font-display font-semibold text-white text-[1rem] mb-2 tracking-[-0.02em]">{s.title}</h3>
              <p className="text-[12px] text-[#a3a3a3] leading-[1.75] font-light">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.num} className="flex gap-5 reveal">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-[#f0c060]/35 bg-[#0a0a0a] flex items-center justify-center z-10">
                  <span className="font-mono text-[11px] text-[#f0c060]">{s.num}</span>
                </div>
                {i < PROCESS_STEPS.length - 1 && <div className="w-px flex-1 my-2 bg-gradient-to-b from-[#f0c060]/20 to-transparent" />}
              </div>
              <div className="pb-10 pt-1.5">
                <div className="font-mono text-[9px] text-[#f0c060]/60 tracking-[0.15em] uppercase mb-1">{s.day}</div>
                <h3 className="font-display font-semibold text-white mb-2" style={{ fontSize: "1.125rem" }}>{s.title}</h3>
                <p className="text-[13px] text-[#a3a3a3] leading-[1.8] font-light">{s.desc}</p>
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
    <section className="py-36 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-5 justify-center">Client Love</div>
          <h2 className="font-display font-bold text-white leading-[1.05] tracking-[-0.03em]" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}>
            Trusted by Founders &amp;{" "}
            <em className="not-italic" style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Brands Worldwide.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.initials} className="glass rounded-2xl p-8 flex flex-col gap-5 hover-lift reveal border border-[#1a1a1a]">
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => <span key={i} style={{ color: "#f0c060", fontSize: "13px" }}>★</span>)}
              </div>
              <div className="font-display text-[3.5rem] text-[#f0c060]/20 leading-none -mt-2">&ldquo;</div>
              <p className="font-display font-medium italic text-[#c8c8c8] leading-[1.65] tracking-[-0.01em] -mt-6" style={{ fontSize: "1.0625rem" }}>{t.quote}</p>
              <div className="flex items-center gap-3 mt-auto pt-5 border-t border-[#1a1a1a]">
                <div className="w-9 h-9 rounded-full bg-[#f0c060]/10 border border-[#f0c060]/20 flex items-center justify-center font-body font-semibold text-[12px] text-[#f0c060] flex-shrink-0">{t.initials}</div>
                <div>
                  <div className="text-[13px] font-medium text-white">{t.name}</div>
                  <div className="text-[11px] text-[#a3a3a3]">{t.role}</div>
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