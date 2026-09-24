"use client";
import { useState } from "react";

type FAQItem = { q: string; a: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-content">
      {items.map((item, i) => (
        <div key={i} className="border-b border-outline-variant/10 pb-4">
          <button
            className="w-full flex justify-between items-center text-left py-2 font-semibold text-on-surface group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="text-2xl leading-none font-light text-outline group-hover:text-secondary transition-all duration-300 flex-shrink-0 ml-4"
              style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 text-on-surface-variant text-body-sm"
            style={{ maxHeight: openIndex === i ? "200px" : "0" }}
          >
            <p className="pt-2">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
