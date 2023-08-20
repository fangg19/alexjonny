"use client";
import React from "react";
import Logo from "../Logo";
import { scrollToElement } from "@/app/utils/utils";

const Navbar = () => {
  function handleScroll(elementId: string) {
    scrollToElement(elementId);
  }

  return (
    <nav className="w-full flex flex-row items-center justify-between py-6 sticky top-0 z-20 bg-transparent">
      <Logo />
      <nav>
        <ul className="hidden lg:flex flex-row items-center gap-4 ml-auto">
          <li
            className="text-neutral-900 border-b-neutral-200 border-b border border-neutral-900 hover:text-neutral-200 hover:border-neutral-200 px-2 py-1 cursor-pointer"
            onClick={() => handleScroll("about")}
          >
            about
          </li>
          <li
            className="text-neutral-900 border-b-neutral-200 border-b border border-neutral-900 hover:text-neutral-200 hover:border-neutral-200 px-2 py-1 cursor-pointer"
            onClick={() => handleScroll("work")}
          >
            work
          </li>
          <li
            className="text-neutral-900 border-b-neutral-200 border-b border border-neutral-900 hover:text-neutral-200 hover:border-neutral-200 px-2 py-1 cursor-pointer"
            onClick={() => handleScroll("contact")}
          >
            contact
          </li>
        </ul>
      </nav>

      <div className="flex lg:hidden">
        <div className="border-2 border-neutral-200 w-6 h-6" />
      </div>
    </nav>
  );
};

export default Navbar;
