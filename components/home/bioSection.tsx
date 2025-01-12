import React from "react";
import Image from "next/image";
import { ubuntu, geistVF } from "@/app/fonts";

export const BioSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center items-center">
      {/* Left Section */}
      <div className="flex flex-col gap-4">
        <h1 className={`${ubuntu.className} text-6xl`}>I'm a Developer</h1>
        <div className={`${geistVF.className} dark:text-zinc-400 text-[rgba(161,161,170)] text-lg leading-7`}>
          <p className="mt-2 mb-6">
            I am a self-taught programmer specializing in Full Stack Development. I am working on numerous projects,
            actively participating in hackathons, and trying my hand at open-source contributions. Currently, I serve
            as a Tech Lead at Techvilla, where we help each other learn and grow in technology.
          </p>
          <p className="mt-2 mb-6">
            I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation
            possible, favorable or not.
          </p>
          <p className="mt-2 mb-6">I'm open to work, freelance, or collaborate.</p>
        </div>
      </div>
      {/* Right Section*/}
      <div className="flex flex-col gap-4 items-center">
        <Image src="/photo.png" width={350} height={100} alt="Profile Photo" />
        <h1 className={`${ubuntu.className} text-4xl font-bold`}>Uday Kumar</h1>
      </div>
    </section>
  );
};

