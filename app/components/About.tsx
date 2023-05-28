"use client";
import { motion } from "framer-motion";
import {
  PageVariant,
  HeaderVariant,
  AboutPhoto,
} from "../animations/animations";

import React from "react";
import Button from "./Button";

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
    <div className="flex flex-col gap-2 lg:text-xl lg:w-1/2">
      <motion.h2
        key="header"
        initial="hidden"
        animate="visible"
        variants={HeaderVariant}
      >
        Hi, I&apos;m Jonny <span>🖐</span>
      </motion.h2>
      <p>(or Alex, I&apos;m fine with any)</p>
      <p>
        Actually my full name is{" "}
        <strong itemProp="name">Șerban Alexandru Jonny</strong> and I&apos;m a
        <strong> {getAge()}</strong> years old geeky guy from Bucharest, playing
        on the web.
        <br />
        <br /> Sitting in front of a screen (they were so bad back then) since I
        was 7, I developed a close relationship with the digital and the web,
        making it my playground. After a break of few years I decided to come
        back on playing because like you also I don&apos;t want to grow up and
        be an adult (ew).
        <br />
      </p>
      <div className="flex flex-row justify-between items-center mt-10 lg:mt-0">
        <Button type="primary">work</Button>
        <Button type="secondary">.pdf</Button>
      </div>
    </div>
  );
};

export default About;
