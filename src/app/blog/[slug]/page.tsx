import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import CTASection from "@/components/CTASection";
import { MDXRemote } from "next-mdx-remote/rsc";
import Tag from "@/components/Tag";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.keywords,
    openGraph: { title: post.meta.title, description: post.meta.description, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <header className="max-w-content mx-auto px-6 py-section-mobile lg:py-section-desktop">
        <div className="flex items-center gap-2 mb-4">
          <Tag>{post.meta.category.toUpperCase()}</Tag>
        </div>
        <h1 className="text-[26px] lg:text-[42px] font-extrabold leading-tight text-on-surface mb-6">{post.meta.title}</h1>
        <div className="flex items-center text-body-sm text-on-surface-variant gap-2">
          <span>By {post.meta.author}</span>
          <span>·</span>
          <span>{post.meta.date}</span>
          <span>·</span>
          <span>{post.meta.readingTime}</span>
        </div>
        <div className="w-full h-px bg-outline-variant/10 mt-8" />
      </header>

      <article className="max-w-content mx-auto px-6 prose-dark space-y-6">
        <MDXRemote source={post.content} />
      </article>

      <section className="max-w-content mx-auto px-6 mt-16 pt-12 border-t border-outline-variant/10">
        <div className="flex items-center gap-4 bg-surface-container p-6 rounded-xl border border-outline-variant/5 mb-12">
          <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary-fixed flex items-center justify-center font-bold text-lg shrink-0">FI</div>
          <div>
            <h4 className="font-bold text-on-surface">Faizan Islam</h4>
            <p className="text-body-sm text-on-surface-variant">Founder & Lead Developer at BuildXAgent.</p>
          </div>
        </div>

        {related.length > 0 && (
          <>
            <h3 className="text-h3-mobile lg:text-h3-desktop text-on-surface mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/5 hover:border-secondary/20 transition-all block">
                  <span className="text-tag-label font-mono text-secondary mb-1 block">{r.category.toUpperCase()}</span>
                  <h4 className="font-bold text-on-surface line-clamp-2">{r.title}</h4>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>

      <CTASection />
    </>
  );
}
