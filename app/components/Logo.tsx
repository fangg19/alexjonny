import React from "react";
import { motion } from "framer-motion";
import { LogoVariant, MoveLeft, ShakeVariant } from "../animations/animations";
import styles from "../styles/Logo.module.scss";
// import Link from 'next/link'

const Logo = () => {
  return (
    <div className="cursor-pointer flex flex-col border-2 p-1 border-white">
      {/* first row */}
      {/* <div className="flex flex-row gap-1">
        <motion.div
          whileHover="hover"
          variants={ShakeVariant}
          className="p-2 bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center"
        >
          <h1 className="m-0 p-0">a</h1>
        </motion.div>
        <motion.div
          whileHover="hover"
          variants={MoveLeft}
          className="p-2 bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center"
        >
          <h1>x</h1>
        </motion.div>
      </div> */}

      {/* second row */}
      {/* <motion.div
        animate="visible"
        variants={LogoVariant}
        whileHover="hover"
        className="flex flex-row gap-1"
      >
        <div className="p-2 bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center">
          <h1>j</h1>
        </div>
        <div className="p-2 bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center">
          <h1>y</h1>
        </div>
      </motion.div> */}

      <p className="text-sm text-white">alex</p>
      <div className="w-full bg-white" />
      <p className="text-sm text-white">jonny</p>
    </div>
  );
};

export default Logo;
