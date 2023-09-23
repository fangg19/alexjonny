"use client";
import { useState } from "react";
import Logo from "../Logo";
import { INTERNAL_NAV_LINKS, cls, scrollToElement } from "@/app/utils/utils";
import { motion } from "framer-motion";
import {
  MenuIconVariant,
  FadeInRight,
  FadeInUp,
} from "../../animations/animations";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  function handleScroll(elementId: string) {
    scrollToElement(elementId);
    setShowMobileNav(false);
  }

  function toggleMobileNav() {
    setShowMobileNav(!showMobileNav);
  }

  return (
    <motion.nav
      key="navbar"
      initial="hidden"
      animate={showMobileNav ? "visible" : "hidden"}
      variants={FadeInUp}
      className={cls(
        showMobileNav && "bg-neutral-900",
        "w-full flex flex-row items-center justify-between text-sm py-4 -mx-1 sticky top-0 z-20"
      )}
    >
      <Logo />
      <div className="flex flex-row items-center gap-5">
        {showMobileNav && (
          <motion.ul
            key="header"
            initial="hidden"
            animate="visible"
            variants={FadeInRight}
            className="flex flex-row justify-center items-center"
          >
            {INTERNAL_NAV_LINKS.map((link, index) => {
              return (
                <li key={index} className="flex flex-row items-center">
                  <div
                    className="lg:hover:font-semibold lg:hover:text-purple-500 cursor-pointer"
                    onClick={() => handleScroll(link.name)}
                  >
                    <span>{link.name}</span>
                  </div>
                  {index !== INTERNAL_NAV_LINKS.length - 1 && (
                    <span className="mx-3">/</span>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}

        <div className="flex" onClick={toggleMobileNav}>
          {showMobileNav ? (
            <motion.div
              key="close-icon"
              initial="hidden"
              animate="visible"
              variants={MenuIconVariant}
              className="relative cursor-pointer"
            >
              <div className="w-5 h-1 rounded-sm bg-red-500 rotate-45" />
              <div className="absolute rounded-sm w-5 h-1 bg-red-500 -rotate-45 left-0 top-0" />
            </motion.div>
          ) : (
            <div className="border-2 border-neutral-200 w-5 h-5 bg-neutral-900 cursor-pointer" />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
