import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-stack-xl px-6 flex flex-col items-center text-center space-y-stack-lg bg-surface border-t border-outline-variant/10">
      <Link href="/" className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
        <span className="text-h3-mobile font-extrabold text-on-surface">BuildXAgent</span>
      </Link>

      <nav className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-x-12 gap-y-4">
        <Link href="/services" className="text-tag-label font-mono text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">Services</Link>
        <Link href="/case-studies" className="text-tag-label font-mono text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">Case Studies</Link>
        <Link href="/blog" className="text-tag-label font-mono text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">Blog</Link>
        <Link href="/about" className="text-tag-label font-mono text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">About</Link>
        <Link href="/contact" className="text-tag-label font-mono text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">Contact</Link>
        <a href="https://calendly.com/islam9039438/30min" target="_blank" rel="noopener noreferrer" className="text-tag-label font-mono text-secondary font-medium hover:text-primary transition-colors uppercase tracking-widest">Book Call</a>
      </nav>

      <div className="w-12 h-px bg-outline-variant/30" />

      <p className="text-body-sm text-on-surface-variant">
        © {new Date().getFullYear()} BuildXAgent. Engineered Excellence.
      </p>
    </footer>
  );
}
