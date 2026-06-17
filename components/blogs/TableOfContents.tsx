"use client";

import { useEffect, useState } from "react";
import { ChevronUp, BookOpen } from "lucide-react";
import type { Heading } from "@/lib/blogs";

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const NAVBAR_OFFSET = 120;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // If at the very bottom of the page, the last heading is always active
      const atBottom =
        scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;
      if (atBottom && headings.length > 0) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }

      // Otherwise find the last heading whose top has passed the scroll position
      let currentId = headings[0]?.id ?? "";
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop - NAVBAR_OFFSET <= scrollY) {
          currentId = id;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  // Close drawer on escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (headings.length === 0) return null;

  const activeHeading = headings.find((h) => h.id === activeId);

  const handleTopicClick = (id: string) => {
    setDrawerOpen(false);
    // Small delay so drawer closes before scroll happens
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <>
      {/* ── Desktop: sticky left sidebar ── */}
      <aside className="hidden xl:block w-56 shrink-0 sticky top-28 self-start">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
          On this page
        </p>
        <nav className="flex flex-col gap-0.5">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={[
                  "text-sm py-1.5 transition-all duration-200 border-l-2",
                  heading.level === 3 ? "pl-5" : "pl-3",
                  isActive
                    ? "border-zinc-800 dark:border-zinc-300 text-black dark:text-zinc-100 font-medium"
                    : "border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500",
                ].join(" ")}
              >
                {heading.text}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* ── Mobile: fixed bottom bar + drawer ── */}
      <div className="xl:hidden">
        {/* Backdrop */}
        {drawerOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
        )}

        {/* Drawer sheet */}
        <div
          className={[
            "fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out",
            drawerOpen ? "bottom-0" : "-bottom-full",
          ].join(" ")}
        >
          <div className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 rounded-t-2xl shadow-2xl max-h-[70vh] overflow-y-auto">
            {/* Drawer handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            </div>

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                <BookOpen size={14} />
                On this page
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              >
                <ChevronUp size={18} />
              </button>
            </div>

            {/* Heading links */}
            <nav className="flex flex-col px-4 py-3 gap-0.5">
              {headings.map((heading) => {
                const isActive = activeId === heading.id;
                return (
                  <button
                    key={heading.id}
                    onClick={() => handleTopicClick(heading.id)}
                    className={[
                      "text-left text-sm py-3 px-3 rounded-lg transition-all duration-200 border-l-2",
                      heading.level === 3 ? "ml-4" : "",
                      isActive
                        ? "border-zinc-800 dark:border-zinc-300 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-100 font-medium"
                        : "border-transparent text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-800 dark:hover:text-zinc-200",
                    ].join(" ")}
                  >
                    {heading.text}
                  </button>
                );
              })}
            </nav>
            {/* Bottom safe area padding */}
            <div className="h-4" />
          </div>
        </div>

        {/* Fixed bottom bar (always visible on mobile) */}
        <button
          onClick={() => setDrawerOpen((prev) => !prev)}
          className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-700 shadow-lg"
        >
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen size={15} className="text-zinc-400 shrink-0" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 truncate">
              {activeHeading?.text ?? "On this page"}
            </span>
          </div>
          <ChevronUp
            size={18}
            className={[
              "text-zinc-400 shrink-0 transition-transform duration-300",
              drawerOpen ? "rotate-180" : "",
            ].join(" ")}
          />
        </button>
      </div>
    </>
  );
}
