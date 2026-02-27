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
  description: string[];
  technologies: string[];
}

const experiencesData: Experience[] = [
  {
    company: "RealBros",
    date: "Februray 2026 - Present",
    role: "Full Stack Developer",
    description: [
      "Developed a web app for RealBros, a platform for real estate agents to manage their clients and properties.",
      "I was responsible for the full stack development of the Admin Dashboard,",
      "Including the Backend and the App"
    ],
    technologies: ["NextJs", "ExpressJS", "React", "Node.js", "MongoDB", "TailwindCSS"],
  },
  {
    company: "Pixels and Grid",
    date: "May 2025 - Nov 2025",
    role: "Full Stack Developer",
    description: [
      "Created a web app for creator and vendor including dashboards,",
      "integrating social media api for insights of many sorts into the dashboard,",
      "creating a relay chat system from whatsapp, filter search in a 2 person team."
    ],
    technologies: ["NextJs", "ExpressJS", "React", "Node.js", "MongoDB", "TailwindCSS"],
  },
];

export const WorkExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 80%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className=" w-full  flex flex-col justify-start mt-10 md:mt-16">

        <Slide delay={0.1} className="w-full ">
          <Heading className=" text-left  w-full mt-16" text="Work Experience" />
        </Slide>

        <div className="relative pl-12 md:pl-20">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800">
            <motion.div
              style={{ height }}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] relative"
            >
              {/* Moving timeline indicator circle */}
              <div className="absolute -bottom-2 -left-[7px] w-4 h-4 rounded-full border border-blue-500 bg-white dark:bg-zinc-950 flex items-center justify-center z-20 shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12">
            {experiencesData.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>


    </div>
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

        <div className={`${geistVF.className} text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed flex flex-col gap-2`}>
          {experience.description.map((line, i) => (
            <p key={i} className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>{line}</span>
            </p>
          ))}
        </div>

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
