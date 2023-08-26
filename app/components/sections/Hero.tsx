"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EXTERNAL_NAV_LINKS,
  INTERNAL_NAV_LINKS,
  cls,
  scrollToElement,
} from "@/app/utils/utils";
import classes from "../styles/NavItem.module.scss";

const Hero = () => {
  function handleScroll(elementId: string) {
    scrollToElement(elementId);
  }

  return (
    <div id="home" className="flex flex-col items-start gap-1 min-h-screen">
      {/* <h1 className="lg:text-6xl text-3xl font-bold text-neutral-200">
        ALEX JONNY
      </h1>
      <div className="h-1 bg-neutral-200 w-full" />
      <h1 className="text-4xl text-neutral-200">FRONTEND DEVELOPER</h1> */}
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

      <nav className="flex flex-row mt-4 justify-center items-center">
        {INTERNAL_NAV_LINKS.map((link, index) => {
          return (
            <div key={index} className={cls("flex flex-row items-center")}>
              <div
                className={cls(
                  "hover:font-semibold cursor-pointer",
                  classes.NavItemWrapper,
                  classes.NavItem
                )}
                onClick={() => handleScroll(link.name)}
              >
                <span className={cls(classes.Button__inner)}>{link.name}</span>
              </div>
              {index !== INTERNAL_NAV_LINKS.length - 1 && (
                <span className="mx-3">/</span>
              )}
            </div>
          );
        })}
      </nav>

      <nav className="flex flex-row mt-2 justify-center items-center">
        {EXTERNAL_NAV_LINKS.map((link, index) => {
          return (
            <div key={index} className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <Link
                  href={link.url}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <p className="underline underline-offset-2 hover:font-semibold decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit">
                    {link.name}
                  </p>
                </Link>
              </div>
              {index !== EXTERNAL_NAV_LINKS.length - 1 && (
                <span className="mx-3">/</span>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Hero;
