import type { Metadata } from "next";
import Link from "next/link";
import Tag from "@/components/Tag";
import CTASection from "@/components/CTASection";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI Automation for Agency Owners",
  description: "Strategies, case studies, and guides to scale your agency with AI-powered prospecting.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <header className="px-6 lg:px-10 py-stack-xl lg:py-section-desktop flex flex-col items-start gap-stack-md max-w-container mx-auto">
        <Tag>BLOG</Tag>
        <h1 className="text-h1-mobile lg:text-h1-desktop text-on-surface max-w-2xl">AI Automation Blog for Agency Owners</h1>
        <p className="text-body-sm text-on-surface-variant max-w-lg">Strategies, case studies, and guides to scale your agency with AI-powered prospecting.</p>
      </header>

      {featured && (
        <section className="px-6 lg:px-10 pb-section-mobile">
          <div className="max-w-container mx-auto">
            <Link href={`/blog/${featured.slug}`} className="block glass-card rounded-xl overflow-hidden glow-subtle transition-all duration-300 hover:border-primary/20 lg:flex">
              <div className="h-56 lg:h-auto lg:w-2/5 bg-surface-container-high relative">
                <div className="absolute top-4 left-4"><span className="bg-primary text-on-primary px-2 py-0.5 rounded-sm font-mono text-[10px]">FEATURED</span></div>
              </div>
              <div className="p-6 lg:p-8 space-y-4 lg:flex-1">
                <span className="text-secondary font-mono text-tag-label tracking-widest">{featured.category.toUpperCase()}</span>
                <h2 className="text-h2-mobile lg:text-h3-desktop text-on-surface">{featured.title}</h2>
                <p className="text-body-sm text-on-surface-variant line-clamp-3">{featured.description}</p>
                <div className="pt-2 flex items-center gap-3 border-t border-outline-variant/10">
                  <span className="text-[12px] font-medium text-on-surface-variant">By {featured.author} · {featured.readingTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="px-6 lg:px-10 pb-section-mobile">
        <div className="max-w-container mx-auto space-y-stack-xl">
          <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface">Recent Posts</h3>
          {rest.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-surface-container-low border border-outline-variant/10 rounded-lg p-5 space-y-3 glow-subtle hover:border-primary/20 transition-all block">
                  <span className="text-secondary font-mono text-[11px] tracking-widest">{post.category.toUpperCase()}</span>
                  <h3 className="text-h3-mobile text-on-surface">{post.title}</h3>
                  <p className="text-body-sm text-on-surface-variant line-clamp-2">{post.description}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10">
                    <span className="text-[12px] text-outline">{post.date}</span>
                    <span className="text-secondary flex items-center gap-1 font-medium text-sm">Read more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-on-surface-variant text-center py-12">More posts coming soon.</p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
