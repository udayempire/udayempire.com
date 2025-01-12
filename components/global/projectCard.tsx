import Image from "next/image"
import { Button } from "../ui/button"

export const ProjectCard =()=>{
    return (
    <div className="flex flex-col mx-10  bg-[#141414]   rounded-lg  " style={{}}>
        <Image src={"/projects/blog-writer.png"} width={800} height={200} alt="" className="rounded-md"/>
        <div className="p-5 flex flex-col gap-5 ">
        <h1 className="text-xl">AI Blogging Assistant</h1>
        <p className="dark:text-zinc-300">AI Blogging App empowers you to create AI-generated blogs effortlessly. It features advanced tools like a text summarizer and much more to streamline your content creation process.</p>
        <p className="text-blue-600">Typescript, React, TailwandCSS, PostgreSql, Prisma, Vercel, Cloudflare Workers</p>
        <p className="text-red-500"><span className="text-white">Status: </span>In progress</p>
        <div className="flex justify-center gap-10">
            <Button variant="outline">Preview</Button>
            <Button variant={"secondary"}>Github</Button>
        </div>

        </div>
        
    </div>
    )
}