"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ubuntu, geistVF } from "@/app/fonts";
import { Heading } from "../ui/heading";
import { Slide } from "../ui/slide";
import Image from "next/image";

interface Experience {
  company: string;
  date: string;
  role: string;
  description: string[];
  technologies: string[];
  image?: string;
}

const experiencesData: Experience[] = [
  {
    company: "RealBros",
    date: "Februray 2026 - Present",
    role: "Full Stack Developer (Freelance)",
    image: "/workExperience/stealth.svg",
    description: [
      "Developed a web app for RealBros, a platform for real estate agents to manage their clients and properties.",
      "I was responsible for the full stack development of the Admin Dashboard,",
      "Including the Backend and the App"
    ],
    technologies: ["NextJs", "ExpressJS", "React", "Node.js", "MongoDB", "TailwindCSS"],
  },
  {
    company: "Solana Turbine",
    date: "June - Aug 2025",
    role: "Solana Blockchain Development (Builder)",
    image: "/workExperience/turbine.jpg",
    description: [
      "Selected as a participant in the Solana Turbine Program (Q3 cohort)",
      "Gained in-depth understanding of Solana architecture, including accounts model, transaction lifecycle, and on-chain program development using Rust.",
      "Designed and presented a capstone project, Goalify, an onchain app where users can earn rewards by achieving their goals"
    ],
    technologies: ["Rust", "Solana", "Anchor Framework", "LiteSVM"],
  },
  {
    company: "Pixels and Grid",
    date: "May 2025 - Nov 2025",
    role: "Full Stack Developer (Contract Work)",
    image: "/workExperience/pixelAndGrid.png",
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

        <div className="flex flex-col gap-8 md:gap-10">
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Slide delay={0.1 * index} className="relative">
      <div className="bg-white dark:bg-zinc-900/50 p-4 md:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500/30">
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3 cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <div className="flex items-center gap-2">
            <Image src={experience.image || ""} alt={experience.company} width={25} height={100} rounded-full/>
              <div className="flex items-center gap-2">
                <h3 className={`${ubuntu.className} text-lg md:text-xl font-bold group-hover:text-blue-500 transition-colors`}>
                  {experience.company}
                </h3>
                <motion.svg
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  className="w-4 h-4 text-zinc-500 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>

              </div>
            </div>
            <p className="text-green-600 font-medium text-sm mt-0.5">
              {experience.role}
            </p>
          </div>
          <span className={`${geistVF.className} text-xs text-zinc-800 dark:text-zinc-800 whitespace-nowrap bg-zinc-100 dark:bg-zinc-300 px-2.5 py-0.5 rounded-full`}>
            {experience.date}
          </span>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className={`${geistVF.className} text-zinc-600 dark:text-zinc-300 mb-4 text-sm leading-snug flex flex-col gap-1.5 pt-1`}>
            {experience.description.map((line, i) => (
              <p key={i} className="flex gap-2 items-start">
                <span className="text-blue-500 mt-0.5 leading-none">•</span>
                <span>{line}</span>
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Slide>
  );
};
