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
        <div className="flex flex-col md:mx-10  bg-[#141414]   rounded-lg  " style={{}}>
            <div className="relative w-full h-48">
            <Image src={imgLink} fill alt="" className="rounded-t-md " />
            </div>
            <div className="p-4 md:p-5 flex flex-col gap-2 ">
                <h1 className="text-zinc-100  md:text-xl">{title}</h1>
                <p className="dark:text-zinc-300 text-sm  md:text-md  ">{desc}</p>
                {/* <p className="text-blue-400 text-md"><span className="dark:text-zinc-100 text-md">Role: </span>{status}</p> */}
                <p className="text-blue-500 font-light text-sm md:text-md ">{technologies}</p>
                <div className="flex justify-center gap-10 mt-2">
                    <Button className="border-2 border-white " variant="secondary" onClick={() => {
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