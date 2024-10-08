import { getAge } from "@/app/utils/utils";

const About = () => {
  return (
    <div
      id="about"
      itemType="https://schema.org/Person"
      className="mb-12 lg:mb-0 flex flex-col gap-2 text-justify relative"
    >
      <h1 className="text-xl font-bold text-neutral-600">-- who am i? --</h1>
      <div className="w-full h-[2px] bg-neutral-800 mb-6" />

      <div className="z-10 flex flex-col">
        <h3 itemProp="givenName">Hi, I&apos;m Jonny</h3>
        <p>
          <s itemProp="givenName">(or Alex, I&apos;m fine with any)</s>
        </p>
        <br />
        <p>
          A<strong itemProp="age"> {getAge()}</strong> years old guy based in
          <span itemProp="addressLocality"> Bucharest</span>,{" "}
          <span itemProp="addressCountry">Romania</span> who&apos;s really into
          web development and everything programming related in general that
          enjoys spending time in front of a keyboard and a display.
          <br />
          <br />
          I got my hands on a computer back in the early 2000s and I&apos;ve
          been playing with it ever since and I developed a close relationship
          with this world (it&apos;s ok. sometimes I go out), making it my
          playground. After a break of few years I decided to come back and make
          it the main activity of my everyday life.
          <br />
          <br />
          I&apos;m a curious and relaxed person who leans towards simplicity and
          practicality, often asking{" "}
          <strong>&quot;is it really necessary?&quot;</strong>. I enjoy a good
          sense of humor and I am always prepared for a hearty laugh. I
          appreciate beautiful things that I stumble upon.
          {/* <br /> */}
          {/* <br /> */}
          {/* Currently I&apos;m working as a Frontend Developer (sometimes I write
          backend code too) at Sessions, a romanian startup. I enjoy working
          with <strong>React</strong> and <strong>Typescript</strong> and at
          home I like to play with <strong>Next.js </strong>
          mostly. */}
        </p>
      </div>
    </div>
  );
};

export default About;
