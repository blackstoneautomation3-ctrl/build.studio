"use client";

import Link from "next/link";
import {
  Plane, Ship, Truck, Package, Warehouse, FileCheck,
  CheckCircle2, ArrowRight, Clock, Globe, Shield
} from "lucide-react";

const SERVICES = [
  {
    id: "air-freight",
    icon: Plane,
    title: "Air Freight",
    tagline: "Fastest transit. Any destination.",
    desc: "When speed is non-negotiable, our air freight service delivers. We maintain partnerships with 50+ airlines globally and provide door-to-door tracking for every shipment.",
    features: [
      "Express (next-day) and standard (2–5 day) options",
      "Full charter and co-load capacity",
      "Dangerous goods (DG) handling",
      "Live flight tracking",
      "Pickup from any location worldwide",
      "Real-time customs pre-clearance",
    ],
    transit: "1–5 days",
    coverage: "180+ countries",
    max_weight: "Up to 70 tonnes",
    gradient: "from-blue-900/20 to-indigo-900/10",
    accent: "#60a5fa",
  },
  {
    id: "ocean-freight",
    icon: Ship,
    title: "Ocean Freight",
    tagline: "High volume. Competitive rates.",
    desc: "The most cost-effective solution for large cargo. We offer both Full Container Load (FCL) and Less-than-Container Load (LCL) options with weekly sailings to every major port.",
    features: [
      "FCL (20ft, 40ft, 40ft HC) and LCL options",
      "Reefer containers for temperature-sensitive cargo",
      "Weekly scheduled sailings on all major trade lanes",
      "Port-to-port and door-to-door service",
      "Cargo insurance included",
      "Inland haulage coordination",
    ],
    transit: "14–35 days",
    coverage: "500+ ports",
    max_weight: "No limit",
    gradient: "from-cyan-900/20 to-teal-900/10",
    accent: "#22d3ee",
  },
  {
    id: "ground-transport",
    icon: Truck,
    title: "Ground Transport",
    tagline: "Nationwide. On schedule.",
    desc: "Our owned fleet of 200+ vehicles covers the entire contiguous US, with daily runs to Canada and Mexico. Every truck is GPS-tracked and temperature-monitored.",
    features: [
      "FTL (Full Truckload) and LTL (Less-than-Truckload)",
      "Refrigerated transport available",
      "GPS tracking on every vehicle",
      "White-glove residential delivery",
      "Lift-gate and inside delivery options",
      "Proof of delivery (POD) in real time",
    ],
    transit: "1–5 days",
    coverage: "All 50 US states + Canada/Mexico",
    max_weight: "Up to 44,000 lbs",
    gradient: "from-orange-900/20 to-amber-900/10",
    accent: "#f97316",
  },
  {
    id: "express-delivery",
    icon: Package,
    title: "Express Delivery",
    tagline: "Same-day. Next-day. Done.",
    desc: "For urgent documents, small parcels, and time-critical items. Our courier network covers 100+ cities with same-day pickup windows starting every 2 hours.",
    features: [
      "Same-day delivery in 100+ cities",
      "International overnight (DHL, FedEx integrations)",
      "Signature-on-delivery confirmation",
      "Tamper-evident packaging",
      "On-demand pickup (1–2 hour window)",
      "Bulk send via API integration",
    ],
    transit: "Same day – 2 days",
    coverage: "100+ cities",
    max_weight: "Up to 70 kg",
    gradient: "from-yellow-900/20 to-orange-900/10",
    accent: "#fbbf24",
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing & Fulfillment",
    tagline: "Store. Pick. Pack. Ship.",
    desc: "Four million square feet of warehouse space across 12 strategic locations in the US, UK, UAE, and Singapore. We handle receiving, inventory management, and fulfillment.",
    features: [
      "Climate-controlled storage options",
      "Real-time inventory visibility portal",
      "Pick-and-pack fulfillment services",
      "Shopify / WooCommerce / Amazon FBA integration",
      "Cross-docking and transloading",
      "Hazmat storage (Class 1–9)",
    ],
    transit: "Same-day dispatch",
    coverage: "12 facilities worldwide",
    max_weight: "Unlimited",
    gradient: "from-purple-900/20 to-violet-900/10",
    accent: "#a78bfa",
  },
  {
    id: "customs-clearance",
    icon: FileCheck,
    title: "Customs Clearance",
    tagline: "No delays. No surprises.",
    desc: "Our licensed customs brokers operate in 45+ countries. We prepare all documentation, classify your goods, and liaise with customs authorities on your behalf.",
    features: [
      "Import and export clearance worldwide",
      "HS code classification",
      "Duty and tax calculation",
      "ISF (Importer Security Filing) for US imports",
      "SABS, NAFDAC, CE, and other certifications handled",
      "Dedicated broker per account",
    ],
    transit: "24–72 hours",
    coverage: "45+ countries",
    max_weight: "Any",
    gradient: "from-green-900/20 to-emerald-900/10",
    accent: "#34d399",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-[70px]">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-12 text-center border-b border-white/5"
        style={{ background: "linear-gradient(180deg, #0d1f35 0%, #07111f 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">What We Offer</p>
          <h1 className="font-bold text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Every Logistics Need,<br />
            <span style={{ color: "#f97316" }}>One Provider.</span>
          </h1>
          <p className="text-[#64748b] leading-relaxed max-w-xl mx-auto mb-8">
            From a single parcel to a full container, from local delivery to intercontinental freight — SwiftRoute covers every mile.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Clock,  label: "Same-day available" },
              { icon: Globe,  label: "180+ countries" },
              { icon: Shield, label: "Fully insured" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-[#94a3b8]">
                <b.icon size={12} className="text-[#f97316]" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-10">
          {SERVICES.map((s, i) => (
            <div key={s.id}
              className={`grid lg:grid-cols-2 gap-10 items-center p-8 lg:p-12 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#f97316]/15 transition-all ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `rgba(${s.accent === "#f97316" ? "249,115,22" : s.accent === "#60a5fa" ? "96,165,250" : s.accent === "#22d3ee" ? "34,211,238" : s.accent === "#fbbf24" ? "251,191,36" : s.accent === "#a78bfa" ? "167,139,250" : "52,211,153"},0.12)`, border: `1px solid ${s.accent}22` }}>
                    <s.icon size={22} style={{ color: s.accent }} />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl">{s.title}</h2>
                    <p className="text-[#64748b] text-xs">{s.tagline}</p>
                  </div>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[#64748b] text-xs">
                      <CheckCircle2 size={13} className="shrink-0 mt-0.5" style={{ color: s.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/logistics/quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                  style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                  Get a Quote <ArrowRight size={14} />
                </Link>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 space-y-4">
                  <p className="text-[#475569] text-xs font-mono uppercase tracking-widest">Service Details</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Transit",    value: s.transit   },
                      { label: "Coverage",   value: s.coverage  },
                      { label: "Max Weight", value: s.max_weight },
                    ].map((d) => (
                      <div key={d.label} className="bg-white/[0.03] rounded-xl p-4">
                        <p className="text-[#475569] text-[10px] font-mono uppercase mb-1">{d.label}</p>
                        <p className="text-white text-sm font-semibold leading-snug">{d.value}</p>
                      </div>
                    ))}
                  </div>
                  {/* Visual placeholder */}
                  <div className={`rounded-xl p-6 bg-gradient-to-br ${s.gradient}`} style={{ border: `1px solid ${s.accent}15` }}>
                    <div className="flex gap-2 mb-4">
                      {["#ff5f57","#febc2e","#28c840"].map((c) => (
                        <span key={c} className="w-2 h-2 rounded-full block" style={{ background: c }} />
                      ))}
                    </div>
                    {[85, 60, 75, 45, 90].map((w, idx) => (
                      <div key={idx} className="h-2 rounded-full mb-2 last:mb-0"
                        style={{ width: `${w}%`, background: `${s.accent}22` }} />
                    ))}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: s.accent }} />
                      <span className="text-[10px] font-mono" style={{ color: s.accent }}>LIVE TRACKING ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 border-t border-white/5" style={{ background: "#050e1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            Not sure which service is right for you?
          </h2>
          <p className="text-[#64748b] mb-8 text-sm">Our logistics experts will assess your needs and recommend the most cost-effective solution.</p>
          <Link href="/logistics/quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(249,115,22,0.45)]"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", fontSize: "0.9375rem" }}>
            Talk to an Expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
