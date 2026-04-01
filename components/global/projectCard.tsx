"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { Slide } from "../ui/slide"

interface projectCardProps {
    title: string,
    desc: string,
    technologies: string,
    previewLink?: string,
    githubLink?: string,
    imgLink: string,
    role?: string,
}

export const ProjectCard = ({ title, desc, technologies, previewLink, githubLink, imgLink, role }: projectCardProps) => {
    const router = useRouter()
    
    // Safely split the technologies string into an array of individual items for badges
    const techArray = technologies ? technologies.split(',').map(tech => tech.trim()).filter(Boolean) : [];

    return (
        <Slide delay={0.18} className="h-full">
            <div className="group flex flex-col h-full bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:border-blue-500/40">
                
                {/* Image Container */}
                <div className="relative w-full h-48 md:h-56 bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0">
                    <Image 
                        src={imgLink} 
                        fill 
                        alt={title} 
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Container */}
                <div className="p-5 md:p-6 flex flex-col flex-grow gap-4">
                    
                    {/* Header: Title & Role */}
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors line-clamp-1">
                            {title}
                        </h3>
                        {role && (
                            <p className="text-sm mt-1 dark:text-zinc-300 text-zinc-800">
                                <span className="font-medium dark:text-zinc-100">Role: </span>{role}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                        {desc}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {techArray.length > 0 ? (
                            techArray.map((tech, i) => (
                                <span 
                                    key={i} 
                                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))
                        ) : (
                            <span className="text-sm text-blue-500 font-medium">{technologies}</span>
                        )}
                    </div>

                    {/* Restored Original Buttons */}
                    <div className="flex justify-center gap-10 mt-2">
                        {previewLink && (
                            <Button 
                                className="border-2 w-full dark:border-white border-black" 
                                variant="secondary" 
                                onClick={() => {
                                    router.push(previewLink || "")
                                }}
                            >
                                Preview
                            </Button>
                        )}
                        {githubLink && (
                            <Button 
                            className="w-full"
                                variant="default"
                                onClick={() => {
                                    router.push(githubLink || "")
                                }}
                            >
                                Github
                            </Button>
                        )}
                    </div>
                </div>
                
            </div>
        </Slide>
    )
}