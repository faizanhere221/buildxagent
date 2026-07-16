import type { Metadata } from "next";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Digital Products for Agencies",
  description: "We build white-label AI products your agency resells. Gold analyzers, stock advisors, content agents, calculators. You sell. We build the AI.",
  alternates: { canonical: "https://buildxagent.com/services/ai-digital-products" },
};

const products = [
  {
    icon: "monitoring",
    title: "Financial Analysis Tools",
    items: ["Gold market analyzers", "Stock advisory dashboards", "Mortgage calculators", "Investment ROI tools"],
    note: "Example: Built 3 products for DigiSol Agency (Jordan)",
  },
  {
    icon: "smart_toy",
    title: "AI Content & Marketing Tools",
    items: ["LinkedIn AI content agents", "Blog post generators", "Social media schedulers with AI copy", "Email campaign writers"],
    note: "Personalized at scale for each end client",
  },
  {
    icon: "calculate",
    title: "Industry-Specific Calculators",
    items: ["Property valuation tools", "Insurance quote generators", "Project cost estimators", "Energy savings calculators"],
    note: "Branded for your agency or your clients",
  },
];

const model = [
  "You tell us what your clients need",
  "We build the AI product in 2-3 weeks",
  "You white-label the product under your brand",
  "You sell to your clients at your price point",
  "We maintain and update the AI backend",
  "You keep 100% of the revenue from sales",
];

export default function AIDigitalProductsPage() {
  return (
    <>
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto">
          <Tag>AI DIGITAL PRODUCTS</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface mt-stack-md leading-tight max-w-3xl">
            White-Label AI Products Your Agency Resells
          </h1>
          <p className="text-body text-on-surface-variant mt-stack-md max-w-2xl">
            We build the AI product. You brand the product as your own and sell to your clients. No AI expertise needed on your end. We handle development, deployment, and maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-xl">
            <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold text-center shadow-lg hover:bg-primary-container transition-all">Book a Free Strategy Call</a>
            <Link href="/case-studies" className="border border-outline-variant text-on-surface py-4 px-8 rounded-lg font-bold text-center bg-surface-container/50">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">What We Build</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Reveal key={p.title}>
                <div className="glass-card p-6 lg:p-8 rounded-xl h-full flex flex-col">
                  <div className="p-2 bg-tertiary/10 rounded-lg w-fit mb-stack-md">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>{p.icon}</span>
                  </div>
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-white mb-stack-md">{p.title}</h3>
                  <ul className="space-y-3 mb-stack-md flex-1">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-body-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0">check_circle</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-tag-label font-mono text-outline uppercase tracking-wider">{p.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How The Model Works */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">How the Model Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {model.map((m, i) => (
              <Reveal key={m}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold text-xl bg-primary/5">{i + 1}</div>
                  <p className="text-body-sm text-on-surface-variant pt-2">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="glass-card rounded-xl p-6 lg:p-10 glow-subtle space-y-stack-md">
              <Tag color="tertiary">CASE STUDY</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">DigiSol Agency</h2>
              <p className="text-body-sm text-on-surface-variant">Jordan — 3 AI products built for white-label resale: Gold Market Analyzer, Stock Advisor Pro, LinkedIn AI Content Agent.</p>
              <Link href="/case-studies" className="text-secondary font-bold flex items-center gap-1 w-fit hover:gap-2 transition-all">
                Read full case study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
