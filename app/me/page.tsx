"use client";

import { motion } from "framer-motion";
import { ubuntu, geistVF } from "@/app/fonts";
import { gearsData, appsData } from "@/data/gears";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import ShimmerButton from "@/components/ui/shimmer-button";

const PARTICLES = [
    { delay: 0, x: "6%", size: 10, color: "text-amber-400/60 dark:text-amber-300/40" },
    { delay: 1.5, x: "18%", size: 7, color: "text-rose-400/60 dark:text-rose-300/40" },
    { delay: 0.8, x: "34%", size: 12, color: "text-violet-400/60 dark:text-violet-300/40" },
    { delay: 2.4, x: "50%", size: 8, color: "text-teal-400/60 dark:text-teal-300/40" },
    { delay: 1.1, x: "67%", size: 11, color: "text-orange-400/60 dark:text-orange-300/40" },
    { delay: 2.8, x: "80%", size: 7, color: "text-pink-400/60 dark:text-pink-300/40" },
    { delay: 0.4, x: "92%", size: 9, color: "text-sky-400/60 dark:text-sky-300/40" },
];

function FloatingParticle({ delay, x, size, color }: { delay: number; x: string; size: number; color: string }) {
    return (
        <motion.span
            className={`pointer-events-none fixed select-none ${color}`}
            style={{ left: x, bottom: -20, fontSize: size, zIndex: 0 }}
            animate={{ y: [-20, -500], opacity: [0, 0.8, 0.8, 0] }}
            transition={{
                duration: 8,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            ✦
        </motion.span>
    );
}

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Me() {
    return (
        <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center mt-8 md:mt-16 pb-16 px-6">

            {/* Warm ambient glows — more colors */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-300/20 dark:bg-amber-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-rose-300/20 dark:bg-rose-600/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-200/30 dark:bg-orange-700/5 rounded-full blur-3xl" />
                <div className="absolute top-1/4 right-0 w-72 h-72 bg-violet-200/20 dark:bg-violet-700/8 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-1/3 w-60 h-60 bg-teal-200/20 dark:bg-teal-700/8 rounded-full blur-3xl" />
                <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-pink-200/20 dark:bg-pink-700/8 rounded-full blur-3xl" />
            </div>

            {/* Floating sparkles */}
            {PARTICLES.map((p, i) => (
                <FloatingParticle key={i} {...p} />
            ))}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 space-y-2"
            >
                <h1
                    className={`${ubuntu.className} text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 dark:from-amber-300 dark:via-rose-300 dark:to-violet-300 bg-clip-text text-transparent`}
                >
                    About Me
                </h1>
                <p
                    className={`${geistVF.className} text-amber-800/70 dark:text-amber-200/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed`}
                >
                    A Little Corner of The Internet That&apos;s Mine.
                </p>
                <div className="">
                    <Image className="rounded-lg" src="/banner-portfolio.jpg" alt="me" width={1200} height={100} />
                </div>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="w-full flex flex-col gap-10"
            >
                {/* Gear + Apps card */}
                <motion.div variants={item}>
                    <div className="relative p-6 md:p-8 rounded-3xl border dark:border-amber-800/40 bg-amber-50/80 dark:bg-stone-900/70 backdrop-blur-sm  dark:shadow-amber-900/20">
                        <div className="absolute top-7 right-3 md:right-6 text-2xl opacity-20 select-none pointer-events-none">🛠️</div>

                        <h2
                            className={`${ubuntu.className} text-2xl font-bold mb-8 text-amber-800 dark:text-amber-200 flex items-center gap-2`}
                        >
                            Gears and Applications
                        </h2>

                        <div className="flex flex-col gap-10">
                            {/* Gears list */}
                            <div>
                                <h3
                                    className={`${ubuntu.className} text-lg font-bold text-orange-700 dark:text-orange-300 mb-4 pb-2 border-b border-amber-200/60 dark:border-amber-800/40 flex items-center gap-2`}
                                >
                                    Gears 🎒
                                </h3>
                                <ul className="space-y-3">
                                    {gearsData.map((gear, index) => (
                                        <li
                                            key={index}
                                            className={`${geistVF.className} flex items-start sm:items-center gap-2.5`}
                                        >
                                            <Link
                                                href={gear.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-1 sm:mt-0 shrink-0 text-amber-500 hover:text-rose-400 dark:text-amber-400 dark:hover:text-rose-300 transition-colors"
                                            >
                                                <LinkIcon className="w-4 h-4" />
                                            </Link>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                                    <span className="hidden md:inline-block text-stone-400 dark:text-stone-500 text-sm font-semibold shrink-0">{index + 1}.</span>
                                                    <span className="text-amber-600 dark:text-amber-400 shrink-0">{gear.icon}</span>
                                                    <span className="font-semibold uppercase text-sm text-stone-800 dark:text-stone-100 break-words">{gear.name}</span>
                                                    {gear.remark && (
                                                        <span className="text-stone-500 dark:text-stone-400 text-xs hidden sm:inline break-words">
                                                            — {gear.remark}
                                                        </span>
                                                    )}
                                                </div>
                                                {gear.remark && (
                                                    <div className="text-xs text-stone-500 dark:text-stone-400 sm:hidden mt-1">
                                                        {gear.remark}
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Applications list */}
                            <div>
                                <h3
                                    className={`${ubuntu.className} text-lg font-bold text-orange-700 dark:text-orange-300 mb-4 pb-2 border-b border-amber-200/60 dark:border-amber-800/40 flex items-center gap-2`}
                                >
                                    Applications 💻
                                </h3>
                                <ul className="space-y-3">
                                    {appsData.map((app, index) => (
                                        <li
                                            key={index}
                                            className={`${geistVF.className} flex items-start sm:items-center gap-2.5`}
                                        >
                                            <Link
                                                href={app.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-1 sm:mt-0 shrink-0 text-amber-500 hover:text-rose-400 dark:text-amber-400 dark:hover:text-rose-300 transition-colors"
                                            >
                                                <LinkIcon className="w-4 h-4" />
                                            </Link>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                                    <span className="hidden md:inline-block text-stone-400 dark:text-stone-500 text-sm font-semibold shrink-0">{index + 1}.</span>
                                                    <span className="text-amber-600 dark:text-amber-400 shrink-0">{app.icon}</span>
                                                    <span className="font-semibold uppercase text-sm text-stone-800 dark:text-stone-100 break-words">{app.name}</span>
                                                    {app.remark && (
                                                        <span className="text-stone-500 dark:text-stone-400 text-xs hidden sm:inline break-words">
                                                            — {app.remark}
                                                        </span>
                                                    )}
                                                </div>
                                                {app.remark && (
                                                    <div className="text-xs text-stone-500 dark:text-stone-400 sm:hidden mt-1">
                                                        {app.remark}
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Story card */}
                <motion.div variants={item}>
                    <div className="relative p-6 md:p-8 rounded-3xl border  dark:border-amber-800/40 bg-amber-50/80 dark:bg-stone-900/70 backdrop-blur-sm  dark:shadow-amber-900/20">
                        {/* decorative corner emoji */}
                        <div className="absolute top-5 right-6 text-2xl opacity-20 select-none pointer-events-none">📖</div>

                        <h2
                            className={`${ubuntu.className} text-2xl font-bold mb-6 flex items-center gap-2 text-amber-800 dark:text-amber-200`}
                        >
                            ME ✍️
                        </h2>

                        <div
                            className={`${geistVF.className} space-y-5 leading-relaxed text-[15px] md:text-[16.5px]`}
                        >
                            {[
                                {
                                    color: "border-amber-400/80 dark:border-amber-500/60",
                                    text: "This is my page. I like a lot of things. I first did a bit of code in class 12 just to submit the school work where I made up a Medical store management backend in python and connected it with sql. Since I had no AI power back then, I had to learn and stitch codes from other websites.",
                                },
                                {
                                    color: "border-rose-400/80 dark:border-rose-500/60",
                                    text: "Now when I came in 1st year I used youtube tutorials to make projects with my enhancements, then I finally started making my own with thanks to AI and since then Coding has been my GO TO THING. I can do it all time without stress.",
                                },
                                {
                                    color: "border-violet-400/80 dark:border-violet-500/60",
                                    text: "I love listening to songs. From Indian Music like Bollywood to punjabi, haryanvi to even bhojpuri hehe to English Songs as Well. 📻",
                                },
                                {
                                    color: "border-teal-400/80 dark:border-teal-500/60",
                                    text: "I am a big fan of movies and anime. Naruto is still my best ever anime I watched in my tough times. 🍃",
                                },
                                {
                                    color: "border-orange-400/80 dark:border-orange-500/60",
                                    text: "I love travelling as well. Not all the time but sometime especially. I like to attend meetups, conferences, and hackathons which let me meet brilliant minds with access to some travel around the place as well hehe. 🗺️",
                                },
                            ].map(({ color, text }, i) => (
                                <p
                                    key={i}
                                    className={`pl-4 border-l-2 ${color} text-stone-700 dark:text-stone-300`}
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>



            </motion.div>
            <ShimmerButton href="/" className="shadow-xl px-4 py-2 mt-12 text-black " borderRadius="10px" shimmerColor="#702963" shimmerSize="2px" background="#fff">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg font-ubuntu ">
                    {`Done Reading All ? Go to Homepage  -->`}
                </span>
            </ShimmerButton>
        </div>
    );
}