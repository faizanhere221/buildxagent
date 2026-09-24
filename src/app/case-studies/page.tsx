import type { Metadata } from "next";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies — Real Results from Real Agencies",
  description: "See how Optimo Agency generates 500+ AI demos per day with a 35% conversion rate. $300K+ revenue in 6 weeks.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto">
          <Tag>CASE STUDIES</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface mt-stack-md">Real Results from Real Agencies</h1>
          <p className="text-body text-on-surface-variant mt-stack-sm max-w-lg">See how agency owners use AI-powered demos to scale their client acquisition.</p>
        </div>
      </section>

      {/* Optimo */}
      <section className="px-6 lg:px-10 pb-section-mobile">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="glass-card rounded-xl p-6 lg:p-10 glow-subtle border-secondary/20 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full" />
              <div className="relative z-10 space-y-stack-md">
                <div className="flex items-center justify-between">
                  <Tag color="tertiary">STAR CASE STUDY</Tag>
                </div>
                <div>
                  <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">Optimo Agency</h2>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <p className="text-body-sm font-mono text-secondary-container">Craig Kelly</p>
                    <span className="text-outline-variant">•</span>
                    <p className="text-body-sm text-on-surface-variant">Melbourne, Australia</p>
                    <span className="text-outline-variant">•</span>
                    <p className="text-body-sm text-on-surface-variant">AI Growth Agency for Trade Businesses</p>
                  </div>
                </div>
                <p className="text-body text-on-surface-variant">Craig sells AI estimators and CRM lead reactivation to trade businesses (decks, pergolas, outdoor renovations). He needed a way to reach hundreds of prospects per day with personalized demos instead of generic proposals.</p>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 pt-4 border-t border-outline-variant/10">
                  {[{v:"500+",l:"DEMOS/DAY"},{v:"35%",l:"CONVERSION"},{v:"$300K+",l:"REVENUE"},{v:"90%",l:"LESS MANUAL"},{v:"3 Wks",l:"DELIVERY"}].map(s=>(
                    <div key={s.l} className="flex flex-col"><span className="text-h3-mobile font-bold text-primary">{s.v}</span><span className="text-tag-label font-mono text-on-surface-variant">{s.l}</span></div>
                  ))}
                </div>
                <div className="pt-4 overflow-x-auto no-scrollbar flex gap-3 -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap">
                  {["Scraper","Demo Gen","URL Deployment","CRM Sync","SMS Outreach"].map(t=>(
                    <div key={t} className="chip-glow px-4 py-2 rounded-lg whitespace-nowrap text-tag-label font-mono text-on-surface flex items-center gap-2">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other Cases */}
      <section className="px-6 lg:px-10 pb-section-mobile">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="glass-card rounded-xl p-6 space-y-stack-md border-primary/10 h-full">
              <span className="text-tag-label font-mono text-primary-fixed-dim uppercase">LEGAL TECH</span>
              <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">Synergy Legal</h3>
              <p className="text-body-sm text-on-surface-variant">Utah, USA — AI document processing dashboard. Claude Vision API reads scanned medical records, extracts expenses and ICD codes, generates demand letters.</p>
              <div className="flex items-center gap-2 text-secondary"><span className="font-bold">85% faster processing</span></div>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass-card rounded-xl p-6 space-y-stack-md h-full">
              <span className="text-tag-label font-mono text-secondary uppercase">WHITE-LABEL AI</span>
              <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">DigiSol Agency</h3>
              <p className="text-body-sm text-on-surface-variant">Jordan — 3 white-label AI products built for resale.</p>
              <div className="space-y-3">
                {["Gold Market Analyzer","Stock Advisor Pro","LinkedIn AI Content Agent"].map(p=>(
                  <div key={p} className="flex items-center gap-3 p-3 bg-surface-container-high rounded-lg border border-outline-variant/10">
                    <span className="text-body-sm font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[200px] h-full">
              <div className="space-y-stack-sm">
                <span className="text-tag-label font-mono text-primary-fixed-dim uppercase">LEAD AUTOMATION</span>
                <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">Instagram Lead Capture</h3>
                <p className="text-body-sm text-on-surface-variant">USA — n8n pipeline capturing 100% of Instagram DMs, auto-syncing to Google Sheets with email follow-ups.</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 bg-on-primary-container text-white px-3 py-1 rounded-full"><span className="font-mono text-tag-label">n8n Pipeline</span></div>
                <div className="flex items-baseline gap-1"><span className="text-h2-mobile font-bold text-secondary">100%</span><span className="text-tag-label font-mono">CAPTURE</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
