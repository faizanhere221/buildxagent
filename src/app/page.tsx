import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import FAQ from "@/components/FAQ";

const painPoints = [
  "Searching for prospects",
  "Researching companies one by one",
  "Writing cold emails all day",
  "Following up manually",
  "Updating spreadsheets and CRMs",
];

const offerCards = [
  {
    icon: "search",
    title: "AI Lead Research",
    desc: "We identify businesses matching your ideal customer profile. Not purchased lead lists. Not random databases. Real businesses likely to buy from you.",
  },
  {
    icon: "devices",
    title: "Personalized Interactive Demo",
    desc: "Before your first email is sent, we generate a personalized version of your product for every prospect. When they click the link, they see THEIR company inside the experience. Curiosity creates replies.",
  },
  {
    icon: "edit_note",
    title: "AI Personalized Outreach",
    desc: "Every email is written specifically for each business. Not templates. Not ChatGPT spam. Every message feels handcrafted because AI researches each prospect before writing.",
  },
  {
    icon: "autorenew",
    title: "Automated Follow-Ups",
    desc: "Most agencies stop after one email. We don't. Our AI automatically follows up with every prospect. Most replies happen after the second or third touchpoint.",
  },
  {
    icon: "trending_up",
    title: "Weekly Optimization",
    desc: "Every campaign is continuously improved. We monitor open rates, reply rates, click rates, and demo engagement. Then optimize your campaign every week.",
  },
  {
    icon: "bar_chart",
    title: "Transparent Reporting",
    desc: "Every week you know how many businesses were contacted, who replied, who clicked, what worked, and what we improve next.",
  },
];

const howItWorks = [
  { label: "Week 1", title: "Discovery", desc: "We understand your business, ideal clients, and offer. We map the outbound strategy and define your ideal customer profile." },
  { label: "Week 2", title: "Build", desc: "We build your complete AI Sales Engine. Lead sourcing. Personalized demo generation. Outreach automation. CRM integration. Follow-up sequences. Email infrastructure warmup." },
  { label: "Week 3", title: "Launch", desc: "Your campaign goes live. AI starts finding prospects, generating personalized demos, sending outreach, and booking conversations." },
  { label: "Every Week", title: "Optimize", desc: "Better messaging. Better targeting. Better conversion. We continuously improve based on real performance data." },
];

const caseStudyResults = [
  "500+ personalized demos generated",
  "35% demo engagement rate",
  "$300K+ revenue generated",
  "Automated outbound pipeline",
  "90% less manual prospecting",
  "Delivered in 3 weeks",
];

const audiences = [
  { icon: "campaign", title: "Marketing Agencies" },
  { icon: "design_services", title: "Web Development Agencies" },
  { icon: "hub", title: "AI Automation Agencies" },
  { icon: "widgets", title: "SaaS Companies" },
  { icon: "handshake", title: "B2B Service Businesses" },
  { icon: "groups", title: "Consultancies" },
  { icon: "travel_explore", title: "SEO Agencies" },
  { icon: "calculate", title: "GoHighLevel Agencies" },
];

const before = ["Spend hours prospecting", "Write emails all day", "Forget follow-ups", "No replies"];
const after = [
  "AI finds your ideal prospects",
  "Personalized demo generated for every company",
  "AI writes and sends outreach",
  "Automatic follow-ups run for 14 days",
  "Qualified conversations land in your inbox",
];

const faqs = [
  { q: "What is the AI Sales Engine?", a: "A fully managed AI outbound system. We find 1,000 targeted prospects per month, generate a personalized interactive demo for each one, write AI-personalized emails, send automated follow-ups, optimize campaigns weekly, and deliver transparent performance reports. Your team focuses on closing deals." },
  { q: "How is this different from a cold email agency?", a: "Cold email agencies send text emails with basic personalization (first name, company name). We generate a personalized interactive demo for every prospect. Before the first email arrives, each prospect has a working product experience built for their company. The demo link in the email drives 30-35% engagement rates compared to 1-3% for generic cold email." },
  { q: "What does the $300 setup fee cover?", a: "Prospect research configuration (defining your ideal customer profile and data sources), demo template design (building the interactive demo for your offer), email infrastructure warmup (setting up sending domains and warming them for deliverability), and CRM integration (connecting your pipeline so leads flow automatically)." },
  { q: "How quickly do results start?", a: "Your campaign launches in week 3 after setup. Most clients see their first qualified replies within 5-7 days of launch. A predictable pipeline builds over 30-60 days as follow-up sequences run and demo engagement compounds." },
  { q: "What industries do you work with?", a: "Marketing agencies, web development agencies, AI automation agencies, SaaS companies, B2B service businesses, consultancies, SEO agencies, and GoHighLevel agencies. Any business depending on outbound to find clients benefits from the system." },
  { q: "Do I need any technical knowledge?", a: "No. We build, manage, and optimize the entire system. You receive weekly reports and qualified replies in your inbox. The technical infrastructure runs behind the scenes." },
  { q: "What software costs are separate?", a: "B2B prospect data (Apollo or similar, ~$50/month) and email sending (Smartlead or similar, ~$30-50/month). Total software is usually under $100/month. You own all accounts and data." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center px-6 lg:px-10 py-12 bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-container mx-auto relative z-10 space-y-stack-lg">
          <Tag>AI-POWERED OUTBOUND</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface tracking-tight max-w-3xl">
            Stop Chasing Clients. Build an <span className="text-gradient-blue">AI Sales System</span> That Brings Qualified Leads to You Every Month.
          </h1>
          <p className="text-body lg:text-lg text-on-surface-variant max-w-2xl">
            We build AI-powered outbound systems that find your ideal prospects, generate a personalized interactive demo for every company, send highly personalized outreach, and automatically follow up. Your team spends less time prospecting and more time closing deals.
          </p>
          <p className="text-body-sm font-mono text-outline uppercase tracking-wider">No generic cold emails. No mass spam. Personalized outreach at scale.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold text-center active:scale-95 transition-all shadow-lg shadow-primary/10">
              Book Your Free Strategy Call
            </a>
            <Link href="/case-studies" className="border border-primary/20 text-primary py-4 px-8 rounded-lg font-bold text-center hover:bg-primary/5 active:scale-95 transition-all">
              See Case Studies
            </Link>
          </div>
          <div className="pt-stack-xl flex flex-col items-start gap-4 border-t border-outline-variant/10">
            <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Trusted by agencies and service businesses across</p>
            <div className="flex flex-wrap gap-8 opacity-50 text-on-surface-variant">
              <span className="font-bold">USA</span>
              <span className="font-bold">Australia</span>
              <span className="font-bold">UK</span>
              <span className="font-bold">UAE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface max-w-2xl">Your Sales Team Shouldn&apos;t Spend Hours Looking for Clients</h2>
            <p className="text-body text-on-surface-variant mt-stack-sm max-w-2xl">Most businesses lose dozens of potential customers every month because their sales process depends on manual work.</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((p) => (
              <li key={p} className="flex items-center gap-3 p-4 bg-surface-container-low border border-outline-variant/10 rounded-lg text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-error flex-shrink-0">close</span>
                {p}
              </li>
            ))}
          </ul>
          <p className="text-body text-on-surface-variant max-w-2xl">
            Meanwhile your competitors are already reaching those same businesses. BuildXAgent automates your outbound process from prospect discovery to booked meetings.
          </p>
        </div>
      </section>

      {/* The Offer */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>OUR FLAGSHIP OFFER</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">The AI Sales Engine</h2>
            <p className="text-body text-on-surface-variant mt-stack-sm max-w-lg">Everything you need to consistently generate qualified outbound opportunities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerCards.map((c) => (
              <Reveal key={c.title}>
                <div className="p-6 lg:p-8 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mb-stack-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{c.icon}</span>
                  </div>
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
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">Most Agencies Send Emails. We Build Experiences.</h2>
            <p className="text-body text-on-surface-variant mt-stack-sm max-w-2xl">
              Anyone personalizes a first name. Very few agencies personalize the entire buying experience. Before your prospect even replies, they have already experienced a version of your product built specifically for them.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 lg:p-8 bg-surface-container-low border border-error/20 rounded-xl opacity-70">
              <p className="text-tag-label font-mono text-error uppercase tracking-widest mb-stack-md">Traditional Outreach</p>
              <div className="flex flex-wrap items-center gap-2 text-body-sm text-on-surface-variant">
                {["Company", "Generic Email", "Ignored", "Lost"].map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-2">
                    {step}
                    {i < arr.length - 1 && <span className="material-symbols-outlined text-error text-sm">arrow_forward</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 lg:p-8 glass-card glow-accent border-secondary/20 rounded-xl">
              <p className="text-tag-label font-mono text-secondary uppercase tracking-widest mb-stack-md">Our System</p>
              <div className="flex flex-wrap items-center gap-2 text-body-sm text-on-surface">
                {["Company", "AI Research", "Personalized Demo", "Personalized Email", "Automated Follow-Ups", "Qualified Reply"].map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-2">
                    {step}
                    {i < arr.length - 1 && <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low scroll-mt-[72px]">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>THE PROCESS</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Live in 3 Weeks. Results From Week 1.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {howItWorks.map((s, i) => (
              <Reveal key={s.title}>
                <div className="relative flex lg:flex-col items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center">
                      <span className="font-mono text-gradient-blue font-bold text-xs">{s.label}</span>
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

      {/* Case Study */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface overflow-hidden">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="glass-card rounded-xl p-6 lg:p-10 glow-subtle border-secondary/20 space-y-stack-md relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full" />
              <div className="relative z-10 space-y-stack-md">
                <Tag color="tertiary">CLIENT RESULTS</Tag>
                <div>
                  <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">How a Melbourne Agency Built a Predictable Sales Pipeline</h2>
                  <p className="text-tag-label font-mono text-outline flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> Optimo Agency · Craig Kelly · Melbourne, Australia
                  </p>
                </div>
                <p className="text-body-sm text-on-surface-variant max-w-2xl">
                  Craig sold AI estimators to trade businesses. Manual prospecting limited him to 10-15 pitches per day. We built his AI Sales Engine. Now his system finds qualified trade businesses, generates personalized estimator demos, and sends AI-written outreach automatically. His calendar fills with qualified calls while his team focuses on closing.
                </p>
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {caseStudyResults.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0">trending_up</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/case-studies" className="text-secondary font-bold flex items-center gap-1 w-fit hover:gap-2 transition-all pt-2">
                  Read Full Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">If Your Business Depends on Finding New Clients, This System Was Built for You</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences.map((a) => (
              <Reveal key={a.title}>
                <div className="p-6 bg-surface-container-low border border-outline-variant/20 rounded-xl hover:border-secondary/40 transition-all duration-300 h-full flex flex-col items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-3xl">{a.icon}</span>
                  <h3 className="text-body-sm font-bold text-on-surface">{a.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Vision */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface max-w-2xl">Imagine Waking Up Every Morning to Qualified Prospects Already Replying</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 lg:p-8 bg-surface-container-lowest border border-error/20 rounded-xl space-y-4">
              {before.map((b) => (
                <div key={b} className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-error flex-shrink-0">close</span>
                  {b}
                </div>
              ))}
            </div>
            <div className="p-6 lg:p-8 glass-card glow-accent border-secondary/20 rounded-xl space-y-4">
              {after.map((a) => (
                <div key={a} className="flex items-center gap-3 text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0">check_circle</span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <div>
            <Tag>INVESTMENT</Tag>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Simple. Transparent. No Hidden Costs.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 lg:p-8 space-y-stack-md">
              <p className="text-tag-label font-mono text-outline uppercase tracking-widest">One-Time Setup</p>
              <p className="text-h1-mobile lg:text-h1-desktop text-on-surface">$300</p>
              <p className="text-body-sm text-on-surface-variant">Covers prospect research configuration, demo template design, email infrastructure warmup, and CRM integration.</p>
            </div>
            <div className="glass-card glow-accent border-secondary/20 rounded-xl p-6 lg:p-8 space-y-stack-md relative overflow-hidden">
              <span className="chip-glow inline-block px-3 py-1 rounded-full text-tag-label font-mono text-secondary uppercase tracking-widest w-fit">Limited early client spots available</span>
              <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Launch Offer</p>
              <p className="text-h1-mobile lg:text-h1-desktop text-on-surface">$500<span className="text-h3-mobile text-on-surface-variant">/month</span></p>
              <p className="text-body-sm text-on-surface-variant">Everything included: 1,000 targeted prospects, AI research, personalized demos, AI emails, automated follow-ups, weekly optimization, weekly reporting.</p>
            </div>
          </div>
          <p className="text-body-sm text-on-surface-variant max-w-2xl">
            Software costs are billed separately and usually remain under $100/month depending on campaign size. You own all your tools and data.
          </p>
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
        title="Your Next Client Could Already Be Waiting"
        subheading="The only question is whether your competitors reach them first. Build an AI Sales System generating qualified opportunities around the clock."
      />
    </>
  );
}
