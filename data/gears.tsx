import { Laptop, Code, Github, Server, Database, Mouse, Headphones, Monitor, Watch, Music, Terminal, TerminalSquare, Book, Gamepad } from "lucide-react";
import React from "react";

export interface Item {
  name: string;
  url: string;
  remark?: string;
  icon: React.ReactNode;
}

export const gearsData: Item[] = [
  {
    name: "HP Victus 5600H RTX 3050 24GB RAM 512GB Storage ",
    url: "https://dl.flipkart.com/s/EjN54BNNNN",
    remark: "My Love My Girlfriend.",
    icon: <Laptop className="w-4 h-4" />,
  },
  {
    name: "LG Ultragear 24GS65F",
    url: "https://www.amazon.in/dp/B0DPQWPQN2?th=1",
    remark: "Would Recommend 27 Inch 1440p+. One of my best investments tho.",
    icon: <Monitor className="w-4 h-4" />,
  },
  {
    name: "EvoFox Phantom Air",
    url: "https://www.amazon.in/dp/B0DZ6TVMRW?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
    remark: "Good at Its Price Point.",
    icon: <Mouse className="w-4 h-4" />,
  },
  {
    name: "Realme 7",
    url: "https://dl.flipkart.com/s/9Ydn7EuuuN",
    remark: "Highly Not Recommendable.",
    icon: <Mouse className="w-4 h-4" />,
  },
  {
    name: "Redmi Watch Move",
    url: "https://dl.flipkart.com/s/EKvcZZNNNN",
    remark: "Hasn't Disappointed Me Yet.",
    icon: <Watch className="w-4 h-4" />,
  },
  {
    name: "Realme Buds T200 Lite",
    url: "https://dl.flipkart.com/s/9MCzqAuuuN",
    // remark: "Not Recommended. Good For Low Budget",
    icon: <Headphones className="w-4 h-4" />,
  },
  {
    name: "Realme Wireless Buds 3",
    url: "https://dl.flipkart.com/s/9M9VwkuuuN",
    // remark: "Not Recommended. Good For Low Budget",
    icon: <Headphones className="w-4 h-4" />,
  },
];

export const appsData: Item[] = [
  {
    name: "VS Code",
    url: "https://code.visualstudio.com/",
    remark: "Might Switch to Neovim soon.",
    icon: <Code className="w-4 h-4" />,
  },
  {
    name: "Ghostty",
    url: "https://ghostty.org",
    remark: "Terminal Where I Spend Most of My Time.",
    icon: <TerminalSquare className="w-4 h-4" />,
  },
  {
    name: "YT Music",
    url: "https://music.youtube.com/@udayempire7563",
    remark: "Go Home Music Player",
    icon: <Music className="w-4 h-4" />,
  },
  {
    name: "Notion",
    url: "https://www.notion.com/",
    remark: "Digital Brain.",
    icon: <Book className="w-4 h-4" />,
  },
  {
    name: "Steam",
    url: "https://steamcommunity.com/id/udayempire/",
    remark: "I Love Story Games.",
    icon: <Gamepad className="w-4 h-4" />,
  },

];
