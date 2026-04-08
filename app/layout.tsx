import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme-provider"
import { Navbar } from "@/components/global/Navbar";
import { geistVF } from "./fonts";
import { Footer } from "@/components/global/Footer";
import Script from "next/script";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uday Kumar — Full Stack & Web3 Developer",
  description:
    "Portfolio of Uday Kumar. Full Stack Developer with 2+ years of experience building scalable web applications and Solana blockchain projects. Open to freelance, collaboration, and full-time roles.",
  keywords: [
    "Uday Kumar",
    "Full Stack Developer",
    "Web3 Developer",
    "Solana",
    "React",
    "Next.js",
    "Portfolio",
    "Freelance Developer",
  ],
  authors: [{ name: "Uday Kumar", url: "https://udayempire.com" }],
  creator: "Uday Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://udayempire.com",
    siteName: "Uday Kumar — Portfolio",
    title: "Uday Kumar — Full Stack & Web3 Developer",
    description:
      "Full Stack Developer with 2+ years of experience building scalable web apps and Solana blockchain applications.",
    images: [
      {
        url: "https://github.com/udayempire.png",
        width: 400,
        height: 400,
        alt: "Uday Kumar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Uday Kumar — Full Stack & Web3 Developer",
    description:
      "Full Stack Developer building scalable web apps and Solana blockchain applications.",
    creator: "@udayempire_",
    images: ["https://github.com/udayempire.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KGPKJYBJR5"></Script>
        <Script id="google-analytics">
          {`  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-KGPKJYBJR5');`}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistVF.className} dark:bg-zinc-900 bg-orange-100 antialiased relative`}>
        
        {/* Grainy Noise Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.2] dark:opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <ScrollProgress/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}