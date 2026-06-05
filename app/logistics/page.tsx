"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, Package, Truck, Plane, Ship, Warehouse, FileCheck,
  Clock, Globe, Shield, Headphones, CheckCircle2, Star, ChevronRight,
  MapPin, Search
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "50K+",  label: "Monthly Shipments" },
  { value: "99.8%", label: "On-Time Delivery" },
  { value: "180+",  label: "Countries Served" },
  { value: "24/7",  label: "Live Support" },
];

const SERVICES = [
  { icon: Plane,     title: "Air Freight",       desc: "Priority air cargo to any destination worldwide. Fastest transit times guaranteed." },
  { icon: Ship,      title: "Ocean Freight",      desc: "Full container and LCL ocean shipping for large volume cargo at competitive rates." },
  { icon: Truck,     title: "Ground Transport",   desc: "Nationwide road freight with real-time GPS tracking and flexible scheduling." },
  { icon: Package,   title: "Express Delivery",   desc: "Same-day and next-day courier for urgent documents and small parcels." },
  { icon: Warehouse, title: "Warehousing",         desc: "Secure, climate-controlled storage with inventory management and order fulfillment." },
  { icon: FileCheck, title: "Customs Clearance",  desc: "Expert customs brokerage to ensure smooth cross-border movement of goods." },
];

const WHY_US = [
  { icon: Clock,       title: "Speed You Can Count On",    desc: "Industry-leading transit times backed by a network of 8,000+ carriers and 200 owned vehicles." },
  { icon: Globe,       title: "Truly Global Reach",        desc: "Active trade lanes in 180+ countries with local expertise in every major market." },
  { icon: Shield,      title: "Fully Insured",             desc: "Every shipment is covered up to $100,000. File a claim in 48 hours, no questions asked." },
  { icon: Headphones,  title: "Dedicated Support",         desc: "A real human answers your call — day or night, 365 days a year." },
];

const TESTIMONIALS = [
  { quote: "SwiftRoute cut our cross-Atlantic freight time from 18 days to 9. That alone saved us $200K last quarter.", name: "Marcus R.", role: "VP of Supply Chain, TechNova Inc.", stars: 5 },
  { quote: "Their customs team handled our complex pharmaceutical import flawlessly. Zero delays at the border.", name: "Aisha T.",  role: "COO, MedDirect Global",            stars: 5 },
  { quote: "Best warehouse partner we've had. Real-time inventory visibility changed how we manage our business.", name: "Carlos E.", role: "Founder, FreshBox Foods",           stars: 5 },
];

const DESTINATIONS = [
  { city: "New York",  code: "JFK", flag: "🇺🇸" },
  { city: "London",    code: "LHR", flag: "🇬🇧" },
  { city: "Dubai",     code: "DXB", flag: "🇦🇪" },
  { city: "Singapore", code: "SIN", flag: "🇸🇬" },
  { city: "Lagos",     code: "LOS", flag: "🇳🇬" },
  { city: "Sydney",    code: "SYD", flag: "🇦🇺" },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Hero() {
  const [visible, setVisible] = useState(false);
  const [trackId, setTrackId] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[70px]">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #07111f 0%, #0d2040 40%, #0a1830 70%, #07111f 100%)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#f97316 1px,transparent 1px),linear-gradient(90deg,#f97316 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f97316]/20 bg-[#f97316]/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-[#f97316] text-xs font-mono font-medium tracking-widest uppercase">
              Real-time global tracking available
            </span>
          </div>

          <h1 className="font-bold text-white mb-6 leading-[1.08]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Global Logistics,{" "}
            <span style={{ color: "#f97316" }}>Simplified.</span>
          </h1>
          <p className="text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
            From local deliveries to intercontinental freight — SwiftRoute moves your cargo
            faster, safer, and smarter. Track every package in real time.
          </p>
        </div>

        {/* Tracking widget */}
        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-3 flex gap-2 mb-10 backdrop-blur-sm">
            <input
              type="text"
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
              placeholder="Enter tracking number (e.g. SR-2026-001)"
              className="flex-1 bg-transparent text-white placeholder-[#475569] text-sm px-4 py-3 focus:outline-none"
            />
            <Link
              href={`/logistics/tracking${trackId ? `?id=${encodeURIComponent(trackId)}` : ""}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
            >
              <Search size={15} />
              Track
            </Link>
          </div>

          <p className="text-[#475569] text-xs mb-10">
            Try: SR-2026-001 · SR-2026-002 · SR-2026-003 · SR-2026-004 · SR-2026-005
          </p>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link href="/logistics/quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(249,115,22,0.45)] hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", fontSize: "0.9375rem" }}>
            Get Instant Quote <ArrowRight size={16} />
          </Link>
          <Link href="/logistics/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            style={{ fontSize: "0.9375rem" }}>
            Explore Services <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[11px] text-[#94a3b8] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#f97316] to-transparent" />
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div style={{ background: "#050e1a" }} className="border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
        {STATS.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-10 px-6">
            <div className="font-bold text-white mb-1" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: i % 2 === 0 ? "#ffffff" : "#f97316" }}>
              {s.value}
            </div>
            <div className="text-[#64748b] text-xs font-medium tracking-widest uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">What We Do</p>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
            End-to-End Logistics Solutions
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto text-sm leading-relaxed">
            Whether you're shipping a single parcel or managing a full supply chain, we have the solution for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title}
              className="group p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#f97316]/20 transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))", border: "1px solid rgba(249,115,22,0.2)" }}>
                <s.icon size={20} className="text-[#f97316]" />
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{s.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-[#f97316] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/logistics/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
            View All Services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-white/5" style={{ background: "#050e1a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">Why SwiftRoute</p>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
              The Logistics Partner You've Been Looking For
            </h2>
            <p className="text-[#64748b] mb-8 leading-relaxed text-sm">
              We built SwiftRoute to solve the problems that plague traditional freight companies — opacity, slow responses, and surprise fees.
              Every shipment gets a dedicated tracking link, real-time updates, and a human you can actually call.
            </p>
            <div className="space-y-4">
              {["No hidden fees — ever", "Real-time GPS tracking on all shipments", "48-hour claim resolution", "Dedicated account manager for enterprise clients"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#f97316] shrink-0" />
                  <span className="text-[#94a3b8] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/logistics/quote"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
              Get Started Today <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {WHY_US.map((w) => (
              <div key={w.title} className="p-5 rounded-2xl border border-white/5 bg-white/[0.03]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.15)" }}>
                  <w.icon size={18} className="text-[#f97316]" />
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">{w.title}</h4>
                <p className="text-[#64748b] text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">Global Network</p>
          <h2 className="font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
            We Ship to 180+ Countries
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {DESTINATIONS.map((d) => (
            <div key={d.city} className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#f97316]/20 hover:bg-white/[0.04] transition-all cursor-pointer">
              <span className="text-3xl">{d.flag}</span>
              <div className="text-center">
                <div className="text-white text-sm font-semibold">{d.city}</div>
                <div className="text-[#475569] text-xs font-mono">{d.code}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <div className="flex items-center justify-center gap-2 text-[#64748b] text-sm">
            <Globe size={14} className="text-[#f97316]" />
            ...and 174 more destinations worldwide
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-white/5" style={{ background: "#050e1a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">Client Stories</p>
          <h2 className="font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-7 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-[#f97316]/10 transition-all">
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="text-[#f97316] fill-[#f97316]" />
                ))}
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-[#475569] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative p-12 rounded-3xl border border-[#f97316]/15 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.08), rgba(249,115,22,0.03))" }}>
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle, #f97316 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10">
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
              Ready to Ship?
            </h2>
            <p className="text-[#64748b] mb-8 max-w-lg mx-auto leading-relaxed">
              Get a free quote in under 2 minutes. No commitment required. Our team will review your requirements and come back to you within 1 hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/logistics/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(249,115,22,0.45)]"
                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", fontSize: "0.9375rem" }}>
                Get Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/logistics/tracking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                style={{ fontSize: "0.9375rem" }}>
                Track a Shipment <MapPin size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LogisticsHome() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyUsSection />
      <DestinationsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
