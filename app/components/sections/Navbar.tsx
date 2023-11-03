"use client";
import { useState } from "react";
import Logo from "../Logo";
import { cls, scrollToElement } from "@/app/utils/utils";
import { INTERNAL_NAV_LINKS } from "@/app/utils/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const pathname = usePathname();

  function handleScroll(elementId: string) {
    scrollToElement(elementId);
    setShowNavMenu(false);
  }

  function toggleNavMenu() {
    setShowNavMenu(!showNavMenu);
  }

  if (pathname !== "/") return null;

  return (
    <nav
      key="navbar"
      className={cls(
        showNavMenu && "bg-neutral-900",
        "w-full flex flex-row items-center justify-between text-sm py-4 px-4 md:px-20 sticky top-0 z-20 bg-neutral-900"
      )}
    >
      <Logo />
      <div className="flex flex-row items-center gap-5">
        {showNavMenu && (
          <ul
            key="header"
            className="flex flex-row justify-center items-center animate-fadeInRight"
          >
            {INTERNAL_NAV_LINKS.map((link, index) => {
              return (
                <li key={index} className="flex flex-row items-center">
                  <div
                    className="lg:hover:text-primary-accent cursor-pointer"
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
          </ul>
        )}

        <div className="flex" onClick={toggleNavMenu}>
          {showNavMenu ? (
            <div
              key="close-icon"
              className="relative cursor-pointer animate-rotateClose"
            >
              <div className="w-5 h-1 bg-red-500 rotate-45" />
              <div className="absolute w-5 h-1 bg-red-500 -rotate-45 left-0 top-0" />
            </div>
          ) : (
            <p
              key="menu-button"
              className="text-sm cursor-pointer hover:text-neutral-900 hover:bg-neutral-200"
            >
              menu
            </p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
