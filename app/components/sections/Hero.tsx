import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-1 min-h-screen">
      <h1 className="lg:text-6xl text-3xl font-bold text-neutral-200">
        ALEX JONNY
      </h1>
      <div className="h-1 bg-neutral-200 w-full" />
      <h1 className="text-4xl text-neutral-200">FRONTEND DEVELOPER</h1>
      <div className="grayscale relative">
        {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900 z-10 hover:hidden" /> */}
        {/* <Image
          src="/images/me_square.jpg"
          width={200}
          height={200}
          alt="me"
          priority
        /> */}
      </div>
      <div className="flex flex-row gap-4 mt-2 justify-center items-center">
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://github.com/fangg19"
        >
          {/* <Image src="/icons/github.svg" width={30} height={30} alt="github" /> */}
          <p className="hover:underline underline-offset-2 hover:font-semibold">
            github &#128279;
          </p>
        </a>
        {/* <div className="w-[2px] bg-white h-6"/> */}
        {"/"}
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://www.linkedin.com/in/alexandru-jonny-%C5%9Ferban-977b1014b/"
        >
          {/* <Image
            src="/icons/linkedin.svg"
            width={30}
            height={30}
            alt="linkedin"
          /> */}
          <p className="hover:underline underline-offset-2 hover:font-semibold">
            linkedin &#128279;
          </p>
        </a>

        {"/"}
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://www.linkedin.com/in/alexandru-jonny-%C5%9Ferban-977b1014b/"
        >
          {/* <Image
            src="/icons/linkedin.svg"
            width={30}
            height={30}
            alt="linkedin"
          /> */}
          <p className="hover:underline underline-offset-2 hover:font-semibold">
            resume
          </p>
        </a>
      </div>

      <div className="flex flex-row gap-4 mt-2 justify-center items-center">
        <Link href="#about">
          <p className="hover:bg-neutral-200 hover:text-neutral-900 hover:font-semibold">
            about
          </p>
        </Link>
        {"/"}
        <Link href="#work">
          <p className="hover:bg-neutral-200 hover:text-neutral-900 hover:font-semibold">
            work
          </p>
        </Link>
        {"/"}
        <Link href="#contact">
          <p className="hover:bg-neutral-200 hover:text-neutral-900 hover:font-semibold">
            contact
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
