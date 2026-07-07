import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  keywords: string[];
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      category: data.category || "Blog",
      author: data.author || "Faizan Islam",
      readingTime: readingTime(content).text,
      keywords: data.keywords || [],
    };
  });
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const file = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      category: data.category || "Blog",
      author: data.author || "Faizan Islam",
      readingTime: readingTime(content).text,
      keywords: data.keywords || [],
    },
    content,
  };
}
