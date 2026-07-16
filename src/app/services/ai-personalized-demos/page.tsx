import type { Metadata } from "next";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-Powered Outbound with Personalized Demos",
  description: "Replace generic cold emails with personalized AI demos built for each prospect. Find qualified leads, generate custom demos, and book more sales meetings.",
  alternates: { canonical: "https://buildxagent.com/services/ai-personalized-demos" },
};

const checklist = ["Find Qualified Prospects", "Generate Personalized AI Demos", "Launch AI-Powered Outreach", "Book More Sales Calls"];

const howItWorks = [
  { icon: "person_search", title: "Identify Your Ideal Customers", desc: "We build targeted prospect lists based on your ideal customer profile using premium B2B data sources. You define the industry, company size, location, and buying signals. We deliver a list of qualified prospects ready for outreach." },
  { icon: "auto_awesome", title: "Generate Personalized AI Demos", desc: "Every prospect receives a unique AI-generated demo referencing their company name, website, industry, and business challenges. Each demo deploys to a live URL — a working product built specifically for their business. No generic pitch decks. No PDFs." },
  { icon: "campaign", title: "Launch Personalized Outreach", desc: "Each demo pairs with personalized cold emails and automated follow-ups across multiple channels. The email references the prospect's company and links directly to their custom demo. Follow-up sequences run automatically over 14 days." },
  { icon: "event_available", title: "Book Qualified Meetings", desc: "Interested prospects book directly into your calendar through the demo or the email CTA. Your sales team focuses on closing deals instead of chasing cold leads. The pipeline fills itself while you focus on revenue." },
];

const demoTypes = [
  {
    icon: "calculate",
    title: "AI Estimators",
    desc: "Interactive calculators customized for every prospect. The prospect's customers visit a branded page, enter project details, and receive an instant estimate. The business owner sees a working tool with their company name generating leads in real time.",
    listLabel: "Perfect for:",
    items: ["Home Services", "Construction & Renovations", "Roofing & Solar", "HVAC & Plumbing", "Electrical & Landscaping"],
  },
  {
    icon: "fact_check",
    title: "AI Website & Marketing Audits",
    desc: "Automated analysis of each prospect's website generating actionable recommendations. The audit pulls data from the prospect's live site: page speed, SEO gaps, missing citations, mobile responsiveness, competitor comparisons.",
    listLabel: "Perfect for:",
    items: ["Marketing Agencies", "SEO Agencies", "Branding & Design Agencies", "Social Media Agencies", "Web Development Agencies"],
  },
  {
    icon: "precision_manufacturing",
    title: "Custom AI Sales Experiences",
    desc: "Need something unique for your offer? We build custom AI demos designed specifically for your sales process.",
    listLabel: "Examples:",
    items: ["ROI calculators showing projected returns for each prospect", "Competitor analysis reports comparing the prospect against local rivals", "AI assessments scoring the prospect's business across key metrics", "Interactive product tours personalized with prospect data", "Lead qualification tools pre-screening prospects before the sales call"],
  },
];

const whyPoints = [
  { title: "Increase reply rates", desc: "From 1-3% to 30-35%. The prospect sees their business name on a working tool. Curiosity drives the click. Value drives the reply." },
  { title: "Stand out from every competitor", desc: "While other agencies send pitch decks and proposals, your prospect receives a live, interactive experience. No one else in their inbox offers this." },
  { title: "Build trust before the first conversation", desc: "The demo proves your expertise without a sales call. The prospect already knows what you do and how well you do the work." },
  { title: "Book more qualified meetings", desc: "Prospects who engage with a personalized demo arrive on sales calls educated and interested. Your close rate climbs because the demo did the pre-selling." },
  { title: "Scale outbound without hiring more SDRs", desc: "The system generates hundreds of personalized demos and sends outreach automatically. One person operates the pipeline reaching 500+ prospects per day." },
];

const audiences = [
  { icon: "hub", title: "AI Automation Agencies", desc: "Show prospects a working AI product before the sales call." },
  { icon: "campaign", title: "Marketing Agencies", desc: "Send brand audits and website analyses instead of generic proposals." },
  { icon: "travel_explore", title: "SEO Agencies", desc: "Deliver personalized SEO gap reports for every prospect." },
  { icon: "design_services", title: "Web Design Agencies", desc: "Show prospects a live mockup or audit of their current site." },
  { icon: "widgets", title: "SaaS Companies", desc: "Give each prospect an interactive product demo tailored to their use case." },
  { icon: "handshake", title: "B2B Service Businesses", desc: "Replace pitch decks with ROI calculators and assessment tools." },
  { icon: "calculate", title: "GoHighLevel Agencies", desc: "Generate AI estimator demos synced directly to GHL with automated SMS sequences." },
];

const deliverables = [
  "Qualified Prospect Research — targeted prospect lists built from premium B2B data sources matching your ideal customer profile",
  "AI Demo Template — custom demo design (estimator, audit, or sales experience) built for your niche and offer",
  "Personalized Demo Engine — AI system generating unique demos for each prospect with their company name, industry, and data",
  "Live URL Deployment — each demo deploys to a unique, shareable URL the prospect visits anytime",
  "CRM Integration — full sync to GoHighLevel, HubSpot, or your existing CRM with lead tracking and activity logging",
  "Automated Email Sequences — personalized cold emails and follow-ups delivered automatically over 14 days",
  "Multi-Channel Outreach Setup — email, SMS, and LinkedIn outreach configured and ready to launch",
  "Performance Dashboard — track demo views, email opens, replies, and booked meetings in one place",
  "2 Weeks Post-Launch Optimization — we monitor performance and refine messaging, timing, and targeting based on real data",
];

const faqs = [
  { q: "How is this different from regular cold email?", a: "Regular cold email sends a text pitch. This system sends a working product. Each prospect receives a live, interactive demo with their business name on the screen. The difference shows in the numbers: 1-3% reply rate for generic cold email versus 30-35% engagement rate for personalized AI demos." },
  { q: "Where do the prospect lists come from?", a: "We build targeted prospect lists from premium B2B data providers and public business sources. You define the ideal customer profile — industry, location, company size, revenue. We deliver qualified prospects matching your criteria." },
  { q: "How many prospects does the system reach per day?", a: "The system generates and delivers 200-500+ personalized demos per day depending on your volume requirements. Each demo is unique. Each outreach message references the prospect's company and links to their custom demo." },
  { q: "Do I need GoHighLevel to use this system?", a: "No. The system integrates with GoHighLevel, HubSpot, and other CRMs with API access. GoHighLevel is the most popular choice among agency owners because of built-in SMS, email, and pipeline management. We configure the integration for whichever CRM you use." },
  { q: "What if I sell a service without an obvious demo type?", a: "We build custom AI sales experiences for any offer — ROI calculators, competitor analyses, assessment tools, interactive product tours, and lead qualification workflows. If your service solves a measurable problem, we design a demo showing the prospect their specific numbers." },
  { q: "How long does setup take?", a: "Most systems launch in 2-3 weeks. Week one covers discovery and architecture. Week two covers development and CRM integration. Week three covers testing, optimization, and launch. Your system starts generating demos and booking meetings within the first week of going live." },
];

export default function AIPersonalizedDemosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI-Powered Outbound with Personalized Demos",
            provider: { "@type": "Organization", name: "BuildXAgent" },
            description: "End-to-end AI outbound system that identifies ideal prospects, generates personalized AI demos for each company, and launches automated outreach campaigns to book qualified meetings.",
            areaServed: ["United States", "United Kingdom", "Australia", "United Arab Emirates", "Jordan"],
            offers: { "@type": "Offer", price: "1000", priceCurrency: "USD" },
          }),
        }}
      />

      {/* Hero */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto">
          <Tag>AI-POWERED OUTBOUND</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface mt-stack-md leading-tight max-w-3xl">
            Replace Cold Emails with Personalized AI Demos That Book Sales Meetings
          </h1>
          <p className="text-body text-on-surface-variant mt-stack-md max-w-2xl">
            Your prospects ignore generic outreach. We build an end-to-end outbound system finding your ideal customers, generating personalized AI demos for each company, and launching automated campaigns booking qualified meetings on your calendar.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-stack-lg max-w-xl">
            {checklist.map((c) => (
              <li key={c} className="flex items-center gap-2 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0">check_circle</span>{c}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-xl">
            <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold text-center shadow-lg hover:bg-primary-container transition-all">Book a Free Strategy Call</a>
            <Link href="/case-studies" className="border border-outline-variant text-on-surface py-4 px-8 rounded-lg font-bold text-center bg-surface-container/50">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>THE PROCESS</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">From Prospect List to Booked Meeting in 4 Steps</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {howItWorks.map((s, i) => (
              <Reveal key={s.title}>
                <div className="glass-card p-6 rounded-xl h-full space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-tag-label text-outline">{String(i + 1).padStart(2, "0")}</span>
                    <span className="material-symbols-outlined text-primary">{s.icon}</span>
                  </div>
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">{s.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Types */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>DEMO TYPES</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Three Types of Personalized AI Demos</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {demoTypes.map((d) => (
              <Reveal key={d.title}>
                <div className="glass-card p-6 lg:p-8 rounded-xl h-full flex flex-col">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mb-stack-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{d.icon}</span>
                  </div>
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-white mb-stack-md">{d.title}</h3>
                  <p className="text-body-sm text-on-surface-variant mb-stack-md">{d.desc}</p>
                  <p className="text-tag-label font-mono text-outline uppercase tracking-wider mb-3">{d.listLabel}</p>
                  <ul className="space-y-3 flex-1">
                    {d.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-body-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0">check_circle</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Personalized AI Demos */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>THE ADVANTAGE</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">Why Personalized AI Demos Outperform Generic Cold Email</h2>
            <p className="text-body text-on-surface-variant mt-stack-md max-w-2xl">
              Generic cold emails get ignored. The average cold email reply rate sits at 1-3%. Personalized AI demos change the dynamic — instead of telling a prospect what you do, you show them a working product built for their business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((w) => (
              <Reveal key={w.title}>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0">check_circle</span>
                  <p className="text-body-sm text-on-surface-variant"><span className="font-bold text-on-surface">{w.title}.</span> {w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="glass-card rounded-xl p-6 lg:p-10 glow-subtle border-secondary/20 space-y-stack-md">
              <Tag color="tertiary">CLIENT RESULTS</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">Optimo Agency</h2>
              <p className="text-body-sm text-on-surface-variant max-w-2xl">
                Melbourne, Australia — Craig Kelly pitched trade businesses one prospect at a time, reaching 10-15 businesses per day. We built a complete AI outbound system generating personalized estimator demos for trade businesses, each branded with the prospect&apos;s company name and delivered through automated email outreach.
              </p>
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {["500+ personalized AI demos generated", "35% demo engagement rate", "$300K+ revenue generated in 6 weeks", "90% reduction in manual prospecting", "System delivered in 3 weeks", "Automated pipeline running daily"].map((r) => (
                  <li key={r} className="flex items-start gap-2 text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0">trending_up</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <Link href="/case-studies" className="text-secondary font-bold flex items-center gap-1 w-fit hover:gap-2 transition-all">
                Read the full case study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>PERFECT FOR</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">Built for Agencies and B2B Teams Doing Outbound</h2>
            <p className="text-body text-on-surface-variant mt-stack-md max-w-2xl">
              This system works for any business sending cold outreach to prospects. If your team pitches potential clients through email, SMS, or LinkedIn, personalized AI demos increase your response rate and meeting volume.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <Reveal key={a.title}>
                <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 rounded-xl h-full">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mb-stack-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{a.icon}</span>
                  </div>
                  <h3 className="font-bold text-on-surface mb-2">{a.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>DELIVERABLES</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Everything Included in Your AI Outbound System</h2>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {deliverables.map((d) => {
              const [title, desc] = d.split(" — ");
              return (
                <li key={d} className="flex items-start gap-3 p-4 bg-surface-container-low border border-outline-variant/10 rounded-lg text-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0">check_circle</span>
                  <span><span className="font-bold text-on-surface">{title}</span> — {desc}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Pricing Context */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="glass-card rounded-xl p-6 lg:p-10 space-y-stack-md max-w-3xl">
              <Tag>INVESTMENT</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">Systems Start at $1,000</h2>
              <p className="text-body-sm text-on-surface-variant">
                The price depends on demo type, number of integrations, and outreach channels included. A system generating 500 demos at a 35% engagement rate produces 175 warm prospects. If 10% book a call, your agency gets 17-18 sales conversations — closing 2-3 per week at $1,000-3,000 per client pays back the system cost in the first week.
              </p>
              <p className="text-body-sm font-bold text-on-surface">Most agencies see 10-50x return on investment within 90 days.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>FAQ</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Common Questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection
        title="Turn Cold Outreach into Personalized Sales Experiences"
        subheading="Your prospects do not want another generic cold email. Book a free strategy call and we will map your outbound pipeline."
      />
    </>
  );
}
