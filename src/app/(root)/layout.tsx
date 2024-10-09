// import GithubCardShiny from "@/components/animata/card/github-card-shiny";
"use client";
import Navbar from "@/components/fragments/Navbar";
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navStates, setNavStates] = useState({
    All: false,
    About: false,
    Work: false,
  });

  return (
    <div>
      <AnimatedCursor
        innerSize={16}
        outerSize={70}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "black",
        }}
        outerStyle={{
          border: "1px solid black",
        }}
      />
      <div className="grid-bg ba-grid">
        <div className="space-y-5 sm:space-y-12 sm:p-12 p-5 inner">
          <header className="sticky top-0 z-10 overflow-hidden">
            <Navbar navStates={navStates} setNavStates={setNavStates} />
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
