import { cn } from "@/lib/utils"

interface HeadingProps{
    text:string,
    className?:string
}

export const Heading=({text,className}:HeadingProps)=>{
    return <h1 className={cn(className,"text-2xl  font-ubuntu mt-10 mb-10 underline underline-offset-4 text-zinc-200 my-2",className)}>
        {text}
    </h1>

}