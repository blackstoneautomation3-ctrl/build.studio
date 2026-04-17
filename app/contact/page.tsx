"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar, Footer, useReveal } from "@/components/ui";

const SERVICES = ["New Website", "Web Application", "Mobile App", "SaaS Product", "UX/UI Design", "AI Automation", "Full Product Build", "Other"];
const BUDGETS = ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+", "Let's discuss"];
const TIMELINES = ["ASAP", "Within 1 month", "1–3 months", "Flexible"];

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

export default function Contact() {
  useReveal();
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", service: "", budget: "", timeline: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setShowContactOptions(true);
  };

  const createWhatsAppMessage = () => {
    const message = encodeURIComponent(
      `Hi Build.Studio!\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nProject Details:\n${form.message}`
    );
    return `https://wa.me/2348166494104?text=${message}`;
  };

  const createEmailMessage = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${form.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nProject Details:\n${form.message}`
    );
    return `mailto:hello@build.studio?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-16 px-6 text-center overflow-hidden">
          <div className="glow-amber w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-30" />
          <div className="relative z-10">
            <div className="section-label justify-center mb-6">Contact</div>
            <h1 className="font-display text-[clamp(44px,6vw,80px)] font-medium leading-[1.0] tracking-[-3px] text-snow mb-5">
              Let&apos;s Build Something<br />
              <em className="gradient-text not-italic">Great Together.</em>
            </h1>
            <p className="text-[17px] text-ash max-w-[480px] mx-auto leading-[1.8] font-light">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 lg:px-12 pb-32 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

            {/* Form */}
            <div className="bg-carbon border border-white/[0.07] rounded-3xl p-8 lg:p-12 reveal">
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-16 gap-5">
                  <div className="w-16 h-16 rounded-full bg-amber/15 border border-amber/30 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-amber" />
                  </div>
                  <h2 className="font-display text-[32px] font-medium text-snow tracking-[-1px]">Message Sent!</h2>
                  <p className="text-[15px] text-ash max-w-xs font-light leading-[1.7]">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button className="btn-amber mt-4" onClick={() => { setStatus("idle"); setForm({ name:"", email:"", company:"", service:"", budget:"", timeline:"", message:"" }); }}>
                    Send Another <ArrowRight size={14} />
                  </button>
                </div>
              ) : showContactOptions ? (
                <div className="py-8">
                  <h3 className="font-display text-[20px] font-medium text-snow mb-6 text-center">Choose How to Send Your Message</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                      href={createWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl p-6 flex flex-col items-center gap-3 transition-all hover:scale-105 cursor-pointer border border-[#25D366]/20"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-white mb-1">WhatsApp</h4>
                        <p className="text-xs text-white/80">Fastest response</p>
                      </div>
                    </a>
                    
                    <a
                      href={createEmailMessage()}
                      className="bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-white/10 hover:border-[#f0c060]/30 text-white rounded-xl p-6 flex flex-col items-center gap-3 transition-all hover:scale-105 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-[#f0c060]/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-white mb-1">Email</h4>
                        <p className="text-xs text-[#a3a3a3]">Formal inquiry</p>
                      </div>
                    </a>
                    
                    <a
                      href="tel:+2348166494104"
                      className="bg-[#0a0a0a] hover:bg-[#1a1a1a] border border-white/10 hover:border-[#f0c060]/30 text-white rounded-xl p-6 flex flex-col items-center gap-3 transition-all hover:scale-105 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-[#f0c060]/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-white mb-1">Phone Call</h4>
                        <p className="text-xs text-[#a3a3a3]">Direct conversation</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => setShowContactOptions(false)}
                      className="text-[#a3a3a3] hover:text-[#f0c060] transition-colors text-sm"
                    >
                      ← Back to form
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-[26px] font-medium text-snow tracking-[-0.5px] mb-8">Send a Message</h2>

                  {error && (
                    <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-[13px] text-red-400">
                      {error}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      { name: "name", label: "Full Name *", type: "text", placeholder: "John Smith", full: false },
                      { name: "email", label: "Email Address *", type: "email", placeholder: "john@company.com", full: false },
                      { name: "company", label: "Company / Brand", type: "text", placeholder: "Acme Inc.", full: true },
                    ].map((field) => (
                      <div key={field.name} className={field.full ? "md:col-span-2" : ""}>
                        <label className="block font-mono text-[10px] text-ash tracking-[1.5px] uppercase mb-2">{field.label}</label>
                        <input
                          name={field.name}
                          type={field.type}
                          value={form[field.name as keyof FormState]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full bg-obsidian border border-white/[0.08] rounded-xl px-4 py-3.5 text-[14px] text-snow placeholder-ash font-light outline-none focus:border-amber/40 transition-colors"
                        />
                      </div>
                    ))}

                    {[
                      { name: "service", label: "Service Needed *", options: SERVICES },
                      { name: "budget", label: "Budget Range *", options: BUDGETS },
                      { name: "timeline", label: "Timeline", options: TIMELINES },
                    ].map((sel) => (
                      <div key={sel.name} className={sel.name === "timeline" ? "" : ""}>
                        <label className="block font-mono text-[10px] text-ash tracking-[1.5px] uppercase mb-2">{sel.label}</label>
                        <select
                          name={sel.name}
                          value={form[sel.name as keyof FormState]}
                          onChange={handleChange}
                          className="w-full bg-obsidian border border-white/[0.08] rounded-xl px-4 py-3.5 text-[14px] text-snow font-light outline-none focus:border-amber/40 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Choose...</option>
                          {sel.options.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    ))}

                    <div className="md:col-span-2">
                      <label className="block font-mono text-[10px] text-ash tracking-[1.5px] uppercase mb-2">Tell us about your project *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe what you want to build, who it's for, and any key features..."
                        className="w-full bg-obsidian border border-white/[0.08] rounded-xl px-4 py-3.5 text-[14px] text-snow placeholder-ash font-light outline-none focus:border-amber/40 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="btn-amber w-full justify-center mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Preparing..." : "Send Message →"}
                  </button>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-4 reveal lg:sticky lg:top-24">
              <div className="bg-carbon border border-white/[0.07] rounded-2xl p-7">
                <div className="text-2xl mb-4">💬</div>
                <h3 className="font-display text-[18px] font-medium text-snow mb-2">WhatsApp (Fastest)</h3>
                <p className="text-[13px] text-ash font-light leading-[1.7] mb-5">Usually replies within 1–2 hours. The quickest way to reach us.</p>
                <a href="https://wa.me/2348166494104" target="_blank" rel="noopener noreferrer" className="btn-amber inline-flex text-[13px]">
                  Chat on WhatsApp →
                </a>
              </div>

              <div className="bg-carbon border border-white/[0.07] rounded-2xl p-7">
                <div className="text-2xl mb-4">📅</div>
                <h3 className="font-display text-[18px] font-medium text-snow mb-2">Book a Free Call</h3>
                <p className="text-[13px] text-ash font-light leading-[1.7] mb-5">30-minute strategy session. Perfect for international clients.</p>
                <a href="https://calendly.com/buildstudio" target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex text-[13px]">
                  Book on Calendly →
                </a>
              </div>

              <div className="bg-carbon border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-4">
                {[
                  { label: "Email", value: "hello@build.studio", href: "mailto:hello@build.studio" },
                  { label: "Hours", value: "Mon–Sat, 8am–8pm WAT", href: null },
                  { label: "Response", value: "Within 24 hours", href: null },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-mono text-[10px] text-amber tracking-[2px] uppercase mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-[13px] text-ash hover:text-snow transition-colors font-light">{item.value}</a>
                    ) : (
                      <div className="text-[13px] text-ash font-light">{item.value}</div>
                    )}
                  </div>
                ))}
                <div className="pt-2 border-t border-white/[0.06]">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/[0.06]">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] text-green-400 tracking-wider">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
