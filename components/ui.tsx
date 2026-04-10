"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

// ─── REAL LINKS — update these with your actual URLs ───────────────────────
export const LINKS = {
  whatsapp:  "https://wa.me/2348166494104?text=Hi%2C%20I%27m%20interested%20in%20Build.Studio%20services",
  calendly:  "https://calendly.com/blackstoneautomation3/30min",
  email:     "mailto:hello@build.studio",
  twitter:   "https://x.com/buildstudio",
  linkedin:  "https://linkedin.com/company/buildstudio",
  instagram: "https://instagram.com/build.studio",
  github:    "https://github.com/blackstoneautomation3-ctrl",
};

// ─── REVEAL HOOK ────────────────────────────────────────────────────────────
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

// ─── NAVBAR ─────────────────────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Work", "Services", "About", "Process", "Blog"];

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">

        {/* Logo — BUILD.STUDIO */}
        <Link href="/" className="group flex items-center">
          <span
            className="font-display font-bold tracking-[0.04em] text-[#f4f4f4] group-hover:text-[#f0c060] transition-colors duration-300"
            style={{ fontSize: "1.0625rem" }}
          >
            BUILD<span style={{ color: "#f0c060" }}>.</span>STUDIO
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l}>
              <Link
                href={`/${l.toLowerCase()}`}
                className="text-[#a3a3a3] hover:text-[#f4f4f4] transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222] bg-[#111]">
            <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-[#4ade80] tracking-[0.15em] uppercase">Available</span>
          </div>
          <Link
            href="/contact"
            className="btn-amber text-[13px] py-2.5 px-5"
            style={{ padding: "10px 22px", fontSize: "13px" }}
          >
            Let&apos;s Talk <ArrowRight size={13} />
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-[#f4f4f4] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0d0d0d]/98 backdrop-blur-xl border-b border-[#1a1a1a] px-6 pt-4 pb-8 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l}
              href={`/${l.toLowerCase()}`}
              className="text-[#a3a3a3] hover:text-[#f4f4f4] text-lg font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-amber mt-2 justify-center"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </nav>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────
export function Footer() {
  const NAV = ["Work", "Services", "About", "Process", "Blog", "Contact"];
  const SERVICES_LIST = [
    "Web Development", "Mobile Apps", "UX/UI Design",
    "AI Automation", "SaaS Products", "E-commerce",
  ];

  return (
    <footer className="border-t border-[#1a1a1a] pt-16 pb-10 px-6 lg:px-12 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-display font-bold text-[1.0625rem] tracking-[0.04em] text-[#f4f4f4] inline-block mb-4">
              BUILD<span style={{ color: "#f0c060" }}>.</span>STUDIO
            </Link>
            <p className="text-[13px] text-[#a3a3a3] font-light leading-[1.8] max-w-[240px] mb-6">
              Digital Products. Built Differently.<br />
              Serving clients globally from Lagos to London.
            </p>
            <div className="flex gap-2">
              {[
                { label: "𝕏",  href: LINKS.twitter },
                { label: "in", href: LINKS.linkedin },
                { label: "ig", href: LINKS.instagram },
                { label: "gh", href: LINKS.github },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-[#222] bg-[#111] flex items-center justify-center text-[12px] text-[#a3a3a3] hover:border-[#f0c060]/30 hover:text-[#f0c060] transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] text-[#f4f4f4] tracking-[0.2em] uppercase mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3 list-none">
              {NAV.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-[13px] text-[#a3a3a3] hover:text-[#f4f4f4] transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] text-[#f4f4f4] tracking-[0.2em] uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-3 list-none">
              {SERVICES_LIST.map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-[13px] text-[#a3a3a3] hover:text-[#f4f4f4] transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] text-[#f4f4f4] tracking-[0.2em] uppercase mb-5">Get In Touch</h4>
            <ul className="flex flex-col gap-3 mb-6 list-none">
              <li><a href={LINKS.email} className="text-[13px] text-[#a3a3a3] hover:text-[#f4f4f4] transition-colors font-light">hello@build.studio</a></li>
              <li><a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#a3a3a3] hover:text-[#f4f4f4] transition-colors font-light">Book a Call →</a></li>
              <li><a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#a3a3a3] hover:text-[#f4f4f4] transition-colors font-light">WhatsApp</a></li>
            </ul>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/[0.06]">
              <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse" />
              <span className="font-mono text-[10px] text-[#4ade80] tracking-wider">Available for Projects</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[12px] text-[#666] font-light">
            © 2026 <span style={{ color: "#f0c060" }}>Build.Studio</span>. All rights reserved.
          </div>
          <div className="font-mono text-[10px] text-[#444] tracking-wider uppercase">
            Built with purpose. Delivered with pride.
          </div>
        </div>
      </div>

      {/* Floating WhatsApp — mobile only */}
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.529 5.845L0 24l6.335-1.51A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.37l-.36-.214-3.732.888.93-3.641-.233-.374A9.818 9.818 0 1112 21.818z"/>
        </svg>
      </a>
    </footer>
  );
}

// ─── FINAL CTA ───────────────────────────────────────────────────────────────
export function FinalCTA() {
  return (
    <section className="relative py-40 px-6 text-center overflow-hidden bg-[#0a0a0a]">
      <div className="glow-amber w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#f0c060]/[0.05] opacity-60"
        style={{ animation: "border-spin 50s linear infinite" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#f0c060]/[0.04]"
        style={{ animation: "border-spin 35s linear infinite reverse" }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="section-label mb-6 justify-center reveal">Start Today</div>
        <h2
          className="font-display font-bold text-[#f4f4f4] leading-[0.95] tracking-[-0.04em] mb-8 reveal"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
        >
          Ready to Build<br />
          <em
            className="not-italic"
            style={{
              background: "linear-gradient(135deg, #f0cb8a, #e8b86d, #c4963a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Something Great?
          </em>
        </h2>
        <p className="text-[#a3a3a3] max-w-[440px] mx-auto mb-12 font-light leading-[1.85] reveal"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>
          Whether you have a fully formed idea or just a spark — we&apos;ll help you
          shape it, design it, build it, and launch it to the world.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 mb-12 reveal">
          {["⚡ 3–7 Day Delivery", "🌍 12+ Countries", "✦ Free Strategy Call", "🔒 No Hidden Fees"].map((item) => (
            <span key={item} className="text-[13px] text-[#666] font-light">{item}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center reveal">
          <Link href="/contact" className="btn-amber" style={{ fontSize: "0.9375rem", padding: "16px 36px" }}>
            Start a Project <ArrowRight size={16} />
          </Link>
          <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "0.9375rem", padding: "16px 36px" }}>
            📅 Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE HERO (inner pages) ─────────────────────────────────────────────────
interface PageHeroProps {
  label: string;
  title: string;
  titleAccent: string;
  sub: string;
  accentFirst?: boolean;
}
export function PageHero({ label, title, titleAccent, sub, accentFirst = false }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden bg-[#0a0a0a]">
      <div className="glow-amber w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-25" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="section-label justify-center mb-6">{label}</div>
        <h1
          className="font-display font-bold text-[#f4f4f4] leading-[1.0] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
        >
          {accentFirst ? (
            <>
              <span style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {titleAccent}
              </span>{" "}{title}
            </>
          ) : (
            <>
              {title}{" "}
              <em
                className="not-italic"
                style={{ background: "linear-gradient(135deg, #f0cb8a, #e8b86d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {titleAccent}
              </em>
            </>
          )}
        </h1>
        <p className="text-[#a3a3a3] max-w-[520px] mx-auto leading-[1.85] font-light"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>
          {sub}
        </p>
      </div>
    </section>
  );
}