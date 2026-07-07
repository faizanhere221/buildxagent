"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-10 py-4 bg-surface/95 glass-nav border-b border-outline-variant/10">
        <Link href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-h3-mobile" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
          <span className="text-h3-mobile font-extrabold text-on-surface">BuildXAgent</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-tag-label font-mono uppercase tracking-widest transition-colors ${
                pathname === l.href || pathname.startsWith(l.href + "/")
                  ? "text-secondary font-medium"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/islam9039438/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-container transition-all active:scale-95"
          >
            Book a Call
          </a>
        </nav>

        <button
          className="md:hidden text-on-surface-variant hover:text-secondary transition-colors active:scale-95"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-surface/98 glass-nav flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-xl font-semibold transition-colors ${
                pathname === l.href ? "text-secondary" : "text-on-surface hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/islam9039438/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg mt-4"
          >
            Book a Call
          </a>
        </div>
      )}
    </>
  );
}
