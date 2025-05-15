"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Building the Future.
          </h1>
          {/* DESC */}
          <p className="md:text-2xl">
            Welcome to my world of innovation and problem-solving. Explore my
            portfolio, discover my skills, and let's create something
            extraordinary together. The future is written in code—let's shape
            it!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-red-950 text-white hover:shadow-xl shadow-red-400"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-lg ring-1 ring-black dark:ring-red-300 hover:shadow-xl  shadow-red-400"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
