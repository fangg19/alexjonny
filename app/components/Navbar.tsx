"use client";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-between px-8 py-6 md:sticky top-0 z-20 bg-transparent">
      <Logo />
      <ul className="flex flex-row items-center gap-4 ml-auto">
        <li className="text-black border-b-white border-b border border-black hover:text-white hover:border-white px-2 py-1">
          <a href="#about">about</a>
        </li>
        <li className="text-black border-b-white border-b border border-black hover:text-white hover:border-white px-2 py-1">
          <a href="#work">work</a>
        </li>
        <li className="text-black border-b-white border-b border border-black hover:text-white hover:border-white px-2 py-1">
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
