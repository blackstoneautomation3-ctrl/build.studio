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
              <span className="px-3 py-1 rounded-full border border-[#f0c060]/20 bg-[#f0c060]/10 font-mono text-[11px] text-[#f0c060]">Design</span>
              <div className="flex items-center gap-4 text-[#a3a3a3] text-sm">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> 8 min read
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Mar 8, 2026
                </span>
              </div>
            </div>
            <h1 className="font-display font-bold text-[#fafafa] leading-[1.1] tracking-[-0.03em] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Why Your Website Is Losing You Clients (And How to Fix It)
            </h1>
            <p className="text-[#e5e5e5] text-lg leading-[1.8] font-light">
              Most business websites fail at one critical moment — the first 5 seconds. Here's what's going wrong and exactly how to fix it.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-[#e5e5e5] leading-[1.8]">
              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">The 5-Second Test</h2>
                <p className="mb-4">
                  Research shows visitors decide whether to stay or leave your website in under 5 seconds. That's less time than it took you to read this sentence.
                </p>
                <p className="mb-4">
                  In those 5 seconds, your visitor needs to understand:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Who you are</li>
                  <li>What you do</li>
                  <li>How you can help them</li>
                  <li>What to do next</li>
                </ul>
                <p>
                  If any of these are unclear, they're gone. Forever.
                </p>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">The Most Common Mistakes</h2>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">1. Vague Headlines</h3>
                <p className="mb-4">
                  Bad: "Welcome to Our Website"<br />
                  Good: "We Build E-commerce Sites That Convert 40% Better"
                </p>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">2. No Clear Value Proposition</h3>
                <p className="mb-4">
                  Visitors shouldn't have to hunt for what you do. Put your main value proposition above the fold, in big, clear text.
                </p>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">3. Poor Navigation</h3>
                <p className="mb-4">
                  If users can't find what they're looking for in 3 clicks, they'll leave. Simple, intuitive navigation isn't optional — it's essential.
                </p>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">4. Slow Loading Times</h3>
                <p className="mb-4">
                  Every extra second of load time increases bounce rate by 32%. Your site should load in under 3 seconds on mobile.
                </p>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">5. No Clear Call-to-Action</h3>
                <p>
                  Tell visitors exactly what you want them to do next. "Contact Us" is weak. "Get Your Free Audit" is strong.
                </p>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">How to Fix Your Website</h2>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">Step 1: Audit Your Above-Fold Content</h3>
                <p className="mb-4">
                  Open your website on mobile. Can you answer the 4 questions (who, what, how, what's next) without scrolling? If not, fix that first.
                </p>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">Step 2: Simplify Your Navigation</h3>
                <p className="mb-4">
                  Reduce menu items to 5-7 maximum. Group related pages under clear categories. Test with real users — watch where they click.
                </p>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">Step 3: Optimize for Mobile</h3>
                <p className="mb-4">
                  65% of web traffic is mobile. If your site doesn't work perfectly on phones, you're losing most of your potential customers.
                </p>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">Step 4: Add Social Proof</h3>
                <p className="mb-4">
                  Testimonials, case studies, client logos — these build trust instantly. Place them prominently near your call-to-action.
                </p>
                
                <h3 className="font-semibold text-[#f0c060] text-xl mb-3">Step 5: Test Everything</h3>
                <p>
                  A/B test your headlines, buttons, and layouts. Small changes can double conversion rates. Test one thing at a time, measure results, iterate.
                </p>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">Quick Wins You Can Implement Today</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Change your headline to focus on benefits, not features</li>
                  <li>Add your phone number to the top of every page</li>
                  <li>Make your "Contact" button impossible to miss</li>
                  <li>Add 3-5 client testimonials to your homepage</li>
                  <li>Remove jargon and write like you talk to real people</li>
                  <li>Check your site speed on Google PageSpeed Insights</li>
                </ul>
              </section>

              <section className="reveal">
                <h2 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">The Bottom Line</h2>
                <p className="mb-4">
                  Your website isn't a brochure — it's your best salesperson. But it needs to work 24/7 without breaks, without attitude, and without confusing your prospects.
                </p>
                <p>
                  Fix these fundamentals, and you'll see immediate improvements in engagement, leads, and sales. The complex stuff can wait. Get the basics right first.
                </p>
              </section>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 border border-[#f0c060]/20 bg-[#f0c060]/5 rounded-2xl text-center reveal">
            <h3 className="font-display font-semibold text-[#fafafa] text-2xl mb-4">Need a Website That Converts?</h3>
            <p className="text-[#e5e5e5] mb-6">We build websites that turn visitors into customers.</p>
            <Link href="/contact" className="btn-amber inline-flex">
              Get Your Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
