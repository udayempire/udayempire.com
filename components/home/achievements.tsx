"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heading } from "../ui/heading";
import { Slide } from "../ui/slide";
import { ubuntu, geistVF } from "@/app/fonts";

interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
  year: string;
  highlight?: boolean;
}

const achievements: Achievement[] = [
  {
    icon: "🏗️",
    title: "Solana Turbine Q3 Cohort",
    subtitle: "Selected as a Builder in the Solana Turbine Program",
    year: "2025",
    highlight: true,
  },
  {
    icon: "🚀",
    title: "Technical Lead — Techvilla",
    subtitle: "Leading the tech club at LNCT, organizing hackathons & events",
    year: "2025",
  },
  {
    icon: "🏆",
    title: "Smart India Hackathon 2024",
    subtitle: "Built GeoTrack — a geolocation-based attendance system",
    year: "2024",
  },
  {
    icon: "💼",
    title: "Freelance Developer",
    subtitle: "Shipped production apps for clients across India",
    year: "2025",
  },
  {
    icon: "🌐",
    title: "Open Source Contributor",
    subtitle: "Active contributor to open source projects on GitHub",
    year: "2024",
  },
  {
    icon: "🎓",
    title: "B.Tech CS (AI/ML) — LNCT Bhopal",
    subtitle: "Pre-final year, specializing in AI & Machine Learning",
    year: "2023–27",
  },
];

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative flex items-start gap-4 p-4 md:p-5 rounded-2xl border transition-all duration-300 
        ${
          achievement.highlight
            ? "bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-950/30 dark:to-cyan-950/20 border-emerald-200/60 dark:border-emerald-800/40 shadow-sm hover:shadow-md hover:shadow-emerald-500/10"
            : "bg-white/60 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md"
        } backdrop-blur-sm`}
    >
      {/* Icon */}
      <div
        className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl
        ${
          achievement.highlight
            ? "bg-emerald-100 dark:bg-emerald-900/40"
            : "bg-zinc-100 dark:bg-zinc-800/80"
        }`}
      >
        {achievement.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3
            className={`${ubuntu.className} text-sm md:text-base font-bold text-zinc-900 dark:text-zinc-100 leading-tight`}
          >
            {achievement.title}
          </h3>
          <span
            className={`${geistVF.className} shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full
            ${
              achievement.highlight
                ? "bg-emerald-200/60 dark:bg-emerald-800/40 text-emerald-700 dark:text-emerald-300"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
            }`}
          >
            {achievement.year}
          </span>
        </div>
        <p
          className={`${geistVF.className} text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed`}
        >
          {achievement.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export const Achievements = () => {
  return (
    <div className="w-full flex flex-col justify-start mt-10 md:mt-16">
      <Slide delay={0.1} className="w-full">
        <Heading
          className="text-left w-full mt-16 mb-8"
          text="Achievements & Highlights"
        />
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
