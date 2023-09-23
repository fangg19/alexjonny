import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Work from "./components/sections/Work";
import Hero from "./components/sections/Hero";

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
        <Work />
      </section>
      <section className="flex flex-col lg:flex-row items-start w-full">
        <Contact />
      </section>
    </main>
  );
}
