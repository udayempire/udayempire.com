import React from "react";
import Image from "next/image";
import { ubuntu, geistVF } from "@/app/fonts";
import TypingAnimation from "../ui/typing-animation";
import WordRotate from "../ui/word-rotate";
import { SocialIcons } from "../global/socialIcons";
import ShimmerButton from "../ui/shimmer-button";
import { Slide } from "../ui/slide";
import Link from "next/link";
// import { MusicCard } from "./musicCard";

export const BioSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20 justify-items-center items-center">
      {/* Left Section */}
      <div className="flex flex-col gap-4">
        <Slide delay={.05}>
          <h1 className={`${ubuntu.className} mt-4 text-4xl md:text-5xl h-32  md:h-28 font-bold `}>I&apos;m a <WordRotate className="font-bold" words={["Full Stack AI Engineer", " Software Engineer", " Product Engineer"]} />
          </h1>


        </Slide>
        <Slide delay={.1} className="mt-5 md:mt-9">
          <SocialIcons />
        </Slide>
        <div className={`${geistVF.className} dark:text-zinc-400 text-zinc-600 text-md md:text-lg  leading-7`}>
          <Slide delay={.10}>
            <p className="mt-2 mb-6">
              I&apos;m a Full-Stack AI Engineer focused on designing and building intelligent systems across the AI engineering stack from application architecture to real-time infrastructure and scalable backend systems.
            </p>
          </Slide>
          <Slide delay={.15}>
            <p className="mt-2 mb-6">
              I build and ship independently as well with Teams, contribute to open source, and have earned grants and hackathon wins along the way.
            </p>
          </Slide>
          <Slide delay={.20}>
            <p className="mt-2 mb-6">
              Currently in my final year of B.Tech in Computer Science, specializing in Artificial Intelligence and Machine Learning.
            </p>
          </Slide>
          <Slide delay={.25}>
            <p className="mt-2 mb-6 dark:text-zinc-100 text-zinc-800">Open to engineering opportunities, freelance projects, and collaborations. Reach out through any of my <Link href={'https://linktr.ee/udayempire'} className="underline underline-offset-4 text-blue-600" target="_blank" rel="noopener noreferrer">social links</Link>.</p>
          </Slide>
          {/* <Slide delay={.30}>
            <div className="mt-8">
              <MusicCard />
            </div>
          </Slide> */}
        </div>
      </div>
      {/* Right Section*/}
      <div className="flex flex-col gap-8 items-center md:mt-28">
        <Slide delay={.05}>
          <Image src="https://github.com/udayempire.png" className="rounded-full w-44 md:w-72" width={350} height={350} alt="Profile Photo" />
        </Slide>
        <Slide delay={.1} className={`${ubuntu.className} text-2xl font-bold tracking-widest`}><TypingAnimation className="tracking-wider text-2xl md:text-4xl">Uday Kumar</TypingAnimation></Slide>
        <Slide delay={.2}>
          <ShimmerButton href="/resume" className="shadow-xl px-10 py-4" borderRadius="10px">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg font-ubuntu">
              Download Resume
            </span>
          </ShimmerButton>

        </Slide>
      </div>
    </section>
  );
};



