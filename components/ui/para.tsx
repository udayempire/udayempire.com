import { cn } from "@/lib/utils"

interface HeadingProps{
    text:string,
    className?:string
}

export const Para=({text,className}:HeadingProps)=>{
    return <h1 className={cn(className,"dark:text-zinc-300 text-zinc-600 text-lg my-3",className)}>
        {text}
    </h1>

}