"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ubuntu, geistVF } from "@/app/fonts";
import { Heading } from "../ui/heading";
import { Slide } from "../ui/slide";

interface Experience {
  company: string;
  date: string;
  role: string;
  description: string;
  technologies: string[];
}

const experiencesData: Experience[] = [
  {
    company: "Pixels and Grid",
    date: "May 2025 - Nov 2025",
    role: "Full Stack Developer",
    description:
      "Created a web app for creator and vendor including dashboards, integrating social media api for insights of many sorts into the dashboard, creating a relay chat system from whatsapp, filter search in a 2 person team.",
    technologies: ["NextJs", "ExpressJS", "React", "Node.js", "MongoDB", "TailwindCSS"],
  },
  {
    company: "Pixels and Grid",
    date: "May 2025 - Nov 2025",
    role: "Full Stack Developer",
    description:
      "Created a web app for creator and vendor including dashboards, integrating social media api for insights of many sorts into the dashboard, creating a relay chat system from whatsapp, filter search in a 2 person team.",
    technologies: ["NextJs", "ExpressJS", "React", "Node.js", "MongoDB", "TailwindCSS"],
  },
];

export const WorkExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="relative w-full max-w-4xl mx-auto px-4 py-10"
      ref={containerRef}
    >
      <Slide delay={0.1} className="w-full flex justify-center">
        <Heading text="Work Experience" className="text-3xl md:text-5xl font-bold mb-12 text-center" />
      </Slide>

      <div className="relative pl-12 md:pl-20">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800">
           <motion.div
            style={{ height }}
            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          />
        </div>

        <div className="flex flex-col gap-12">
          {experiencesData.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  return (
    <Slide delay={0.1 * index} className="relative">
      {/* Dot on the timeline */}
      <div className="absolute -left-[39px] md:-left-[55px] top-6 w-4 h-4 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-center z-10 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
      </div>

      <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className={`${ubuntu.className} text-xl md:text-2xl font-bold`}>
              {experience.role}
            </h3>
            <p className="text-blue-600 font-medium">
              {experience.company}
            </p>
          </div>
          <span className={`${geistVF.className} text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full`}>
            {experience.date}
          </span>
        </div>

        <p className={`${geistVF.className} text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed`}>
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Slide>
  );
};
