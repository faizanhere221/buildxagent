"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProposalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // /proposal/salman ships its own self-contained header, so skip the shared one.
  if (pathname === "/proposal/salman") {
    return <>{children}</>;
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-10 py-4 bg-surface/95 glass-nav border-b border-outline-variant/10">
        <Link href="/" className="flex items-center gap-2">
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
