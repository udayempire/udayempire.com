import { ProjectCard } from "@/components/global/projectCard";
import { Heading } from "@/components/ui/heading";
import { projectsData } from "@/data/data";
import { Slide } from "@/components/ui/slide";

export default function Projects() {
    return (
        <div className="w-10/12 h-full mx-auto flex flex-col items-center mt-2 xl:ml-48">
            <Slide delay={.10} className="w-full">
                <Heading className=" text-left  w-full mt-16" text="All Projects" />
            </Slide>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
                {projectsData.map((data, index) => (
                    <ProjectCard key={index} title={data.title} desc={data.desc} technologies={data.Technologies} previewLink={data.previewLink}
                        githubLink={data.githubLink} imgLink={data.imgLink} role={data.role} />
                ))}
            </div>
        </div>
    )
}