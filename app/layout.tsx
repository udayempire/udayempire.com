import type { Metadata } from "next";
import { Geist} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme-provider"
import { Navbar } from "@/components/global/Navbar";
import { geistVF } from "./fonts";
import { Footer } from "@/components/global/Footer";
// import { Inter } from "./fonts";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "udayempire",
  description: "This is my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistVF.className} dark:bg-black bg-white  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
