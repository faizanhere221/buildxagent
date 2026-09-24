"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const WORD = "BuildXAgent";
// Timeline (ms): letters type over 1500, line draws 1500→2500, screen fades 2500→3000.
const TYPE_MS = 1500;
const TOTAL_MS = 3000;

// The animation itself is pure CSS (see .splash-* in globals.css) so it still
// finishes and fades if JS is slow. This component only unmounts it afterwards.
// Repeat visits in the same session are hidden before paint by the inline
// script in layout.tsx, which adds `splash-seen` to <html>.
// Proposal links go to clients, so they open straight to the content.
export default function SplashScreen() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const seen = document.documentElement.classList.contains("splash-seen");
    const timer = setTimeout(() => setMounted(false), seen ? 0 : TOTAL_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || pathname?.startsWith("/proposal")) return null;

  return (
    <div className="splash fixed inset-0 z-[9999] bg-surface flex items-center justify-center" aria-hidden="true">
      <div className="flex flex-col items-center gap-4">
        <p className="font-sans font-extrabold text-4xl lg:text-6xl text-on-surface tracking-tight">
          {WORD.split("").map((ch, i) => (
            <span key={i} className="splash-letter" style={{ animationDelay: `${(i * TYPE_MS) / WORD.length}ms` }}>
              {ch}
            </span>
          ))}
        </p>
        <div className="splash-line h-0.5 bg-primary rounded-full" />
      </div>
    </div>
  );
}
