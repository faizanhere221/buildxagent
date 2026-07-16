import type { Metadata } from "next";
import Link from "next/link";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — AI Automation Systems for Agencies & Businesses",
  description: "AI personalized demo systems, white-label AI digital products, and AI document processing automation. We design, build, and deploy in 2-3 weeks.",
};

const services = [
  {
    icon: "calculate",
    badge: "MOST POPULAR",
    title: "AI Personalized Demo Systems",
    desc: "We scrape 500+ prospects daily from Google Maps, generate a personalized demo with each business's name on a live URL, sync everything to your CRM, and trigger automated outreach.",
    features: ["500+ personalized demos generated daily", "Each demo deployed to a live URL", "Full GHL / HubSpot sync", "Automated omni-channel follow-up"],
    href: "/services/ai-personalized-demos",
  },
  {
    icon: "widgets",
    title: "AI Digital Products",
    desc: "We build white-label AI products your agency resells to clients. Gold market analyzers, stock advisors, AI content agents, calculators, and more.",
    features: ["Financial analysis tools", "AI content & marketing tools", "Industry-specific calculators", "You keep 100% of resale revenue"],
    href: "/services/ai-digital-products",
  },
  {
    icon: "description",
    title: "AI Document & Legal Automation",
    desc: "We build AI dashboards for processing documents at scale. Claude Vision API reads scanned documents and extracts structured data automatically.",
    features: ["Medical record extraction", "Demand letter generation", "Invoice & contract processing", "85% faster than manual review"],
    href: "/services/ai-legal-automation",
  },
];

const process = [
  { i: "call", t: "Discovery Call", d: "We learn your business, your bottlenecks, and your goals." },
  { i: "architecture", t: "System Architecture", d: "We design the AI pipeline and you approve the blueprint before we build." },
  { i: "code", t: "Build & Test", d: "We develop the entire system in 2-3 weeks, fully tested before launch." },
  { i: "rocket_launch", t: "Launch & Optimize", d: "Your system goes live. We monitor and optimize based on real data." },
  { i: "query_stats", t: "Post-Launch Support", d: "2 weeks of monitoring and optimization included with every project." },
  { i: "trending_up", t: "Scale", d: "Monthly retainer packages available to maintain and grow your system." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop flex flex-col items-center text-center">
        <Tag>OUR SERVICES</Tag>
        <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface mt-stack-md leading-tight max-w-3xl">Three Ways We Automate Your Growth</h1>
        <p className="text-body text-on-surface-variant max-w-lg mx-auto mt-stack-md">We design, build, and deploy custom AI systems in 2-3 weeks. You focus on closing deals and serving clients.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-stack-xl">
          <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold shadow-lg hover:bg-primary-container transition-all">Book Your Build Call</a>
          <a href="/case-studies" className="border border-outline-variant text-on-surface py-4 px-8 rounded-lg font-bold bg-surface-container/50">View Case Studies</a>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-lg">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className={`glass-card p-6 lg:p-8 rounded-xl ${s.badge ? "border-primary/20 glow-accent" : ""}`}>
                <div className="flex justify-between items-start mb-stack-md">
                  <div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span></div>
                  {s.badge && <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{s.badge}</span>}
                </div>
                <h3 className="text-h3-mobile lg:text-h3-desktop text-white mb-stack-sm">{s.title}</h3>
                <p className="text-body-sm text-on-surface-variant mb-stack-lg">{s.desc}</p>
                <ul className="space-y-3 mb-stack-lg">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-body-sm"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span><span>{f}</span></li>
                  ))}
                </ul>
                <Link href={s.href} className="text-primary font-bold flex items-center gap-1 w-fit hover:gap-2 transition-all">
                  Explore This Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface text-center mb-stack-xl">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((p, idx) => (
              <Reveal key={p.t}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold text-xl bg-primary/5">{idx + 1}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1"><span className="material-symbols-outlined text-secondary text-sm">{p.i}</span><h4 className="font-bold text-on-surface">{p.t}</h4></div>
                    <p className="text-body-sm text-on-surface-variant">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-surface-container-highest/30">
        <p className="text-tag-label font-mono text-center mb-stack-lg text-outline tracking-widest">ENGINEERED WITH</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 opacity-60">
          {["Claude AI", "Google Maps API", "GoHighLevel", "HubSpot", "n8n", "Make", "Next.js", "Vercel"].map((t) => (<span key={t} className="font-extrabold text-on-surface text-lg">{t}</span>))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
