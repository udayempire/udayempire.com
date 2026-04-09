"use client";

import { motion } from "framer-motion";
import { ubuntu, geistVF } from "@/app/fonts";
import { gearsData, appsData } from "@/data/gears";
import Link from "next/link";
import { Link2 } from "lucide-react";

export default function Me() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center mt-8 md:mt-16 pb-16 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className={`${ubuntu.className} text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white`}>
          About Me
        </h1>
        <p className={`${geistVF.className} text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed`}>
          A little bit about my journey, what I love, and the gear I use.
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col gap-12"
      >
        {/* Story Section */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6 w-full">
          <div className="p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm">
            <h2 className={`${ubuntu.className} text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6`}>
              My Story
            </h2>
            <div className={`${geistVF.className} space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base md:text-lg`}>
              <p>
                This is my page. I like a lot of things. I first did a bit of code in class 12 just to submit the school work where I made up a hotel management backend in python and connected it with sql. Since I had no AI power back then, I had to learn and stitch codes from other websites.
              </p>
              <p>
                Now when I came in 1st year I used youtube tutorials to make projects with my enhancements, then I finally started making my own with thanks to AI and since then Coding has been my GO TO THING. I can do it all time without stress.
              </p>
              <p>
                I love listening to songs. From Indian Music like Bollywood to punjabi, haryanvi to even bhojpuri hehe to English Songs as Well.
              </p>
              <p>
                I am a big fan of movies and anime. Naruto is still my best ever anime I watched in my tough times.
              </p>
              <p>
                I love travelling as well. Not all the time but sometime especially. I like to attend meetups, conferences, and hackathons which let me meet brilliant minds with access to some travel around the place as well hehe.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tooling Section */}
        <motion.div variants={itemVariants} className="w-full flex flex-col gap-6">
          <div className="p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm">
            <h2 className={`${ubuntu.className} text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6`}>
              Gears and Applications
            </h2>
            
            <div className="flex flex-col gap-8">
              {/* Gears List */}
              <div className="flex flex-col gap-3">
                <h3 className={`${ubuntu.className} text-xl font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-2 mb-2`}>
                  Gears
                </h3>
                <ul className="space-y-3">
                  {gearsData.map((gear, index) => (
                    <li key={index} className={`${geistVF.className} text-base md:text-lg text-zinc-700 dark:text-zinc-300 flex flex-row items-start sm:items-center gap-2`}>
                      <Link href={gear.url} target="_blank" rel="noopener noreferrer" className="mt-1 sm:mt-0 flex-shrink-0 text-emerald-500 hover:text-emerald-400 transition-colors">
                        <Link2 className="w-4 h-4" />
                      </Link>
                      <div className="flex-1">
                        <span className="inline-flex items-center gap-2 align-middle">
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">{index + 1}.</span>
                          <span className="text-zinc-500 dark:text-zinc-400">{gear.icon}</span>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">{gear.name}</span>
                          {gear.remark && <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline">- {gear.remark}</span>}
                        </span>
                        {gear.remark && <div className="text-sm text-zinc-500 dark:text-zinc-400 sm:hidden block mt-1 ml-6">{gear.remark}</div>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apps List */}
              <div className="flex flex-col gap-3">
                <h3 className={`${ubuntu.className} text-xl font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-2 mb-2`}>
                  Applications
                </h3>
                <ul className="space-y-3">
                  {appsData.map((app, index) => (
                    <li key={index} className={`${geistVF.className} text-base md:text-lg text-zinc-700 dark:text-zinc-300 flex flex-row items-start sm:items-center gap-2`}>
                      <Link href={app.url} target="_blank" rel="noopener noreferrer" className="mt-1 sm:mt-0 flex-shrink-0 text-emerald-500 hover:text-emerald-400 transition-colors">
                        <Link2 className="w-4 h-4" />
                      </Link>
                      <div className="flex-1">
                        <span className="inline-flex items-center gap-2 align-middle">
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">{index + 1}.</span>
                          <span className="text-zinc-500 dark:text-zinc-400">{app.icon}</span>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100">{app.name}</span>
                          {app.remark && <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline">- {app.remark}</span>}
                        </span>
                        {app.remark && <div className="text-sm text-zinc-500 dark:text-zinc-400 sm:hidden block mt-1 ml-6">{app.remark}</div>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}