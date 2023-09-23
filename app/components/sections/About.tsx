import { getAge } from "@/app/utils/utils";

const About = () => {
  return (
    <div id="about" className="flex flex-col gap-2 text-justify relative">
      <div className="w-full h-[2px] bg-neutral-800 mb-12" />

      <div className="z-10 flex flex-col">
        <h3>Hi, I&apos;m Jonny</h3>
        <p>
          <s>(or Alex, I&apos;m fine with any)</s>
        </p>
        <br />
        <p>
          A<strong itemProp="age"> {getAge()}</strong> years old guy based in
          Bucharest, Romania who&apos;s really into web development and
          everything digital in general.
          <br />
          <br />
          I got my hands on a computer back in the early 2000s and I&apos;ve
          been playing with it ever since and I developed a close relationship
          with this digital world (it&apos;s ok. sometimes I go out), making it
          my playground. After a break of few years I decided to come back and
          make it the main activity of my everyday life.
          <br />
          <br />
          I&apos;m a curious and relaxed person who leans towards simplicity and
          practicality, often guided by the question,{" "}
          <strong>&quot;is it really necessary?&quot;</strong>. I enjoy a good
          sense of humor and I am consistently prepared for a hearty laugh. I
          appreciate beautiful things that I stumble upon.
        </p>
      </div>
      <div className="w-full h-[2px] bg-neutral-800 mt-12" />
    </div>
  );
};

export default About;
