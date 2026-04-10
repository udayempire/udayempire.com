import React from "react";
import Image from "next/image";
import { ubuntu, geistVF } from "@/app/fonts";
import WordRotate from "../ui/word-rotate";
import TypingAnimation from "../ui/typing-animation";
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
          <h1 className={`${ubuntu.className} mt-4 text-4xl md:text-5xl h-32  md:h-28 font-bold `}>I&apos;m a <WordRotate className="font-bold" words={["Software Developer", " Tech Enthusiast", " Full Stack Developer"]} />
          </h1>


        </Slide>
        <Slide delay={.1} className="mt-5 md:mt-9">
          <SocialIcons />
        </Slide>
        <div className={`${geistVF.className} dark:text-zinc-400 text-zinc-600 text-md md:text-lg  leading-7`}>
          <Slide delay={.10}>
            <p className="mt-2 mb-6">
              I’m a Full Stack Developer (2+ years) and Web3 Developer (1+ year), building scalable applications across modern web and blockchain ecosystems. I actively participate in hackathons, contribute to open source, and currently take on freelance projects while building my own products.
            </p>
          </Slide>
          <Slide delay={.20}>
            <p className="mt-2 mb-6">
              I&apos;m in my Pre Final year pursuing Bachelors of Technology in Computer Science with specialization in Artificial Intelligence and Machine Learning from LNCT Bhopal.
            </p>
          </Slide>
          <Slide delay={.25}>
            <p className="mt-2 mb-6 dark:text-zinc-100 text-zinc-800">I am open to work, freelance, or collaborate Just message me on any of my <Link href={'https://linktr.ee/udayempire'} className="underline underline-offset-4 text-blue-600" target="_blank" rel="noopener noreferrer">social links</Link></p>
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
          <ShimmerButton href="https://drive.google.com/file/d/1xEEyJ6v08sfmjp4Ugd24kN5kcAKWJBXh/view?usp=sharing" className="shadow-xl px-10 py-4  " borderRadius="10px">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg font-ubuntu">
              Download Resume
            </span>
          </ShimmerButton>

        </Slide>
      </div>
    </section>
  );
};



