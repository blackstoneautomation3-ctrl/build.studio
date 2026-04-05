"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Navbar, Footer, PageHero, useReveal } from "@/components/ui";

export const POSTS = [
  { slug: "how-to-build-saas-product-2026", category: "Development", title: "How to Build a SaaS Product in 2026 — The Complete Guide", excerpt: "From validating your idea to shipping your first version — a no-fluff guide to building software that actually gets users.", readTime: "12 min", date: "Mar 15, 2026", featured: true, gradient: "linear-gradient(135deg, #0f0c29, #302b63)", content: "Building a SaaS product in 2026 requires a clear strategy, the right tech stack, and a deep understanding of your users. In this guide, we cover everything from idea validation to launch and growth." },
  { slug: "why-your-website-is-losing-clients", category: "Design", title: "Why Your Website Is Losing You Clients (And How to Fix It)", excerpt: "Most business websites fail at one critical moment — the first 5 seconds. Here's what's going wrong and exactly how to fix it.", readTime: "8 min", date: "Mar 8, 2026", featured: false, gradient: "linear-gradient(135deg, #0a1a0a, #1a3a1a)", content: "First impressions happen in milliseconds. If your website doesn't immediately communicate your value, visitors leave — and they don't come back. Here's how to fix the most common mistakes." },
  { slug: "ai-automation-for-small-businesses", category: "AI & Automation", title: "AI Automation for Small Businesses — Where to Start", excerpt: "You don't need a technical team to automate your business. The 5 workflows every small business should automate first.", readTime: "7 min", date: "Feb 28, 2026", featured: false, gradient: "linear-gradient(135deg, #0a0a1a, #1a1a3e)", content: "AI automation is no longer reserved for large enterprises. With tools like Make.com, Zapier, and OpenAI, small businesses can automate repetitive tasks and save dozens of hours per week." },
  { slug: "real-cost-of-bad-ux-design", category: "Design", title: "The Real Cost of Bad UX Design — And How to Avoid It", excerpt: "Bad design isn't just ugly — it's expensive. Studies show poor UX costs businesses millions in lost revenue each year.", readTime: "6 min", date: "Feb 20, 2026", featured: false, gradient: "linear-gradient(135deg, #1a0a0a, #3a1a1a)", content: "Poor user experience leads to abandoned carts, high bounce rates, and lost customers. Investing in good UX design pays dividends — often returning 10x the investment in improved conversions." },
  { slug: "how-we-built-mvp-in-12-days", category: "Case Study", title: "How We Built a Client MVP in 12 Days — Behind the Scenes", excerpt: "A full breakdown of how we took a startup from zero to a live product in under two weeks — what we prioritized and what we cut.", readTime: "10 min", date: "Feb 12, 2026", featured: false, gradient: "linear-gradient(135deg, #080808, #0f2027)", content: "Speed matters in startups. In this case study, we break down how Build.Studio delivered a fully functional MVP in just 12 days — from discovery to deployment." },
  { slug: "nextjs-vs-react-2026", category: "Development", title: "Next.js vs React — Which Should You Build With in 2026?", excerpt: "Both are powerful. Both are popular. But for most client projects and SaaS products, one is clearly the better choice.", readTime: "9 min", date: "Jan 30, 2026", featured: false, gradient: "linear-gradient(135deg, #0d1a0d, #1a3a1a)", content: "React is a library. Next.js is a framework built on top of React. For most production projects in 2026, Next.js is the clear winner — offering SSR, file-based routing, and built-in optimization." },
];

const CATS = ["All", "Development", "Design", "AI & Automation", "Case Study"];

export default function Blog() {
  useReveal();
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");

  const featured = POSTS.find((p) => p.featured)!;
  const rest = POSTS.filter((p) => !p.featured);
  const filteredRest = activeFilter === "All"
    ? rest
    : rest.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <>
      <Navbar />
      <main>
        <PageHero label="Insights" title="Ideas, Guides &" titleAccent="Industry Thinking." sub="Practical content for founders, product teams, and business owners building in the digital age." />

        {/* Featured */}
        <section className="px-6 lg:px-12 pb-16 max-w-7xl mx-auto">
          <div className="section-label mb-6 reveal">Featured Article</div>
          <Link href={`/blog/${featured.slug}`} className="grid lg:grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07] hover-lift cursor-pointer reveal block">
            <div className="h-64 lg:h-auto flex items-center justify-center min-h-[240px]" style={{ background: featured.gradient }}>
              <div className="w-16 h-16 bg-amber/15 border border-amber/25 rounded-2xl flex items-center justify-center text-2xl">⚡</div>
            </div>
            <div className="bg-ink p-10 flex flex-col gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-2.5 py-1 rounded-full border border-amber/20 bg-amber/[0.06] font-mono text-[10px] text-amber/80">{featured.category}</span>
                <span className="font-mono text-[11px] text-ash">{featured.readTime} read</span>
                <span className="font-mono text-[11px] text-ash">{featured.date}</span>
              </div>
              <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-medium text-snow tracking-[-0.8px] leading-[1.2]">{featured.title}</h2>
              <p className="text-[14px] text-ash font-light leading-[1.8] flex-1">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-amber text-[13px] font-medium mt-2">
                Read Article <ArrowUpRight size={14} />
              </div>
            </div>
          </Link>
        </section>

        {/* Filter + Grid */}
        <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-10 reveal">
            <h2 className="font-display text-[26px] font-medium text-snow tracking-[-0.5px]">All Articles</h2>
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button key={c} onClick={() => setActiveFilter(c)}
                  className={`px-4 py-2 rounded-full border text-[12px] font-light transition-all ${activeFilter === c ? "border-amber/40 bg-amber/10 text-amber" : "border-white/[0.08] text-ash hover:border-white/20 hover:text-snow"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filteredRest.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-ash font-light">No articles in this category yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-carbon border border-white/[0.07] rounded-2xl overflow-hidden hover-lift reveal flex flex-col">
                  <div className="h-44 flex items-center justify-center flex-shrink-0" style={{ background: post.gradient }}>
                    <div className="w-10 h-1 bg-white/10 rounded-full" />
                  </div>
                  <div className="p-7 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded border border-amber/20 bg-amber/[0.06] font-mono text-[9px] text-amber/80">{post.category}</span>
                      <span className="font-mono text-[10px] text-ash">{post.readTime} read</span>
                    </div>
                    <h3 className="font-display text-[18px] font-medium text-snow tracking-[-0.3px] leading-[1.3]">{post.title}</h3>
                    <p className="text-[13px] text-ash font-light leading-[1.7] flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                      <span className="font-mono text-[10px] text-ash">{post.date}</span>
                      <ArrowUpRight size={15} className="text-ash group-hover:text-amber transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter */}
        <section className="px-6 lg:px-12 py-20 bg-ink/40 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto reveal">
            <div className="border border-amber/20 bg-amber/[0.03] rounded-3xl p-10 lg:p-14 text-center">
              <div className="font-mono text-[10px] text-amber tracking-[3px] uppercase mb-5">Newsletter</div>
              <h2 className="font-display text-[clamp(28px,4vw,44px)] font-medium leading-[1.1] tracking-[-1.5px] text-snow mb-4">
                Get the Latest <em className="gradient-text not-italic">Insights.</em>
              </h2>
              <p className="text-[15px] text-ash font-light leading-[1.8] max-w-md mx-auto mb-8">
                New articles on web development, design, and AI — delivered to your inbox every two weeks. No spam.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
                  className="flex-1 bg-obsidian border border-white/[0.1] rounded-xl px-4 py-3.5 text-[14px] text-snow placeholder-ash font-light outline-none focus:border-amber/40 transition-colors" />
                <button className="btn-amber whitespace-nowrap">Subscribe →</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
