// app/page.tsx
import React from "react";
import { BioSection } from "@/components/home/bioSection";
import { Technologies } from "@/components/home/technologies";
import { WorkExperience } from "@/components/home/workExperience";
import { ProjectCard } from "@/components/global/projectCard";
import { Heading } from "@/components/ui/heading";
import { projectsData } from "@/data/data";
import ShimmerButton from "@/components/ui/shimmer-button";
import GithubCalendarComponent from "@/components/home/githubCalendarComponent";
import { Slide } from "@/components/ui/slide";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Home() {
  return (
    <div className=" w-10/12 h-full mx-auto flex flex-col items-center mt-16 xl:ml-48 ">
      <ScrollProgress/>
      <BioSection />
      <Technologies />
      <WorkExperience />
      <Slide className="w-full">
        <Heading className=" text-left  w-full mt-16" text="Github Contribution Graph" />
      </Slide>
      <GithubCalendarComponent />
      <Slide className="w-full">
        <Heading className=" text-left  w-full mt-16" text="My Top Projects" />
      </Slide>
      <Slide delay={.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10  gap-5">
          {projectsData.slice(0, 4).map((data, index) => (
            <ProjectCard key={index} title={data.title} desc={data.desc} technologies={data.Technologies} previewLink={data.previewLink}
              githubLink={data.githubLink} imgLink={data.imgLink} role={data.role} />
          ))}
        </div>

      </Slide>
      <ShimmerButton href="/projects" className="shadow-xl px-4 py-2 mt-8 text-black " borderRadius="10px" shimmerColor="#702963" shimmerSize="2px" background="#fff">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg font-ubuntu ">
          {`Watch All Projects -->`}
        </span>
      </ShimmerButton>
      {/* <Link href={"/projects"} className=" p-4 bg-white text-black mt-10 text-lg">{"Watch All Projects ->"}</Link> */}
    </div>
  );
}
