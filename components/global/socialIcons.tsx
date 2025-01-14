import Link from "next/link";
import Image from "next/image";
export const SocialIcons = () => {
    return <div className="flex gap-4 items-center">
        <Link href={"https://www.github.com/udayempire"} target="_blank" >
            <Image src="/icons/github2.svg" width="30" height="40" alt="github" className="hover:scale-125 transition-transform bg-black rounded-full" />
        </Link>
        <Link href={"https://www.linkedin.com/in/uday-kumar-empire07/"} target="_blank"   >
            <Image src="/icons/linkedin.svg" width="30" height="40" alt="linked" className="hover:scale-150 transition-transform bg-black rounded-full" />
        </Link>
        <Link href={"https://x.com/UdayEmpire003"} target="_blank" >
            <Image src="/icons/X.svg" width="30" height="40" alt="X" className="hover:scale-[1.8]  transition-transform bg-black rounded-full" />
        </Link>
        <Link href={"https://www.instagram.com/udayempire07/"} target="_blank" >
            <Image src="/icons/instagram.svg" width="30" height="40" alt="instagram" className="hover:scale-[1.7]  transition-transform bg-black rounded-full -p-4" />
        </Link>
        <Link href={"https://www.discordapp.com/users/udayempire39"} target="_blank" >
            <Image src="/icons/discord.svg" width="30" height="40" alt="instagram" className="hover:scale-[1.7]  transition-transform bg-black rounded-full -p-4" />
        </Link>
        <Link href={"https://buymeacoffee.com/udayempire"} target="_blank" >
            <Image src="/icons/buymecoffee.svg" width="30" height="40" alt="instagram" className="hover:scale-[1.7]  transition-transform bg-black rounded-full -p-4" />
        </Link>
    </div>
}