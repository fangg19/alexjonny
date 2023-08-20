"use client";
import { motion } from "framer-motion";
import {
  PageVariant,
  HeaderVariant,
  AboutPhoto,
} from "../../animations/animations";

import React from "react";
import Button from "../Button";

const About = () => {
  const getAge = () => {
    let age;
    const yearOfBirth = new Date("13 Nov, 1994").getFullYear();
    const currentDate = new Date();
    if (currentDate.getMonth() + 1 < 11) {
      age = currentDate.getFullYear() - yearOfBirth - 1;
    } else {
      age = currentDate.getFullYear() - yearOfBirth;
    }
    return age;
  };

  return (
    <div
      id="about"
      className="flex flex-col gap-2 lg:text-xl text-justify relative"
    >
      {/* <h1 className="absolute font-extrabold -ml-40 -mt-14 text-neutral-800 text-9xl">
        WHO AM I ?
      </h1> */}
      <div className=" lg:w-1/2 z-10 flex flex-col">
        <motion.h2
          key="header"
          initial="hidden"
          animate="visible"
          variants={HeaderVariant}
        >
          Hi, I&apos;m Jonny <span>🖐</span>
        </motion.h2>
        <p>
          <s>(or Alex, I&apos;m fine with any)</s>
        </p>
        <br />
        <p>
          A<strong itemProp="age"> {getAge()}</strong> years old guy based in
          Bucharest, Romania who&apos;s deeply immersed in the world of web
          development and everything digital in general.
          <br />
          <br />
          I got my hands on a computer back in the early 2000s and I&apos;ve
          been playing with it ever since.
          <br /> Sitting in front of a screen for so much (I really need to get
          my eyes checked), I developed a close relationship with the digital
          and the web, making it my playground. After a break of few years I
          decided to come back and make it the main activity of my everyday
          life.
          <br />
          <br />
          I&apos;m a relaxed person who leans towards simplicity and
          practicality, often guided by the question,{" "}
          <strong>&quot;is it really necessary?&quot;</strong>. I enjoy a good
          sense of humor and am consistently prepared for a hearty laugh.
        </p>
        <div className="flex flex-row items-center mt-10 lg:mt-10 w-full">
          {/* <Button type="primary">work</Button> */}
          <div className="ml-auto">
            <Button type="secondary">.pdf</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
