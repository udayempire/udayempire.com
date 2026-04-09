import { Laptop, Code, Github, Server, Database, Mouse, Headphones } from "lucide-react";
import React from "react";

export interface Item {
  name: string;
  url: string;
  remark?: string;
  icon: React.ReactNode;
}

export const gearsData: Item[] = [
  {
    name: "MacBook Pro",
    url: "https://www.apple.com/macbook-pro/",
    remark: "Reliable and fast for web development.",
    icon: <Laptop className="w-4 h-4" />,
  },
  {
    name: "Logitech MX Master 3",
    url: "https://www.logitech.com/",
    remark: "Best productivity mouse.",
    icon: <Mouse className="w-4 h-4" />,
  },
  {
    name: "Sony WH-1000XM5",
    url: "https://www.sony.com/",
    remark: "For focused coding sessions.",
    icon: <Headphones className="w-4 h-4" />,
  },
];

export const appsData: Item[] = [
  {
    name: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
    remark: "My go-to editor. Highly recommended with AI extensions.",
    icon: <Code className="w-4 h-4" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    remark: "Where I host all my projects.",
    icon: <Github className="w-4 h-4" />,
  },
  {
    name: "Vercel",
    url: "https://vercel.com/",
    remark: "Best platform for hosting Next.js apps.",
    icon: <Server className="w-4 h-4" />,
  },
  {
    name: "Supabase / Postgres",
    url: "https://supabase.com/",
    remark: "Database of choice.",
    icon: <Database className="w-4 h-4" />,
  },
];
