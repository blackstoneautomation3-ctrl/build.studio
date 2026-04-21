"use client";

import { useState } from "react";
import { BLOG_POSTS } from "./[slug]/page";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Navbar, Footer, PageHero, useReveal } from "@/components/ui";

const POSTS = BLOG_POSTS;

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
              <div className="w-16 h-16 bg-amber/15 border border-amber/25 rounded-2xl flex items-center justify-center text-2xl">â¡</div>
            </div>
            <div className="bg-ink p-10 flex flex-col gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-2.5 py-1 rounded-full border border-amber/20 bg-amber/[0.06] font-mono text-[12px] text-amber/80">{featured.category}</span>
                <span className="font-mono text-[13px] text-white">{featured.readTime} read</span>
                <span className="font-mono text-[13px] text-white">{featured.date}</span>
              </div>
              <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-medium text-white tracking-[-0.8px] leading-[1.2]">{featured.title}</h2>
              <p className="text-[16px] text-white font-light leading-[1.8] flex-1">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-amber text-[15px] font-medium mt-2">
                Read Article <ArrowUpRight size={14} />
              </div>
            </div>
          </Link>
        </section>

        {/* Filter + Grid */}
        <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-10 reveal">
            <h2 className="font-display text-[30px] font-medium text-white tracking-[-0.5px]">All Articles</h2>
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button key={c} onClick={() => setActiveFilter(c)}
                  className={`px-4 py-2 rounded-full border text-[12px] font-light transition-all ${activeFilter === c ? "border-amber/40 bg-amber/10 text-amber" : "border-white/[0.08] text-white hover:border-white/20 hover:text-white"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filteredRest.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white font-light">No articles in this category yet.</p>
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
                      <span className="px-2 py-0.5 rounded border border-amber/20 bg-amber/[0.06] font-mono text-[11px] text-amber/80">{post.category}</span>
                      <span className="font-mono text-[12px] text-white">{post.readTime} read</span>
                    </div>
                    <h3 className="font-display text-[20px] font-medium text-white tracking-[-0.3px] leading-[1.3]">{post.title}</h3>
                    <p className="text-[15px] text-white font-light leading-[1.7] flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                      <span className="font-mono text-[12px] text-white">{post.date}</span>
                      <ArrowUpRight size={15} className="text-white group-hover:text-amber transition-colors" />
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
              <div className="font-mono text-[12px] text-amber tracking-[3px] uppercase mb-5">Newsletter</div>
              <h2 className="font-display text-[clamp(28px,4vw,44px)] font-medium leading-[1.1] tracking-[-1.5px] text-white mb-4">
                Get the Latest <em className="gradient-text not-italic">Insights.</em>
              </h2>
              <p className="text-[15px] text-white font-light leading-[1.8] max-w-md mx-auto mb-8">
                New articles on web development, design, and AI â delivered to your inbox every two weeks. No spam.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
                  className="flex-1 bg-obsidian border border-white/[0.1] rounded-xl px-4 py-3.5 text-[16px] text-white placeholder-ash font-light outline-none focus:border-amber/40 transition-colors" />
                <button className="btn-amber whitespace-nowrap">Subscribe â</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
