"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
interface projectCardProps {
    title: string,
    desc: string,
    technologies: string,
    status?: string,
    previewLink?: string,
    githubLink?: string,
    imgLink: string
}

export const ProjectCard = ({ title, desc, technologies, status, previewLink, githubLink, imgLink }: projectCardProps) => {
    const router = useRouter()
    return (
        <div className="flex flex-col mx-10  bg-[#0b0b0b]   rounded-lg  " style={{}}>
            <div className="relative w-full h-72">
            <Image src={imgLink} fill alt="" className="rounded-t-md " />
            </div>
            <div className="p-5 flex flex-col gap-5 ">
                <h1 className="text-xl">{title}</h1>
                <p className="dark:text-zinc-300 ">{desc}</p>
                <p className="text-blue-500 font-light">{technologies}</p>
                <p className="text-[#33E092]"><span className="text-white">Status: </span>{status}</p>
                <div className="flex justify-center gap-10">
                    <Button className="border-2 border-white" variant="secondary" onClick={() => {
                        router.push( previewLink || "")
                    }}

                    >Preview</Button>
                    <Button className="" variant={"secondary"}
                        onClick={() => {
                            router.push( githubLink || "")
                        }}
                    >Github</Button>
            </div>
        </div>
        </div >
    )
}