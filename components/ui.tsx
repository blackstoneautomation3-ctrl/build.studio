"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

// ─── REVEAL HOOK ─────────────────────────────────────────────────────────────
export function useReveal() {
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

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
export function Navbar() {
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
        <Link href="/" className="font-body font-semibold text-[17px] text-snow tracking-tight">
          build<span className="text-amber">.</span>studio
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <Link
                href={`/${l.toLowerCase()}`}
                className="text-ash hover:text-snow transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-green-400 tracking-wider">AVAILABLE</span>
          </div>
          <Link href="/contact" className="btn-amber text-[13px] py-2.5 px-5">
            Let&apos;s Talk <ArrowRight size={14} />
          </Link>
        </div>

        <button className="lg:hidden text-snow p-1" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-ink/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l}
              href={`/${l.toLowerCase()}`}
              className="text-ash hover:text-snow text-lg font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </Link>
          ))}
          <Link href="/contact" className="btn-amber mt-2 justify-center">
            Let&apos;s Talk <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </nav>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export function Footer() {
  const NAV = ["Work", "Services", "About", "Process", "Blog", "Contact"];
  const SERVICES_LIST = ["Web Development", "Mobile Apps", "UX/UI Design", "AI Automation", "SaaS Products"];

  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-10 px-6 lg:px-12 bg-ink/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="font-body font-semibold text-xl text-snow mb-4">
              build<span className="text-amber">.</span>studio
            </div>
            <p className="text-[13px] text-ash font-light leading-[1.8] max-w-[220px] mb-6">
              Digital Products. Built Differently. Serving clients globally from Lagos to London.
            </p>
            <div className="flex gap-2">
              {["𝕏", "in", "ig", "gh"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[12px] text-ash hover:border-amber/30 hover:text-amber transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-snow tracking-[2.5px] uppercase mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {NAV.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-[13px] text-ash hover:text-snow transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-snow tracking-[2.5px] uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES_LIST.map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-[13px] text-ash hover:text-snow transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-snow tracking-[2.5px] uppercase mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 mb-6">
              <li><a href="mailto:hello@build.studio" className="text-[13px] text-ash hover:text-snow transition-colors font-light">hello@build.studio</a></li>
              <li><Link href="/contact" className="text-[13px] text-ash hover:text-snow transition-colors font-light">Book a Call →</Link></li>
              <li><a href="https://wa.me/2348166494104" target="_blank" rel="noopener noreferrer" className="text-[13px] text-ash hover:text-snow transition-colors font-light">WhatsApp</a></li>
            </ul>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/[0.06]">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] text-green-400 tracking-wider">Available for Projects</span>
            </div>
          </div>
        </div>

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

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
export function FinalCTA() {
  return (
    <section className="relative py-40 px-6 text-center overflow-hidden">
      <div className="glow-amber w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="glow-indigo w-[500px] h-[500px] bottom-0 right-0 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber/[0.06] opacity-50" style={{ animation: "border-spin 40s linear infinite" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-amber/[0.04]" style={{ animation: "border-spin 30s linear infinite reverse" }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="section-label mb-6 justify-center reveal">Start Today</div>
        <h2 className="font-display text-[clamp(44px,7vw,90px)] font-medium leading-[0.97] tracking-[-3.5px] text-snow mb-8 reveal">
          Ready to Build<br />
          <em className="gradient-text not-italic">Something Great?</em>
        </h2>
        <p className="text-[17px] text-ash max-w-md mx-auto mb-12 font-light leading-[1.8] reveal">
          Whether you have a fully formed idea or just a spark — we&apos;ll help you shape it, design it, build it, and launch it to the world.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 reveal">
          {["⚡ 3–7 Day Delivery", "🌍 12+ Countries", "✦ Free Strategy Call", "🔒 No Hidden Fees"].map((item) => (
            <span key={item} className="text-[13px] text-ash font-light">{item}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center reveal">
          <Link href="/contact" className="btn-amber text-[15px] py-4 px-8">
            Start a Project <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-ghost text-[15px] py-4 px-8">
            📅 Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE HERO ────────────────────────────────────────────────────────────────
interface PageHeroProps {
  label: string;
  title: string;
  titleAccent: string;
  sub: string;
  accentFirst?: boolean;
}

export function PageHero({ label, title, titleAccent, sub, accentFirst = false }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
      <div className="glow-amber w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-30" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="section-label justify-center mb-6">{label}</div>
        <h1 className="font-display text-[clamp(44px,7vw,88px)] font-medium leading-[1.0] tracking-[-3px] text-snow mb-6">
          {accentFirst ? (
            <><em className="gradient-text not-italic">{titleAccent}</em> {title}</>
          ) : (
            <>{title} <em className="gradient-text not-italic">{titleAccent}</em></>
          )}
        </h1>
        <p className="text-[17px] text-ash max-w-[520px] mx-auto leading-[1.8] font-light">{sub}</p>
      </div>
    </section>
  );
}
