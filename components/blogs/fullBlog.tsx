import { CalendarDays, ClockIcon } from "lucide-react"
import { Heading } from "../ui/heading"
import { Para } from "../ui/para"
import Image from "next/image"
export const FullBlog = () => {
    return <div className="w-full">
        <div className="max-w-7xl">
            <div> 
                <h1 className="font-ubuntu text-4xl md:text-5xl w-full text-left  ">React vs Angular what suits?</h1>
                <div className="mt-5 dark:text-zinc-300 text-zinc-600">
                    <div className="flex justify-between">
                        <div className="flex gap-2 px-5 py-2 items-center text-sm w-full  ">
                            <CalendarDays />
                            <div className="">Published on : 14th Jan 2025</div>
                        </div>
                        <div className="flex gap-2 items-center text-sm w-full  ">
                            <ClockIcon />
                            <div>2 min read</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 text-lg flex flex-col ">
                <div className="flex justify-start h-44 md:h-80 my-3 rounded-md">
                    <Image className="rounded-lg" src={"/blogs/react-angular-2.png"} width={1300} height={100} alt="" />
                </div>
                <Heading className="my-1 mt-4" text="Brief" />
                <Para
                    text={"React and Angular are two of the most popular JavaScript frameworks used for building modern web applications, each with its own unique strengths and use cases. React, developed by Facebook, is a library focused on building user interfaces, while Angular, developed by Google, is a full-fledged framework designed for creating robust applications."} />
                <Heading className="my-2" text="What sets them apart?" />

                <Para text={"One of the main distinctions between React and Angular is their approach to development. React adopts a component-based architecture, allowing developers to create reusable UI components that manage their own state. This modularity enables a more flexible and efficient development process, as components can be easily tested and reused across different parts of an application. React uses a virtual DOM, which optimizes rendering by updating only the parts of the DOM that have changed, resulting in faster performance for dynamic user interfaces."} />

                <Para text="In contrast, Angular provides a more opinionated structure, offering a comprehensive set of tools and features out of the box, including dependency injection, routing, and form handling. This makes Angular particularly well-suited for building large-scale applications where a consistent architecture is essential. Angular's two-way data binding automatically synchronizes the model and the view, simplifying the process of keeping UI components in sync with data changes. However, this can lead to performance issues in larger applications if not managed properly.  " />

                <Heading text="Learning Curve" className="my-2" />

                <Para text="Another critical difference is the learning curve associated with each technology. React is generally considered easier to learn, especially for developers familiar with JavaScript and functional programming concepts. Its simplicity and flexibility make it a popular choice for new developers. Angular, on the other hand, has a steeper learning curve due to its extensive features and TypeScript dependency. However, once mastered, Angular can offer powerful tools for building complex applications efficiently.Community support and ecosystem also play a significant role in choosing between React and Angular. React boasts a vast ecosystem of libraries and tools, providing developers with a wealth of resources to enhance their applications. Angular also has a strong community and offers many built-in features, but it may not have as many third-party libraries compared to React." />

                <Heading text="Summary" className="my-2" />

                <Para text="From my perspective, choosing between React and Angular really depends on what the project needs and what the team is comfortable with. React is great if you’re looking for flexibility and top-notch performance, especially for dynamic, interactive applications. On the other hand, Angular offers a solid, all-in-one framework that’s perfect for large, enterprise-level projects. Both are constantly evolving to keep up with the fast-paced world of web development, so it ultimately comes down to the specific use case and the team’s expertise." />


            </div >

        </div>
    </div>
}