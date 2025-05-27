// import { FullBlog } from "@/components/blogs/fullBlog";
import Image from "next/image";
import { CalendarDays, ClockIcon } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Para } from "@/components/ui/para";
import Link from "next/link";
export default function storyBlog() {
  return (
    <div className="w-10/12  mx-auto flex flex-col items-center mt-2 xl:ml-48">
      <div className="flex justify-center mt-1">
        <div className="mt-7">
          {/* <FullBlog/> */}
          <div className="w-full">
            <div className="max-w-7xl">
              <div>
                <h1 className="font-ubuntu text-4xl md:text-5xl w-full text-left text-black dark:text-zinc-200  ">
                  What is IP Blockchain and 5 Project Ideas to Build Around It
                </h1>
                <div className="mt-5 dark:text-zinc-300 text-zinc-600">
                  <div className="flex justify-between">
                    <div className="flex gap-2 px-5 py-2 items-center text-sm w-full  ">
                      <CalendarDays />
                      <div className="">Published on : 27th May 2025</div>
                    </div>
                    <div className="flex gap-2 items-center text-sm w-full  ">
                      <ClockIcon />
                      <div>3 min read</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 text-lg flex flex-col ">
                <div className="flex justify-start h-44 md:h-80 my-3 rounded-md">
                  <Image
                    className="rounded-lg"
                    src={"/blogs/IP.png"}
                    width={1300}
                    height={100}
                    alt=""
                  />
                </div>
                <Heading
                  className="my-1 mt-4"
                  text="Understanding IP Blockchain"
                />
                <Para text="Imagine writing a story, song, or code and proving it's yours forever. That's IP on the blockchain. It timestamps your work, stores it immutably, and lets you license, sell, or earn royalties. No middlemen. Just you and your verified creativity." />
                <Para text="Story is a peer-to-peer platform where individuals can directly share, trade, and earn from their ideas without relying on middlemen. Each idea has built-in rules set by its creator, allowing it to be used, monetized, or expanded across different apps. This system helps creators earn passive income while keeping full control of their intellectual property online." />
                <p>
                  You can go through their
                  {"   "}
                  <Link
                    href={"https://www.story.foundation/"}
                    className="text-blue-500 underline underline-offset-2 cursor-pointer"
                  >
                    website
                  </Link>
                  {"   "}and{"   "}
                  <Link
                    href={"https://www.story.foundation/whitepaper.pdf"}
                    className="text-blue-500 underline underline-offset-2 cursor-pointer"
                  >
                    white paper
                  </Link>
                  {"   "}
                  to get to know more about story and IP Blockchain in depth and
                  their whitepaper is really really nice !!
                </p>

                <Heading className="my-2" text="1. NFT Bundle Creator" />
                <Para text="Tool to package multiple IP NFTs into bundles for easier sales or licensing." />
                <Para text="It can be digital platform that allows creators or owners of multiple NFTs each representing unique piece of IP to package multiple NFTs into a bundle to sell, license or transfer. This revolutionary approach simplifies portfolio management and enables creators to maximize the value of their intellectual property assets." />

                <Heading className="my-2" text="2. IP Infringement Detector" />
                <Para text="IP theft is common with digital content, it's easy for others to copy or misuse creative works." />
                <Para text="Building an agent that matches new content with previous footprint preventing frauds. The system employs advanced AI algorithms to continuously monitor multiple platforms, providing real-time alerts and comprehensive reports of potential IP violations." />
                <Para
                  text="It has various use-cases like Artists protecting their digital art from unauthorized NFT minting. Musicians monitoring streaming platforms for pirated tracks.Writers and publishers tracking plagiarized or copied texts. Brands detecting counterfeit logos or trademarks on marketplaces. Game developers spotting cloned or stolen game assets in metaverse projects."
                />

                <Heading
                  className="my-2"
                  text="3. Dynamic Pricing Model for IP"
                />
                <Para text="Static pricing doesn't reflect the true value of IP. A popular song, art should grow in worth as its demand rises but fixed prices miss that." />
                <Para text="Smart contracts can automate realtime price updates, ensuring creators and buyers get market-driven rates.Use a Dynamic Pricing Model that adjusts IP prices based on usage data, demand, and trends. Smart contracts + oracles can automate real-time price updates, ensuring creators earn fairly and buyers get transparent, market-driven rates." />

                <Heading className="my-2" text="4. IP Lending Platform" />
                <Para text="Most creators have valuable IP but no access to traditional loans. Banks don’t recognize digital art, music, or code as collateral. This locks out funding." />
                <Para text="A lending protocol can enable lending where verified IP NFTs act as collateral. If repayment fails, ownership transfers via the contract. Empower creators with capital, backed by their own work." />

                <Heading
                  className="my-2"
                  text="5. Fractional Ownership Marketplace"
                />
                <Para text="High-value IP like songs, art, or stories are often out of reach for individual buyers. This limits access and potential for community-driven growth." />
                <Para text="Let users buy fractions of IP as NFTs. Smart contracts handle revenue sharing based on ownership % — making IP investment accessible, inclusive, and scalable." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
