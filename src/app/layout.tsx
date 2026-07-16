import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildxagent.com"),
  title: { default: "AI Automation Agency for Businesses | BuildXAgent", template: "%s | BuildXAgent" },
  description: "We build AI automation systems for agencies and businesses. Personalized demo generation, AI digital products, and document processing automation. Results in 2-3 weeks.",
  keywords: ["AI automation agency", "AI automation for businesses", "AI systems for agencies", "personalized demo automation", "AI digital products", "AI document processing"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildxagent.com",
    siteName: "BuildXAgent",
    title: "AI Automation Agency for Businesses | BuildXAgent",
    description: "We build AI automation systems for agencies and businesses. Personalized demo generation, AI digital products, and document processing automation.",
  },
  twitter: { card: "summary_large_image", title: "BuildXAgent", description: "AI Automation Agency for Businesses" },
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
              description: "AI automation systems for agencies and businesses: personalized demo generation, AI digital products, and document processing automation.",
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
