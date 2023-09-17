"use client";
import React from "react";
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
    <div
      id="home"
      className="flex flex-col items-start justify-center gap-3 min-h-[calc(100vh_-_7.5rem)] lg:min-h-[calc(100vh_-_17.5rem)]"
    >
      <nav>
        <ul className="flex flex-row justify-center items-center">
          {INTERNAL_NAV_LINKS.map((link, index) => {
            return (
              <li key={index} className={cls("flex flex-row items-center")}>
                <div
                  className={cls(
                    "hover:font-semibold cursor-pointer",
                    classes.NavItemWrapper,
                    classes.NavItem
                  )}
                  onClick={() => handleScroll(link.name)}
                >
                  <span className={cls(classes.Button__inner)}>
                    {link.name}
                  </span>
                </div>
                {index !== INTERNAL_NAV_LINKS.length - 1 && (
                  <span className="mx-3">/</span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <nav>
        <ul className="flex flex-row justify-center items-center">
          {EXTERNAL_NAV_LINKS.map((link, index) => {
            return (
              <li key={index} className="flex flex-row items-center">
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
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Hero;
