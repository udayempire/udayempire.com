import Link from "next/link"
import { CalendarDays, ClockIcon } from "lucide-react"
import Image from "next/image"
export const Blog = () => {
    return <Link href={"/blogs/react-vs-angular-whats-suits"} className="w-full">
        <div className="flex flex-col items-center max-w-xl justify-center gap-4 border-b p-5 cursor-pointer">
            <h1 className="font-ubuntu text-2xl md:text-4xl text-left w-full">React Vs Angular what suits?</h1>
            <Image src={"/blogs/react-angular.png"} width={500} height={100} alt=""/>
            <p className="dark:text-zinc-400 text-zinc-600">React and Angular are two of the most popular JavaScript frameworks used for building modern web applications, each with its own unique strengths and use cases. React, ... <span className="text-white">Read More</span> </p>
            <div className="flex justify-between  w-full text-sm dark:text-zinc-300 text-zinc-600">
                <div className="flex gap-2 items-center text-xs w-full ">
                    <CalendarDays />
                    <div className="">14th Jan 2025</div>
                </div>
                <div className="flex gap-2 items-center text-xs w-full  ">
                    <ClockIcon />
                    <div>2 min read</div>
                </div>
            </div>
        </div>
    </Link>
}