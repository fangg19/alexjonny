import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Work from "./components/sections/Work";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-y-8 lg:gap-y-48  2xl:px-32">
      <section className="flex flex-col lg:flex-row items-start justify-between w-full px-4 md:px-20">
        <Hero />
      </section>

      <section className="flex flex-col lg:flex-row items-start w-full px-4 md:px-20">
        <About />
      </section>

      <section className="flex flex-col lg:flex-row items-start w-full px-4 md:px-20">
        <Work />
      </section>
      <section className="flex flex-col lg:flex-row items-start w-full px-4 md:px-20">
        <Contact />
      </section>
    </main>
  );
}
