"use client"
import Link from "next/link"
import { ModeToggle } from "../ui/theme-icon"
import { Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter()
    const data = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Projects",
            href: "/projects"
        },
        {
            name: "Blogs",
            href: "/blogs"
        }
    ]
    return <div className={`flex justify-between md:justify-between items-center border-b border-zinc-700 p-4 mx-4 md:mx-8`}>
        <Link href={"/"} className="font-geist font-semibold cursor-pointer">udayempire</Link>
        <div className="flex gap-2 md:gap-5 items-center ">
            <div className=" md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant={"themeicon"}>
                            <Menu className="h-[2.2rem] w-[1.2rem] " />
                            {/* <SidebarClose className="h-[2.2rem] w-[1.2rem]" /> */}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem><ModeToggle></ModeToggle></DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{router.push('/')}} >Home</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{router.push('/projects')}} >Projects</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{router.push('/blogs')}} >Blogs</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="hidden md:block">
            <ModeToggle />

            </div>
            {data.map((link, index) => (
                <li className="list-none" key={index}>
                    <div className="hidden md:block">
                    </div>
                    <Link className={`hidden md:block font-geist dark:hover:text-[#33E092]  font-semibold hover:text-blue-800 transition ease-in-out  transis text-md`} href={link.href}>{link.name}</Link>
                </li>
            ))}
        </div>
    </div>
}

