import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Providers from "./providers";
import SideNav from "./_components/side-nav";
import Header from "./_components/header";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex">
            <div className="hidden md:block md:w-1/5 border-r border-gray-200">
              <SideNav />
            </div>
            <div className="md:w-4/5 mx-auto container md:mx-0">
              <Header />

              <div className="">
                <NextTopLoader color="#2563eb" />
                {children}
                <Toaster />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
