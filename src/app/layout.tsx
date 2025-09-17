import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BlogStoreProvider } from "@/providers/blogStoreProvider";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luno's Blogging",
  description: "Luno's blog about coding and life",
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
        <div className="grid grid-cols-7">
          <div className="col-span-1"></div>
          <div className="col-span-5">
            <Link href="/" >
              <h1 className="text-4xl mb-3">Luno's Blog</h1>
            </Link>
            <BlogStoreProvider>
              {children}
            </BlogStoreProvider>
          </div>
          <div className="col-span-1"></div>
        </div>
      </body>
    </html>
  );
}
