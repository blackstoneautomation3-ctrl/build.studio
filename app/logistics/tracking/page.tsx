"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search, Package, Truck, CheckCircle2, Clock, AlertCircle,
  MapPin, Calendar, ArrowRight, RefreshCw, Info
} from "lucide-react";

// ─── DEMO SHIPMENT DATA ───────────────────────────────────────────────────────

type ShipmentStatus = "processing" | "picked_up" | "in_transit" | "customs" | "out_for_delivery" | "delivered" | "exception";

interface ShipmentEvent {
  time: string;
  location: string;
  desc: string;
  done: boolean;
}

interface Shipment {
  id: string;
  status: ShipmentStatus;
  from: string;
  to: string;
  service: string;
  weight: string;
  eta: string;
  carrier: string;
  events: ShipmentEvent[];
}

const DEMO_SHIPMENTS: Record<string, Shipment> = {
  "SR-2026-001": {
    id: "SR-2026-001",
    status: "in_transit",
    from: "Houston, TX, USA",
    to: "London, United Kingdom",
    service: "Air Freight",
    weight: "45 kg",
    eta: "Jun 7, 2026",
    carrier: "SwiftRoute Air",
    events: [
      { time: "Jun 5, 2026 · 14:32", location: "London Heathrow (LHR), UK",      desc: "Arrived at destination hub",           done: true  },
      { time: "Jun 5, 2026 · 07:10", location: "In Transit · Atlantic",           desc: "Departed origin hub — in the air",     done: true  },
      { time: "Jun 4, 2026 · 21:45", location: "Houston Intercontinental, USA",   desc: "Customs clearance completed",          done: true  },
      { time: "Jun 4, 2026 · 18:00", location: "Houston Hub, TX",                 desc: "Package picked up and sorted",         done: true  },
      { time: "Jun 7, 2026",         location: "London, United Kingdom",           desc: "Estimated delivery",                   done: false },
    ],
  },
  "SR-2026-002": {
    id: "SR-2026-002",
    status: "delivered",
    from: "Dubai, UAE",
    to: "Lagos, Nigeria",
    service: "Express Delivery",
    weight: "3.2 kg",
    eta: "Delivered",
    carrier: "SwiftRoute Express",
    events: [
      { time: "Jun 4, 2026 · 11:20", location: "Lagos Island, Nigeria",           desc: "Delivered — signed by recipient",      done: true },
      { time: "Jun 4, 2026 · 08:45", location: "Lagos Airport (LOS), Nigeria",    desc: "Out for delivery",                     done: true },
      { time: "Jun 3, 2026 · 20:00", location: "Lagos Clearance Hub, Nigeria",    desc: "Customs cleared",                      done: true },
      { time: "Jun 3, 2026 · 13:30", location: "Dubai Airport (DXB), UAE",        desc: "Departed origin country",              done: true },
      { time: "Jun 3, 2026 · 10:00", location: "Dubai Hub, UAE",                  desc: "Shipment picked up",                   done: true },
    ],
  },
  "SR-2026-003": {
    id: "SR-2026-003",
    status: "processing",
    from: "Shanghai, China",
    to: "New York, USA",
    service: "Ocean Freight",
    weight: "1,200 kg",
    eta: "Jun 22, 2026",
    carrier: "SwiftRoute Ocean",
    events: [
      { time: "Jun 5, 2026 · 09:00", location: "Shanghai Port, China",            desc: "Container loaded — awaiting departure", done: true  },
      { time: "Jun 5, 2026 · 06:15", location: "Shanghai Hub, China",             desc: "Customs documentation approved",        done: true  },
      { time: "Jun 4, 2026 · 14:00", location: "Shanghai Hub, China",             desc: "Shipment received and weighed",         done: true  },
      { time: "Jun 22, 2026",         location: "Port of New York, USA",           desc: "Estimated arrival",                    done: false },
    ],
  },
  "SR-2026-004": {
    id: "SR-2026-004",
    status: "out_for_delivery",
    from: "Toronto, Canada",
    to: "Chicago, IL, USA",
    service: "Ground Transport",
    weight: "18 kg",
    eta: "Today by 6 PM",
    carrier: "SwiftRoute Ground",
    events: [
      { time: "Jun 5, 2026 · 10:15", location: "Chicago Metro Area, IL",          desc: "Out for delivery — driver assigned",   done: true  },
      { time: "Jun 5, 2026 · 06:30", location: "Chicago Distribution Center, IL", desc: "Arrived at local facility",            done: true  },
      { time: "Jun 4, 2026 · 22:00", location: "Detroit Transit Hub, MI",         desc: "In transit to Chicago",                done: true  },
      { time: "Jun 4, 2026 · 13:00", location: "Toronto Depot, Canada",           desc: "Picked up by driver",                  done: true  },
    ],
  },
  "SR-2026-005": {
    id: "SR-2026-005",
    status: "customs",
    from: "Amsterdam, Netherlands",
    to: "Singapore",
    service: "Air Freight",
    weight: "72 kg",
    eta: "Jun 8, 2026",
    carrier: "SwiftRoute Air",
    events: [
      { time: "Jun 5, 2026 · 15:00", location: "Changi Airport (SIN), Singapore", desc: "Held for customs inspection",          done: true  },
      { time: "Jun 5, 2026 · 11:30", location: "Changi Airport (SIN), Singapore", desc: "Arrived at destination hub",           done: true  },
      { time: "Jun 4, 2026 · 22:15", location: "Schiphol (AMS), Netherlands",     desc: "Departed — en route to Singapore",    done: true  },
      { time: "Jun 4, 2026 · 18:00", location: "Amsterdam Hub, Netherlands",      desc: "Package collected",                    done: true  },
      { time: "Jun 8, 2026",          location: "Singapore",                       desc: "Estimated delivery (pending customs)", done: false },
    ],
  },
};

const STATUS_CONFIG: Record<ShipmentStatus, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  processing:        { label: "Processing",         color: "#94a3b8", bg: "rgba(148,163,184,0.1)", icon: Clock },
  picked_up:         { label: "Picked Up",          color: "#60a5fa", bg: "rgba(96,165,250,0.1)",  icon: Package },
  in_transit:        { label: "In Transit",         color: "#f97316", bg: "rgba(249,115,22,0.1)",  icon: Truck },
  customs:           { label: "Customs Clearance",  color: "#a78bfa", bg: "rgba(167,139,250,0.1)", icon: AlertCircle },
  out_for_delivery:  { label: "Out for Delivery",   color: "#34d399", bg: "rgba(52,211,153,0.1)",  icon: Truck },
  delivered:         { label: "Delivered",          color: "#4ade80", bg: "rgba(74,222,128,0.1)",  icon: CheckCircle2 },
  exception:         { label: "Exception",          color: "#f87171", bg: "rgba(248,113,113,0.1)", icon: AlertCircle },
};

// ─── TRACKING CONTENT ─────────────────────────────────────────────────────────

function TrackingContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("id") ?? "");
  const [input,  setInput]  = useState(searchParams.get("id") ?? "");
  const [result, setResult] = useState<Shipment | null | "not_found">(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) handleSearch(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearch(id?: string) {
    const q = (id ?? input).trim().toUpperCase();
    if (!q) return;
    setLoading(true);
    setQuery(q);
    setTimeout(() => {
      const found = DEMO_SHIPMENTS[q];
      setResult(found ?? "not_found");
      setLoading(false);
    }, 600);
  }

  const cfg = result && result !== "not_found" ? STATUS_CONFIG[result.status] : null;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search bar */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-2 flex gap-2 mb-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Enter tracking number — e.g. SR-2026-001"
          className="flex-1 bg-transparent text-white placeholder-[#475569] text-sm px-4 py-3 focus:outline-none"
        />
        <button
          onClick={() => handleSearch()}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
        >
          {loading ? <RefreshCw size={15} className="animate-spin" /> : <Search size={15} />}
          {loading ? "Searching…" : "Track"}
        </button>
      </div>

      {/* Demo hint */}
      {!result && (
        <div className="bg-[#f97316]/5 border border-[#f97316]/15 rounded-2xl p-5 mb-8 flex gap-3">
          <Info size={16} className="text-[#f97316] shrink-0 mt-0.5" />
          <div>
            <p className="text-white text-sm font-medium mb-1">Demo Tracking Numbers</p>
            <p className="text-[#64748b] text-xs leading-relaxed">
              This is a live demo. Try:{" "}
              {["SR-2026-001","SR-2026-002","SR-2026-003","SR-2026-004","SR-2026-005"].map((id, i, arr) => (
                <span key={id}>
                  <button
                    className="text-[#f97316] hover:underline font-mono"
                    onClick={() => { setInput(id); handleSearch(id); }}
                  >{id}</button>
                  {i < arr.length - 1 && " · "}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}

      {/* Not found */}
      {result === "not_found" && (
        <div className="text-center py-16 bg-white/[0.02] border border-white/5 rounded-2xl">
          <AlertCircle size={40} className="text-[#f87171] mx-auto mb-4" />
          <h3 className="text-white font-semibold text-lg mb-2">Shipment Not Found</h3>
          <p className="text-[#64748b] text-sm mb-6">
            No results for <span className="text-white font-mono">{query}</span>.
            Double-check the number and try again, or contact support.
          </p>
          <a href="mailto:support@swiftroute.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
            Contact Support <ArrowRight size={13} />
          </a>
        </div>
      )}

      {/* Result card */}
      {result && result !== "not_found" && cfg && (
        <div className="space-y-5">
          {/* Summary */}
          <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[#475569] text-xs font-mono mb-1">Tracking ID</p>
                <p className="text-white font-bold font-mono text-lg">{result.id}</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ color: cfg.color, background: cfg.bg }}>
                <cfg.icon size={14} />
                {cfg.label}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pt-5 border-t border-white/5">
              {[
                { label: "From",     value: result.from,    icon: MapPin },
                { label: "To",       value: result.to,      icon: MapPin },
                { label: "Service",  value: result.service, icon: Truck },
                { label: "Weight",   value: result.weight,  icon: Package },
                { label: "ETA",      value: result.eta,     icon: Calendar },
                { label: "Carrier",  value: result.carrier, icon: Info },
              ].map((d) => (
                <div key={d.label}>
                  <p className="text-[#475569] text-xs mb-1 flex items-center gap-1">
                    <d.icon size={11} className="text-[#f97316]" /> {d.label}
                  </p>
                  <p className="text-white text-sm font-medium">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-sm mb-6 flex items-center gap-2">
              <Clock size={15} className="text-[#f97316]" /> Shipment Timeline
            </h3>
            <div className="space-y-0">
              {result.events.map((ev, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full border-2 shrink-0 mt-1 ${
                      ev.done
                        ? "bg-[#f97316] border-[#f97316]"
                        : "bg-transparent border-[#334155]"
                    }`} />
                    {i < result.events.length - 1 && (
                      <div className={`w-px flex-1 my-1 ${ev.done ? "bg-[#f97316]/30" : "bg-white/5"}`} style={{ minHeight: "32px" }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className={`text-sm font-medium mb-0.5 ${ev.done ? "text-white" : "text-[#334155]"}`}>
                      {ev.desc}
                    </p>
                    <p className="text-[#475569] text-xs">{ev.location}</p>
                    <p className="text-[#334155] text-xs mt-0.5 font-mono">{ev.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div>
              <p className="text-white text-sm font-medium">Need help with this shipment?</p>
              <p className="text-[#475569] text-xs mt-0.5">Our team is available 24/7</p>
            </div>
            <a href="mailto:support@swiftroute.com"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
              Contact Support
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TrackingPage() {
  return (
    <main className="pt-[70px] min-h-screen">
      <div className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#f97316] font-mono text-xs tracking-widest uppercase font-medium mb-3">Track Your Shipment</p>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            Real-Time Tracking
          </h1>
          <p className="text-[#64748b] text-sm leading-relaxed max-w-lg mx-auto">
            Enter your SwiftRoute tracking number to see the live status of your shipment, from pickup to delivery.
          </p>
        </div>
        <Suspense fallback={null}>
          <TrackingContent />
        </Suspense>
      </div>
    </main>
  );
}
