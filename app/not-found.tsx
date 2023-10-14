import React from "react";
import Image from "next/image";
import NotFoundGhost from "../public/404_illustration.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-[calc(100vh_-_7.5rem)] lg:min-h-[calc(100vh_-_17.5rem)] px-4 md:px-20">
      <Image
        src={NotFoundGhost}
        width={600}
        height={600}
        alt="404 error - page not found - ghost illustration"
      />

      <h1 className="text-lg lg:text-4xl font-bold text-neutral-600 mt-10">
        oooops!
      </h1>

      <p className="text-sm lg:text-lg text-neutral-500 mt-5">
        404 - Page Not Found
      </p>

      <Link
        href="/"
        className="text-lg text-purple-500 mt-5 hover:underline underline-offset-2"
      >
        Go back home
      </Link>
    </main>
  );
};

export default NotFound;
