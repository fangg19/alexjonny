import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function Home() {
  // let innerCursor = document.querySelector(".inner-cursor");
  // let outerCursor = document.querySelector(".outer-cursor");

  // document.addEventListener("mousemove", moveCursor);

  // function moveCursor(e) {
  //   if (!innerCursor || !outerCursor) return;
  //   let x = e.clientX;
  //   let y = e.clientY;
  //   innerCursor.style.left = `${x}px`;
  //   innerCursor.style.top = `${y}px`;
  //   outerCursor.style.left = `${x}px`;
  //   outerCursor.style.top = `${y}px`;
  // }

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-8 lg:gap-y-48  2xl:px-32">
      <section className="flex flex-col gap-y-16  lg:flex-row items-start justify-between w-full mt-12 lg:mt-36">
        <Hero />
        {/* <About /> */}
      </section>

      <section className="flex flex-col gap-y-16 lg:flex-row items-start w-full">
        <About />
      </section>

      <section className="flex flex-col gap-y-16 lg:flex-row items-start w-full">
        <Experience />
      </section>

      {/* <section className="flex flex-col gap-y-16 lg:flex-row items-start w-full">
        <Projects />
      </section> */}

      <section className="flex flex-col gap-y-16 lg:flex-row items-start w-full">
        <Contact />
      </section>
    </main>
  );
}
