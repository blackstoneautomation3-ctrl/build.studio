"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, CheckCircle2,
  Layers, Zap, Star, Menu, X,
} from "lucide-react";

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface StatItem { value: string; label: string; }
interface ServiceItem { num: string; icon: React.ReactNode; title: string; desc: string; items: string[]; price: string; }
interface ProjectItem { title: string; category: string; result: string; gradient: string; year: string; }
interface ProcessStep { num: string; title: string; desc: string; day: string; }
interface TestimonialItem { quote: string; name: string; role: string; initials: string; stars: number; }

// ─── DATA ────────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { value: "150+", label: "Products Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Countries Served" },
  { value: "$2M+", label: "Revenue Generated" },
];

const TICKER_ITEMS = [
  "Web Apps", "Mobile Apps", "SaaS Products", "AI Automation",
  "UX/UI Design", "E-commerce", "Dashboards", "AI Chatbots",
  "Next.js", "React Native", "Supabase", "OpenAI API",
];

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    icon: <Layers size={20} />,
    title: "Web & App Development",
    desc: "We build fast, scalable, and beautiful web and mobile applications that your users will love and your business will grow on.",
    items: ["Business Websites", "Web Applications", "Mobile Apps (iOS & Android)", "SaaS Products", "E-commerce Stores"],
    price: "From $500",
  },
  {
    num: "02",
    icon: <Star size={20} />,
    title: "UX/UI Design",
    desc: "Great products don't just work — they feel effortless. We craft interfaces that are intuitive, visually stunning, and built to convert.",
    items: ["Product Design", "Website UI Design", "Mobile App Design", "Design Systems", "Prototyping"],
    price: "From $300",
  },
  {
    num: "03",
    icon: <Zap size={20} />,
    title: "AI Automation & Tools",
    desc: "We integrate AI and automation into your workflows, products, and customer experiences — saving time and unlocking revenue.",
    items: ["Custom AI Chatbots", "Workflow Automation", "OpenAI API Integration", "Business Process Automation", "AI-Powered Features"],
    price: "From $400",
  },
];

const PROJECTS: ProjectItem[] = [
  {
    title: "Taskflow Platform",
    category: "SaaS · Web App · AI",
    result: "+312% signups in 30 days",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    year: "2026",
  },
  {
    title: "SmartOnboard",
    category: "Fintech · Mobile App",
    result: "Onboarding reduced 83%",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d1b2a 100%)",
    year: "2025",
  },
];

const PROCESS_STEPS: ProcessStep[] = [
  { num: "01", title: "Discovery", desc: "Deep dive into your goals, users, and business. No assumptions.", day: "Day 1" },
  { num: "02", title: "Strategy", desc: "Full architecture map — pages, features, flows, integrations.", day: "Day 1–2" },
  { num: "03", title: "Design", desc: "Every screen in Figma. You approve before we write a line of code.", day: "Day 2–5" },
  { num: "04", title: "Build", desc: "Clean, scalable, production-grade code. Weekly progress updates.", day: "Day 5–14" },
  { num: "05", title: "Test & QA", desc: "Rigorous testing across all devices, browsers, and edge cases.", day: "Day 14–16" },
  { num: "06", title: "Launch", desc: "Live on time. Full handover. 30–60 days of free support.", day: "Day 16–18" },
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Build.Studio didn't just build our platform — they transformed how we operate. Delivered in 2 weeks, flawlessly.",
    name: "Sarah M.",
    role: "Founder, Taskflow SaaS",
    initials: "SM",
    stars: 5,
  },
  {
    quote: "The design quality is on par with the best agencies in the US. Delivered faster and at a fraction of the cost.",
    name: "James T.",
    role: "CEO, NovaMed Health",
    initials: "JT",
    stars: 5,
  },
  {
    quote: "Our conversion rate jumped 60% after the redesign. Best investment we made this entire year.",
    name: "Chioma A.",
    role: "E-commerce Brand Owner",
    initials: "CA",
    stars: 5,
  },
  {
    quote: "They automated our entire client onboarding process. What used to take 3 hours now takes 10 minutes.",
    name: "David K.",
    role: "Operations Director",
    initials: "DK",
    stars: 5,
  },
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Work", "Services", "About", "Process", "Blog"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-body font-semibold text-[17px] text-snow tracking-tight">
          build<span className="text-amber">.</span>studio
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`/${l.toLowerCase()}`}
                className="text-ash hover:text-snow transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-green-400 tracking-wider">AVAILABLE</span>
          </div>
          <a href="/contact" className="btn-amber text-[13px] py-2.5 px-5">
            Let&apos;s Talk <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-snow p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-ink/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l}
              href={`/${l.toLowerCase()}`}
              className="text-ash hover:text-snow text-lg font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a href="/contact" className="btn-amber mt-2 justify-center">
            Let&apos;s Talk <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-0 overflow-hidden">
      {/* Ambient glows */}
      <div className="glow-amber w-[700px] h-[700px] -top-32 left-1/2 -translate-x-1/2 opacity-50" />
      <div className="glow-indigo w-[500px] h-[500px] bottom-0 right-0 opacity-40" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Badge */}
      <div
        className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber/20 bg-amber/[0.06] mb-10"
        style={{ animation: "fade-in 0.6s ease forwards" }}
      >
        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        <span className="font-mono text-[11px] text-amber/80 tracking-[3px] uppercase">
          Currently accepting projects
        </span>
      </div>

      {/* Headline */}
      <h1
        className="relative z-10 font-display text-[clamp(52px,9vw,120px)] font-medium leading-[0.95] tracking-[-4px] text-snow max-w-5xl mb-8"
        style={{ animation: "fade-up 0.8s ease 0.1s both" }}
      >
        Digital Products.
        <br />
        <em className="gradient-text not-italic">Built Differently.</em>
      </h1>

      {/* Sub */}
      <p
        className="relative z-10 text-[17px] text-ash max-w-[520px] leading-[1.8] font-light mb-12"
        style={{ animation: "fade-up 0.8s ease 0.2s both" }}
      >
        We design, develop, and automate world-class web and mobile products
        for startups, brands, and enterprises — wherever you are in the world.
      </p>

      {/* CTAs */}
      <div
        className="relative z-10 flex flex-wrap gap-3 justify-center mb-20"
        style={{ animation: "fade-up 0.8s ease 0.3s both" }}
      >
        <a href="/work" className="btn-amber">
          See Our Work <ArrowUpRight size={15} />
        </a>
        <a href="/contact" className="btn-ghost">
          Start a Project
        </a>
      </div>

      {/* Marquee ticker */}
      <div
        className="relative z-10 w-full overflow-hidden border-t border-b border-white/[0.06] py-4"
        style={{ animation: "fade-in 0.8s ease 0.5s both" }}
      >
        <div className="animate-marquee">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-mono text-[11px] text-ash uppercase tracking-[2px] px-8 flex items-center gap-8 whitespace-nowrap"
            >
              {item}
              <span className="text-amber/40 text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""), 10);
  const count = useCountUp(numericValue, 1800, started);
  const suffix = stat.value.replace(/[0-9]/g, "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-10 px-6 border-r border-white/[0.06] last:border-r-0 hover:bg-white/[0.02] transition-colors"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="font-display text-[clamp(36px,4vw,54px)] font-medium text-snow tracking-[-2px] leading-none">
        {suffix.startsWith("$") ? `$${count}` : count}
        <span className="gradient-text">
          {suffix.startsWith("$") ? suffix.slice(1) : suffix}
        </span>
      </div>
      <div className="font-mono text-[11px] text-ash tracking-[1.5px] uppercase mt-3">
        {stat.label}
      </div>
    </div>
  );
}

function SocialProofBar() {
  return (
    <div className="border-t border-b border-white/[0.06] bg-ink/50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
        {STATS.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-16 reveal">
        <div className="section-label mb-5">What We Do</div>
        <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-medium leading-[1.05] tracking-[-2px] text-snow max-w-xl">
          Everything Your Product Needs —{" "}
          <em className="gradient-text not-italic">Under One Roof.</em>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-[1px] bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
        {SERVICES.map((s) => (
          <div
            key={s.num}
            className="group relative bg-obsidian hover:bg-carbon p-10 transition-colors duration-300 flex flex-col gap-6 reveal"
          >
            {/* Number */}
            <div className="font-mono text-[10px] text-amber tracking-[3px]">{s.num}</div>

            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center text-amber">
              {s.icon}
            </div>

            {/* Title */}
            <h3 className="font-display text-[22px] font-medium text-snow tracking-[-0.5px]">
              {s.title}
            </h3>

            {/* Desc */}
            <p className="text-[14px] text-ash leading-[1.8] font-light">{s.desc}</p>

            {/* List */}
            <ul className="flex flex-col gap-2 mt-1 flex-1">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[13px] text-silver font-light">
                  <CheckCircle2 size={13} className="text-amber/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <span className="font-mono text-[12px] text-amber">{s.price}</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-ash group-hover:border-amber/30 group-hover:text-amber transition-all duration-300">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-white/[0.07] hover-lift cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual */}
      <div
        className="relative h-72 overflow-hidden flex items-center justify-center"
        style={{ background: project.gradient }}
      >
        {/* Floating UI mockup */}
        <div
          className={`relative w-[70%] transition-transform duration-700 ${hovered ? "-translate-y-2" : ""}`}
          style={{ animation: "float 7s ease-in-out infinite" }}
        >
          <div className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] rounded-2xl p-5">
            <div className="flex gap-1.5 mb-4">
              {["#ff5f57","#febc2e","#28c840"].map((c) => (
                <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            {[80, 55, 95, 40, 70].map((w, i) => (
              <div
                key={i}
                className="h-2 rounded-full mb-2.5 last:mb-0"
                style={{ width: `${w}%`, background: "rgba(255,255,255,0.08)" }}
              />
            ))}
          </div>
          {/* Floating card */}
          <div className="absolute -top-4 -right-4 bg-obsidian/90 border border-white/10 rounded-xl px-3 py-2">
            <div className="font-mono text-[9px] text-amber tracking-wider uppercase mb-0.5">Result</div>
            <div className="text-[11px] text-green-400 font-medium">{project.result}</div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="bg-ink p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] text-amber tracking-[2px] uppercase mb-2">
              {project.category} · {project.year}
            </div>
            <h3 className="font-display text-[22px] font-medium text-snow tracking-[-0.5px]">
              {project.title}
            </h3>
          </div>
          <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-ash group-hover:border-amber/40 group-hover:text-amber transition-all duration-300 flex-shrink-0 mt-1">
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptWork() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16 gap-6 flex-wrap reveal">
        <div>
          <div className="section-label mb-5">Selected Work</div>
          <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-medium leading-[1.05] tracking-[-2px] text-snow">
            Products We&apos;re <em className="gradient-text not-italic">Proud Of.</em>
          </h2>
        </div>
        <a href="/work" className="btn-ghost text-sm flex-shrink-0">
          View All Work <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.title} className="reveal">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-ink/40 border-t border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: founder card */}
        <div className="reveal">
          <div className="relative">
            {/* Glow */}
            <div className="glow-amber w-96 h-96 -top-20 -left-20 opacity-30" />

            <div className="relative border-gradient rounded-3xl bg-carbon p-10 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{ background: "radial-gradient(circle at top right, var(--amber), transparent 70%)" }} />

              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-amber/15 border border-amber/25 flex items-center justify-center mb-8">
                <span className="font-display text-3xl font-medium text-amber">A</span>
              </div>

              <div className="font-mono text-[10px] text-amber tracking-[3px] uppercase mb-3">
                Founder & Creative Director
              </div>
              <h3 className="font-display text-4xl font-medium text-snow tracking-[-1px] mb-4">Ayo</h3>
              <p className="text-[14px] text-ash leading-[1.9] font-light mb-8">
                5+ years building web products, AI automation tools, and digital experiences
                at the highest level. Every project led with a bias for quality and a deep
                understanding of what clients actually need to grow.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React Native", "AI Integration", "Product Strategy", "UX Design"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] font-mono text-[11px] text-silver"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/[0.06]">
                {[["5+", "Years"], ["150+", "Projects"], ["12+", "Countries"]].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div className="font-display text-2xl font-medium text-snow gradient-text">{val}</div>
                    <div className="font-mono text-[10px] text-ash tracking-wider uppercase mt-0.5">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="reveal">
          <div className="section-label mb-6">About Build.Studio</div>
          <h2 className="font-display text-[clamp(34px,4vw,52px)] font-medium leading-[1.08] tracking-[-2px] text-snow mb-8">
            Built to Be{" "}
            <em className="gradient-text not-italic">Different.</em>
          </h2>
          <div className="flex flex-col gap-5 text-[15px] text-ash leading-[1.9] font-light">
            <p>
              Too many businesses have been burned by agencies that over-promise,
              under-deliver, and disappear after the invoice is paid.
            </p>
            <p className="font-display text-[19px] font-medium italic text-snow/80 leading-[1.5] -mx-0.5">
              &ldquo;We built Build.Studio to be different.&rdquo;
            </p>
            <p>
              We believe great digital products should be accessible to every serious
              business — not just those with Silicon Valley budgets. World-class design,
              clean engineering, and intelligent automation delivered at honest prices.
            </p>
            <p>
              Startups raising their first round. Established businesses going digital.
              Solo founders turning ideas into real products. Whatever your stage — if
              you&apos;re serious, we&apos;re in.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href="/about" className="btn-amber">
              Meet the Team <ArrowRight size={14} />
            </a>
            <a href="/work" className="btn-ghost">
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20 reveal">
        <div className="section-label mb-5 justify-center">How We Work</div>
        <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-medium leading-[1.05] tracking-[-2px] text-snow max-w-2xl mx-auto">
          A Process Designed{" "}
          <em className="gradient-text not-italic">for Results.</em>
        </h2>
        <p className="text-[16px] text-ash max-w-md mx-auto mt-5 font-light leading-[1.8]">
          No surprises. No delays. Just a clear, proven path from idea to launch — in 16–18 days.
        </p>
      </div>

      {/* Desktop timeline */}
      <div className="hidden lg:grid grid-cols-6 gap-0 relative">
        {/* Connecting line */}
        <div className="absolute top-[19px] left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

        {PROCESS_STEPS.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center px-3 reveal">
            {/* Circle */}
            <div className="relative mb-6 z-10">
              <div className="w-10 h-10 rounded-full border border-amber/40 bg-obsidian flex items-center justify-center shadow-[0_0_20px_rgba(232,184,109,0.2)]">
                <span className="font-mono text-[11px] text-amber">{step.num}</span>
              </div>
            </div>
            <div className="font-mono text-[9px] text-amber/60 tracking-[2px] uppercase mb-2">{step.day}</div>
            <h3 className="font-display text-[17px] font-medium text-snow mb-2 tracking-[-0.3px]">{step.title}</h3>
            <p className="text-[12px] text-ash leading-[1.7] font-light">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile timeline */}
      <div className="lg:hidden flex flex-col gap-0">
        {PROCESS_STEPS.map((step) => (
          <div key={step.num} className="flex gap-5 reveal">
            {/* Left: number + line */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-amber/40 bg-obsidian flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(232,184,109,0.15)]">
                <span className="font-mono text-[11px] text-amber">{step.num}</span>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="w-px flex-1 bg-gradient-to-b from-amber/30 to-transparent my-2" />
              )}
            </div>
            {/* Right: content */}
            <div className="pb-8 pt-1.5">
              <div className="font-mono text-[9px] text-amber/60 tracking-[2px] uppercase mb-1">{step.day}</div>
              <h3 className="font-display text-[18px] font-medium text-snow mb-2 tracking-[-0.3px]">{step.title}</h3>
              <p className="text-[13px] text-ash leading-[1.8] font-light">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: TestimonialItem }) {
  return (
    <div className="glass rounded-2xl p-8 flex flex-col gap-5 hover-lift reveal border border-white/[0.07]">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} size={13} className="text-amber fill-amber" />
        ))}
      </div>

      {/* Quote mark */}
      <div className="font-display text-6xl text-amber/30 leading-none -mt-2">&ldquo;</div>

      {/* Text */}
      <p className="font-display text-[17px] font-medium italic text-snow/80 leading-[1.6] tracking-[-0.2px] -mt-5">
        {t.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/[0.06]">
        <div className="w-9 h-9 rounded-full bg-amber/15 border border-amber/25 flex items-center justify-center font-body font-semibold text-[12px] text-amber">
          {t.initials}
        </div>
        <div>
          <div className="text-[13px] font-medium text-snow">{t.name}</div>
          <div className="text-[11px] text-ash">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-ink/40 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-5 justify-center">Client Love</div>
          <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-medium leading-[1.05] tracking-[-2px] text-snow">
            Trusted by Founders &{" "}
            <em className="gradient-text not-italic">Brands Worldwide.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-40 px-6 text-center overflow-hidden">
      {/* Glows */}
      <div className="glow-amber w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="glow-indigo w-[500px] h-[500px] bottom-0 right-0 opacity-30" />

      {/* Rotating ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber/[0.06] opacity-50"
        style={{ animation: "border-spin 40s linear infinite" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-amber/[0.04]"
        style={{ animation: "border-spin 30s linear infinite reverse" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="section-label mb-6 justify-center reveal">Start Today</div>
        <h2
          className="font-display text-[clamp(44px,7vw,90px)] font-medium leading-[0.97] tracking-[-3.5px] text-snow mb-8 reveal"
        >
          Ready to Build
          <br />
          <em className="gradient-text not-italic">Something Great?</em>
        </h2>
        <p className="text-[17px] text-ash max-w-md mx-auto mb-12 font-light leading-[1.8] reveal">
          Whether you have a fully formed idea or just a spark — we&apos;ll help you
          shape it, design it, build it, and launch it to the world.
        </p>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 reveal">
          {[
            "⚡ 3–7 Day Delivery",
            "🌍 12+ Countries",
            "✦ Free Strategy Call",
            "🔒 No Hidden Fees",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[13px] text-ash font-light">
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center reveal">
          <a href="/contact" className="btn-amber text-[15px] py-4 px-8">
            Start a Project <ArrowRight size={16} />
          </a>
          <a href="/contact" className="btn-ghost text-[15px] py-4 px-8">
            📅 Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const NAV = ["Work", "Services", "About", "Process", "Blog", "Contact"];
  const SERVICES_LIST = ["Web Development", "Mobile Apps", "UX/UI Design", "AI Automation", "SaaS Products"];

  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-10 px-6 lg:px-12 bg-ink/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="font-body font-semibold text-xl text-snow mb-4">
              build<span className="text-amber">.</span>studio
            </div>
            <p className="text-[13px] text-ash font-light leading-[1.8] max-w-[220px] mb-6">
              Digital Products. Built Differently. Serving clients globally from Lagos to London.
            </p>
            <div className="flex gap-2">
              {["𝕏", "in", "ig", "gh"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[12px] text-ash hover:border-amber/30 hover:text-amber transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] text-snow tracking-[2.5px] uppercase mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {NAV.map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="text-[13px] text-ash hover:text-snow transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] text-snow tracking-[2.5px] uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES_LIST.map((item) => (
                <li key={item}>
                  <a href="/services" className="text-[13px] text-ash hover:text-snow transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] text-snow tracking-[2.5px] uppercase mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                { label: "hello@build.studio", href: "mailto:hello@build.studio" },
                { label: "Book a Call →", href: "/contact" },
                { label: "WhatsApp", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[13px] text-ash hover:text-snow transition-colors font-light">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/[0.06]">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] text-green-400 tracking-wider">Available for Projects</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[12px] text-ash/60 font-light">
            © 2026 <span className="text-amber/70">Build.Studio</span>. All rights reserved.
          </div>
          <div className="font-mono text-[10px] text-ash/40 tracking-wider uppercase">
            Built with purpose. Delivered with pride.
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <Services />
        <ConceptWork />
        <About />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
