import Link from "next/link";
import { Navbar, Footer, FinalCTA } from "@/components/ui";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const PROJECTS = [
  {
    slug: "taskflow-platform",
    title: "Taskflow Platform",
    category: "SaaS",
    tags: ["Web App","AI","SaaS"],
    industry: "Productivity",
    year: "2026",
    result: "+312% user signups in first 30 days",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    tech: ["Next.js","Supabase","OpenAI","Stripe"],
    desc: "A full SaaS task management platform with AI-powered prioritisation, team collaboration, and real-time dashboards.",
    challenge: "The client needed to launch a competitive SaaS product in under 3 weeks with full authentication, billing, and AI features.",
    solution: "We built a complete Next.js 15 app with Supabase auth, Stripe billing, OpenAI task suggestions, and real-time collaboration using Supabase Realtime.",
    deliverables: ["Full web application","AI task prioritisation","Team collaboration","Stripe subscription billing","Real-time dashboards","Mobile responsive"],
    metrics: ["+312%","98%","2 weeks","4.9/5"],
    metricLabels: ["User signups","Retention rate","Delivery time","Client rating"],
  },
  {
    slug: "smartonboard",
    title: "SmartOnboard",
    category: "Fintech",
    tags: ["Mobile App","Fintech"],
    industry: "Finance",
    year: "2025",
    result: "Onboarding time reduced by 83%",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d1b2a 100%)",
    tech: ["React Native","Node.js","PostgreSQL"],
    desc: "A mobile-first fintech dashboard for tracking payments, invoices, and financial analytics across multiple currencies.",
    challenge: "Client onboarding took 45+ minutes due to complex KYC flows and manual document handling.",
    solution: "We redesigned the entire onboarding flow into a 7-minute smart form with automated document verification and instant approval logic.",
    deliverables: ["iOS & Android app","Smart KYC flow","Real-time notifications","Multi-currency support","Analytics dashboard","API integrations"],
    metrics: ["83%","7 min","4.8★","40%"],
    metricLabels: ["Time reduction","New onboarding","App store rating","Cost savings"],
  },
  {
    slug: "freshmart-store",
    title: "FreshMart Store",
    category: "E-commerce",
    tags: ["E-commerce","AI"],
    industry: "Retail",
    year: "2025",
    result: "+40% monthly revenue in 30 days",
    gradient: "linear-gradient(135deg, #0d1a0d 0%, #1a3a1a 50%, #0a2010 100%)",
    tech: ["Next.js","Shopify","OpenAI","WhatsApp API"],
    desc: "A full e-commerce platform with AI product recommendations, automated inventory, and WhatsApp ordering.",
    challenge: "Low online sales despite strong in-store performance. Customers found the checkout process difficult on mobile.",
    solution: "Full e-commerce rebuild with AI-powered recommendations, WhatsApp ordering integration, and a mobile-first checkout that reduced cart abandonment by 60%.",
    deliverables: ["E-commerce platform","AI recommendations","WhatsApp ordering","Inventory automation","Admin dashboard","SEO optimization"],
    metrics: ["+40%","60%","30 days","3x"],
    metricLabels: ["Revenue increase","Cart abandonment drop","Delivery time","Mobile conversions"],
  },
  {
    slug: "medsync-portal",
    title: "MedSync Portal",
    category: "Healthcare",
    tags: ["Web App","Healthcare"],
    industry: "Health",
    year: "2025",
    result: "83% reduction in admin overhead",
    gradient: "linear-gradient(135deg, #080808 0%, #0f2027 50%, #203a43 100%)",
    tech: ["Next.js","Supabase","Twilio","Make.com"],
    desc: "A patient management portal with AI-powered onboarding, appointment scheduling, and automated follow-up workflows.",
    challenge: "Medical staff spent 3+ hours daily on manual patient communication, appointment reminders, and follow-up messages.",
    solution: "Automated the entire communication pipeline with Twilio SMS, Make.com workflows, and an AI triage system that handles 90% of routine enquiries.",
    deliverables: ["Patient portal","Appointment scheduling","AI triage","SMS automation","Staff dashboard","HIPAA-compliant storage"],
    metrics: ["83%","3h→18min","90%","4.9/5"],
    metricLabels: ["Admin reduction","Daily time saved","Queries automated","Staff rating"],
  },
  {
    slug: "learnarc-platform",
    title: "LearnArc Platform",
    category: "EdTech",
    tags: ["SaaS","EdTech","AI"],
    industry: "Education",
    year: "2024",
    result: "2,000+ students onboarded in month one",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #3a1a1a 50%, #1a0808 100%)",
    tech: ["Next.js","Supabase","OpenAI","Stripe"],
    desc: "An online learning platform with course creation tools, AI tutoring assistant, and student progress analytics.",
    challenge: "Education startup needed a full LMS platform to compete with established players, on a startup budget and timeline.",
    solution: "Built a complete learning management system with video hosting, AI tutoring, progress tracking, and creator monetisation tools — in 6 weeks.",
    deliverables: ["Course creation tools","AI tutoring assistant","Progress analytics","Video streaming","Payment processing","Creator dashboard"],
    metrics: ["2,000+","6 weeks","87%","$50k+"],
    metricLabels: ["Month 1 students","Build time","Completion rate","Revenue month 3"],
  },
  {
    slug: "propvault-crm",
    title: "PropVault CRM",
    category: "Real Estate",
    tags: ["Web App","CRM"],
    industry: "Real Estate",
    year: "2024",
    result: "Agent productivity increased 70%",
    gradient: "linear-gradient(135deg, #080808 0%, #0a1628 50%, #0f2744 100%)",
    tech: ["Next.js","PostgreSQL","Zapier","DocuSign"],
    desc: "A CRM and property management platform with automated client communication, document signing, and analytics.",
    challenge: "Real estate agents were using 5 different tools and losing deals due to slow response times and missed follow-ups.",
    solution: "Built a unified CRM with automated follow-up sequences, DocuSign integration for instant contracts, and a mobile app for on-the-go management.",
    deliverables: ["Unified CRM","Automated follow-ups","DocuSign integration","Property listings","Analytics dashboard","Mobile app"],
    metrics: ["70%","5→1","48h→2h","$2.3M"],
    metricLabels: ["Productivity boost","Tools consolidated","Contract turnaround","Deals closed Q1"],
  },
];

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="font-display text-[80px] font-bold text-[#f0c060]/20 leading-none mb-8">404</div>
            <h1 className="font-display text-[32px] font-bold text-white tracking-[-1px] mb-4">Project Not Found</h1>
            <p className="text-[#a3a3a3] font-light leading-[1.8] mb-8">This project doesn&apos;t exist or may have been moved.</p>
            <Link href="/work" className="btn-amber inline-flex"><ArrowLeft size={14} /> Back to Work</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-16 px-6 overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(240,192,96,0.05) 0%, transparent 60%)" }} />
          <div className="max-w-5xl mx-auto relative z-10">
            <Link href="/work" className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-white transition-colors font-light text-[13px] mb-10 font-mono">
              <ArrowLeft size={14} /> Back to Work
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {project.tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-[#f0c060]/20 bg-[#f0c060]/[0.06] font-mono text-[12px] text-[#f0c060]/80">{t}</span>
              ))}
              <span className="font-mono text-[14px] text-[#555]">{project.industry} · {project.year}</span>
            </div>
            <h1 className="font-display font-bold text-white leading-[1.0] tracking-[-0.04em] mb-5" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              {project.title}
            </h1>
            <p className="text-[#c8c8c8] font-light leading-[1.85] max-w-2xl mb-8" style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>
              {project.desc}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/[0.06]">
              <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full" />
              <span className="font-mono text-[13px] text-[#4ade80] tracking-wider font-medium">{project.result}</span>
            </div>
          </div>
        </section>

        {/* Visual */}
        <div className="px-6 max-w-5xl mx-auto mb-16">
          <div className="w-full h-80 rounded-2xl border border-[#1a1a1a] flex items-center justify-center overflow-hidden" style={{ background: project.gradient }}>
            <div className="w-[55%] bg-white/[0.06] border border-white/[0.1] rounded-2xl p-6">
              <div className="flex gap-1.5 mb-4">
                {["#ff5f57","#febc2e","#28c840"].map((c) => <span key={c} className="w-2.5 h-2.5 rounded-full block" style={{ background: c }} />)}
              </div>
              {[80,55,95,40,70,30].map((w,i) => <div key={i} className="h-2 rounded-full mb-2.5 last:mb-0" style={{ width:`${w}%`, background:"rgba(255,255,255,0.07)" }} />)}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <section className="px-6 max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.metrics.map((m, i) => (
              <div key={i} className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 text-center">
                <div className="font-display font-bold text-[#f0c060] leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>{m}</div>
                <div className="font-mono text-[12px] text-[#666] tracking-[0.15em] uppercase mt-3">{project.metricLabels[i]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Content */}
        <section className="px-6 max-w-5xl mx-auto pb-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="font-mono text-[12px] text-[#f0c060] tracking-[0.2em] uppercase mb-4">The Challenge</div>
              <p className="text-[#c8c8c8] font-light leading-[1.9]" style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)" }}>{project.challenge}</p>
            </div>
            <div>
              <div className="font-mono text-[12px] text-[#f0c060] tracking-[0.2em] uppercase mb-4">Our Solution</div>
              <p className="text-[#c8c8c8] font-light leading-[1.9]" style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)" }}>{project.solution}</p>
            </div>
          </div>

          <div className="mb-16">
            <div className="font-mono text-[12px] text-[#f0c060] tracking-[0.2em] uppercase mb-6">What We Delivered</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.deliverables.map((d) => (
                <div key={d} className="flex items-center gap-3 bg-[#111] border border-[#1a1a1a] rounded-xl px-4 py-3">
                  <CheckCircle2 size={14} style={{ color: "rgba(240,192,96,0.6)" }} className="flex-shrink-0" />
                  <span className="text-[13px] text-[#c8c8c8] font-light">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-16">
            <div className="font-mono text-[12px] text-[#f0c060] tracking-[0.2em] uppercase mb-4">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg border border-[#222] bg-[#161616] font-mono text-[14px] text-[#a3a3a3]">{t}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#111] border border-[#f0c060]/15 rounded-2xl p-10 text-center">
            <h3 className="font-display font-bold text-white tracking-[-0.03em] mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Want a similar result?
            </h3>
            <p className="text-[#a3a3a3] font-light mb-8 max-w-sm mx-auto">Let&apos;s talk about your project and how BUILD.STUDIO can help you achieve it.</p>
            <Link href="/contact" className="btn-amber inline-flex">Start Your Project →</Link>
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}