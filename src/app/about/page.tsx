import type { Metadata } from "next";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — AI Prospecting Agency",
  description: "Founded in June 2026. Based in Pakistan. Serving agencies in USA, UK, Australia, UAE, and Jordan. We build AI prospecting machines for agency owners.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop flex flex-col items-center text-center">
        <Tag>ABOUT US</Tag>
        <h1 className="text-h1-mobile lg:text-h1-desktop text-on-background mt-stack-md leading-tight max-w-3xl">We Build AI Prospecting Machines for Agency Owners</h1>
        <div className="flex items-center gap-2 text-on-surface-variant font-medium mt-stack-lg">
                    <span className="text-body-sm">Based in Pakistan. Operating Globally.</span>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto lg:flex lg:gap-16 lg:items-start">
          <div className="lg:flex-1">
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mb-stack-lg">The Problem We Solve</h2>
            <p className="text-body text-on-surface-variant leading-relaxed">Most agency owners spend 80% of their time chasing prospects instead of delivering excellence. We engineered a solution to flip that ratio. Our AI systems automate the entire outreach lifecycle: scraping prospects, generating personalized demos, syncing to CRM, and triggering follow-up sequences. You wake up to a pipeline full of warm leads who already saw your demo.</p>
          </div>
          <div className="grid grid-cols-2 gap-gutter mt-8 lg:mt-0 lg:flex-1">
            {[{v:"2026",l:"FOUNDED JUNE"},{v:"4",l:"COUNTRIES"},{v:"3x",l:"CLIENT REVENUE GROWTH"},{v:"500+",l:"DAILY DEMOS"}].map(s=>(
              <Reveal key={s.l}>
                <div className="glass-card glass-card-hover p-stack-md rounded-xl">
                  <div className="text-h2-mobile font-bold text-primary mb-1">{s.v}</div>
                  <div className="text-tag-label font-mono text-on-surface-variant">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
          {[{title:"Ship Fast",desc:"Complex AI workflows deployed in 2-3 weeks, not months. Speed is our competitive edge."},{title:"Results Over Features",desc:"We don't build cool tech for fun. We build machines that book meetings and generate revenue."},{title:"Full Ownership",desc:"You own everything we build. Code, data, integrations. No lock-in. No recurring platform fees."}].map(v=>(
            <Reveal key={v.title}>
              <div className="glass-card glass-card-hover p-stack-lg rounded-xl flex flex-col gap-stack-sm glow-subtle h-full">
                                <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">{v.title}</h3>
                <p className="text-body-sm text-on-surface-variant">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-highest/20">
        <div className="max-w-container mx-auto">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mb-stack-xl text-center">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg max-w-2xl mx-auto">
            {[{init:"FI",name:"Faizan Islam",role:"Founder & Lead Developer"},{init:"I",name:"Israr",role:"Marketing & SEO"}].map(m=>(
              <Reveal key={m.name}>
                <div className="flex items-center gap-gutter glass-card glass-card-hover p-4 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold text-xl border border-outline-variant/30">{m.init}</div>
                  <div>
                    <h4 className="text-h3-mobile text-on-surface font-semibold">{m.name}</h4>
                    <p className="text-body-sm text-secondary">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
