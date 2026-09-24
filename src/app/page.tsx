import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import ROICalculator from "@/components/ROICalculator";

const CALENDLY = "https://calendly.com/islam9039438/30min";

const painPoints = [
  "Searching for prospects manually every day",
  "Sending generic emails nobody replies to",
  "Writing the same pitch 50 times a week",
  "Forgetting to follow up and losing deals",
  "Watching competitors close your ideal clients",
];

const offerCards = [
  {
    title: "1,000 Targeted Prospects",
    desc: "We identify businesses matching your ideal customer profile using premium B2B data. Not random lists. Real companies likely to buy.",
  },
  {
    title: "AI Company Research",
    desc: "AI studies each company's website, services, and online presence before writing a single word. Every outreach message reflects real knowledge.",
  },
  {
    title: "Personalized Interactive Demo",
    desc: "Every prospect gets a working product demo with their company name on the screen. They experience your product before you ask for a meeting.",
  },
  {
    title: "AI-Written Emails",
    desc: "Every email is written specifically for each company. References their business. Links to their personalized demo. Under 50 words.",
  },
  {
    title: "Automated Follow-Ups",
    desc: "3 strategic follow-ups over 14 days. Most replies happen after the second or third touch. We never leave opportunities behind.",
  },
  {
    title: "Weekly Optimization & Reporting",
    desc: "Open rates, reply rates, demo engagement analyzed weekly. Campaigns improved continuously. You always know what's working.",
  },
];

const everyoneElse = ["Company", "Generic Email", "Ignored", "Lost"];
const buildXAgent = ["Company", "AI Research", "Personalized Demo", "Personalized Email", "Follow-Ups", "Qualified Reply"];

const howItWorks = [
  { title: "Week 1: Discovery", desc: "We learn your business, ideal customers, and offer. Map the outbound strategy and define targeting." },
  { title: "Week 2: Build", desc: "Prospect sourcing, demo generation, email infrastructure, CRM integration, follow-up sequences. Everything built and tested." },
  { title: "Week 3: Launch", desc: "Campaign goes live. AI finds prospects, generates demos, sends outreach. Qualified replies start arriving." },
  { title: "Every Week: Optimize", desc: "Better messaging. Better targeting. Better conversion. Campaigns improve based on real data every week." },
];

const caseStudyStats = [
  { value: "500+", label: "Personalized demos generated" },
  { value: "35%", label: "Demo engagement rate" },
  { value: "$300K+", label: "Revenue generated" },
  { value: "90%", label: "Less manual prospecting" },
  { value: "3 weeks", label: "To launch" },
];

const audiences = [
  { title: "Marketing Agencies" },
  { title: "Web Dev Agencies" },
  { title: "AI Automation Agencies" },
  { title: "SaaS Companies" },
  { title: "B2B Service Businesses" },
  { title: "Consultancies" },
  { title: "SEO Agencies" },
  { title: "GHL Agencies" },
];

const faqs = [
  { q: "What is the AI Sales Engine?", a: "A fully managed AI outbound system. We find 1,000 targeted prospects per month, generate a personalized interactive demo for each one, write AI-personalized emails, send automated follow-ups, optimize campaigns weekly, and deliver transparent reports. You focus on closing." },
  { q: "How is this different from regular cold email?", a: "Cold email agencies send text with merge tags. We generate a personalized interactive demo for every prospect. Before the email arrives, each prospect has a working product built for their company. Demo engagement rates run 30-35% compared to 1-3% for generic cold email." },
  { q: "How quickly do results start?", a: "Campaign launches in week 3. First qualified replies arrive within 5-7 days of launch." },
  { q: "What industries do you work with?", a: "Marketing agencies, web dev agencies, AI automation agencies, SaaS companies, B2B service businesses, consultancies, SEO agencies, and GoHighLevel agencies. Any B2B business depending on outbound." },
  { q: "Do I need technical knowledge?", a: "No. We build, manage, and optimize the entire system. You receive weekly reports and qualified replies in your inbox." },
  { q: "What if I want to cancel?", a: "No long-term contracts. Month-to-month. You keep all tools, data, and accounts." },
];

function Flow({ steps, tone }: { steps: string[]; tone: "error" | "secondary" }) {
  return (
    <div className="flex flex-col items-start gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-start gap-2">
          <span
            className={`px-4 py-2 rounded-lg text-body-sm border ${
              tone === "error"
                ? "bg-surface-container-lowest border-error/20 text-on-surface-variant"
                : "bg-secondary/10 border-secondary/30 text-on-surface"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="pl-5 text-on-surface-variant leading-none">↓</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center px-6 lg:px-10 py-12 bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-container mx-auto relative z-10 space-y-stack-lg">
          <Tag>AI-POWERED OUTBOUND</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface tracking-tight max-w-3xl">
            Stop Chasing Clients. Build an <span className="text-gradient-blue">AI Sales Engine</span> That Books Meetings for You.
          </h1>
          <p className="text-body lg:text-lg text-on-surface-variant max-w-2xl">
            We find your ideal prospects, generate a personalized interactive demo for every company, send AI-written outreach, and deliver qualified conversations to your inbox. Every month.
          </p>
          <p className="text-body-sm font-mono text-outline uppercase tracking-wider">No generic cold emails. No templates. Personalized outreach at scale.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold text-center active:scale-95 transition-all shadow-lg shadow-primary/10">
              Book a Free Strategy Call
            </a>
            <Link href="/case-studies" className="border border-primary/20 text-primary py-4 px-8 rounded-lg font-bold text-center hover:bg-primary/5 active:scale-95 transition-all">
              See Case Studies
            </Link>
          </div>
          <div className="pt-stack-xl border-t border-outline-variant/10">
            <p className="text-tag-label font-mono text-outline uppercase tracking-widest">
              Working with agencies and B2B businesses across USA · UK · Australia · UAE
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface max-w-2xl">Your Outbound Is Broken</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((p) => (
              <li key={p} className="flex items-center gap-3 p-4 bg-surface-container-low border border-outline-variant/10 rounded-lg text-body-sm text-on-surface-variant">
                <span className="text-error font-bold text-lg leading-none flex-shrink-0" aria-hidden="true">×</span>
                {p}
              </li>
            ))}
          </ul>
          <p className="text-body text-on-surface-variant max-w-2xl">
            You spend more time looking for clients than serving them. The AI Sales Engine fixes that.
          </p>
        </div>
      </section>

      {/* The Offer */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>WHAT YOU GET EVERY MONTH</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">The AI Sales Engine</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerCards.map((c) => (
              <Reveal key={c.title}>
                <div className="p-6 lg:p-8 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface mb-stack-sm">{c.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>THE DIFFERENCE</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">We Don&apos;t Send Emails. We Send Experiences.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 lg:p-8 bg-surface-container-low border border-error/20 rounded-xl opacity-70">
              <p className="text-tag-label font-mono text-error uppercase tracking-widest mb-stack-md">Everyone Else</p>
              <Flow steps={everyoneElse} tone="error" />
            </div>
            <div className="p-6 lg:p-8 glass-card glow-accent border-secondary/20 rounded-xl">
              <p className="text-tag-label font-mono text-secondary uppercase tracking-widest mb-stack-md">BuildXAgent</p>
              <Flow steps={buildXAgent} tone="secondary" />
            </div>
          </div>
          <p className="text-body lg:text-lg text-on-surface max-w-2xl">
            <span className="text-error font-bold">1-3%</span> reply rate vs <span className="text-secondary font-bold">30-35%</span> demo engagement. The difference is the demo.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low scroll-mt-[72px]">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>THE PROCESS</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Live in 3 Weeks</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {howItWorks.map((s, i) => (
              <Reveal key={s.title}>
                <div className="relative flex lg:flex-col items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
                      <span className="font-mono font-bold text-secondary">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-1">
                    <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">{s.title}</h3>
                    <p className="text-body-sm text-on-surface-variant">{s.desc}</p>
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-[-48px] w-px dashed-connector opacity-30 lg:hidden" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ROICalculator />

      {/* Case Study */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface overflow-hidden">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="glass-card rounded-xl p-6 lg:p-10 glow-subtle border-secondary/20 space-y-stack-md relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full" />
              <div className="relative z-10 space-y-stack-md">
                <Tag color="tertiary">CLIENT RESULTS</Tag>
                <div>
                  <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">How a Melbourne Agency Built a Predictable Pipeline</h2>
                  <p className="text-tag-label font-mono text-outline mt-1">
                    Optimo Agency · Craig Kelly · Melbourne, Australia
                  </p>
                </div>
                <ul className="grid grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
                  {caseStudyStats.map((s) => (
                    <li key={s.label} className="p-4 bg-surface-container-low border border-outline-variant/10 rounded-lg">
                      <p className="text-h3-mobile lg:text-h3-desktop font-bold text-secondary">{s.value}</p>
                      <p className="text-body-sm text-on-surface-variant">{s.label}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-body-sm text-on-surface-variant max-w-2xl">
                  Craig Kelly runs Optimo Agency in Melbourne. He sold AI estimators to trade businesses. Manual prospecting limited him to 10-15 pitches per day. We built his AI Sales Engine. Now qualified conversations land in his inbox while his team focuses on closing.
                </p>
                <Link href="/case-studies" className="text-secondary font-bold flex items-center gap-1 w-fit hover:gap-2 transition-all pt-2">
                  Read Full Case Study <span aria-hidden="true">→</span>
                </Link>
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
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">If You Sell to Other Businesses, This Is for You</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences.map((a) => (
              <Reveal key={a.title}>
                <div className="p-6 bg-surface-container-low border border-outline-variant/20 rounded-xl hover:border-secondary/40 transition-all duration-300 h-full flex items-center">
                  <h3 className="text-body-sm font-bold text-on-surface">{a.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>INVESTMENT</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Simple Pricing. No Hidden Costs.</h2>
          </div>
          <div className="max-w-xl mx-auto space-y-stack-md">
            <div className="glass-card glow-accent border-secondary/20 rounded-xl p-6 lg:p-8 space-y-stack-md relative overflow-hidden">
              <div className="flex items-center justify-between gap-4">
                <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Monthly</p>
                <span className="chip-glow inline-block px-3 py-1 rounded-full text-tag-label font-mono text-secondary uppercase tracking-widest">Launch Offer</span>
              </div>
              <p className="text-h1-mobile lg:text-h1-desktop text-on-surface">$500<span className="text-h3-mobile text-on-surface-variant">/month</span></p>
              <p className="text-body-sm text-on-surface-variant">Everything included: 1,000 prospects, AI research, personalized demos, AI emails, follow-ups, weekly optimization, weekly reporting.</p>
            </div>
            <p className="text-body-sm text-on-surface-variant text-center">
              Software costs billed separately. Usually under $100-150/month. You own all accounts and data.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>FAQ</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Common Questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection
        title="Your Next Client Is Already Out There"
        subheading="The question is whether your competitors reach them first."
      />
    </>
  );
}
