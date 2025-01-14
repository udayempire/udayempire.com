"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
interface projectCardProps {
    title: string,
    desc: string,
    technologies: string,
    previewLink?: string,
    githubLink?: string,
    imgLink: string,
    role?:string,
}
import { Slide } from "../ui/slide"

export const ProjectCard = ({ title, desc, technologies, previewLink, githubLink, imgLink,role }: projectCardProps) => {
    const router = useRouter()
    return (
        <Slide delay={.18} className="flex flex-col md:mx-10  dark:bg-[#141414] bg-slate-50 shadow-lg hover:scale-105 transition-transform  rounded-lg  ">
            <div className="relative w-full h-48 md:h-72">
                <Image src={imgLink} fill alt="" className="rounded-t-md " />
            </div>
            <div className="p-4 md:p-5 flex flex-col gap-2 ">
                <h1 className="dark:text-zinc-100 text-zinc-950  md:text-xl">{title}</h1>
                <p className="dark:text-zinc-300 text-zinc-800 text-sm  md:text-md  ">{desc}</p>
                <p className="dark:text-blue-400 text-zinc-700 text-md"><span className="dark:text-zinc-100 text-md">Role: </span>{role}</p>
                <p className="text-blue-500 font-light text-sm md:text-md ">{technologies}</p>
                <div className="flex justify-center gap-10 mt-2">
                    {previewLink && <Button className="border-2 dark:border-white border-black " variant="secondary" onClick={() => {
                        router.push(previewLink || "")
                    }}>Preview</Button>}
                    {githubLink && (<Button className="" variant={"default"}
                        onClick={() => {
                            router.push(githubLink || "")
                        }}
                    >Github</Button>)
                    }
                </div>
            </div>
        </Slide >
    )
}