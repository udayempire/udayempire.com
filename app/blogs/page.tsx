import Link from "next/link";
import { CalendarDays, ClockIcon } from "lucide-react";
import Image from "next/image";
import ShimmerButton from "@/components/ui/shimmer-button";
import { getAllBlogs } from "@/lib/blogs";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="p-10 flex flex-col items-center">
      {blogs.map((blog) => (
        <Link
          href={`/blogs/${blog.slug}`}
          key={blog.slug}
          className="block mb-6"
        >
          <div className="flex flex-col items-start max-w-xl gap-4 border-b p-5 cursor-pointer">
            <h1 className="font-ubuntu text-2xl md:text-4xl">{blog.title}</h1>
            <Image
              src={blog.image}
              width={600}
              height={50}
              alt={blog.title}
            />
            <p className="dark:text-zinc-400 text-zinc-600">
              {blog.excerpt}{" "}
              <span className="text-white">Read More</span>
            </p>
            <div className="flex justify-between w-full text-sm dark:text-zinc-300 text-zinc-600">
              <div className="flex gap-2 items-center text-xs">
                <CalendarDays />
                <div>{blog.date}</div>
              </div>
              <div className="flex gap-2 items-center text-xs">
                <ClockIcon />
                <div>{blog.readTime}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <ShimmerButton
        href="/contact"
        className="shadow-xl px-4 py-2 mt-8 text-black"
        borderRadius="10px"
        shimmerColor="#702963"
        shimmerSize="2px"
        background="#fff"
      >
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg font-ubuntu">
          {`Done?  Want to Contact me  -->`}
        </span>
      </ShimmerButton>
    </div>
  );
}
