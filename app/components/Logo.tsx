import React from "react";
import { motion } from "framer-motion";
import { LogoVariant, MoveLeft, ShakeVariant } from "../animations/animations";
import styles from "../styles/Logo.module.scss";
// import Link from 'next/link'

const Logo = () => {
  return (
    <div className="cursor-pointer flex flex-col border-2 p-1 border-neutral-200">
      <p className="text-sm text-neutral-200">alex</p>
      <p className="text-sm text-neutral-200">jonny</p>
    </div>
  );
};

export default Logo;
