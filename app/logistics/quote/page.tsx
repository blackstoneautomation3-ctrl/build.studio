"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Package, Truck, Plane, Ship, Warehouse, FileCheck, Phone, Mail } from "lucide-react";

type FormState = "idle" | "submitting" | "success";

const SERVICES = [
  { value: "air-freight",       label: "Air Freight",      icon: Plane    },
  { value: "ocean-freight",     label: "Ocean Freight",    icon: Ship     },
  { value: "ground-transport",  label: "Ground Transport", icon: Truck    },
  { value: "express-delivery",  label: "Express Delivery", icon: Package  },
  { value: "warehousing",       label: "Warehousing",      icon: Warehouse },
  { value: "customs-clearance", label: "Customs Clearance",icon: FileCheck },
];

const CARGO_TYPES = ["General Cargo", "Hazardous Materials", "Perishables / Reefer", "Oversized / Heavy Lift", "Pharmaceuticals", "Electronics", "Automotive", "Other"];

interface FormData {
  service: string;
  origin: string;
  destination: string;
  cargoType: string;
  weight: string;
  dimensions: string;
  readyDate: string;
  incoterms: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  notes: string;
}

const EMPTY: FormData = {
  service: "", origin: "", destination: "", cargoType: "", weight: "",
  dimensions: "", readyDate: "", incoterms: "", companyName: "", contactName: "",
  email: "", phone: "", notes: "",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-[#94a3b8] text-xs font-medium mb-1.5 tracking-wide uppercase">{children}</label>;
}

function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#334155] focus:outline-none focus:border-[#f97316]/40 focus:bg-white/[0.06] transition-all ${className}`}
      {...props}
    />
  );
}

function Textarea({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#334155] focus:outline-none focus:border-[#f97316]/40 focus:bg-white/[0.06] transition-all resize-none ${className}`}
      rows={4}
      {...props}
    />
  );
}

function Select({ children, className = "", ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316]/40 transition-all appearance-none ${className}`}
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
      {...props}
    >
      {children}
    </select>
  );
}

export default function QuotePage() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<FormState>("idle");

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  }

  if (status === "success") {
    return (
      <main className="pt-[70px] min-h-screen flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center py-20">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.2)" }}>
            <CheckCircle2 size={32} className="text-[#f97316]" />
          </div>
          <h2 className="text-white font-bold text-2xl mb-3">Quote Request Received!</h2>
          <p className="text-[#64748b] text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Thank you, <strong className="text-white">{form.contactName || "there"}</strong>. Our logistics team will review your request and send a detailed quote to <strong className="text-white">{form.email}</strong> within <strong className="text-[#f97316]">1 business hour</strong>.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => { setForm(EMPTY); setStatus("idle"); }}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              Submit Another Request
            </button>
            <a href="/logistics/tracking"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
              Track a Shipment <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-[70px]">
      <section className="py-20 px-6 lg:px-12 text-center border-b border-white/5"
        style={{ background: "linear-gradient(180deg, #0d1f35 0%, #07111f 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">Free Quote</p>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Get Your Instant Quote
          </h1>
          <p className="text-[#64748b] text-sm leading-relaxed">
            Fill in the form below and a logistics specialist will respond with a competitive quote within 1 hour — no hidden fees.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Service selection */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#f97316] text-white text-[10px] flex items-center justify-center font-bold">1</span>
                Service Type
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {SERVICES.map((s) => (
                  <button
                    type="button"
                    key={s.value}
                    onClick={() => setForm((p) => ({ ...p, service: s.value }))}
                    className={`flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition-all ${
                      form.service === s.value
                        ? "border-[#f97316]/40 bg-[#f97316]/8 text-white"
                        : "border-white/5 bg-white/[0.02] text-[#64748b] hover:border-white/15 hover:text-white"
                    }`}
                  >
                    <s.icon size={16} className={form.service === s.value ? "text-[#f97316]" : ""} />
                    <span className="text-xs font-medium">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Shipment details */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#f97316] text-white text-[10px] flex items-center justify-center font-bold">2</span>
                Shipment Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <FieldLabel>Origin City / Country</FieldLabel>
                  <Input placeholder="e.g. Houston, TX, USA" value={form.origin} onChange={set("origin")} required />
                </div>
                <div>
                  <FieldLabel>Destination City / Country</FieldLabel>
                  <Input placeholder="e.g. London, United Kingdom" value={form.destination} onChange={set("destination")} required />
                </div>
                <div>
                  <FieldLabel>Cargo Type</FieldLabel>
                  <Select value={form.cargoType} onChange={set("cargoType")} required>
                    <option value="" disabled>Select cargo type</option>
                    {CARGO_TYPES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </Select>
                </div>
                <div>
                  <FieldLabel>Total Weight (kg)</FieldLabel>
                  <Input type="number" placeholder="e.g. 250" min="0.1" step="0.1" value={form.weight} onChange={set("weight")} required />
                </div>
                <div>
                  <FieldLabel>Dimensions (L × W × H cm)</FieldLabel>
                  <Input placeholder="e.g. 100 × 80 × 60" value={form.dimensions} onChange={set("dimensions")} />
                </div>
                <div>
                  <FieldLabel>Cargo Ready Date</FieldLabel>
                  <Input type="date" value={form.readyDate} onChange={set("readyDate")} required />
                </div>
                <div className="md:col-span-2">
                  <FieldLabel>Incoterms</FieldLabel>
                  <Select value={form.incoterms} onChange={set("incoterms")}>
                    <option value="" disabled>Select Incoterms (optional)</option>
                    {["EXW","FCA","FAS","FOB","CFR","CIF","CPT","CIP","DAP","DPU","DDP"].map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#f97316] text-white text-[10px] flex items-center justify-center font-bold">3</span>
                Your Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <FieldLabel>Company Name</FieldLabel>
                  <Input placeholder="Your company" value={form.companyName} onChange={set("companyName")} />
                </div>
                <div>
                  <FieldLabel>Contact Name</FieldLabel>
                  <Input placeholder="Full name" value={form.contactName} onChange={set("contactName")} required />
                </div>
                <div>
                  <FieldLabel>Email Address</FieldLabel>
                  <Input type="email" placeholder="you@company.com" value={form.email} onChange={set("email")} required />
                </div>
                <div>
                  <FieldLabel>Phone Number</FieldLabel>
                  <Input type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={set("phone")} />
                </div>
                <div className="md:col-span-2">
                  <FieldLabel>Additional Notes</FieldLabel>
                  <Textarea placeholder="Special requirements, hazmat info, insurance needs, etc." value={form.notes} onChange={set("notes")} />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 rounded-xl font-semibold text-white text-sm transition-all hover:shadow-[0_0_24px_rgba(249,115,22,0.45)] disabled:opacity-60 flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
            >
              {status === "submitting" ? "Submitting…" : <>Submit Quote Request <ArrowRight size={16} /></>}
            </button>
          </form>

          {/* Alternate contact */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a href="tel:+18007948376" className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#f97316]/20 transition-all">
              <Phone size={16} className="text-[#f97316] shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Call Us</p>
                <p className="text-[#475569] text-xs">+1 (800) 794-8376 · 24/7</p>
              </div>
            </a>
            <a href="mailto:sales@swiftroute.com" className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#f97316]/20 transition-all">
              <Mail size={16} className="text-[#f97316] shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Email Sales</p>
                <p className="text-[#475569] text-xs">sales@swiftroute.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
