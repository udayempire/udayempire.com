import { Heading } from "../ui/heading";
import { TechAnimation } from "./techAnimation";
export const Technologies = () => {
    return (
        <div className="w-full  flex flex-col justify-start mt-10 md:mt-16 ">
            <Heading className="text-left" text={"Tools and Technologies I Use"} />
            <TechAnimation/>
        </div>
    );
};
