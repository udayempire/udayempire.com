import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
    //upper half icons
    {
        name: "Javascript",
        img: "/icons/javascript.png", 
    },
    {
        name: "Typescript",
        img: "/icons/typescript.svg",
    },
    {
        name: "React",
        img: "/icons/react.svg",
    },
    {
      name: "Next",
      img: "/icons/nextjs.svg",
    },
    {
      name: "NodeJs",
      img: "/icons/nodejs.svg",
    },
    {
        name: "Tailwand",
        img: "/icons/tailwand.svg",
    },
    {
      name: "express",
      img: "/icons/express.svg",
    },
    //lower half icons
  {
    name: "HTML",
    img: "/icons/html.svg",
  },
  {
    name: "CSS",
    img: "/icons/css.svg",
  },
  {
    name: "prisma",
    img: "/icons/prisma.svg",
  },
  {
    name: "PostgreSql",
    img: "/icons/postgres.svg",
  },
  {
    name: "MongoDB",
    img: "/icons/mongo.svg",
  },
  {
    name: "Github",
    img: "/icons/github.svg",
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,

}: {
  img: string;
  name: string;

}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-md" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function TechAnimation() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
