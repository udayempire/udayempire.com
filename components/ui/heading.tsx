import { cn } from "@/lib/utils"

interface HeadingProps{
    text:string,
    className?:string
}

export const Heading=({text,className}:HeadingProps)=>{
    return <h1 className={cn(className,"text-2xl  font-ubuntu mt-10 mb-10",className)}>
        {text}
    </h1>

}