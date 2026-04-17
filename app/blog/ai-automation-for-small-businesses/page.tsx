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
              <span className="px-3 py-1 rounded-full border border-[#f0c060]/20 bg-[#f0c060]/10 font-mono text-[11px] text-[#f0c060]">AI & Automation</span>
              <div className="flex items-center gap-4 text-[#a3a3a3] text-sm">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> 7 min read
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Feb 28, 2026
                </span>
              </div>
            </div>
            <h1 className="font-display font-bold text-[#fafafa] leading-[1.1] tracking-[-0.03em] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              AI Automation for Small Businesses — Where to Start
            </h1>
            <p className="text-[#e5e5e5] text-lg leading-[1.8] font-light">
              You don't need a technical team to automate your business. The 5 workflows every small business should automate first.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-[#e5e5e5] leading-[1.8]">
              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">Why Small Businesses Need Automation</h2>
                <p className="mb-4">
                  Small business owners wear 15 hats. You're the CEO, marketer, salesperson, and customer service rep — often simultaneously. Automation isn't about replacing people; it's about giving you time back to focus on what matters.
                </p>
                <p className="mb-4">
                  The average small business can save 20+ hours per week with basic automation. That's half a full-time employee you're not paying.
                </p>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">The 5 Essential Workflows to Automate</h2>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">1. Lead Capture & Follow-up</h3>
                <p className="mb-4">
                  Stop manually entering leads into spreadsheets. Automatically capture form submissions, add them to your CRM, and trigger follow-up sequences.
                </p>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 mb-4">
                  <p className="text-[#f0c060] mb-2">Tools needed:</p>
                  <p>Google Forms + Zapier + Mailchimp/HubSpot</p>
                </div>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">2. Customer Support Tickets</h3>
                <p className="mb-4">
                  Automatically categorize, prioritize, and route support tickets. Send instant acknowledgments and track response times.
                </p>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 mb-4">
                  <p className="text-[#f0c060] mb-2">Tools needed:</p>
                  <p>Gmail/Outlook + Help Scout + AI chatbot</p>
                </div>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">3. Social Media Posting</h3>
                <p className="mb-4">
                  Schedule content in advance. Automatically post to multiple platforms. Track engagement and performance.
                </p>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 mb-4">
                  <p className="text-[#f0c060] mb-2">Tools needed:</p>
                  <p>Buffer/Hootsuite + Canva + RSS feeds</p>
                </div>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">4. Invoice & Payment Reminders</h3>
                <p className="mb-4">
                  Automatically send invoices, track payments, and follow up on late payments without awkward phone calls.
                </p>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 mb-4">
                  <p className="text-[#f0c060] mb-2">Tools needed:</p>
                  <p>QuickBooks/Xero + Stripe + Zapier</p>
                </div>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">5. Data Backup & Reporting</h3>
                <p>
                  Automatically backup critical data. Generate weekly reports on sales, website traffic, and customer metrics.
                </p>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                  <p className="text-[#f0c060] mb-2">Tools needed:</p>
                  <p>Google Drive + Google Analytics + Make.com</p>
                </div>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">Getting Started: Your First Automation</h2>
                <p className="mb-4">
                  Don't try to automate everything at once. Start with one workflow that causes you the most pain.
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong>Map your current process.</strong> Write down every step, who does what, and where things get stuck.</li>
                  <li><strong>Identify bottlenecks.</strong> Where do things slow down? What tasks are repetitive?</li>
                  <li><strong>Choose simple tools first.</strong> Start with Zapier or Make.com — no coding required.</li>
                  <li><strong>Test with one process.</strong> Automate lead capture first. It's usually the highest ROI.</li>
                  <li><strong>Measure and iterate.</strong> Track time saved. Expand to other workflows.</li>
                </ol>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">Common Automation Mistakes to Avoid</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Over-automating too quickly.</strong> Start simple, add complexity as needed.</li>
                  <li><strong>Not testing thoroughly.</strong> Broken automation is worse than no automation.</li>
                  <li><strong>Forgetting the human touch.</strong> Some customer interactions need personal attention.</li>
                  <li><strong>Ignoring security.</strong> Automated systems need proper access controls.</li>
                  <li><strong>Not documenting processes.</strong> Someone needs to know how to fix things when they break.</li>
                </ul>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">The ROI of Automation</h2>
                <p className="mb-4">
                  Small businesses typically see 300-500% ROI on automation investments within the first year. Here's the math:
                </p>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#f0c060] mb-2">Before Automation:</h4>
                      <p>40 hours/week manual tasks<br />
                      $25/hour = $1,000/week<br />
                      $52,000/year</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#f0c060] mb-2">After Automation:</h4>
                      <p>20 hours/week manual tasks<br />
                      $25/hour = $500/week<br />
                      $26,000/year</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
                    <p className="text-[#f0c060] font-semibold">Annual Savings: $26,000</p>
                    <p className="text-[#a3a3a3]">Automation cost: ~$5,000</p>
                    <p className="text-[#fafafa] font-bold">First-year ROI: 420%</p>
                  </div>
                </div>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">Next Steps</h2>
                <p className="mb-4">
                  Automation isn't optional anymore — it's competitive advantage. Your competitors are already doing it. The question is whether you'll do it better.
                </p>
                <p>
                  Start small. Measure results. Scale what works. In six months, you'll wonder how you ever ran your business without automation.
                </p>
              </section>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 border border-[#f0c060]/20 bg-[#f0c060]/5 rounded-2xl text-center reveal">
            <h3 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">Ready to Automate Your Business?</h3>
            <p className="text-[#e5e5e5] mb-6">We build custom automation solutions that save you time and money.</p>
            <Link href="/contact" className="btn-amber inline-flex">
              Start Your Automation Project <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
