// import { FullBlog } from "@/components/blogs/fullBlog";
import Image from "next/image";
import { CalendarDays, ClockIcon } from "lucide-react"
import { Heading } from "@/components/ui/heading";
import { Para } from "@/components/ui/para";
import Link from "next/link";
export default function reactBlog() {
    return <div className="w-10/12  mx-auto flex flex-col items-center mt-2 xl:ml-48">
        <div className="flex justify-center mt-1">
            <div className="mt-7">
                {/* <FullBlog/> */}
                <div className="w-full">
                    <div className="max-w-7xl">
                        <div>
                            <h1 className="font-ubuntu text-4xl md:text-5xl w-full text-left text-black dark:text-zinc-200  ">My First Hackathon Experience</h1>
                            <div className="mt-5 dark:text-zinc-300 text-zinc-600">
                                <div className="flex justify-between">
                                    <div className="flex gap-2 px-5 py-2 items-center text-sm w-full  ">
                                        <CalendarDays />
                                        <div className="">Published on : 6th April 2025</div>
                                    </div>
                                    <div className="flex gap-2 items-center text-sm w-full  ">
                                        <ClockIcon />
                                        <div>4 min read</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 text-lg flex flex-col ">
                            <div className="flex justify-start h-44 md:h-80 my-3 rounded-md">
                                <Image className="rounded-lg" src={"/blogs/hackathon-4.png"} width={1300} height={100} alt="" />
                            </div>
                            <Heading className="my-1 mt-4" text="Our Hackathon Experience: Building, Breaking & Learning" />
                            <Para
                                text={"We got selected for a hackathon just 10 days before the event. There was no problem statement given, which made it 10x harder to even figure out what to build. Finally, on 27th March, I came up with this idea called Goal Staking. The concept was simple people would stake money on their personal goals, and if they completed it, they’d get their money back + extra rewards. (How those rewards come in—I'll save the details.  But if you're curious, ping me! Would love to discuss.) Since the idea was about trust, I thought—why not use smart contracts? Everything stays transparent. Anyone can read the contract and understand how the funds are handled.Also ETH india and polygon were sponsors along with eth 2024 winner as mentor which was COMPLETE SCAM by the hackathon incharges as non of them came. I really would have thought to build something else if I was aware of this but anyways lets move ahead."} />
                            <Heading className="my-2" text="Team Setup" />
                            <ul className="list-disc px-4 dark:text-zinc-300 text-zinc-600 ">
                                <li>
                                    <Link href="https://www.linkedin.com/in/uday-kumar-empire07/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold cursor-pointer underline underline-offset-1">
                                        Uday
                                    </Link> - Full stack development + Web3
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/in/kaushik-vish/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold cursor-pointer underline underline-offset-1">
                                        Kaushik
                                    </Link> - Full stack development
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/in/ayush-kumar-5801b1299/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold cursor-pointer underline underline-offset-1">
                                        Ayush
                                    </Link> - UI/UX Designer
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/in/shreshthi-singh-rajput-6a18752a5/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold cursor-pointer underline underline-offset-1">
                                        Shresthi
                                    </Link> - Presenter, PPT
                                </li>
                            </ul>

                            <Para text={"We began working on 1st April, with the hackathon on 3rd April. Here’s the twist: no one on the team knew Web3!"} />

                            <Para text="I had some idea, but I’d never really built a real smart contract before. So I started asking around—community, friends, Discords, seniors—everyone chipped in with suggestions." />

                            <Para text="But I made one terrible mistake (I will talk about it later)." />

                            <Heading text="Early Progress" className="my-2" />

                            <Para text="For the design part, we took heavy inspiration from AI-based tools like Rollout.site (underrated gem, by the way). I kept asking ChatGPT, seniors, and dev friends to poke holes in the idea. Every time I fixed one loophole, the project just got more complex. With just 2 devs, we didn’t have the luxury to over-engineer things and YES—“vibe coding” doesn't magically solve this. That’s a straight-up myth. We automated a few parts using AI tools (which did save time), but trust me, AI-generated code comes with its own bugs. Only if you’ve coded before then you can fix them quickly. " />

                            <Heading text="Diving into Solidity" className="my-2" />

                            <Para text="I started learning Solidity from scratch. Till that point all we had was-" />
                            <ul className="list-disc px-4 dark:text-zinc-300 text-zinc-600 ">
                                <li>Project Structure</li>
                                <li>Basic Flow</li>
                                <li>Dashboard</li>
                            </ul>
                            <Para text="Then, when I tried to add a Connect Wallet feature using thirdweb.js, things blew up. It required their Next.js starter template, so we had to shift our entire repo and backend setup to match it. This was the second major hurdle (after Solidity)." />
                            <Para text="We had to catch a train at 4 PM, and by then, we barely had :-" />
                            <ul className="list-disc px-4 dark:text-zinc-300 text-zinc-600 ">
                                <li>Basic backend endpoints</li>
                                <li>Layout-level frontend</li>
                                <li>Wallet integration</li>
                            </ul>

                            <Heading text="The Train Journey + Final Sprint" className="my-2 mt-4" />
                            <Para text="We used the train journey to code. I spent the night building almost the entire frontend. Backend was pending. Smart contract was pending. Integration? Nope." />
                            <Para text="We reached Delhi at 4 AM and waited in the station till 6 AM for metros to start. The pollution hit hard. Coming from Bhopal, I was not ready for that air. We reached the hackathon venue by 8 AM. Hospitality was nice. Food was great. Opening ceremony? Meh. Just dragged and boring." />

                            <Heading text="Build, Break, Repeat" className="my-2" />
                            <Para text="After lunch, we started coding at 3:30 PM. 5:30 PM was the first mentor round. My friend used Cursor to write backend APIs, but the code came out way too complex, so we reviewed and fixed it. Till now we only had- our PPT and Frontend Ready to show. Backend wasnt connected." />
                            <Para text="Surprisingly, mentors were just random college profs (even though the hackathon had ETH India, Polygon as sponsors). There was no real Web3 mentor. They didn’t understand what we were building but said it was a 'cool idea'. Also when we discussed with other participants they said the idea is good which gave us huge hope." />

                            <Para text="Post tea-break, we hit another wall:The starter template from Thirdweb was painfully slow in compiling the app. Too late to switch again. One backend endpoint wasn’t working—it took us 1 hour + a system restart to fix it.Ny Midnight we had:-" />
                            <ul className="list-disc px-4 dark:text-zinc-300 text-zinc-600 ">
                                <li>Full frontend ✅</li>
                                <li>Backend ready ✅</li>
                                <li>Integration ❌</li>
                            </ul>
                            <Para text="Everyone in my team went to sleep by 12AM.I kept working till 2-3AM and connected frontend to backend and bunch of other stuffs untill midnight snacks arrived.I slept at 4AM around and woke up again at around 6:30 AM.At that time all I could was do system check as there was no time to integrate web3 now so had to skip it." />

                            <Heading text="Final Round Flop" />
                            <Para text="Mentor round was at 7 AM for Top-10. Frontend was super laggy due to the Thirdweb template, and the app kept freezing. We had everything built, but couldn’t showcase it well. They didn’t let us explain properly—like they were in a rush to catch a flight. We got 10 out of 15 points, but it wasn’t enough to make into top-10." />

                            <Heading text="Learnings I took" className="my-4" />
                            <ul className="list-decimal px-4 dark:text-zinc-300 text-zinc-600">
                                <li>
                                    <span className="font-bold">Master the basics.</span> Cool tech like Web3 won’t save you if your core app is broken.
                                </li>
                                <li>
                                    <span className="font-bold">Don’t over-engineer.</span> Build an MVP. You are not launching a full-blown Application in 24 hours.
                                </li>
                                <li>
                                    <span className="font-bold">Rehearse your pitch.</span> Pitch it like it’s Shark Tank. You gotta sell it. Our pitch tbh was not very good.
                                </li>
                                <li>
                                    <span className="font-bold">Show business value.</span> Monetization and impact need to be super clear.
                                </li>
                                <li>
                                    <span className="font-bold">Record a demo video.</span> If we had one, we could’ve shown it when the app froze during mentor visits.
                                </li>
                                <li>
                                    <span className="font-bold">First impression = last impression.</span> UI/UX matters more than you think.
                                </li>
                                <li>
                                    <span className="font-bold">Balance your tech stack.</span> Get devs who understand and can explain things well. We really needed more devs in the team.
                                </li>
                                <li>
                                    <span className="font-bold">Dont start from scratch in the hackathon.</span> Most team comes up with made up projects. Your Project and mvp must be working.
                                </li>
                                <li>
                                    <span className="font-bold">Pray to God.</span> Luck matters. We saw projects worse than ours get selected.
                                </li>
                            </ul>

                            <Heading text="Would I do it again?" className="my-4" />
                            <Para className="" text="Hell yes. It was frustrating, tiring, and disappointing after continously working for 2 days and barely sleeping. But it was also exciting, challenging, and packed with learning. I got to know there is a lot I need to learn and grow." />

                            <div className="mt-2">
                                <Para text="If you read till here, you're a real one ❤️. Feel free to connect with me with the socials below." />
                            </div>
                        </div >

                    </div>
                </div>
            </div>
        </div>
    </div>
}