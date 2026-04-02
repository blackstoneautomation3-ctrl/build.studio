import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://build.studio"),
  title: {
    default: "Build.Studio — Digital Products. Built Differently.",
    template: "%s — Build.Studio",
  },
  description:
    "We design, develop, and automate world-class web and mobile products for startups, growing brands, and enterprises — wherever you are in the world.",
  keywords: [
    "web development agency",
    "app development",
    "UX UI design agency",
    "AI automation",
    "SaaS development",
    "Next.js development",
    "digital agency",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://build.studio",
    siteName: "Build.Studio",
    title: "Build.Studio — Digital Products. Built Differently.",
    description:
      "World-class web products, beautiful interfaces, and intelligent AI systems for startups and enterprises globally.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Build.Studio — Digital Products. Built Differently.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build.Studio — Digital Products. Built Differently.",
    description:
      "We design, develop, and automate world-class digital products for startups and enterprises globally.",
    creator: "@buildstudio",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
