import type { Metadata } from "next";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Personalized Demo Systems for Agencies",
  description: "We build AI systems generating 500+ personalized demos per day. Google Maps scraping, AI demo generation, CRM sync, automated outreach. 35% conversion rate.",
  alternates: { canonical: "https://buildxagent.com/services/ai-personalized-demos" },
};

const components = [
  { icon: "travel_explore", title: "Google Maps Scraping", desc: "AI finds 500+ local businesses daily, filtered by rating, reviews, and website quality." },
  { icon: "auto_awesome", title: "AI Demo Generation", desc: "Estimator, Brand Audit, or Marketing Scorecard — each personalized with the prospect's business name." },
  { icon: "sync_alt", title: "CRM Integration", desc: "Every prospect and demo pushes automatically to GoHighLevel or HubSpot." },
  { icon: "campaign", title: "Multi-Channel Outreach", desc: "Automated email, SMS, and LinkedIn sequences deliver the demo link directly to prospects." },
  { icon: "repeat", title: "Follow-Up Sequences", desc: "Prospects who don't respond get nurtured automatically until they book a call." },
];

const demoTypes = [
  {
    icon: "calculate",
    title: "AI Estimator Demos",
    points: ["Prospect's customers visit a branded page and get instant quotes", "Best for: HVAC, roofing, decks, plumbing, electrical, renovations", "Auto-deploys to a live URL with the business name"],
  },
  {
    icon: "analytics",
    title: "Brand Audit Demos",
    points: ["AI scrapes the prospect's website and generates a gap report", "Best for: Creative agencies, branding agencies, social media agencies", "Shows SEO gaps, speed issues, missing citations"],
  },
  {
    icon: "precision_manufacturing",
    title: "Custom Demo Systems",
    points: ["Your concept built as an AI-powered demo", "Examples: Lead scoring tools, competitor analyzers, ROI calculators", "Tailored to your niche and sales process"],
  },
];

const audiences = ["GoHighLevel agency owners", "AI/automation agencies", "Digital marketing agencies", "Any agency selling services to local businesses"];

export default function AIPersonalizedDemosPage() {
  return (
    <>
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto">
          <Tag>AI PERSONALIZED DEMOS</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface mt-stack-md leading-tight max-w-3xl">
            Pitch 500+ Prospects Per Day with Personalized AI Demos
          </h1>
          <p className="text-body text-on-surface-variant mt-stack-md max-w-2xl">
            We build the full pipeline. Scrape local businesses from Google Maps, generate a custom demo with each prospect&apos;s business name, deploy to a live URL, sync to your CRM, and trigger automated outreach. You close the deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-xl">
            <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold text-center shadow-lg hover:bg-primary-container transition-all">Book a Free Strategy Call</a>
            <Link href="/case-studies" className="border border-outline-variant text-on-surface py-4 px-8 rounded-lg font-bold text-center bg-surface-container/50">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* How The System Works */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">How the System Works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {components.map((c, i) => (
              <Reveal key={c.title}>
                <div className="glass-card p-6 rounded-xl h-full space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-tag-label text-outline">{String(i + 1).padStart(2, "0")}</span>
                    <span className="material-symbols-outlined text-primary">{c.icon}</span>
                  </div>
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">{c.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Types */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">Demo Types</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {demoTypes.map((d) => (
              <Reveal key={d.title}>
                <div className="glass-card p-6 lg:p-8 rounded-xl h-full">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mb-stack-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{d.icon}</span>
                  </div>
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-white mb-stack-md">{d.title}</h3>
                  <ul className="space-y-3">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-body-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0">check_circle</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="glass-card rounded-xl p-6 lg:p-10 glow-subtle border-secondary/20 space-y-stack-md">
              <Tag color="tertiary">CASE STUDY</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">Optimo Agency</h2>
              <p className="text-body-sm text-on-surface-variant">Melbourne, Australia — 500+ demos/day, 35% conversion, $300K+ revenue in 6 weeks.</p>
              <Link href="/case-studies" className="text-secondary font-bold flex items-center gap-1 w-fit hover:gap-2 transition-all">
                Read full case study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto space-y-stack-lg">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">Who This Is For</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {audiences.map((a) => (
              <li key={a} className="flex items-center gap-3 p-4 bg-surface-container-low border border-outline-variant/10 rounded-lg text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary">check_circle</span>{a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
