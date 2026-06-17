import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export interface Heading {
  text: string;
  id: string;
  level: number; // 2 = ##, 3 = ###
}

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
  headings: Heading[];
}

/** Converts a heading string to a URL-safe id, e.g. "What is IP?" → "what-is-ip" */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].trim();
    headings.push({ text, id: slugify(text), level: match[1].length });
  }
  return headings;
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

  // Sort newest first; blogs missing a date fall to the end
  return blogs.sort((a, b) => {
    const parseDate = (d: string | undefined) => {
      if (!d) return new Date(0);
      return new Date(d.replace(/(\d+)(st|nd|rd|th)/, "$1"));
    };
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
    headings: extractHeadings(content),
  };
}

export function getAllBlogSlugs(): string[] {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
