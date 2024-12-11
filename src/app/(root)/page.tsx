"use client";
import Navbar from "@/components/fragments/Navbar";
import { BentoDemo } from "@/components/layouts/ContainerProject";
import About from "@/components/views/About";
import Education from "@/components/views/Education";
import Hero from "@/components/views/Hero";
import Social from "@/components/views/Social";
import Stack from "@/components/views/Stack";
import { useState } from "react";

export default function Home() {
  const [navStates, setNavStates] = useState("All");
  return (
    <div>
      <main className="mx-auto flex w-full max-w-screen-lg flex-col gap-4">
        <header className="sticky top-0 z-10 overflow-hidden my-7">
          <Navbar navStates={navStates} setNavStates={setNavStates} />
        </header>
        <section
          className={`${
            navStates === "Work" ? "h-0 hidden" : ""
          } flex gap-4 flex-col lg:flex-row`}
        >
          <Hero />
          <About />
        </section>
        <section
          className={`${
            navStates === "Work" ? "h-0 hidden" : ""
          } flex lg:flex-row flex-col gap-4`}
        >
          <div className=" gap-4 grid sm:grid-cols-2">
            <Stack />
            <Education />
          </div>
          <Social />
        </section>
        <section>
          <BentoDemo navStates={navStates} />
        </section>
      </main>
    </div>
  );
}
