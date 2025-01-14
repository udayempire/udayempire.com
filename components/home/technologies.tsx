import { Heading } from "../ui/heading";
import { TechAnimation } from "./techAnimation";
import { Slide } from "../ui/slide";
export const Technologies = () => {
    return (
        <div className="w-full  flex flex-col justify-start mt-10 md:mt-16 ">
            <Slide>
            <Heading className="text-left" text={"Tools and Technologies I Use"} />
            </Slide>
            <Slide delay={.5}>
            <TechAnimation/>
                
            </Slide>
        </div>
    );
};
