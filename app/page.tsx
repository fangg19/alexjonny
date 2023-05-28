import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-8 lg:gap-y-24 mt-8 lg:mt-32">
      <section className="flex flex-col gap-y-16 lg:flex-row items-start justify-between w-full">
        <Hero />
        <About />
      </section>
      <section className="flex flex-col gap-y-16 lg:flex-row items-start justify-between w-full">
        <Experience />
      </section>
    </main>
  );
}
