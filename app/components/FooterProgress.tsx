"use client";
import { motion, useScroll } from "framer-motion";

function FooterProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed bottom-0 left-0 bg-emerald-500 h-1 min-w-full"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default FooterProgress;
