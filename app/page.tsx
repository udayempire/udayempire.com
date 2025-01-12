// app/page.tsx
import React from "react";
import { BioSection } from "@/components/home/bioSection";
import { Technologies } from "@/components/home/technologies";
import { ProjectCard } from "@/components/global/projectCard";
import { Heading } from "@/components/ui/heading";

export default function Home() {
  return (
    <div className="w-10/12 h-full mx-auto flex flex-col items-center mt-16 xl:ml-48 ">
      <BioSection />
      <Technologies/>
      <Heading className=" text-left  w-full mt-10" text="My Top Projects"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-5">
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
        
      </div>
    </div>
  );
}
