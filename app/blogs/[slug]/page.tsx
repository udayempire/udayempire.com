import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug, getAllBlogSlugs, slugify } from "@/lib/blogs";
import { CalendarDays, ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TableOfContents } from "@/components/blogs/TableOfContents";

// Helper: extract plain text from React children (for heading IDs)
function childText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(childText).join("");
  return "";
}

// Map standard markdown elements to your existing styled components
const components = {
  h2: ({ children }: { children?: React.ReactNode }) => {
    const id = slugify(childText(children));
    return (
      <h2
        id={id}
        className="text-lg md:text-xl font-ubuntu mt-10 my-4 text-black dark:text-zinc-200 scroll-mt-28"
      >
        {children}
      </h2>
    );
  },
  h3: ({ children }: { children?: React.ReactNode }) => {
    const id = slugify(childText(children));
    return (
      <h3
        id={id}
        className="text-xl font-ubuntu mt-8 my-3 text-black dark:text-zinc-200 scroll-mt-28"
      >
        {children}
      </h3>
    );
  },
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="dark:text-zinc-300 text-zinc-600 text-md md:text-lg my-3">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc px-4 dark:text-zinc-300 text-zinc-600 text-lg space-y-1 my-3">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal px-4 dark:text-zinc-300 text-zinc-600 text-lg space-y-1 my-3">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="dark:text-zinc-300 text-zinc-600">{children}</li>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-black dark:text-zinc-100">
      {children}
    </strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="italic text-zinc-700 dark:text-zinc-300">{children}</em>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-4 border-zinc-400 dark:border-zinc-600 pl-4 my-4 italic dark:text-zinc-400 text-zinc-500">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <Link
      href={href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 font-semibold cursor-pointer underline underline-offset-2"
    >
      {children}
    </Link>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <div className="flex justify-start my-5 rounded-md">
      <Image
        className="rounded-lg"
        src={src ?? ""}
        width={1300}
        height={100}
        alt={alt ?? ""}
      />
    </div>
  ),
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded px-1.5 py-0.5 text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 overflow-x-auto my-4 text-sm font-mono">
      {children}
    </pre>
  ),
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold text-black dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800">
      {children}
    </th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 dark:text-zinc-300 text-zinc-600">
      {children}
    </td>
  ),
  YouTubeEmbed: ({ videoId }: { videoId: string }) => (
    <div className="my-6 w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  ),
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Uday Kumar`,
    description: blog.excerpt,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <div className="w-full max-w-3xl xl:max-w-6xl mx-auto px-8 md:px-4 sm:px-6 mt-10 xl:flex xl:gap-12 xl:items-start">
      {/* Left: sticky Table of Contents */}
      <TableOfContents headings={blog.headings} />

      {/* Right: Blog content */}
      <article className="flex-1 min-w-0 pb-28 xl:pb-20">
        {/* Blog Header */}
        <h1 className="font-ubuntu px-2 text-2xl md:text-4xl w-full text-left text-black dark:text-zinc-200">
          {blog.title}
        </h1>
        <div className="mt-5 dark:text-zinc-300 text-zinc-600">
          <div className="flex gap-6">
            <div className="flex gap-2 items-center text-sm">
              <CalendarDays size={16} />
              <span>Published on: {blog.date}</span>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <ClockIcon size={16} />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-start h-44 md:h-80 my-6 rounded-md">
          <Image
            className="rounded-lg"
            src={blog.heroImage}
            width={1300}
            height={100}
            alt={blog.title}
          />
        </div>

        {/* MDX Body */}
        <div className="text-lg">
          <MDXRemote source={blog.content} components={components} />
        </div>
      </article>
    </div>
  );
}
