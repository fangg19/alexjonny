"use client";
import React from "react";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-between py-6 sticky top-0 z-20 bg-transparent">
      <Logo />
      <ul className="hidden lg:flex flex-row items-center gap-4 ml-auto">
        <li className="text-neutral-900 border-b-neutral-200 border-b border border-neutral-900 hover:text-neutral-200 hover:border-neutral-200 px-2 py-1">
          <a href="#about">about</a>
        </li>
        <li className="text-neutral-900 border-b-neutral-200 border-b border border-neutral-900 hover:text-neutral-200 hover:border-neutral-200 px-2 py-1">
          <a href="#work">work</a>
        </li>
        <li className="text-neutral-900 border-b-neutral-200 border-b border border-neutral-900 hover:text-neutral-200 hover:border-neutral-200 px-2 py-1">
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="flex lg:hidden">
        <div className="border-2 border-neutral-200 w-6 h-6" />
      </div>
    </nav>
  );
};

export default Navbar;
