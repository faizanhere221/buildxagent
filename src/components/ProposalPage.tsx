import Tag from "@/components/Tag";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";

const CALENDLY_URL = "https://calendly.com/islam9039438/30min";

const painPoints = [
  "Searching for prospects manually",
  "Researching companies one by one",
  "Writing generic cold emails",
  "Forgetting follow-ups",
  "Watching competitors close deals first",
];

const outcomes = [
  "AI finds your ideal prospects automatically",
  "Every prospect receives a personalized interactive demo",
  "AI writes and sends outreach referencing their business",
  "Follow-ups run automatically for 14 days",
  "Qualified conversations land in your inbox",
];

const flowSteps = [
  { title: "Ideal Customers" },
  { title: "AI Prospect Research" },
  { title: "Personalized Interactive Demo", highlight: true },
  { title: "AI Personalized Email" },
  { title: "Automated Follow-Ups" },
  { title: "Qualified Replies" },
  { title: "Booked Meetings" },
];

const offerCards = [
  {
    title: "AI Lead Research",
    desc: "1,000+ targeted decision-makers identified monthly from premium B2B data sources matching your ideal customer profile.",
  },
  {
    title: "Personalized Interactive Demo",
    desc: "Every prospect receives a unique product demo with their company name deployed to a live URL before the first email.",
  },
  {
    title: "AI Personalized Emails",
    desc: "Every email written specifically for each company. No templates. No copy-paste. Each references the prospect's business.",
  },
  {
    title: "Automated Follow-Ups",
    desc: "3 strategic touchpoints over 14 days. Most replies happen after the second or third follow-up.",
  },
  {
    title: "Weekly Optimization",
    desc: "Open rates, reply rates, click rates, demo engagement analyzed weekly. Campaigns improved continuously.",
  },
  {
    title: "Transparent Reporting",
    desc: "Weekly report showing contacts made, replies received, demos viewed, and improvements planned.",
  },
];

const processSteps = [
  { label: "Week 1", title: "Discovery", desc: "We learn your business, ideal customers, and offer. Map the strategy." },
  { label: "Week 2", title: "Build", desc: "Lead sourcing, demo generation, outreach automation, CRM integration, follow-up sequences. Everything built and tested." },
  { label: "Week 3", title: "Launch", desc: "Campaign goes live. AI finds prospects, generates demos, sends outreach. Conversations start arriving." },
  { label: "Ongoing", title: "Optimize", desc: "Better messaging. Better targeting. Better conversion. Every week." },
];

const expectedOutcomes = [
  { title: "Less Manual Work", desc: "Your team stops spending 4+ hours per day on prospecting." },
  { title: "More Conversations", desc: "Qualified replies arriving in your inbox weekly instead of monthly." },
  { title: "Predictable Pipeline", desc: "Know exactly how many conversations your system generates every month." },
  { title: "Competitive Edge", desc: "Reach prospects before competitors with personalized experiences nobody else sends." },
];

const caseStudyResults = [
  { v: "500+", l: "DEMOS" },
  { v: "35%", l: "ENGAGEMENT" },
  { v: "3x", l: "REVENUE GROWTH" },
  { v: "90%", l: "LESS MANUAL WORK" },
  { v: "3 Wks", l: "DELIVERY" },
  { v: "Automated", l: "PIPELINE" },
];

const pricingTiers = [
  {
    name: "Launch",
    price: "$500",
    features: ["Up to 1,000 emails/month", "AI lead research", "Personalized demos", "AI emails", "3 follow-ups", "CRM integration", "Weekly report", "Monthly strategy call"],
  },
  {
    name: "Growth",
    price: "$900",
    highlighted: true,
    badge: "MOST POPULAR",
    features: ["Up to 2,500 emails/month", "Everything in Launch", "A/B testing", "Multiple ICP targeting", "Priority optimization", "Bi-weekly strategy calls"],
  },
  {
    name: "Scale",
    price: "$1,500",
    features: ["Up to 5,000 emails/month", "Everything in Growth", "Multi-domain campaigns", "Weekly optimization", "CRM workflow improvements"],
  },
  {
    name: "Growth Pro",
    price: "$2,500",
    features: ["Up to 7,500 emails/month", "Everything in Scale", "Advanced deliverability", "Dedicated support"],
  },
  {
    name: "Enterprise",
    price: "From $3,500",
    features: ["10,000+ emails/month", "Everything in Growth Pro", "Dedicated account manager", "Priority support", "Custom integrations"],
  },
];

const faqs = [
  { q: "Who owns the tools and data?", a: "You do. All software accounts (Apollo, Smartlead, CRM) are set up under your name. All prospect data, email accounts, and campaign assets belong to you." },
  { q: "How quickly do results start?", a: "Campaign launches in week 3. First qualified replies typically arrive within 5-7 days of launch. Predictable pipeline builds over 60-90 days." },
  { q: "What CRMs do you integrate with?", a: "GoHighLevel, HubSpot, and any CRM with API access. We configure the integration during setup." },
  { q: "What if we already do cold email?", a: "Great. Our system adds the personalized demo layer. Each prospect receives a working interactive demo before the email arrives. This single change increases engagement from 1-3% to 30-35%." },
  { q: "Is this a software tool or a managed service?", a: "Managed service. We build, run, and optimize your outbound system. You focus on conversations and closing. We handle everything else." },
  { q: "What does the weekly report include?", a: "Contacts made, emails sent, demos generated, open rates, click rates, reply rates, demo engagement, qualified conversations, and optimization plan for the following week." },
  { q: "What happens if we want to cancel?", a: "No long-term contracts. Month-to-month. You keep all tools, data, and accounts." },
];

const whyUsCards = [
  { title: "Not Freelancers", desc: "We are a specialized AI outbound agency, not a VA sending emails from a template." },
  { title: "Not a Tool", desc: "We are not selling software. We build and manage your complete outbound system." },
  { title: "Not Guessing", desc: "Every campaign is data-driven. Weekly optimization based on real performance metrics." },
];

const nextSteps = [
  { title: "Book a Strategy Call", desc: "15 minutes. Free. We map your outbound opportunity." },
  { title: "Discovery Session", desc: "We learn your business, ICP, and offer in detail." },
  { title: "We Build Your System", desc: "In 2 weeks, your AI Sales Engine is ready." },
  { title: "Launch and Grow", desc: "Qualified conversations start arriving within days." },
];

export default function ProposalPage({ clientName }: { clientName?: string }) {
  const name = clientName?.trim() || undefined;
  const preparedDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      {/* SECTION 1: Cover */}
      <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-center px-6 lg:px-10 py-16 bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(173,198,255,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-container mx-auto relative z-10 space-y-stack-lg w-full">
          <Reveal>
            <Tag>{name ? `PREPARED FOR ${name.toUpperCase()}` : "AI SALES ENGINE PROPOSAL"}</Tag>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-2">
              <span className="text-h3-mobile font-extrabold text-on-surface">BuildXAgent</span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface tracking-tight max-w-4xl">
              Turn Cold Outreach Into <span className="text-gradient-blue">Qualified Sales Conversations</span>.
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-body lg:text-lg text-on-surface-variant max-w-2xl">
              We build AI-powered outbound systems that research prospects, generate personalized interactive demos, automate outreach, and consistently fill your sales pipeline.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="pt-stack-lg space-y-1 border-t border-outline-variant/10 mt-stack-lg">
              <p className="text-body-sm text-on-surface-variant pt-stack-md">Prepared by: <span className="text-on-surface font-medium">Faizan Islam | Founder, BuildXAgent</span></p>
              <p className="text-tag-label font-mono text-outline uppercase tracking-widest">{preparedDate}</p>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-0 w-full flex justify-center z-10">
          <span className="text-outline text-2xl leading-none animate-bounce" aria-hidden="true">↓</span>
        </div>
      </section>

      {/* SECTION 2: The Problem */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag>THE CHALLENGE</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">Your Sales Team Spends More Time Prospecting Than Closing</h2>
              <p className="text-body text-on-surface-variant mt-stack-sm max-w-2xl">
                Most outbound campaigns fail because businesses rely on generic lead lists, templated emails, and inconsistent follow-ups.
              </p>
            </div>
          </Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((p, i) => (
              <Reveal key={p} delay={i * 100}>
                <li className="flex items-center gap-3 p-4 bg-surface-container-low border border-outline-variant/10 rounded-lg text-body-sm text-on-surface-variant h-full">
                  <span className="text-error font-bold text-lg leading-none flex-shrink-0" aria-hidden="true">×</span>
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="text-body text-on-surface-variant max-w-2xl border-t border-outline-variant/10 pt-stack-lg">
              The average agency spends 4+ hours per day on manual prospecting. That is 1,000+ hours per year not spent on closing deals or serving clients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: Imagine Instead */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface max-w-2xl">Imagine Waking Up Every Morning to Qualified Prospects Already Replying</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 100}>
                <div className="flex items-center gap-3 p-4 glass-card rounded-lg text-body-sm text-on-surface h-full">
                  <span className="text-secondary font-bold text-lg leading-none flex-shrink-0" aria-hidden="true">✓</span>
                  {o}
                </div>
              </Reveal>
            ))}
          </div>
          {name && (
            <Reveal>
              <p className="text-body text-on-surface-variant max-w-2xl border-t border-outline-variant/10 pt-stack-lg">
                Imagine <span className="text-on-surface font-medium">{name}&apos;s</span> sales pipeline filling automatically while your team focuses on closing.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* SECTION 4: The AI Sales Engine Framework */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-lowest">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div className="text-center">
              <Tag>THE SYSTEM</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">The BuildXAgent AI Sales Engine</h2>
            </div>
          </Reveal>
          <div className="max-w-md mx-auto">
            {flowSteps.map((step, i) => (
              <div key={step.title}>
                <Reveal delay={i * 100}>
                  <div
                    className={`relative rounded-xl p-5 flex items-center gap-4 border ${
                      step.highlight ? "glass-card glow-accent border-secondary/40" : "glass-card border-outline-variant/10"
                    }`}
                  >
                    {step.highlight && (
                      <span className="chip-glow absolute -top-3 right-4 px-3 py-1 rounded-full text-tag-label font-mono text-secondary uppercase tracking-widest whitespace-nowrap">
                        This Is Our Differentiator
                      </span>
                    )}
                    <h3 className="text-h3-mobile text-on-surface">{step.title}</h3>
                  </div>
                </Reveal>
                {i < flowSteps.length - 1 && <div className="w-px h-10 dashed-connector mx-auto opacity-50" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Why Personalized Demos Win */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag>OUR SECRET WEAPON</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">
                We Don&apos;t Personalize Greetings. We Personalize the Entire Buying Experience.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="p-6 lg:p-8 bg-surface-container-low border border-error/20 rounded-xl opacity-70 h-full space-y-stack-sm">
                <p className="text-tag-label font-mono text-error uppercase tracking-widest">What Everyone Else Sends</p>
                <p className="text-body-sm text-on-surface-variant">Generic email with first name merge tag.</p>
                <p className="text-body-sm text-on-surface-variant">Prospect gets: a text pitch identical to 14 others in their inbox.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="p-6 lg:p-8 glass-card glow-accent border-secondary/20 rounded-xl h-full space-y-stack-sm">
                <p className="text-tag-label font-mono text-secondary uppercase tracking-widest">What We Send</p>
                <p className="text-body-sm text-on-surface">A working interactive demo with the prospect&apos;s company name, their data, their use case on a live URL.</p>
                <p className="text-body-sm text-on-surface">Prospect gets: proof before the pitch.</p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-body font-bold text-on-surface max-w-2xl">
              Result: <span className="text-secondary">30-35% demo engagement</span> vs <span className="text-error">1-3% generic email reply rate</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6: Everything Included */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag>WHAT YOU GET</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Everything Included in Your AI Sales Engine</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerCards.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 100}>
                <div className="p-6 lg:p-8 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface mb-stack-sm">{c.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Our Process */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag>THE PROCESS</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Live in 3 Weeks. Results From Day 1.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
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
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-[-48px] w-px dashed-connector opacity-30 lg:hidden" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Expected Outcomes */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag>OUTCOMES</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">What Changes When Your Outbound Runs on AI</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expectedOutcomes.map((o, i) => (
              <Reveal key={o.title} delay={i * 100}>
                <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:border-secondary/40 transition-all duration-300 h-full space-y-2">
                  <h3 className="text-h3-mobile text-on-surface">{o.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Case Study */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface overflow-hidden">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag color="tertiary">CLIENT RESULTS</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">How a Melbourne Agency Built a Predictable Sales Pipeline</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass-card rounded-xl p-6 lg:p-10 glow-subtle border-secondary/20 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full" />
              <div className="relative z-10 space-y-stack-md">
                <p className="text-tag-label font-mono text-outline flex items-center gap-1">
                  Optimo Agency · Craig Kelly · Melbourne, Australia
                </p>
                <div className="space-y-2">
                  <p className="text-body-sm text-on-surface-variant"><span className="text-on-surface font-medium">Problem:</span> Manual prospecting. 10-15 pitches per day. Good close rate. Terrible volume.</p>
                  <p className="text-body-sm text-on-surface-variant"><span className="text-on-surface font-medium">Solution:</span> AI Sales Engine generating personalized estimator demos for trade businesses.</p>
                </div>
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-outline-variant/10">
                  {caseStudyResults.map((r) => (
                    <li key={r.l} className="flex flex-col pt-4">
                      <span className="text-h3-mobile font-bold text-primary">{r.v}</span>
                      <span className="text-tag-label font-mono text-on-surface-variant">{r.l}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-body text-on-surface-variant italic border-l-4 border-primary/40 pl-4 pt-2">
                  &ldquo;The hardest part of my business used to be finding clients. Now the hardest part is hiring fast enough to serve them.&rdquo;
                  <span className="block text-body-sm text-on-surface not-italic font-medium mt-2">— Craig Kelly, Optimo Agency</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 10: Pricing */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag>INVESTMENT</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Simple. Transparent. No Hidden Costs.</h2>
              {name && (
                <p className="text-body-sm font-mono text-secondary uppercase tracking-widest mt-stack-sm">Recommended package for {name}:</p>
              )}
            </div>
          </Reveal>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 100} className="flex-shrink-0 w-[80%] sm:w-[45%] lg:w-auto snap-center">
                <div
                  className={`rounded-xl p-6 space-y-stack-md h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:border-secondary/40 ${
                    tier.highlighted ? "glass-card glow-accent border-secondary/40" : "bg-surface-container-lowest border border-outline-variant/20"
                  }`}
                >
                  {tier.badge && (
                    <span className="chip-glow inline-block px-3 py-1 rounded-full text-tag-label font-mono text-secondary uppercase tracking-widest w-fit">
                      {tier.badge}
                    </span>
                  )}
                  <p className="text-tag-label font-mono text-outline uppercase tracking-widest">{tier.name}</p>
                  <p className="text-h2-mobile text-on-surface">
                    {tier.price}
                    <span className="text-body-sm text-on-surface-variant">/mo</span>
                  </p>
                  <ul className="space-y-2 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-body-sm text-on-surface-variant">
                        <span className="text-secondary font-bold text-base leading-none flex-shrink-0" aria-hidden="true">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary text-on-primary py-3 px-4 rounded-lg font-bold text-sm active:scale-95 transition-all min-h-[44px] flex items-center justify-center"
                  >
                    Book Strategy Call
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="space-y-2 max-w-2xl">
              <p className="text-body-sm text-on-surface-variant">
                One-time setup: <span className="text-on-surface font-medium">$400</span>. Covers prospect research configuration, demo template design, email infrastructure warmup, and CRM integration.
              </p>
              <p className="text-body-sm text-on-surface-variant">
                Software costs (Apollo, email sending) billed separately. Usually under $100-150/month. You own all accounts and data.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag>FAQ</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Common Questions</h2>
            </div>
          </Reveal>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* SECTION 12: Why BuildXAgent */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag>WHY US</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-2xl">We Are Not Another Cold Email Agency</h2>
              <p className="text-body text-on-surface-variant mt-stack-sm max-w-2xl">
                We are a growth partner building systems generating qualified conversations. The difference between hiring an email agency and partnering with BuildXAgent is the difference between sending text and delivering experiences.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUsCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="p-6 lg:p-8 glass-card rounded-xl h-full space-y-2">
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">{c.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: Next Steps */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <Reveal>
            <div>
              <Tag>GET STARTED</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Your Next Steps</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {nextSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 rounded-xl h-full space-y-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-mono text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="text-h3-mobile text-on-surface">{s.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: Closing CTA */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-container mx-auto space-y-stack-xl text-center">
          <Reveal>
            <div className="space-y-stack-sm">
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface max-w-2xl mx-auto">
                {name ? `${name}, Your Next Client Could Already Be Waiting.` : "Your Next Client Could Already Be Waiting."}
              </h2>
              <p className="text-body text-on-surface-variant max-w-lg mx-auto">The only question is whether your competitors reach them first.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-outline-variant/20">
              <iframe src={CALENDLY_URL} width="100%" height="700" style={{ border: 0 }} title="Book a Strategy Call" />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="space-y-stack-md">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-primary text-on-primary py-4 px-12 rounded-lg font-bold active:scale-95 transition-all shadow-lg shadow-primary/10 min-h-[44px]"
              >
                Book Strategy Call
              </a>
              <p className="text-body-sm text-on-surface-variant">hello@buildxagent.com · buildxagent.com</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
