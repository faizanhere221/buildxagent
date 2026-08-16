"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formLoadedAt] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (res.ok) { setStatus("sent"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  if (status === "sent") {
    return (
      <div className="glass-card rounded-xl p-6 glow-subtle text-center space-y-4">
        <span className="material-symbols-outlined text-secondary text-5xl">check_circle</span>
        <h3 className="text-h3-mobile text-on-surface font-semibold">Message Sent</h3>
        <p className="text-body-sm text-on-surface-variant">We will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 glow-subtle space-y-stack-md">
      <input type="hidden" name="formLoadedAt" value={formLoadedAt} />
      <div style={{ display: "none" }} aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {[
        { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
        { name: "email", label: "Email Address", type: "email", placeholder: "john@company.com", required: true },
        { name: "company", label: "Company", type: "text", placeholder: "Acme Inc." },
      ].map((f) => (
        <div key={f.name} className="space-y-stack-xs">
          <label className="text-tag-label font-mono text-on-surface-variant uppercase">{f.label}</label>
          <input
            name={f.name}
            type={f.type}
            placeholder={f.placeholder}
            required={f.required}
            className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline"
          />
        </div>
      ))}
      <div className="space-y-stack-xs">
        <label className="text-tag-label font-mono text-on-surface-variant uppercase">Service Interest</label>
        <select name="service" className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors">
          <option>AI Estimator Demos</option>
          <option>Brand Audit Demos</option>
          <option>Custom AI Demo System</option>
          <option>Other</option>
        </select>
      </div>
      <div className="space-y-stack-xs">
        <label className="text-tag-label font-mono text-on-surface-variant uppercase">Project Details</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg active:scale-95 transition-all hover:bg-primary-container shadow-lg disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && <p className="text-error text-body-sm text-center">Something went wrong. Please try again or email us directly.</p>}
    </form>
  );
}
