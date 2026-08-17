"use client";

import { useState } from "react";
import styles from "./SalmanPricingProposal.module.css";

const CALENDLY_URL = "https://calendly.com/islam9039438/30min";

const plans = [
  {
    name: "Launch",
    price: "$500",
    volume: "Up to 1,000 emails/month",
    featured: false,
    badge: null,
    features: [
      "AI lead research",
      "Personalized demo per prospect",
      "AI-written outreach emails",
      "3 follow-ups over 21 days",
      "CRM integration",
      "Weekly performance report",
      "1 niche / city",
    ],
    cta: "Start with Launch",
    ctaStyle: "ghost",
  },
  {
    name: "Growth",
    price: "$900",
    volume: "Up to 2,500 emails/month",
    featured: true,
    badge: "Most Popular",
    features: [
      { text: "Everything in Launch", highlight: true },
      "A/B email testing",
      "Multiple ICP targeting",
      "Priority optimization",
      "2 niches simultaneously",
      "Bi-weekly strategy call",
      "Dedicated Slack channel",
    ],
    cta: "Start with Growth",
    ctaStyle: "primary",
  },
  {
    name: "Scale",
    price: "$1,500",
    volume: "Up to 5,000 emails/month",
    featured: false,
    badge: null,
    features: [
      { text: "Everything in Growth", highlight: true },
      "Multi-domain campaigns",
      "Advanced deliverability",
      "Weekly optimization calls",
      "Up to 3 niches",
      "Apollo API integration",
      "Custom demo variants",
    ],
    cta: "Start with Scale",
    ctaStyle: "ghost",
  },
  {
    name: "Growth Pro",
    price: "$2,500",
    volume: "Up to 7,500 emails/month",
    featured: false,
    badge: null,
    features: [
      { text: "Everything in Scale", highlight: true },
      "Advanced deliverability",
      "Dedicated account manager",
      "Dedicated support",
      "Up to 5 niches simultaneously",
      "Priority support",
      "Custom reporting dashboard",
    ],
    cta: "Start with Growth Pro",
    ctaStyle: "ghost",
  },
  {
    name: "Enterprise",
    price: "$3,500",
    volume: "10,000+ emails/month",
    featured: false,
    badge: null,
    features: [
      { text: "Everything in Growth Pro", highlight: true },
      "Unlimited niches",
      "Full Apollo API automation",
      "White-glove onboarding",
      "Dedicated account manager",
      "Custom AI agent build",
      "SLA guarantee",
    ],
    cta: "Talk to us",
    ctaStyle: "ghost",
  },
];

const phases = [
  {
    label: "Month 1 — Test",
    title: "~1,000 emails per niche",
    desc: "Send simultaneously across your target niches (HVAC, Beauty, MedSpa, Clinics, etc.). Each niche gets its own personalized demo variant. Identify top converting verticals. Email warm-up included.",
  },
  {
    label: "Months 2–3 — Scale",
    title: "Double down on winners",
    desc: "Shift 70% of volume to top-converting niches. Refine messaging and demos based on month 1 data. Target 30–50 new clients across the best-performing verticals.",
  },
  {
    label: "Months 4–6 — Full Throttle",
    title: "All winning verticals optimized",
    desc: "Every confirmed vertical running at full volume. Messaging dialled in. Aiming for 50–100 total clients across all your ProfitOS products.",
  },
];

const included = [
  {
    icon: "🎯",
    title: "AI Lead Research",
    desc: "Targeted decision-makers scraped from Apollo filtered by size, location, reviews, and activity. You get quality, not junk lists.",
  },
  {
    icon: "🖥️",
    title: "Personalized Demo Per Prospect",
    desc: "Every prospect gets a live URL with their actual business name inside your product. Built via Vercel + Claude API. No two demos are identical.",
  },
  {
    icon: "✉️",
    title: "AI-Written Outreach",
    desc: "Each email references the prospect's specific business, location, and pain point. Not templates. Not merge tags. Written by AI for each company.",
  },
  {
    icon: "🔄",
    title: "3 Automated Follow-Ups",
    desc: "If they don't reply, we follow up 3 times over 21 days with progressively different angles. Most deals close on follow-up 2 or 3.",
  },
  {
    icon: "📊",
    title: "Weekly Performance Reports",
    desc: "Open rates, click rates, demo engagement, reply rates, and what we're changing next week. Full transparency, every Monday.",
  },
  {
    icon: "🔗",
    title: "GoHighLevel CRM Sync",
    desc: "Qualified replies land directly in your GHL pipeline. HL Pro Tools takes it from there. Zero gap between acquisition and fulfillment.",
  },
];

const faqs = [
  {
    q: "Who owns the tools and data?",
    a: "You do. All tools, accounts, and data are set up under your name from day one. We operate them on your behalf. If you ever part ways with us, everything stays with you — leads, domains, accounts, all of it.",
  },
  {
    q: "What are the software costs on top of this?",
    a: (
      <>
        There are two categories of additional costs, all billed directly to you and all yours to own:
        <br />
        <br />
        <strong style={{ color: "var(--white)" }}>Monthly tools:</strong> Lead sourcing software ($59/mo) + email
        sending infrastructure ($39/mo) + mailboxes (~$6/mailbox/mo). For scale sending you need multiple mailboxes —
        each mailbox can send up to 50 emails/day once warmed up (starts at 10/day). So 1,000 emails/month needs ~2–3
        mailboxes; 5,000+ needs 8–10. Typically $120–180/mo total.
        <br />
        <br />
        <strong style={{ color: "var(--white)" }}>One-time setup:</strong> Sending domains (~$12–15 each). You never
        send cold email from your main domain — we use dedicated outreach domains to protect your brand. Typically
        $50–100 one-time for a full domain set.
        <br />
        <br />
        We handle all setup and configuration. You just approve the purchases.
      </>
    ),
  },
  {
    q: "How long before we see results?",
    a: "Email warm-up runs in week 1. Full campaign launches week 2. First replies typically arrive 5–10 days after launch. Based on your 100-client goal, we plan for month 1 as testing, months 2–6 as aggressive scaling.",
  },
  {
    q: "Can we run multiple niches at once?",
    a: "Yes — higher tiers support multiple simultaneous verticals. We recommend starting with parallel testing at ~1,000 emails per niche in month 1, then doubling down on the top converters from month 2 onwards.",
  },
  {
    q: "How is this different from a regular cold email agency?",
    a: "Everyone else sends emails with a first-name merge tag. We send a working demo of your SaaS product with the prospect's actual business name inside it. That's why we get 3x more engagement than generic cold email. The demo is the differentiator.",
  },
];

export default function SalmanPricingProposal() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          Build<span>X</span>Agent
        </div>
        <div className={styles.headerFor}>
          📄 Prepared for <strong>Salman Ansari · Caito360</strong>
        </div>
        <a href={CALENDLY_URL} className={styles.headerCta} target="_blank" rel="noopener noreferrer">
          Book a Call
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroEyebrow}>💰 Investment</div>
        <h1>
          Simple.
          <br />
          <em>Transparent.</em>
        </h1>
        <p>Month-to-month. You own everything. Cancel anytime.</p>
      </section>

      <div className={styles.contextBar}>
        <div className={styles.contextIcon}>🎯</div>
        <div>
          <div className={styles.contextTitle}>Salman — based on your goal of 100 clients in 6 months</div>
          <div className={styles.contextText}>
            We recommend a <strong>parallel niche testing approach</strong> — running ~1,000 emails per vertical
            simultaneously in month 1 across your target niches (HVAC, Beauty, MedSpa, Clinics, etc.) to identify
            which converts fastest. That&apos;s a <strong>Scale or Growth Pro campaign</strong>, not a single Launch.
            The plan below breaks down exactly how this works financially.
          </div>
        </div>
      </div>

      <section className={styles.pricingSection}>
        <div className={styles.pricingGrid}>
          {plans.map((plan) => (
            <div key={plan.name} className={`${styles.planCard}${plan.featured ? ` ${styles.featured}` : ""}`}>
              {plan.badge && <div className={styles.planBadge}>{plan.badge}</div>}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.planPrice}>
                {plan.price}
                <span>/mo</span>
              </div>
              <div className={styles.planVolume}>{plan.volume}</div>
              <ul className={styles.planFeatures}>
                {plan.features.map((f, i) => {
                  const isObj = typeof f === "object";
                  const text = isObj ? f.text : f;
                  const highlight = isObj && f.highlight;
                  return (
                    <li key={i} className={highlight ? styles.highlight : ""}>
                      {text}
                    </li>
                  );
                })}
              </ul>
              <button className={`${styles.planCta} ${styles[plan.ctaStyle]}`}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.salmanSection}>
        <div className={styles.salmanCard}>
          <div className={styles.salmanEyebrow}>⚡ Recommended for Caito360 · 100 Clients in 6 Months</div>
          <div className={styles.salmanTitle}>The Parallel Niche Testing Plan</div>
          <div className={styles.salmanSub}>
            Based on your goal of 100 clients across multiple verticals, here&apos;s the exact phased approach we
            discussed — starting lean with testing, scaling fast once we know what converts.
          </div>

          <div className={styles.salmanPhases}>
            {phases.map((p) => (
              <div className={styles.phaseCard} key={p.label}>
                <div className={styles.phaseLabel}>{p.label}</div>
                <div className={styles.phaseTitle}>{p.title}</div>
                <div className={styles.phaseDesc}>{p.desc}</div>
              </div>
            ))}
          </div>

          <div className={styles.salmanNote}>
            <div className={styles.salmanNoteTitle}>📌 Note on multi-niche demos</div>
            <div className={styles.salmanNoteText}>
              Each niche you target requires its own personalized demo template (e.g. HomeServicesOS for HVAC,
              ClinicOS for medical, BeautyOS for salons). Building each demo is included in the plan — the more
              niches you run simultaneously, the more demo variants we build and maintain for you.
            </div>
          </div>

          <div className={styles.salmanTotal}>
            <div>
              <div className={styles.salmanTotalLabel}>Recommended starting tier for parallel niche testing</div>
              <div className={styles.salmanTotalNote}>
                $2,500/mo · scales with results · month-to-month · no setup fee
              </div>
            </div>
            <div>
              <div className={styles.salmanTotalAmount}>Growth Pro · $2,500/mo</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.includedSection}>
        <div className={styles.sectionEyebrow}>Every Plan Includes</div>
        <div className={styles.sectionTitle}>Built to run itself.</div>
        <div className={styles.sectionSub}>Everything we deliver — no retainers for extras, no surprise charges.</div>

        <div className={styles.includedGrid}>
          {included.map((c) => (
            <div className={styles.includedCard} key={c.title}>
              <div className={styles.includedIcon}>{c.icon}</div>
              <div className={styles.includedTitle}>{c.title}</div>
              <div className={styles.includedDesc}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionEyebrow}>FAQ</div>
        <div className={styles.sectionTitle} style={{ fontSize: "22px", marginBottom: "24px" }}>
          Common questions
        </div>

        {faqs.map((item, i) => {
          const isOpen = openFaq === i;
          return (
            <div className={styles.faqItem} key={item.q}>
              <div
                className={`${styles.faqQ}${isOpen ? ` ${styles.open}` : ""}`}
                onClick={() => setOpenFaq(isOpen ? null : i)}
              >
                {item.q} <span className={styles.arrow}>▾</span>
              </div>
              <div className={`${styles.faqA}${isOpen ? ` ${styles.open}` : ""}`}>{item.a}</div>
            </div>
          );
        })}
      </section>

      <section className={styles.ctaFooter}>
        <h2>Ready to build Caito360&apos;s pipeline?</h2>
        <p>Your first HomeServicesOS client could already be searching for what you offer.</p>
        <div className={styles.ctaFooterBtns}>
          <a href={CALENDLY_URL} className={styles.btnCtaMain} target="_blank" rel="noopener noreferrer">
            Book the Next Call
          </a>
        </div>
        <div className={styles.footerSig}>
          <strong>Faizan Islam</strong> · Founder, BuildXAgent · hello@buildxagent.com · buildxagent.com
        </div>
      </section>
    </div>
  );
}
