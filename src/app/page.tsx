import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import FAQ from "@/components/FAQ";

const services = [
  {
    icon: "calculate",
    title: "AI Personalized Demo Systems",
    desc: "We scrape 500+ prospects daily from Google Maps, generate a personalized demo with each business's name on a live URL, sync everything to your CRM, and trigger automated outreach. Your agency pitches hundreds of businesses per day on autopilot.",
    stat: "500+ demos/day · 35% conversion rate",
    href: "/services/ai-personalized-demos",
  },
  {
    icon: "widgets",
    title: "AI Digital Products",
    desc: "We build white-label AI products your agency resells to clients. Gold market analyzers, stock advisors, AI content agents, mortgage calculators, property valuators. You sell the product. We build and maintain the AI behind the scenes.",
    stat: "3 products built for DigiSol Agency",
    href: "/services/ai-digital-products",
  },
  {
    icon: "description",
    title: "AI Document & Legal Automation",
    desc: "We build AI dashboards for processing documents at scale. Medical record extraction, demand letter generation, invoice processing, contract analysis. Claude Vision API reads scanned documents and extracts structured data automatically.",
    stat: "85% faster processing · 20+ hours saved weekly",
    href: "/services/ai-legal-automation",
  },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "We learn your business, your bottlenecks, and your goals. You tell us what needs automating. We map the solution." },
  { num: "02", title: "System Architecture", desc: "We design the AI pipeline: data sources, processing logic, integrations, and delivery. You approve the blueprint before we build." },
  { num: "03", title: "Build & Test", desc: "We develop the entire system in 2-3 weeks. Scraping, AI processing, CRM integration, automation sequences. Everything tested before launch." },
  { num: "04", title: "Launch & Optimize", desc: "Your system goes live. We monitor performance, fix issues, and optimize output based on real data. You focus on closing deals and serving clients." },
];

const audiences = [
  { icon: "hub", title: "Agency Owners", desc: "You sell marketing, AI tools, or CRM services to local businesses. We build the prospecting machine and the products you sell. Your pipeline fills on autopilot." },
  { icon: "gavel", title: "Law Firms & Professional Services", desc: "You process hundreds of documents per week. We build AI systems reading scanned files, extracting data, and generating reports. Your team saves 20+ hours per week." },
  { icon: "rocket_launch", title: "SaaS Founders & Startups", desc: "You need AI-powered features in your product. We build and integrate AI modules: document processing, lead scoring, content generation, data analysis. Deployed in weeks, not months." },
];

const faqs = [
  { q: "What types of AI systems does BuildXAgent build?", a: "Three primary types. AI personalized demo systems for agency prospecting (scraping, demo generation, CRM sync, automated outreach). AI digital products for agencies to resell (calculators, analyzers, content tools). AI document processing systems for law firms and professional services (medical record extraction, demand letter generation, invoice automation)." },
  { q: "How long does a project take?", a: "Most systems go live in 2-3 weeks. The process covers discovery, architecture, development, testing, and launch. Complex enterprise builds with multiple integrations take 4-6 weeks." },
  { q: "What results do your clients get?", a: "Optimo Agency generates 500+ personalized demos per day with a 35% conversion rate, producing $300K+ in revenue within 6 weeks. Synergy Legal processes documents 85% faster, saving 20+ hours per week. Results vary by system type, but most clients see 10-50x ROI within 90 days." },
  { q: "What industries do you serve?", a: "Agency owners (GoHighLevel, AI/automation, digital marketing), law firms, professional services, SaaS startups, and any business processing documents or generating leads at scale. Our clients operate in the USA, UK, Australia, UAE, and Jordan." },
  { q: "How much does a project cost?", a: "Projects start at $1,000. Pricing depends on system complexity, number of integrations, and scale requirements. Every project includes architecture, development, testing, launch, and 2 weeks of post-launch optimization." },
  { q: "Do you offer ongoing support after launch?", a: "Yes. Every project includes 2 weeks of post-launch monitoring and optimization. For ongoing maintenance and scaling, we offer monthly retainer packages starting at $300/month." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center px-6 lg:px-10 py-12 bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-container mx-auto relative z-10 space-y-stack-lg">
          <Tag>AI AUTOMATION AGENCY</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface tracking-tight max-w-3xl">
            We Build AI Systems That <span className="text-gradient-blue">Run Your Business on Autopilot</span>
          </h1>
          <p className="text-body lg:text-lg text-on-surface-variant max-w-lg">
            From personalized prospect demos to AI-powered digital products to automated document processing. We design, build, and deploy custom AI systems in 2-3 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold text-center active:scale-95 transition-all shadow-lg shadow-primary/10">
              Book a Free Strategy Call
            </a>
            <Link href="/case-studies" className="border border-primary/20 text-primary py-4 px-8 rounded-lg font-bold text-center hover:bg-primary/5 active:scale-95 transition-all">
              See Our Work
            </Link>
          </div>
          <div className="pt-stack-xl flex flex-col items-start gap-4 border-t border-outline-variant/10">
            <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Trusted by agencies and businesses in</p>
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

      {/* What We Build */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>OUR SERVICES</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Three Ways We Automate Your Growth</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Reveal key={s.title}>
                <div className="p-6 lg:p-8 bg-surface-container-low border border-outline-variant/20 rounded-xl hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mb-stack-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                  </div>
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface mb-stack-sm">{s.title}</h3>
                  <p className="text-body-sm text-on-surface-variant mb-stack-lg flex-1">{s.desc}</p>
                  <p className="text-tag-label font-mono text-secondary uppercase tracking-wider mb-stack-md">{s.stat}</p>
                  <Link href={s.href} className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Explore This Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>HOW IT WORKS</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">From Strategy Call to Live System in 4 Steps</h2>
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
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface overflow-hidden">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="space-y-stack-lg">
              <Tag color="tertiary">CASE STUDY</Tag>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                <div>
                  <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">Optimo Agency</h2>
                  <p className="text-tag-label font-mono text-outline flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> Melbourne, Australia · AI Growth Agency for Trade Businesses
                  </p>
                </div>
                <Link href="/case-studies" className="text-secondary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Read full case study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <p className="text-body-sm text-on-surface-variant max-w-2xl">What we built: Google Maps scraper → AI estimator demo generator → live URL deployment → GoHighLevel CRM sync → automated SMS outreach.</p>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                {[
                  { value: "500+", label: "DEMOS/DAY" },
                  { value: "35%", label: "CONVERSION" },
                  { value: "$300K+", label: "REVENUE" },
                  { value: "90%", label: "LESS MANUAL" },
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
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Agencies and Businesses Ready to Automate</h2>
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

      {/* Tech Stack */}
      <section className="px-6 py-12 bg-surface-container-highest/30">
        <p className="text-tag-label font-mono text-center mb-stack-lg text-outline tracking-widest">ENGINEERED WITH</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 opacity-60">
          {["Claude AI", "Google Maps API", "GoHighLevel", "HubSpot", "n8n", "Make", "Next.js", "Vercel"].map((t) => (
            <span key={t} className="font-extrabold text-on-surface text-lg">{t}</span>
          ))}
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

      <CTASection
        title="Ready to Automate?"
        subheading="Book a free strategy call. We will map the right AI system for your business and show you what the build looks like."
      />
    </>
  );
}
