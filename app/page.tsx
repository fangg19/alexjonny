import Blobs from "./components/Blobs";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-y-8 lg:gap-y-48  2xl:px-32">
      <section className="flex flex-col lg:flex-row items-start justify-between w-full">
        <Hero />
      </section>

      <section className="flex flex-col lg:flex-row items-start w-full">
        <About />
      </section>

      <section className="flex flex-col lg:flex-row items-start w-full">
        <Experience />
      </section>
      <section className="flex flex-col lg:flex-row items-start w-full">
        <Contact />
      </section>
    </main>
  );
}
