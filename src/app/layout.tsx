import type { Metadata } from "next";
import "./globals.css";
import { alata, be_vietnam_pro } from "./fonts";
import GithubCardShiny from "@/components/animata/card/github-card-shiny";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Zahra Sabila - Portfolio",
  description: "Zahra Sabila's Portfolio, a Junior Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alata.variable} ${be_vietnam_pro.variable}`}>
      <body>
        <GithubCardShiny className="">
          {children}
          <Analytics />
        </GithubCardShiny>
      </body>
    </html>
  );
}
