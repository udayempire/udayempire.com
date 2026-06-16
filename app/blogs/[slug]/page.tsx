import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogs";
import { CalendarDays, ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Map standard markdown elements to your existing styled components
const components = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-2xl font-ubuntu mt-10 my-4 text-black dark:text-zinc-200">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-xl font-ubuntu mt-8 my-3 text-black dark:text-zinc-200">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="dark:text-zinc-300 text-zinc-600 text-lg my-3">{children}</p>
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
    <div className="w-10/12 mx-auto flex flex-col items-center mt-2 xl:ml-48">
      <div className="flex justify-center mt-1">
        <div className="mt-7">
          <div className="w-full">
            <div className="max-w-7xl">
              {/* Blog Header */}
              <div>
                <h1 className="font-ubuntu text-4xl md:text-5xl w-full text-left text-black dark:text-zinc-200">
                  {blog.title}
                </h1>
                <div className="mt-5 dark:text-zinc-300 text-zinc-600">
                  <div className="flex justify-between">
                    <div className="flex gap-2 px-5 py-2 items-center text-sm w-full">
                      <CalendarDays />
                      <div>Published on : {blog.date}</div>
                    </div>
                    <div className="flex gap-2 items-center text-sm w-full">
                      <ClockIcon />
                      <div>{blog.readTime}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-5 text-lg flex flex-col">
                {/* Hero Image */}
                <div className="flex justify-start h-44 md:h-80 my-3 rounded-md">
                  <Image
                    className="rounded-lg"
                    src={blog.heroImage}
                    width={1300}
                    height={100}
                    alt={blog.title}
                  />
                </div>

                {/* MDX Content */}
                <MDXRemote source={blog.content} components={components} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
