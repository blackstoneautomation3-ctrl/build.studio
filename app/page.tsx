"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar, Footer, FinalCTA, useReveal } from "@/components/ui";

// ─── DATA ────────────────────────────────────────────────────────────────────
const STATS = [
  { target: 150, suffix: "+", label: "Products Delivered" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
  { target: 12, suffix: "+", label: "Countries Served" },
  { target: 2, prefix: "$", suffix: "M+", label: "Revenue Generated" },
];

// ─── STAT CARD ───────────────────────────────────────────────────────────────
function StatCard({ stat }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const FRAMES = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / FRAMES;
      const eased = Math.min(1, 1 - Math.pow(1 - progress, 3));
      setCount(Math.round(eased * stat.target));
      if (frame >= FRAMES) {
        setCount(stat.target);
        clearInterval(timer);
      }
    }, 1200 / FRAMES);
    return () => clearInterval(timer);
  }, [started, stat.target]);

  return (
    <div ref={ref} className="flex flex-col items-center py-12 px-6 border-r border-[#1a1a1a] last:border-r-0">
      <div className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">
        {stat.prefix || ""}{count}{stat.suffix}
      </div>
      <div className="font-mono text-xs text-[#a3a3a3] tracking-widest mt-3 uppercase">{stat.label}</div>
    </div>
  );
}

// ─── STATS BAR ───────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <div className="border-t border-b border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1a1a1a]">
        {STATS.map((stat, i) => (
          <StatCard key={i} stat={stat} />
        ))}
      </div>
    </div>
  );
}

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

      {/* Animated Background BUILD.STUDIO */}
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
          <Link href="/contact" className="btn-amber" style={{ padding: "18px 48px", fontSize: "1rem" }}>
            Start a Project →
          </Link>
          <Link href="/work" className="btn-ghost" style={{ padding: "18px 48px", fontSize: "1rem" }}>
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

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}