import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildxagent.com"),
  title: { default: "BuildXAgent | AI Personalized Demo Systems for Agencies", template: "%s | BuildXAgent" },
  description: "We build AI systems that scrape prospects, generate personalized demos with their business name, and sync everything to your CRM. 500+ demos per day.",
  keywords: ["AI lead generation for agencies", "AI prospecting tool", "personalized demo automation", "GoHighLevel lead generation", "AI estimator for businesses"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildxagent.com",
    siteName: "BuildXAgent",
    title: "BuildXAgent | AI Personalized Demo Systems for Agencies",
    description: "AI systems that generate 500+ personalized demos per day for agency owners.",
  },
  twitter: { card: "summary_large_image", title: "BuildXAgent", description: "AI Personalized Demo Systems for Agencies" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://buildxagent.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BuildXAgent",
              url: "https://buildxagent.com",
              founder: { "@type": "Person", name: "Faizan Islam" },
              contactPoint: { "@type": "ContactPoint", email: "hello@buildxagent.com", contactType: "sales" },
              areaServed: ["United States", "United Kingdom", "Australia", "United Arab Emirates", "Jordan"],
              description: "AI-powered personalized demo generation systems for agency owners.",
            }),
          }}
        />
      </head>
      <body className="bg-background text-on-surface font-sans selection:bg-secondary/30 selection:text-secondary overflow-x-hidden min-h-screen">
        <GoogleAnalytics />
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
