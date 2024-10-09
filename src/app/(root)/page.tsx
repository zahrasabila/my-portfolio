import { BentoDemo } from "@/components/layouts/ContainerProject";
import About from "@/components/views/About";
import Education from "@/components/views/Education";
import Hero from "@/components/views/Hero";
import Social from "@/components/views/Social";
import Stack from "@/components/views/Stack";

export default function Home() {
  return (
    <div>
      <main className="mx-auto flex w-full max-w-screen-lg flex-col gap-4">
        <section className="flex gap-4 flex-col lg:flex-row">
          <Hero />
          <About />
        </section>
        <section className="flex lg:flex-row flex-col gap-4">
          <div className=" gap-4 grid sm:grid-cols-2">
            <Stack />
            <Education />
          </div>
          <Social />
        </section>
        <section>
          <BentoDemo />
        </section>
      </main>
    </div>
  );
}
