import { SocialIcons } from "./socialIcons";
export const Footer = () => {
    return (
    <footer className="w-full  p-5 px-8 border-t mt-10  md:justify-between items-center">
        <div className=" md:flex items-center md:items-center justify-between gap-4">
            <div className="flex gap-4 items-center justify-center mb-4 md:mb-0">
                <SocialIcons />
            </div>
            {/* desktop */}
            <div className=" hidden md:block font-light ">© Made by Uday 2025</div>
            <div className="hidden md:flex items-center gap-3">
                <div className="bg-green-500 rounded-full   w-2 h-2" ></div>
                <p className=" font-light  md:text-md">Last Updated 14/01/25</p>
            </div>
            {/* phone */}
            <div className="md:hidden flex gap-3 justify-between items-center">
                <div className=" font-light text-xs">© Made by Uday 2025</div>
                <div className=" flex items-center gap-3">
                    <div className="bg-green-500 rounded-full  w-2 h-2" ></div>
                    <p className=" font-light text-xs">Last Updated 14/01/25</p>
                </div>
            </div>
        </div>
    </footer>
    )
}