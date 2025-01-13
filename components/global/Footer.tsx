import { SocialIcons } from "./socialIcons";
export const Footer = () => {
    return <div className="w-full  p-5 px-8 border-t mt-10  md:justify-between items-center">
        <div className="flex  items-center md:items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
                <SocialIcons />
            </div>
            <div className="  font-light">© Made by Uday 2025</div>
            <div className="flex gap-3 items-center">
                <div className="bg-green-500 rounded-full  w-2 h-2" ></div>
                <p className="font-light">Last Updated 13/01/25</p>
            </div>
        </div>
    </div>
}