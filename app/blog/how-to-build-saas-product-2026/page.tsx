"use client";

import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { Navbar, Footer, useReveal } from "@/components/ui";

export default function BlogPost() {
  useReveal();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <article className="px-6 lg:px-12 py-20 max-w-4xl mx-auto">
          {/* Back navigation */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-[#f0c060] transition-colors mb-8 reveal">
            <ArrowLeft size={16} /> Back to Articles
          </Link>

          {/* Header */}
          <header className="mb-12 reveal">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full border border-[#f0c060]/20 bg-[#f0c060]/10 font-mono text-[11px] text-[#f0c060]">Development</span>
              <div className="flex items-center gap-4 text-[#a3a3a3] text-sm">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> 12 min read
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Mar 15, 2026
                </span>
              </div>
            </div>
            <h1 className="font-display font-bold text-[#fafafa] leading-[1.1] tracking-[-0.03em] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              How to Build a SaaS Product in 2026 — The Complete Guide
            </h1>
            <p className="text-[#e5e5e5] text-lg leading-[1.8] font-light">
              From validating your idea to shipping your first version — a no-fluff guide to building software that actually gets users and generates revenue.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-[#e5e5e5] leading-[1.8]">
              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">1. Start with the Problem, Not the Solution</h2>
                <p className="mb-4">
                  Most failed SaaS products start with a cool technology in search of a problem. Successful ones start with a painful, expensive problem that people are actively trying to solve.
                </p>
                <p className="mb-4">
                  Before writing a single line of code, answer these questions:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Who has this problem?</li>
                  <li>How are they solving it now?</li>
                  <li>What does it cost them (time, money, frustration)?</li>
                  <li>Would they pay for a better solution?</li>
                </ul>
                <p>
                  Talk to at least 20 potential customers. If you can't find 20 people with this problem, you don't have a market.
                </p>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">2. Define Your Minimum Viable Product (MVP)</h2>
                <p className="mb-4">
                  Your MVP should solve the core problem for a specific segment of customers. It doesn't need to be perfect — it needs to be useful.
                </p>
                <p className="mb-4">
                  Good MVP characteristics:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Solves one core problem exceptionally well</li>
                  <li>Can be built in 4-6 weeks</li>
                  <li>Has clear value proposition</li>
                  <li>Can charge for it from day one</li>
                </ul>
                <p>
                  Everything else is version 2.0. Focus on getting to market quickly with something people will pay for.
                </p>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">3. Choose the Right Tech Stack</h2>
                <p className="mb-4">
                  For 2026, here's what we recommend for most B2B SaaS products:
                </p>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 mb-4">
                  <h3 className="font-semibold text-[#f0c060] mb-3">Frontend: Next.js 14+</h3>
                  <p className="mb-4">Server-side rendering, great SEO, excellent developer experience. The default choice for web apps in 2026.</p>
                  
                  <h3 className="font-semibold text-[#f0c060] mb-3">Backend: Node.js + PostgreSQL</h3>
                  <p className="mb-4">Fast, scalable, and you can hire developers easily. Use Supabase or PlanetScale to skip database management.</p>
                  
                  <h3 className="font-semibold text-[#f0c060] mb-3">Payments: Stripe</h3>
                  <p className="mb-4">Still the gold standard. Handle subscriptions, invoices, and complex billing scenarios.</p>
                  
                  <h3 className="font-semibold text-[#f0c060] mb-3">Deployment: Vercel or Railway</h3>
                  <p>Git-based deployment, automatic scaling, reasonable pricing for startups.</p>
                </div>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">4. Build in Sprints, Not Waterfall</h2>
                <p className="mb-4">
                  Break your MVP into 2-week sprints. Each sprint should deliver working features that customers can use.
                </p>
                <p className="mb-4">
                  Sample sprint structure:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Week 1-2:</strong> User authentication + core feature</li>
                  <li><strong>Week 3-4:</strong> Dashboard + basic analytics</li>
                  <li><strong>Week 5-6:</strong> Payment integration + billing</li>
                </ul>
                <p>
                  Get feedback after each sprint. Pivot quickly if needed.
                </p>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">5. Launch Strategy</h2>
                <p className="mb-4">
                  Don't just launch on Product Hunt and hope for the best. Build your audience before you launch.
                </p>
                <p className="mb-4">
                  Pre-launch checklist:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Build an email list (30+ beta users)</li>
                  <li>Create a landing page with waitlist</li>
                  <li>Document your build process on Twitter/LinkedIn</li>
                  <li>Reach out to potential customers personally</li>
                  <li>Prepare launch day content</li>
                </ul>
                <p>
                  Your first 100 users are more valuable than your next 10,000. Treat them like gold.
                </p>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">6. Pricing Strategy</h2>
                <p className="mb-4">
                  Start with simple pricing. 2-3 tiers maximum. Make it obvious which tier is right for different customer segments.
                </p>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 mb-4">
                  <h3 className="font-semibold text-[#f0c060] mb-3">Example SaaS Pricing Tiers:</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#fafafa]">Starter - $29/month</h4>
                      <p className="text-[#a3a3a3]">For individuals and small teams. Core features only.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#fafafa]">Professional - $99/month</h4>
                      <p className="text-[#a3a3a3]">For growing teams. Advanced features + priority support.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#fafafa]">Enterprise - Custom</h4>
                      <p className="text-[#a3a3a3]">For large organizations. Custom features + dedicated support.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">7. Post-Launch: Measure and Iterate</h2>
                <p className="mb-4">
                  Launching is the beginning, not the end. Track these metrics obsessively:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Monthly Recurring Revenue (MRR)</li>
                  <li>Customer Acquisition Cost (CAC)</li>
                  <li>Customer Lifetime Value (LTV)</li>
                  <li>Churn rate</li>
                  <li>Activation rate</li>
                </ul>
                <p>
                  Talk to your customers every week. What features do they want? What's confusing? What would make them pay more?
                </p>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">Final Thoughts</h2>
                <p className="mb-4">
                  Building a successful SaaS product in 2026 is challenging but entirely possible. Focus on solving real problems for specific customers. Build iteratively. Listen to feedback. Charge from day one.
                </p>
                <p className="mb-4">
                  The perfect SaaS product doesn't exist. The successful ones are the ones that ship, learn, and improve faster than their competitors.
                </p>
                <p>
                  Now go build something people actually want to pay for.
                </p>
              </section>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 border border-[#f0c060]/20 bg-[#f0c060]/5 rounded-2xl text-center reveal">
            <h3 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">Ready to Build Your SaaS?</h3>
            <p className="text-[#e5e5e5] mb-6">We help founders launch profitable SaaS products in 16-18 days.</p>
            <Link href="/contact" className="btn-amber inline-flex">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
