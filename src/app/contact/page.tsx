import type { Metadata } from "next";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation",
  description: "Book a free strategy call or send us a message. We build AI prospecting systems for agency owners.",
};

const faqs = [
  { q: "What happens after I book a call?", a: "We review your niche, discuss your goals, and propose a system architecture. You receive a detailed technical roadmap and fixed-price quote within 48 hours. No commitment required." },
  { q: "How long does a project take?", a: "Most core systems are delivered in 2-3 weeks from kickoff to deployment. Larger-scale builds with complex integrations may take longer depending on scope." },
  { q: "What does it cost?", a: "Projects start at $1,000. Final pricing depends on complexity, integrations, and volume requirements. Every system is measured by ROI, not hours." },
];

export default function ContactPage() {
  return (
    <>
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto">
          <Tag>CONTACT</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface mt-stack-md">Start a Conversation</h1>
          <p className="text-body text-on-surface-variant mt-stack-sm">Book a free strategy call or send us a message.</p>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-section-mobile">
        <div className="max-w-container mx-auto flex flex-col lg:flex-row gap-stack-lg">
          <div className="lg:flex-1">
            <ContactForm />
          </div>
          <div className="lg:flex-1 space-y-stack-md">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-stack-md">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center"><span className="material-symbols-outlined text-secondary">calendar_today</span></div>
                <h3 className="text-h3-mobile text-on-surface font-semibold">Book a Strategy Call</h3>
              </div>
              <p className="text-body-sm text-on-surface-variant mb-stack-lg">30 minutes. Free. No pitch. We review your prospecting process and show you how AI demos work.</p>
              <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all">
                Book on Calendly <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-stack-md">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center"><span className="material-symbols-outlined text-tertiary">mail</span></div>
                <h3 className="text-h3-mobile text-on-surface font-semibold">Email Us</h3>
              </div>
              <a className="text-secondary font-mono text-body-sm hover:underline" href="mailto:hello@buildxagent.com">hello@buildxagent.com</a>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-stack-md">
                <div className="w-10 h-10 rounded-full bg-on-surface-variant/10 flex items-center justify-center"><span className="material-symbols-outlined text-on-surface-variant">public</span></div>
                <h3 className="text-h3-mobile text-on-surface font-semibold">Serving</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["USA","UK","AUSTRALIA","UAE","JORDAN"].map(c=>(<span key={c} className="px-3 py-1 bg-surface-container-high rounded-full text-tag-label font-mono text-on-surface">{c}</span>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-section-mobile bg-surface">
        <div className="max-w-container mx-auto">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mb-stack-lg">Common Questions</h2>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
