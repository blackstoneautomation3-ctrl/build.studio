import Link from "next/link";
import { Navbar, Footer } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export const BLOG_POSTS = [
  {
    slug: "how-to-build-saas-product-2026",
    category: "Development",
    title: "How to Build a SaaS Product in 2026 — The Complete Guide",
    excerpt: "From validating your idea to shipping your first version — a no-fluff guide to building software that actually gets users.",
    readTime: "12 min",
    date: "Mar 15, 2026",
    featured: true,
    gradient: "linear-gradient(135deg, #0f0c29, #302b63)",
    content: [
      "Building a SaaS product in 2026 requires a clear strategy, the right tech stack, and a deep understanding of your users.",
      "Step 1: Validate your idea before writing a single line of code. Talk to potential customers. Understand their pain points. Make sure people will actually pay for your solution.",
      "Step 2: Choose your tech stack wisely. In 2026, Next.js + Supabase + Stripe is the go-to combination for solo founders and small teams. It's fast to build, easy to scale, and affordable to host.",
      "Step 3: Build an MVP — not a full product. Focus on the one core feature that solves the main problem. Everything else is a distraction until you have paying customers.",
      "Step 4: Launch early and iterate fast. Your first version will be imperfect. That's okay. Real user feedback is worth more than months of building in isolation.",
      "Step 5: Focus on retention before growth. Acquire users, then keep them. A product that people love will grow through word of mouth.",
    ],
  },
  {
    slug: "why-your-website-is-losing-clients",
    category: "Design",
    title: "Why Your Website Is Losing You Clients (And How to Fix It)",
    excerpt: "Most business websites fail at one critical moment — the first 5 seconds. Here's what's going wrong and exactly how to fix it.",
    readTime: "8 min",
    date: "Mar 8, 2026",
    featured: false,
    gradient: "linear-gradient(135deg, #0a1a0a, #1a3a1a)",
    content: [
      "First impressions happen in milliseconds. Research shows that visitors form an opinion about your website in just 50 milliseconds — before they've even read a word.",
      "The most common mistakes we see on business websites:",
      "1. No clear value proposition. Visitors should know what you do, who you do it for, and why they should care — within 5 seconds of landing on your page.",
      "2. Slow loading times. Every second of delay costs you conversions. Optimize your images, use a CDN, and choose a fast hosting provider.",
      "3. Poor mobile experience. Over 60% of web traffic is mobile. If your site doesn't work perfectly on a phone, you're losing more than half your potential clients.",
      "4. No social proof. Testimonials, case studies, and client logos build trust instantly. Don't make visitors guess whether you're credible.",
      "5. Weak call to action. Every page should have one clear next step. Make it obvious and compelling.",
    ],
  },
  {
    slug: "ai-automation-for-small-businesses",
    category: "AI & Automation",
    title: "AI Automation for Small Businesses — Where to Start",
    excerpt: "You don't need a technical team to automate your business. The 5 workflows every small business should automate first.",
    readTime: "7 min",
    date: "Feb 28, 2026",
    featured: false,
    gradient: "linear-gradient(135deg, #0a0a1a, #1a1a3e)",
    content: [
      "AI automation is no longer reserved for large enterprises with technical teams. With the right tools, any small business can automate repetitive tasks and save dozens of hours every week.",
      "The 5 workflows to automate first:",
      "1. Lead follow-up. When someone fills out your contact form, automatically send them a welcome email, add them to your CRM, and notify your team on Slack.",
      "2. Invoice generation. Connect your project management tool to your accounting software. When a project is marked complete, generate and send the invoice automatically.",
      "3. Social media posting. Schedule and distribute content across platforms automatically. Tools like Buffer and Make.com make this simple.",
      "4. Customer onboarding. When a new client signs up, automatically send them a welcome sequence, share onboarding documents, and book an intro call.",
      "5. Reporting. Pull data from multiple sources and generate weekly reports automatically — no manual spreadsheet work required.",
    ],
  },
  {
    slug: "real-cost-of-bad-ux-design",
    category: "Design",
    title: "The Real Cost of Bad UX Design — And How to Avoid It",
    excerpt: "Bad design isn't just ugly — it's expensive. Studies show poor UX costs businesses millions in lost revenue each year.",
    readTime: "6 min",
    date: "Feb 20, 2026",
    featured: false,
    gradient: "linear-gradient(135deg, #1a0a0a, #3a1a1a)",
    content: [
      "Bad UX design has a very real cost to your business. Every confusing navigation, every broken flow, every moment of user frustration represents lost revenue.",
      "The numbers are stark: studies show that every $1 invested in UX design returns $100 on average. That's a 9,900% ROI.",
      "The most expensive UX mistakes:",
      "1. Complex onboarding. If users can't get started quickly, they won't. Every unnecessary step in your onboarding process costs you users.",
      "2. Poor information hierarchy. Users shouldn't have to hunt for what they need. Clear hierarchy guides users naturally through your product.",
      "3. Inconsistent design patterns. When buttons behave differently in different parts of your product, users lose trust and confidence.",
      "4. Ignoring mobile. A desktop-first design mindset in a mobile-first world is a guaranteed way to frustrate the majority of your users.",
      "The fix: invest in user research, build with real users in mind, and test constantly.",
    ],
  },
  {
    slug: "how-we-built-mvp-in-12-days",
    category: "Case Study",
    title: "How We Built a Client MVP in 12 Days — Behind the Scenes",
    excerpt: "A full breakdown of how we took a startup from zero to a live product in under two weeks — what we prioritized and what we cut.",
    readTime: "10 min",
    date: "Feb 12, 2026",
    featured: false,
    gradient: "linear-gradient(135deg, #080808, #0f2027)",
    content: [
      "Speed matters in startups. When a founder came to us with a validated idea and a tight deadline — 12 days to MVP — we had to be ruthless about priorities.",
      "Day 1-2: Discovery and planning. We ran an intensive session to understand the core user journey and identified the one thing the product needed to do brilliantly.",
      "Day 2-4: Design. We skipped low-fidelity wireframes and went straight to high-fidelity mockups. With a clear vision, this saved us two days.",
      "Day 4-11: Build. We used Next.js, Supabase, and Stripe — our standard stack for speed. Backend took two days, frontend took four, testing took two.",
      "Day 12: Launch. We deployed to Vercel, configured the domain, and the product was live.",
      "The result: 200 signups in the first week, and the client raised their seed round two months later.",
      "Key lesson: constraints force clarity. The 12-day deadline meant we had to focus on what truly mattered.",
    ],
  },
  {
    slug: "nextjs-vs-react-2026",
    category: "Development",
    title: "Next.js vs React — Which Should You Build With in 2026?",
    excerpt: "Both are powerful. Both are popular. But for most client projects and SaaS products, one is clearly the better choice.",
    readTime: "9 min",
    date: "Jan 30, 2026",
    featured: false,
    gradient: "linear-gradient(135deg, #0d1a0d, #1a3a1a)",
    content: [
      "React is a library for building user interfaces. Next.js is a framework built on top of React that adds routing, server-side rendering, API routes, and much more.",
      "For most projects in 2026, Next.js is the clear winner. Here's why:",
      "SEO out of the box. React apps are client-rendered — search engines struggle to index them properly. Next.js offers server-side rendering and static generation, making your pages fully indexable.",
      "File-based routing. No need to configure a router. Create a file in the app directory and you have a route.",
      "API routes. Build your backend endpoints in the same codebase. No separate Express server needed for most use cases.",
      "Image optimization. Next.js automatically optimizes images, serves them in modern formats, and implements lazy loading.",
      "When to use React without Next.js: internal tools that don't need SEO, or when you need full control over your architecture.",
      "Our recommendation: start with Next.js unless you have a specific reason not to.",
    ],
  },
];

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a]">
          <div className="text-center max-w-md">
            <div className="font-display text-[80px] font-bold leading-none mb-8" style={{ color: "rgba(240,192,96,0.2)" }}>404</div>
            <h1 className="font-display text-[32px] font-bold text-white tracking-[-1px] mb-4">Article Not Found</h1>
            <p className="text-[#a3a3a3] font-light leading-[1.8] mb-8">
              This article doesn&apos;t exist or may have been moved.
            </p>
            <Link href="/blog" className="btn-amber inline-flex">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a]">
        {/* Hero */}
        <section className="relative pt-40 pb-16 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 20%, rgba(240,192,96,0.04) 0%, transparent 60%)" }} />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-white transition-colors font-light text-[13px] mb-10 font-mono">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="px-3 py-1 rounded-full border border-[#f0c060]/20 bg-[#f0c060]/[0.06] font-mono text-[10px] text-[#f0c060]/80">{post.category}</span>
              <span className="font-mono text-[12px] text-[#555]">{post.readTime} read</span>
              <span className="font-mono text-[12px] text-[#555]">{post.date}</span>
            </div>
            <h1
              className="font-display font-bold text-white leading-[1.08] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {post.title}
            </h1>
            <p className="text-[#c8c8c8] font-light leading-[1.85]" style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Cover */}
        <div className="px-6 max-w-3xl mx-auto mb-16">
          <div className="w-full h-64 rounded-2xl border border-[#1a1a1a] flex items-center justify-center overflow-hidden" style={{ background: post.gradient }}>
            <div className="w-16 h-16 bg-[#f0c060]/15 border border-[#f0c060]/25 rounded-2xl flex items-center justify-center text-2xl">⚡</div>
          </div>
        </div>

        {/* Article content */}
        <article className="px-6 max-w-3xl mx-auto pb-32">
          <div className="flex flex-col gap-6">
            {post.content.map((para, idx) => (
              <p
                key={idx}
                className={`font-light leading-[1.95] ${
                  para.match(/^\d+\./) || para.startsWith("Step") || para.startsWith("Day") || para.startsWith("Key") || para.startsWith("The ")
                    ? "text-[#e8e8e8] font-normal"
                    : "text-[#a3a3a3]"
                }`}
                style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)" }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-[#1a1a1a]">
            <div className="bg-[#111] border border-[#f0c060]/15 rounded-2xl p-8 text-center">
              <h3 className="font-display font-bold text-white tracking-[-0.03em] mb-3" style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)" }}>
                Ready to build your digital product?
              </h3>
              <p className="text-[#a3a3a3] font-light mb-6 text-[14px]">
                Let&apos;s talk about your idea and how BUILD.STUDIO can help you launch it.
              </p>
              <Link href="/contact" className="btn-amber inline-flex">
                Start a Project →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}