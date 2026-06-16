import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  heroImage: string;
  excerpt: string;
}

export interface Blog extends BlogMeta {
  content: string;
}

export function getAllBlogs(): BlogMeta[] {
  const fileNames = fs.readdirSync(blogsDirectory);

  const blogs = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        readTime: data.readTime,
        image: data.image,
        heroImage: data.heroImage,
        excerpt: data.excerpt,
      } as BlogMeta;
    });

  // Sort by date: newest first (simple string compare works for "27th May 2025" style)
  // We'll use a custom sort by parsing the year from the date string
  return blogs.sort((a, b) => {
    const parseDate = (d: string) => new Date(d.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });
}

export function getBlogBySlug(slug: string): Blog | null {
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    readTime: data.readTime,
    image: data.image,
    heroImage: data.heroImage,
    excerpt: data.excerpt,
    content,
  };
}

export function getAllBlogSlugs(): string[] {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
