import Link from "next/link"
import { ModeToggle } from "../ui/theme-icon"

export const Navbar = () => {
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
    return <div className="flex justify-center md:justify-between items-center border-b border-zinc-700 p-4 mx-8">
        <div className="font-geist font-semibold">udayempire</div>
        <div className="flex items-center  gap-10">
            <ModeToggle />
            {data.map((link, index) => (
                <li className="list-none" key={index}>
                    <Link className={`font-geist dark:hover:text-[#33E092] font-semibold hover:text-blue-800 transition ease-in-out  transis text-md`} href={link.href}>{link.name}</Link>
                </li>
            ))}
        </div>
    </div>
}