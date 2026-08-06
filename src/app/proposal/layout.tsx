import type { ReactNode } from "react";
import Link from "next/link";

export default function ProposalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-10 py-4 bg-surface/95 glass-nav border-b border-outline-variant/10">
        <Link href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-h3-mobile" style={{ fontVariationSettings: "'FILL' 1" }}>
            token
          </span>
          <span className="text-h3-mobile font-extrabold text-on-surface">BuildXAgent</span>
        </Link>
        <a
          href="https://calendly.com/islam9039438/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-container transition-all active:scale-95"
        >
          Book a Call
        </a>
      </header>
      <main className="pt-[72px]">{children}</main>
    </>
  );
}
