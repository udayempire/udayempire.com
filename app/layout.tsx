import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme-provider"
import { Navbar } from "@/components/global/Navbar";
import { geistVF } from "./fonts";
import { Footer } from "@/components/global/Footer";
import Script from "next/script";

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
      <body className={`${geistSans.variable} ${geistVF.className} dark:bg-black bg-white  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
