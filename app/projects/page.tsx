import { ProjectCard } from "@/components/global/projectCard";
import { Heading } from "@/components/ui/heading";
import { projectsData } from "@/data/data";
import { Slide } from "@/components/ui/slide";
import ShimmerButton from "@/components/ui/shimmer-button";

export default function Projects() {
  return (
    <div className="w-10/12 h-full mx-auto flex flex-col items-center mt-2 xl:ml-48">
      <Slide delay={0.1} className="w-full">
        <Heading className=" text-left  w-full mt-16" text="All Projects" />
      </Slide>
      <div className="grid grid-cols-1 gap-32 md:grid-cols-2 gap-y-5">
        {projectsData.map((data, index) => (
          <ProjectCard
            key={index}
            title={data.title}
            desc={data.desc}
            technologies={data.Technologies}
            previewLink={data.previewLink}
            githubLink={data.githubLink}
            imgLink={data.imgLink}
            role={data.role}
          />
        ))}
      </div>
      {/* <ShimmerButton shadow-xl px-4 py-2 mt-8 text-black>? */}
      <ShimmerButton href="/blogs" className="shadow-xl px-4 py-2 mt-8 text-black " borderRadius="10px" shimmerColor="#702963" shimmerSize="2px" background="#fff">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg font-ubuntu ">
          {`Done? Read my Blogs -->`}
        </span>
      </ShimmerButton>
    </div>
  );
}
