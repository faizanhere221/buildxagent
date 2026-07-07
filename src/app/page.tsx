import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import FAQ from "@/components/FAQ";

const steps = [
  { num: "01", title: "Scrape Prospects", desc: "AI finds 500+ local businesses from Google Maps daily. Filtered by rating, reviews, and website quality." },
  { num: "02", title: "Generate Demos", desc: "Each prospect gets a personalized AI demo with their business name deployed to a live URL." },
  { num: "03", title: "Sync to CRM", desc: "Everything pushes to GoHighLevel or HubSpot with automated SMS and email sequences." },
  { num: "04", title: "Close Deals", desc: "Prospects click, see their name on a working demo, and book calls. Your calendar fills up." },
];

const audiences = [
  { icon: "hub", title: "GoHighLevel Agencies", desc: "You resell GHL. You need clients. We fill your pipeline with personalized demos that convert at 35%." },
  { icon: "smart_toy", title: "AI/Automation Agencies", desc: "You sell AI tools to local businesses. We automate your prospecting and demo delivery at scale." },
  { icon: "campaign", title: "Digital Marketing", desc: "You offer websites, SEO, or ads. We help you pitch 500+ local businesses per day with zero manual work." },
];

const faqs = [
  { q: "What is an AI personalized demo system?", a: "A custom-built AI pipeline that scrapes local businesses, generates a personalized demo (AI estimator, brand audit, or marketing report) with the prospect's business name, deploys each demo to a live URL, and syncs everything to your CRM with automated follow-up sequences." },
  { q: "How does BuildXAgent help agency owners get more clients?", a: "We build the entire prospecting machine for you. Instead of sending generic proposals, your AI system sends personalized demos to 500+ prospects per day. Each prospect sees their own business name on a working product. Conversion rates jump from 1-2% to 35%." },
  { q: "What results can I expect?", a: "Optimo Agency in Melbourne generates 500+ personalized demos per day with a 35% conversion rate. They generated $300K+ in revenue within 6 weeks of launching the system." },
  { q: "Who is BuildXAgent best for?", a: "Agency owners who sell digital services to local businesses. GoHighLevel agency owners, AI/automation agencies, and digital marketing agencies serving plumbers, HVAC, roofers, dentists, salons, and restaurants." },
  { q: "How long does it take to build?", a: "Most systems are delivered in 2-3 weeks from the strategy call. We handle architecture, development, testing, and launch." },
  { q: "Does it integrate with GoHighLevel?", a: "Yes. We specialize in GoHighLevel workflows, automations, and pipeline integrations. We also support HubSpot, n8n, and Make." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center px-6 lg:px-10 py-12 bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-container mx-auto relative z-10 space-y-stack-lg">
          <Tag>AI-POWERED PROSPECTING</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface tracking-tight max-w-3xl">
            Personalized AI Demos That <span className="text-gradient-blue">Close Clients</span> for Your Agency
          </h1>
          <p className="text-body lg:text-lg text-on-surface-variant max-w-lg">
            We build AI systems that scrape prospects, generate custom demos with their business name, and sync everything to your CRM. 500+ demos per day on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold text-center active:scale-95 transition-all shadow-lg shadow-primary/10">
              Book a Free Strategy Call
            </a>
            <Link href="/case-studies" className="border border-primary/20 text-primary py-4 px-8 rounded-lg font-bold text-center hover:bg-primary/5 active:scale-95 transition-all">
              See Case Studies
            </Link>
          </div>
          <div className="pt-stack-xl flex flex-col items-start gap-4 border-t border-outline-variant/10">
            <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Trusted by agencies in</p>
            <div className="flex flex-wrap gap-8 opacity-50 text-on-surface-variant">
              <span className="font-bold">USA</span>
              <span className="font-bold">UK</span>
              <span className="font-bold">Australia</span>
              <span className="font-bold">UAE</span>
              <span className="font-bold">Jordan</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>HOW IT WORKS</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">From Scrape to Close in 4 Steps</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.num}>
                <div className="relative flex lg:flex-col items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center">
                      <span className="font-mono text-gradient-blue font-bold text-lg">{s.num}</span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-1">
                    <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">{s.title}</h3>
                    <p className="text-body-sm text-on-surface-variant">{s.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-[-48px] w-px dashed-connector opacity-30 lg:hidden" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low overflow-hidden">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="space-y-stack-lg">
              <Tag color="tertiary">CASE STUDY</Tag>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                <div>
                  <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">Optimo Agency</h2>
                  <p className="text-tag-label font-mono text-outline flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> Melbourne, Australia
                  </p>
                </div>
                <Link href="/case-studies" className="text-secondary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Read full case study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {[
                  { value: "500+", label: "DEMOS/DAY" },
                  { value: "35%", label: "CONVERSION" },
                  { value: "$300K+", label: "REVENUE" },
                  { value: "3 Wks", label: "DELIVERY" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-surface-container rounded-lg border border-outline-variant/10">
                    <p className="text-h3-mobile lg:text-h3-desktop font-bold text-secondary">{stat.value}</p>
                    <p className="text-tag-label font-mono text-on-surface-variant text-[10px] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-background">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>BUILT FOR</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Agency Owners Who Want More Clients</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <Reveal key={a.title}>
                <div className="p-6 bg-surface-container-low border border-outline-variant/20 rounded-xl hover:border-secondary/40 transition-all duration-300 h-full">
                  <span className="material-symbols-outlined text-secondary mb-4 block text-3xl">{a.icon}</span>
                  <h3 className="text-h3-mobile lg:text-h3-desktop mb-2">{a.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>FAQ</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Common Questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
