import type { Metadata } from "next";
import SalmanPricingProposal from "@/components/SalmanPricingProposal";

export const metadata: Metadata = {
  title: "Pricing for Caito360 | BuildXAgent",
  description:
    "Pricing plans prepared for Salman Ansari, Caito360 — simple, transparent, month-to-month AI outbound packages.",
  robots: { index: false, follow: false },
};

export default function SalmanProposalPage() {
  return <SalmanPricingProposal />;
}
