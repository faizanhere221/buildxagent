"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isProposal = pathname?.startsWith("/proposal");

  if (isProposal) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">{children}</main>
      <Footer />
    </>
  );
}
