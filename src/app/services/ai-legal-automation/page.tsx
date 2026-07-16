import type { Metadata } from "next";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Document Processing & Legal Automation",
  description: "AI dashboards for law firms and businesses. Medical record extraction, demand letter generation, invoice processing. 85% faster. 20+ hours saved weekly.",
  alternates: { canonical: "https://buildxagent.com/services/ai-legal-automation" },
};

const automations = [
  {
    icon: "medical_information",
    title: "Medical Record Processing",
    items: ["Claude Vision API reads scanned medical records", "Extracts patient info, ICD codes, treatment history, expenses", "Generates structured data for demand letters", "85% faster than manual review"],
  },
  {
    icon: "history_edu",
    title: "Demand Letter Generation",
    items: ["AI reads extracted medical data", "Generates formatted demand letters with calculated damages", "Includes itemized expense tables and legal citations", "Review and edit before sending"],
  },
  {
    icon: "receipt_long",
    title: "Document Data Extraction",
    items: ["Invoice processing and data capture", "Contract clause identification and summarization", "Insurance claim form processing", "Any structured data extraction from unstructured documents"],
  },
];

const dashboardFeatures = [
  "Upload PDFs, scanned images, or photos",
  "AI processes documents in seconds",
  "View extracted data in organized tables",
  "Export to CSV, Excel, or directly to your case management system",
  "10+ AI widgets handling different document types",
];

export default function AILegalAutomationPage() {
  return (
    <>
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto">
          <Tag>AI LEGAL & DOCUMENT AUTOMATION</Tag>
          <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface mt-stack-md leading-tight max-w-3xl">
            AI Systems That Read, Extract, and Process Your Documents
          </h1>
          <p className="text-body text-on-surface-variant mt-stack-md max-w-2xl">
            We build AI-powered dashboards for law firms and professional services. Upload a scanned document. The AI reads every page, extracts structured data, and generates reports. What took your team hours now takes minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-xl">
            <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-bold text-center shadow-lg hover:bg-primary-container transition-all">Book a Free Strategy Call</a>
            <Link href="/case-studies" className="border border-outline-variant text-on-surface py-4 px-8 rounded-lg font-bold text-center bg-surface-container/50">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">What We Automate</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {automations.map((a) => (
              <Reveal key={a.title}>
                <div className="glass-card p-6 lg:p-8 rounded-xl h-full">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mb-stack-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{a.icon}</span>
                  </div>
                  <h3 className="text-h3-mobile lg:text-h3-desktop text-white mb-stack-md">{a.title}</h3>
                  <ul className="space-y-3">
                    {a.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-body-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0">check_circle</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Dashboard */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">The Dashboard</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {dashboardFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 p-4 bg-surface-container-low border border-outline-variant/10 rounded-lg text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary">check_circle</span>{f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case Study */}
      <section className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface-container-low">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="glass-card rounded-xl p-6 lg:p-10 glow-subtle space-y-stack-md">
              <Tag color="tertiary">CASE STUDY</Tag>
              <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface">Synergy Legal</h2>
              <p className="text-body-sm text-on-surface-variant">Utah, USA — AI document processing dashboard. Claude Vision API reads scanned medical records, extracts expenses and ICD codes, generates demand letters. 85% faster processing. 10+ AI widgets. 20+ hours saved weekly.</p>
              <Link href="/case-studies" className="text-secondary font-bold flex items-center gap-1 w-fit hover:gap-2 transition-all">
                Read full case study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
