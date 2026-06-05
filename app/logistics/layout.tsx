"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function LogisticsNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Home",     href: "/logistics" },
    { label: "Services", href: "/logistics/services" },
    { label: "Tracking", href: "/logistics/tracking" },
    { label: "About",    href: "/logistics/about" },
    { label: "Quote",    href: "/logistics/quote" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07111f]/95 backdrop-blur-2xl border-b border-[#f97316]/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[70px] flex items-center justify-between">
        <Link href="/logistics" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
            <span className="text-white font-bold text-sm">SR</span>
          </div>
          <span className="font-bold text-white text-lg tracking-tight group-hover:text-[#f97316] transition-colors">
            SwiftRoute<span className="text-[#f97316]">.</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === l.href
                    ? "text-[#f97316]"
                    : "text-[#94a3b8] hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/logistics/tracking"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors px-4 py-2">
            Track Shipment
          </Link>
          <Link href="/logistics/quote"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
            Get a Quote
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#07111f]/98 backdrop-blur-2xl border-t border-[#f97316]/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[#94a3b8] hover:text-white text-base font-medium py-1"
                onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/logistics/quote"
              className="mt-2 px-5 py-3 rounded-xl text-sm font-semibold text-white text-center"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
              onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function LogisticsFooter() {
  return (
    <footer style={{ background: "#05101c" }} className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/logistics" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                <span className="text-white font-bold text-xs">SR</span>
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                SwiftRoute<span className="text-[#f97316]">.</span>
              </span>
            </Link>
            <p className="text-[#64748b] text-sm leading-relaxed mb-5">
              Global logistics made simple. Delivering your cargo to 180+ countries with speed, reliability, and full transparency.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#64748b] hover:text-[#f97316] hover:border-[#f97316]/20 transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5">Services</h4>
            <ul className="space-y-3">
              {["Express Delivery","Air Freight","Ocean Freight","Ground Transport","Warehousing","Customs Clearance"].map((s) => (
                <li key={s}>
                  <Link href="/logistics/services" className="text-[#64748b] text-sm hover:text-[#f97316] transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us",    href: "/logistics/about" },
                { label: "Track Shipment", href: "/logistics/tracking" },
                { label: "Get a Quote", href: "/logistics/quote" },
                { label: "Careers",     href: "#" },
                { label: "News",        href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#64748b] text-sm hover:text-[#f97316] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#f97316] mt-0.5 shrink-0" />
                <span className="text-[#64748b] text-sm">+1 (800) 794-8376</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#f97316] mt-0.5 shrink-0" />
                <span className="text-[#64748b] text-sm">support@swiftroute.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#f97316] mt-0.5 shrink-0" />
                <span className="text-[#64748b] text-sm">1200 Commerce Blvd,<br />Houston, TX 77001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">© 2026 SwiftRoute Logistics. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy","Terms of Service","Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-[#475569] text-sm hover:text-[#f97316] transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LogisticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#07111f", minHeight: "100vh", fontFamily: "var(--font-body), sans-serif" }}>
      <LogisticsNav />
      {children}
      <LogisticsFooter />
    </div>
  );
}
