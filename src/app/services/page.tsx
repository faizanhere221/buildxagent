import type { Metadata } from "next";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — AI Demo Generation Systems for Agencies",
  description: "AI Estimator Demos, Brand Audit Demos, and Custom AI Demo Systems. We build the prospecting machine. You close the deals.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop flex flex-col items-center text-center">
        <Tag>OUR SERVICES</Tag>
        <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface mt-stack-md leading-tight max-w-3xl">AI Demo Generation Systems for Agencies</h1>
        <p className="text-body text-on-surface-variant max-w-lg mx-auto mt-stack-md">We build the prospecting machine. You close the deals.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-stack-xl">
          <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold shadow-lg hover:bg-primary-container transition-all">Book Your Build Call</a>
          <a href="/case-studies" className="border border-outline-variant text-on-surface py-4 px-8 rounded-lg font-bold bg-surface-container/50">View Case Studies</a>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-lg">
          <Reveal>
            <div className="glass-card p-6 lg:p-8 rounded-xl border-primary/20 glow-accent">
              <div className="flex justify-between items-start mb-stack-md">
                <div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary" style={{fontVariationSettings:"'FILL' 1"}}>calculate</span></div>
                <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">MOST POPULAR</span>
              </div>
              <h3 className="text-h3-mobile lg:text-h3-desktop text-white mb-stack-sm">AI Estimator Demo System</h3>
              <p className="text-body-sm text-on-surface-variant mb-stack-lg">Automate value-first prospecting with interactive estimators that qualify leads instantly.</p>
              <ul className="space-y-3 mb-stack-xl">
                {["500+ personalized demos generated daily","Each demo deployed to a live URL","Full GHL / HubSpot Sync","Automated omni-channel follow-up"].map(f=>(
                  <li key={f} className="flex items-center gap-3 text-body-sm"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span><span>{f}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass-card p-6 lg:p-8 rounded-xl">
              <div className="p-2 bg-secondary/10 rounded-lg w-fit mb-stack-md"><span className="material-symbols-outlined text-secondary" style={{fontVariationSettings:"'FILL' 1"}}>analytics</span></div>
              <h3 className="text-h3-mobile lg:text-h3-desktop text-white mb-stack-sm">AI Brand Audit Demo System</h3>
              <p className="text-body-sm text-on-surface-variant mb-stack-lg">Best for creative, branding, and social agencies. Scan a prospect&apos;s presence and generate a technical Gap Report instantly.</p>
              <div className="flex items-center gap-2 text-tag-label font-mono text-secondary-fixed-dim uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">rocket_launch</span><span>Rapid Lead Qualification</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass-card p-6 lg:p-8 rounded-xl">
              <div className="p-2 bg-tertiary/10 rounded-lg w-fit mb-stack-md"><span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings:"'FILL' 1"}}>precision_manufacturing</span></div>
              <h3 className="text-h3-mobile lg:text-h3-desktop text-white mb-stack-sm">Custom AI Demo System</h3>
              <p className="text-body-sm text-on-surface-variant mb-stack-md">Bespoke builds for niche agencies with complex deliverables.</p>
              <div className="space-y-2">
                {["Legal Doc Processing Demo","Gold Market Analyzer Demo"].map(e=>(
                  <div key={e} className="bg-surface-container-high px-4 py-3 rounded border border-outline-variant/30 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-sm">show_chart</span><span className="text-body-sm">{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface text-center mb-stack-xl">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{i:"call",t:"Discovery Call",d:"Defining your ideal demo outcome and ICP."},{i:"architecture",t:"System Design",d:"Mapping tech architecture from trigger to delivery."},{i:"code",t:"Build",d:"Engineering backend logic using Claude and n8n."},{i:"rocket",t:"Launch",d:"Connecting your CRM and going live."},{i:"query_stats",t:"Optimize",d:"A/B testing to maximize booking rates."},{i:"trending_up",t:"Scale",d:"Increasing volume into new markets."}].map((p,idx)=>(
              <Reveal key={p.t}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold text-xl bg-primary/5">{idx+1}</div>
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
          {["Google Maps","Claude AI","GoHighLevel","HubSpot","n8n","Make"].map(t=>(<span key={t} className="font-extrabold text-on-surface text-lg">{t}</span>))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
