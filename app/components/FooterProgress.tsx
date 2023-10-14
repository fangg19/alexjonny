"use client";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

function FooterProgress() {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 bg-purple-500 h-1 min-w-full"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default FooterProgress;
