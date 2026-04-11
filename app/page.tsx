"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar, Footer, FinalCTA, useReveal } from "@/components/ui";

// ─── DATA ────────────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "Web Apps","Mobile Apps","SaaS Products","AI Automation",
  "UX/UI Design","E-commerce","Dashboards","AI Chatbots",
  "Next.js","React Native","Supabase","OpenAI API",
];

const TRUSTED_LOGOS = [
  { name: "Stripe", letter: "S", color: "#635bff" },
  { name: "Notion", letter: "N", color: "#fff" },
  { name: "Shopify", letter: "Sh", color: "#96bf48" },
  { name: "Slack", letter: "Sl", color: "#4a154b" },
  { name: "Airbnb", letter: "A", color: "#ff5a5f" },
  { name: "Netflix", letter: "N", color: "#e50914" },
];

const SERVICES = [
  {
    num: "01", icon: "Layers",
    title: "Web & App Development",
    desc: "We build fast, scalable, and beautiful web and mobile applications that your users will love.",
    items: ["Business Websites","Web Applications","Mobile Apps","SaaS Products","E-commerce Stores"],
    price: "From $500",
  },
  {
    num: "02", icon: "Star",
    title: "UX/UI Design",
    desc: "Great products don't just work — they feel effortless.",
    items: ["Product Design","Website UI Design","Mobile App Design","Design Systems"],
    price: "From $300",
  },
  {
    num: "03", icon: "Zap",
    title: "AI Automation & Tools",
    desc: "We integrate AI and automation into your workflows.",
    items: ["Custom AI Chatbots","Workflow Automation","OpenAI API Integration"],
    price: "From $400",
  },
];

// Keep your other data (ALL_PROJECTS, PROCESS_STEPS, TESTIMONIALS, STATS) as they were...

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Animated Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <h1
          className="font-display font-bold tracking-[-0.085em] text-white animate-hero-bg select-none"
          style={{ fontSize: "clamp(13vw, 18vw, 23vw)", opacity: 0.09 }}
        >
          BUILD.STUDIO
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">

        <div className="flex justify-between items-center mb-20">
          <div className="text-2xl font-bold tracking-widest text-white">BUILD.STUDIO</div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-sm text-sm tracking-widest">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              CURRENTLY ACCEPTING PROJECTS
            </div>
            
            <button className="px-8 py-3 border border-white/30 hover:border-white text-white rounded-full text-sm font-medium transition-all hover:bg-white/5">
              Let's Talk
            </button>
          </div>
        </div>

        <div className={`space-y-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p 
            className="font-display font-light tracking-tight italic text-[#e8b86d]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.4rem)", lineHeight: 1.05 }}
          >
            Built Differently.
          </p>

          <p className="max-w-2xl mx-auto text-[1.18rem] text-white/80 leading-relaxed">
            We design, develop, and automate world-class digital products for startups, 
            brands, and enterprises — wherever you are in the world.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-5 justify-center mt-16 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link
            href="/contact"
            className="btn-amber"
            style={{ padding: "18px 48px", fontSize: "1rem" }}
          >
            Start a Project →
          </Link>
          
          <Link
            href="/work"
            className="btn-ghost"
            style={{ padding: "18px 48px", fontSize: "1rem" }}
          >
            See Our Work
          </Link>
        </div>

        <div className={`mt-28 flex flex-col items-center gap-3 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <span className="font-mono text-xs tracking-[0.25em] text-white/45">SCROLL TO EXPLORE</span>
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </div>

      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/50 font-mono flex gap-8 transition-all duration-700 delay-600 ${visible ? "opacity-100" : "opacity-0"}`}>
        <span>16–18 DAY DELIVERY</span>
        <span>WORLDWIDE</span>
        <span>TRANSPARENT PRICING</span>
      </div>
    </section>
  );
}

// Keep all your other components (StatCard, StatsBar, TrustedBy, Services, Portfolio, About, Process, Testimonials, etc.) unchanged...

// ─── MAIN PAGE EXPORT ────────────────────────────────────────────────────────
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