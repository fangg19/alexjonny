import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-1">
      <h1 className="lg:text-6xl text-3xl font-bold text-neutral-200">
        ALEX JONNY
      </h1>
      <div className="h-1 bg-neutral-200 w-full" />
      <h1 className="text-4xl text-neutral-200">FRONTEND DEVELOPER</h1>
      <div className="grayscale relative">
        {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900 z-10 hover:hidden" /> */}
        <Image
          src="/images/me_square.jpg"
          width={200}
          height={200}
          alt="me"
          priority
        />
      </div>
      <div className="flex flex-row gap-4 mt-2">
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://github.com/fangg19"
        >
          <Image src="/icons/github.svg" width={30} height={30} alt="github" />
        </a>
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://www.linkedin.com/in/alexandru-jonny-%C5%9Ferban-977b1014b/"
        >
          <Image
            src="/icons/linkedin.svg"
            width={30}
            height={30}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
