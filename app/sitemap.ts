import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://build.studio";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/how-to-build-saas-product-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/why-your-website-is-losing-clients`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/ai-automation-for-small-businesses`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/real-cost-of-bad-ux-design`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/how-we-built-mvp-in-12-days`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/nextjs-vs-react-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
