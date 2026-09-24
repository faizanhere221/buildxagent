import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildxagent.com"),
  title: { default: "AI Outbound System That Books Sales Meetings | BuildXAgent", template: "%s | BuildXAgent" },
  description: "We build AI outbound systems that find prospects, generate personalized demos, send AI emails, and book qualified meetings. $500/mo.",
  keywords: ["AI outbound system", "personalized AI demos", "AI lead generation for agencies", "automated outbound", "AI sales system"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildxagent.com",
    siteName: "BuildXAgent",
    title: "AI Outbound System That Books Sales Meetings | BuildXAgent",
    description: "We build AI outbound systems that find your ideal prospects, generate personalized interactive demos, send AI-written emails, and book qualified meetings.",
  },
  twitter: { card: "summary_large_image", title: "BuildXAgent", description: "AI outbound systems with personalized demos that book qualified sales meetings." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://buildxagent.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Runs before paint: hide the splash if it already played this session. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(location.pathname.startsWith("/proposal")){}else if(sessionStorage.getItem("bxa-splash")){document.documentElement.classList.add("splash-seen")}else{sessionStorage.setItem("bxa-splash","1")}}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
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
              areaServed: ["United States", "United Kingdom", "Australia", "United Arab Emirates"],
              description: "AI-powered outbound growth agency building personalized demo systems that book qualified sales meetings for agencies and B2B businesses.",
            }),
          }}
        />
      </head>
      <body className="bg-background text-on-surface font-sans selection:bg-secondary/30 selection:text-secondary overflow-x-hidden min-h-screen">
        <SplashScreen />
        <GoogleAnalytics />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
