import Link from "next/link";
import { Navbar, Footer } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

const POSTS = [
  { slug: "how-to-build-saas-product-2026", category: "Development", title: "How to Build a SaaS Product in 2026 — The Complete Guide", excerpt: "From validating your idea to shipping your first version — a no-fluff guide to building software that actually gets users.", readTime: "12 min", date: "Mar 15, 2026", gradient: "linear-gradient(135deg, #0f0c29, #302b63)", content: `Building a SaaS product in 2026 requires a clear strategy, the right tech stack, and a deep understanding of your users.\n\nStep 1: Validate your idea before writing a single line of code. Talk to potential customers. Understand their pain points. Make sure people will actually pay for your solution.\n\nStep 2: Choose your tech stack wisely. In 2026, Next.js + Supabase + Stripe is the go-to combination for solo founders and small teams. It's fast to build, easy to scale, and affordable to host.\n\nStep 3: Build an MVP — not a full product. Focus on the one core feature that solves the main problem. Everything else is a distraction until you have paying customers.\n\nStep 4: Launch early and iterate fast. Your first version will be imperfect. That's okay. Real user feedback is worth more than months of building in isolation.\n\nStep 5: Focus on retention before growth. Acquire users, then keep them. A product that people love will grow through word of mouth.` },
  { slug: "why-your-website-is-losing-clients", category: "Design", title: "Why Your Website Is Losing You Clients (And How to Fix It)", excerpt: "Most business websites fail at one critical moment — the first 5 seconds. Here's what's going wrong and exactly how to fix it.", readTime: "8 min", date: "Mar 8, 2026", gradient: "linear-gradient(135deg, #0a1a0a, #1a3a1a)", content: `First impressions happen in milliseconds. Research shows that visitors form an opinion about your website in just 50 milliseconds — before they've even read a word.\n\nThe most common mistakes we see:\n\n1. No clear value proposition. Visitors should know what you do, who you do it for, and why they should care — within 5 seconds of landing on your page.\n\n2. Slow loading times. Every second of delay costs you conversions. Optimize your images, use a CDN, and choose a fast hosting provider.\n\n3. Poor mobile experience. Over 60% of web traffic is mobile. If your site doesn't work perfectly on a phone, you're losing more than half your potential clients.\n\n4. No social proof. Testimonials, case studies, and client logos build trust instantly. Don't make visitors guess whether you're credible.\n\n5. Weak call to action. Every page should have one clear next step. Make it obvious and compelling.` },
  { slug: "ai-automation-for-small-businesses", category: "AI & Automation", title: "AI Automation for Small Businesses — Where to Start", excerpt: "You don't need a technical team to automate your business. The 5 workflows every small business should automate first.", readTime: "7 min", date: "Feb 28, 2026", gradient: "linear-gradient(135deg, #0a0a1a, #1a1a3e)", content: `AI automation is no longer reserved for large enterprises with technical teams. With the right tools, any small business can automate repetitive tasks and save dozens of hours every week.\n\nThe 5 workflows to automate first:\n\n1. Lead follow-up. When someone fills out your contact form, automatically send them a welcome email, add them to your CRM, and notify your team on Slack.\n\n2. Invoice generation. Connect your project management tool to your accounting software. When a project is marked complete, generate and send the invoice automatically.\n\n3. Social media posting. Schedule and distribute content across platforms automatically. Tools like Buffer and Make.com make this simple.\n\n4. Customer onboarding. When a new client signs up, automatically send them a welcome sequence, share onboarding documents, and book an intro call.\n\n5. Reporting. Pull data from multiple sources and generate weekly reports automatically — no manual spreadsheet work required.` },
  { slug: "real-cost-of-bad-ux-design", category: "Design", title: "The Real Cost of Bad UX Design — And How to Avoid It", excerpt: "Bad design isn't just ugly — it's expensive. Studies show poor UX costs businesses millions in lost revenue each year.", readTime: "6 min", date: "Feb 20, 2026", gradient: "linear-gradient(135deg, #1a0a0a, #3a1a1a)", content: `Bad UX design has a very real cost to your business. Every confusing navigation, every broken flow, every moment of user frustration represents lost revenue.\n\nThe numbers are stark: studies show that every $1 invested in UX design returns $100 on average. That's a 9,900% ROI. Companies that prioritize design consistently outperform their competitors.\n\nThe most expensive UX mistakes:\n\n1. Complex onboarding. If users can't get started quickly, they won't. Every unnecessary step in your onboarding process costs you users.\n\n2. Poor information hierarchy. Users shouldn't have to hunt for what they need. Clear hierarchy guides users naturally through your product.\n\n3. Inconsistent design patterns. When buttons behave differently in different parts of your product, users lose trust and confidence.\n\n4. Ignoring mobile. A desktop-first design mindset in a mobile-first world is a guaranteed way to frustrate the majority of your users.\n\nThe fix: invest in user research, build with real users in mind, and test constantly.` },
  { slug: "how-we-built-mvp-in-12-days", category: "Case Study", title: "How We Built a Client MVP in 12 Days — Behind the Scenes", excerpt: "A full breakdown of how we took a startup from zero to a live product in under two weeks — what we prioritized and what we cut.", readTime: "10 min", date: "Feb 12, 2026", gradient: "linear-gradient(135deg, #080808, #0f2027)", content: `Speed matters in startups. When a founder approached us with a validated idea and a tight deadline — 12 days to MVP — we knew we had to be ruthless about priorities.\n\nDay 1-2: Discovery and planning. We ran an intensive discovery session to understand the core user journey. We identified the one thing the product needed to do brilliantly.\n\nDay 2-4: Design. We skipped low-fidelity wireframes and went straight to high-fidelity mockups. With a clear vision, this saved us two days.\n\nDay 4-11: Build. We used Next.js, Supabase, and Stripe — our standard stack for speed. The backend took two days. The frontend took four. Testing and refinement took two.\n\nDay 12: Launch. We deployed to Vercel, configured the domain, and the product was live.\n\nThe result: 200 signups in the first week, and the client raised their seed round two months later.\n\nKey lesson: constraints force clarity. The 12-day deadline meant we had to focus on what truly mattered.` },
  { slug: "nextjs-vs-react-2026", category: "Development", title: "Next.js vs React — Which Should You Build With in 2026?", excerpt: "Both are powerful. Both are popular. But for most client projects and SaaS products, one is clearly the better choice.", readTime: "9 min", date: "Jan 30, 2026", gradient: "linear-gradient(135deg, #0d1a0d, #1a3a1a)", content: `React is a library for building user interfaces. Next.js is a framework built on top of React that adds routing, server-side rendering, API routes, and much more.\n\nFor most projects in 2026, Next.js is the clear winner. Here's why:\n\nSEO out of the box. React apps are client-rendered — search engines struggle to index them properly. Next.js offers server-side rendering and static generation, making your pages fully indexable.\n\nFile-based routing. No need to configure a router. Create a file in the pages directory and you have a route. Simple and powerful.\n\nAPI routes. Build your backend endpoints in the same codebase. No separate Express server needed for most use cases.\n\nImage optimization. Next.js Image component automatically optimizes images, serves them in modern formats, and implements lazy loading.\n\nWhen to use React without Next.js: internal tools that don't need SEO, complex SPAs with lots of client-side state, or when you need full control over your architecture.\n\nOur recommendation: start with Next.js unless you have a specific reason not to.` },
];

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: Props) {
  const post = POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="font-display text-[80px] font-medium text-amber/20 leading-none mb-8">404</div>
            <h1 className="font-display text-[32px] font-medium text-snow tracking-[-1px] mb-4">Article Not Found</h1>
            <p className="text-ash font-light leading-[1.8] mb-8">
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

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-16 px-6 overflow-hidden">
          <div className="glow-amber w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-20" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-ash hover:text-snow transition-colors font-light text-[13px] mb-10 font-mono">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="px-3 py-1 rounded-full border border-amber/20 bg-amber/[0.06] font-mono text-[10px] text-amber/80">{post.category}</span>
              <span className="font-mono text-[12px] text-ash">{post.readTime} read</span>
              <span className="font-mono text-[12px] text-ash">{post.date}</span>
            </div>
            <h1 className="font-display text-[clamp(32px,5vw,60px)] font-medium leading-[1.08] tracking-[-2px] text-snow mb-6">
              {post.title}
            </h1>
            <p className="text-[18px] text-ash font-light leading-[1.8]">{post.excerpt}</p>
          </div>
        </section>

        {/* Featured image */}
        <div className="px-6 max-w-3xl mx-auto mb-16">
          <div
            className="w-full h-64 rounded-2xl flex items-center justify-center border border-white/[0.07]"
            style={{ background: post.gradient }}
          >
            <div className="w-16 h-16 bg-amber/15 border border-amber/25 rounded-2xl flex items-center justify-center text-2xl">⚡</div>
          </div>
        </div>

        {/* Content */}
        <article className="px-6 max-w-3xl mx-auto pb-32">
          <div className="flex flex-col gap-6">
            {paragraphs.map((para, idx) => (
              <p key={idx} className={`font-light leading-[1.9] ${para.match(/^\d+\./) || para.startsWith("Step") || para.startsWith("The ") || para.startsWith("Day ") || para.startsWith("Key") ? "text-[16px] text-snow/80" : "text-[16px] text-ash"}`}>
                {para}
              </p>
            ))}
          </div>

          {/* Author + CTA */}
          <div className="mt-16 pt-12 border-t border-white/[0.06]">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-amber/15 border border-amber/25 flex items-center justify-center font-display text-xl font-medium text-amber">A</div>
              <div>
                <div className="text-[14px] font-medium text-snow">Ayo</div>
                <div className="text-[12px] text-ash font-light">Founder, Build.Studio</div>
              </div>
            </div>

            <div className="bg-carbon border border-amber/20 rounded-2xl p-8 text-center">
              <h3 className="font-display text-[24px] font-medium text-snow tracking-[-0.5px] mb-3">
                Ready to build your digital product?
              </h3>
              <p className="text-[14px] text-ash font-light mb-6">
                Let&apos;s talk about your idea and how Build.Studio can help you launch it.
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
