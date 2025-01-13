import React from "react";
import Image from "next/image";
import { ubuntu, geistVF } from "@/app/fonts";
import WordRotate from "../ui/word-rotate";
import TypingAnimation from "../ui/typing-animation";
import { SocialIcons } from "../global/socialIcons";
import ShimmerButton from "../ui/shimmer-button";


export const BioSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center items-center">
      {/* Left Section */}
      <div className="flex flex-col gap-4">
        <h1 className={`${ubuntu.className} mt-4 text-5xl h-48 md:h-28`}>I&apos;m a <WordRotate words={[" Developer", " Tech Enthusiast", " Full Stack Developer"]} />
        </h1>
        <div className="mt-4">
          <SocialIcons />
        </div>
        <div className={`${geistVF.className} dark:text-zinc-400 text-[rgba(161,161,170)] text-lg leading-7`}>
          <p className="mt-4 mb-6">
            I&apos;m a self-taught programmer specializing in Full Stack Development. I&apos;m working on numerous projects,
            actively participating in hackathons, and trying my hand at open-source contributions. Currently, I serve
            as a Tech Lead at Techvilla, where we help each other learn and grow in technology.
          </p>
          <p className="mt-2 mb-6">
            I&apos;m in 2nd year pursuing Bachelors of Technology in Computer Science with specialization in Artificial Intelligence and Machine Learning from LNCT Bhopal.
          </p>
          <p className="mt-2 mb-6">{`I'm open to work, freelance, or collaborate :)`}</p>
        </div>
      </div>
      {/* Right Section*/}
      <div className="flex flex-col gap-4 items-center">
        <Image src="/photo.png" width={350} height={100} alt="Profile Photo" />
        <h1 className={`${ubuntu.className} text-4xl font-bold tracking-widest`}><TypingAnimation className="tracking-wider">Uday Kumar</TypingAnimation></h1>
        <ShimmerButton className="shadow-xl px-10 py-4  " borderRadius="10px">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg font-ubuntu">
            Download Resume
          </span>
        </ShimmerButton>
      </div>
    </section>
  );
};



