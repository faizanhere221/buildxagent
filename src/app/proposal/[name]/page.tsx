import type { Metadata } from "next";
import ProposalPage from "@/components/ProposalPage";

function toDisplayName(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const displayName = toDisplayName(decodeURIComponent(name));
  return {
    title: `Proposal for ${displayName}`,
    robots: { index: false, follow: false },
  };
}

export default async function ClientProposal({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const displayName = toDisplayName(decodeURIComponent(name));
  return <ProposalPage clientName={displayName} />;
}
