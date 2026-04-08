import Link from "next/link";
import Image from "next/image";
import { ubuntu, geistVF } from "@/app/fonts";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center gap-6">
      {/* Animated 404 Text */}
      <h1
        className={`${ubuntu.className} text-8xl md:text-9xl font-black bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-400 dark:to-zinc-600 bg-clip-text text-transparent select-none`}
      >
        404
      </h1>

      {/* Duck GIF */}
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <Image
          src="/searching-duck.gif"
          alt="A duck searching around — page not found"
          fill
          className="object-contain"
          unoptimized
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 max-w-md">
        <h2
          className={`${ubuntu.className} text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100`}
        >
          Page not found
        </h2>
        <p
          className={`${geistVF.className} text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed`}
        >
          Looks like this page went on a vacation. Even the duck can&apos;t find
          it.
        </p>
      </div>

      {/* Back Home Button */}
      <Link
        href="/"
        className={`${geistVF.className} group relative inline-flex items-center gap-2 px-8 py-3 mt-2 text-sm font-semibold rounded-xl 
          bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 
          hover:scale-105 active:scale-95 transition-all duration-300 
          shadow-lg hover:shadow-xl hover:shadow-zinc-900/20 dark:hover:shadow-white/20`}
      >
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Take me home
      </Link>
    </div>
  );
}
