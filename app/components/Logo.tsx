import React from "react";
import { motion } from "framer-motion";
import { LogoVariant, MoveLeft, ShakeVariant } from "../animations/animations";
import { scrollToElement } from "../utils/utils";

const Logo = () => {
  return (
    <div
      onClick={() => scrollToElement("home")}
      className="cursor-pointer flex flex-col border-2 p-1 border-neutral-200"
    >
      <p className="text-sm text-neutral-200">alex</p>
      <p className="text-sm text-neutral-200">jonny</p>
    </div>
  );
};

export default Logo;
