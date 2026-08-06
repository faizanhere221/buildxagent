import type { Metadata } from "next";
import ProposalPage from "@/components/ProposalPage";

export const metadata: Metadata = {
  title: "AI Sales Engine Proposal",
  robots: { index: false, follow: false },
};

export default function Proposal() {
  return <ProposalPage />;
}
