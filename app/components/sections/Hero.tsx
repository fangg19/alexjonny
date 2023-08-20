"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToElement } from "@/app/utils/utils";

const Hero = () => {
  function handleScroll(elementId: string) {
    scrollToElement(elementId);
  }

  return (
    <div id="home" className="flex flex-col items-start gap-1 min-h-screen">
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

      <div className="flex flex-row gap-4 mt-4 justify-center items-center">
        <p
          className="hover:bg-neutral-200 hover:text-neutral-900 hover:font-semibold cursor-pointer"
          onClick={() => handleScroll("about")}
        >
          about
        </p>
        {"/"}
        <p
          className="hover:bg-neutral-200 hover:text-neutral-900 hover:font-semibold cursor-pointer"
          onClick={() => handleScroll("work")}
        >
          work
        </p>
        {"/"}
        <p
          className="hover:bg-neutral-200 hover:text-neutral-900 hover:font-semibold cursor-pointer"
          onClick={() => handleScroll("contact")}
        >
          contact
        </p>
      </div>

      <div className="flex flex-row gap-4 mt-2 justify-center items-center">
        <Link
          href="https://github.com/fangg19"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          {/* <Image src="/icons/github.svg" width={30} height={30} alt="github" /> */}
          <p className="hover:underline underline-offset-2 hover:font-semibold">
            github
          </p>
        </Link>
        {/* <div className="w-[2px] bg-white h-6"/> */}
        {"/"}
        <Link
          href="https://www.linkedin.com/in/alexandru-jonny-%C5%9Ferban-977b1014b/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <p className="hover:underline underline-offset-2 hover:font-semibold">
            linkedin
          </p>
        </Link>
        {"/"}
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://www.linkedin.com/in/alexandru-jonny-%C5%9Ferban-977b1014b/"
        >
          <p className="hover:underline underline-offset-2 hover:font-semibold">
            resume
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
